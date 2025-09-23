import type { ReactNode } from 'react';

export function TableHeader({ titles }: { titles: string[] }) {
  return (
    <thead>
      <tr>
        {titles.map((title) => (
          <th
            key={title}
            className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function TableRow({ cells }: { cells: ReactNode[] }) {
  return (
    <tr>
      {cells.map((cell, idx) => (
        <td key={idx} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          {cell}
        </td>
      ))}
    </tr>
  );
}
