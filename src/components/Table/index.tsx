import React from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useDispatch } from 'react-redux';
import { selectProvince } from '../../features/provinces';

export default function Table({ data }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const dispatch = useDispatch();

  const columns = React.useMemo<ColumnDef<object>[]>(
    () => [
      {
        id: 'name',
        accessorKey: 'name',
        header: () => 'Nome',
        cell: (info) => info.getValue(),
      },
      {
        id: 'confirmed',
        accessorKey: 'confirmed',
        header: () => 'Contaminações',
        cell: (info) => info.getValue(),
      },
      {
        id: 'deaths',
        accessorKey: 'deaths',
        header: () => 'Óbitos',
        cell: (info) => info.getValue(),
      },
      {
        id: 'recovered',
        accessorKey: 'recovered',
        header: () => 'Recuperados',
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table role="grid">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </button>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      role="gridcell"
                      onClick={() => dispatch(selectProvince(row.original))}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(sorting, null, 2)}</pre>
    </div>
  );
}
