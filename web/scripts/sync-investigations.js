const fs = require('fs-extra');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../../investigations');
const TARGET_DIR = path.join(__dirname, '../src/data/investigations');

async function syncInvestigations() {
  console.log('🔄 Syncing investigation files...');
  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Target: ${TARGET_DIR}`);

  try {
    // Ensure target directory exists
    await fs.ensureDir(TARGET_DIR);

    // Check if source directory exists
    if (!await fs.pathExists(SOURCE_DIR)) {
      console.warn('⚠️  Source investigations directory does not exist');
      console.log('ℹ️  Using existing synced data in src/data/investigations/');
      return;
    }

    // Read source directory
    const investigations = await fs.readdir(SOURCE_DIR);

    let syncedCount = 0;

    for (const investigation of investigations) {
      const sourcePath = path.join(SOURCE_DIR, investigation);

      // Skip if not a directory or if it's README
      const stats = await fs.stat(sourcePath);
      if (!stats.isDirectory() || investigation.startsWith('.') || investigation === 'README.md') {
        continue;
      }

      const targetPath = path.join(TARGET_DIR, investigation);

      // Copy markdown files only (not sensitive documents)
      await fs.ensureDir(targetPath);
      const files = ['overview.md', 'timeline.md', 'sources.md', 'notes.md'];

      for (const file of files) {
        const sourceFile = path.join(sourcePath, file);
        const targetFile = path.join(targetPath, file);

        if (await fs.pathExists(sourceFile)) {
          await fs.copy(sourceFile, targetFile);
          console.log(`  ✓ Copied ${investigation}/${file}`);
          syncedCount++;
        } else {
          console.log(`  ⊘ Skipped ${investigation}/${file} (not found)`);
        }
      }
    }

    console.log(`\n✅ Investigation sync complete! (${syncedCount} files synced)`);
  } catch (error) {
    console.error('❌ Error syncing investigations:', error);
    process.exit(1);
  }
}

syncInvestigations();
