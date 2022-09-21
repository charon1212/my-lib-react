import { ReactNode } from 'react';
import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody, TableContainerProps, TableProps } from '@mui/material';

type ColumnConfig<T extends object> = {
  header: ReactNode;
  cell: (obj: T) => ReactNode;
};
type Props<T extends object> = {
  data: T[];
  columns: ColumnConfig<T>[];
  tableContainerProp?: TableContainerProps;
  tableProp?: TableProps;
};
export const SimpleTable = <T extends object>(props: Props<T>) => {
  const { data, columns, tableContainerProp, tableProp } = props;

  return (
    <>
      <TableContainer {...tableContainerProp}>
        <Table {...tableProp}>
          <TableHead>
            <TableRow>
              {columns.map(({ header }, i) => (
                <TableCell key={i}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((obj, i) => (
              <TableRow key={i}>
                {columns.map(({ cell }, i) => (
                  <TableCell key={i}>{cell(obj)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
