'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

export default function MarkdownContent({ content }: Props) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-display font-bold mb-6 text-brand-primary">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-display font-bold mb-4 mt-8 text-brand-accent">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-display font-bold mb-3 mt-6 text-white">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold mb-2 mt-4 text-gray-300">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300">
              {children}
            </li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-brand-primary hover:text-brand-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-brand-primary pl-4 italic text-gray-400 my-4">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-background-darker text-brand-accent px-2 py-1 rounded font-mono text-sm">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-background-darker p-4 rounded-none overflow-x-auto mb-4 border-l-4 border-brand-primary">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-2 border-brand-secondary">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-brand-secondary">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="border border-brand-secondary px-4 py-2 text-left font-bold text-white">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-brand-secondary px-4 py-2 text-gray-300">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
