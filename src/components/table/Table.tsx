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
import Typography from '@mui/material/Typography';

const TableComponent: FC<TableProps> = ({
  rows,
  columns,
  deleteCallBack,
  searchCallback
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
                  <Typography variant='body2' color='text.secondary'>
                    {headerName}
                  </Typography>
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
                  data-testid='table-row'
                  className={clsx(isBirthday && classes.birthdayBackground)}
                >
                  <TableCell align='center' >
                    <Typography variant='body2' color='text.secondary'>
                      {row.firstName}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    className={classes.birthdayRow}
                  >
                    <Typography variant='body2' color='text.secondary'>
                      {date}
                      {
                        isBirthday &&
                        <CakeIcon data-testid='cake-icon' />
                      }
                    </Typography>
                  </TableCell>
                  <TableCell align='center' >
                    <Typography variant='body2' color='text.secondary'>
                      {row.hasContract}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align='center'
                    className={classes.actionsContent}
                  >
                    <DeleteIcon
                      data-testid='delete-icon'
                      onClick={() => deleteCallBack(row.id)}
                    />
                    <SearchIcon
                      data-testid='search-icon'
                      onClick={() => searchCallback(row.id)}
                    />
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
