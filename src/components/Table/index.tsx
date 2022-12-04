import React from 'react';
import { FaArrowCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { selectProvince } from '../../features/provinces';
import formatNumber from '../../utils/formatNumber';

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
        cell: (info) => formatNumber(info.getValue()),
      },
      {
        id: 'deaths',
        accessorKey: 'deaths',
        header: () => 'Óbitos',
        cell: (info) => formatNumber(info.getValue()),
      },
      {
        id: 'recovered',
        accessorKey: 'recovered',
        header: () => 'Recuperados',
        cell: (info) => formatNumber(info.getValue()),
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
    debugTable: false,
  });

  return (
    <S.Table role="grid">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <S.ButtonHeader
                      type="button"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <FaArrowAltCircleUp />,
                        desc: <FaArrowCircleDown />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </S.ButtonHeader>
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td />
          <td />
          <td>
            <strong>Linhas: {table.getRowModel().rows.length}</strong>
          </td>
        </tr>
      </tfoot>
    </S.Table>
  );
}
