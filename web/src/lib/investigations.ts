import fs from 'fs';
import path from 'path';
import type { Investigation } from '@/types/investigation';

const investigationsDirectory = path.join(process.cwd(), 'src/data/investigations');

export function getAllInvestigationIds(): string[] {
  if (!fs.existsSync(investigationsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(investigationsDirectory);
  return files.filter((file) => {
    const fullPath = path.join(investigationsDirectory, file);
    return fs.statSync(fullPath).isDirectory();
  });
}

export function getInvestigationData(id: string): Investigation | null {
  const investigationPath = path.join(investigationsDirectory, id);

  if (!fs.existsSync(investigationPath)) {
    return null;
  }

  try {
    // Read markdown files
    const overviewPath = path.join(investigationPath, 'overview.md');
    const timelinePath = path.join(investigationPath, 'timeline.md');
    const sourcesPath = path.join(investigationPath, 'sources.md');
    const notesPath = path.join(investigationPath, 'notes.md');

    const overview = fs.existsSync(overviewPath) ? fs.readFileSync(overviewPath, 'utf8') : '';
    const timeline = fs.existsSync(timelinePath) ? fs.readFileSync(timelinePath, 'utf8') : '';
    const sources = fs.existsSync(sourcesPath) ? fs.readFileSync(sourcesPath, 'utf8') : '';
    const notes = fs.existsSync(notesPath) ? fs.readFileSync(notesPath, 'utf8') : '';

    // Extract metadata from overview
    const caseId = extractField(overview, 'Case ID');
    const title = extractTitle(overview);
    const status = extractField(overview, 'Status') as Investigation['status'] || 'Active';
    const dateOpened = extractField(overview, 'Date Opened');
    const lastUpdated = extractField(overview, 'Last Updated');
    const priority = extractField(overview, 'Priority') as Investigation['priority'] || 'High';

    return {
      id,
      caseId,
      title,
      status,
      dateOpened,
      lastUpdated,
      priority,
      overview,
      timeline,
      sources,
      notes,
    };
  } catch (error) {
    console.error(`Error loading investigation ${id}:`, error);
    return null;
  }
}

function extractField(content: string, fieldName: string): string {
  const regex = new RegExp(`\\*\\*${fieldName}:\\*\\*\\s*(.+)`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function extractTitle(content: string): string {
  // Try to get the first # heading
  const match = content.match(/^#\s+(.+)/m);
  if (match) return match[1].trim();

  // Fallback to looking for "Case Overview:" pattern
  const overviewMatch = content.match(/Case Overview:\s*(.+)/i);
  return overviewMatch ? overviewMatch[1].trim() : 'Untitled Investigation';
}

export function getAllInvestigations(): Investigation[] {
  const ids = getAllInvestigationIds();
  return ids
    .map(id => getInvestigationData(id))
    .filter((inv): inv is Investigation => inv !== null);
}
