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
import { useMemo, useState } from 'react';
import * as S from './styles';
import { selectProvince } from '../../features/provinces';
import formatNumber from '../../utils/formatNumber';
import { Box } from '../GlobalStyledComponents';

export default function Table({ data }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedIndex, setSelectedIndex] = useState('0');
  const dispatch = useDispatch();

  const columns = useMemo<ColumnDef<object>[]>(
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

  const handleSelectRow = (row) => {
    setSelectedIndex(row.id);
    dispatch(selectProvince(row.original));
  };

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
    <Box>
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
                        <span>
                          {{
                            asc: <FaArrowAltCircleUp />,
                            desc: <FaArrowCircleDown />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </span>
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
              <S.TableRow key={row.id} active={row.id === selectedIndex}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      role="gridcell"
                      onClick={() => handleSelectRow(row)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </S.TableRow>
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
    </Box>
  );
}
