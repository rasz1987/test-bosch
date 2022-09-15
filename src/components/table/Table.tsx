import { FC } from 'react'
import { TableProps } from '../../Interfaces';
import useStyles from './Table.styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx';
import CakeIcon from '@mui/icons-material/Cake';

const TableComponent: FC<TableProps> = ({
  rows,
  columns
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead className={classes.header}>
          <TableRow>
            {
              columns.map(({ headerName }) => (
                <TableCell
                  key={headerName}
                  align='center'
                >
                  {headerName}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row, i) => {
              const date = new Date(row.birthDate).toLocaleDateString();
              const actualMonth = new Date().getMonth() + 1;
              const birthdayMonth = new Date(row.birthDate).getMonth() + 1;
              const isBirthday = actualMonth === birthdayMonth;

              return (
                <TableRow
                  key={row.id + i}
                  className={clsx(isBirthday && classes.birthdayBackground)}
                >
                  <TableCell align='center' >
                    {row.firstName}
                  </TableCell>
                  <TableCell
                    align='center'
                    className={classes.birthdayRow}
                  >
                    <span>
                      {date}
                    </span>
                    {
                      isBirthday &&
                      <CakeIcon />
                    }
                  </TableCell>
                  <TableCell align='center' >
                    {row.hasContract}
                  </TableCell>
                  <TableCell
                    align='center'
                    className={classes.actionsContent}
                  >
                    <DeleteIcon onClick={() => row.onDelete(row.id)} />
                    <SearchIcon onClick={() => row.onSearch(row.id)} />
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
