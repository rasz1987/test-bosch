import { render, screen } from '@testing-library/react';
import { Rows } from '../Interfaces';
import Table from '../components/table/Table';
import userEvent from '@testing-library/user-event';

const deleteCallBack = jest.fn();
const searchCallback = jest.fn();
const columns = [
  { headerName: 'Nome' },
  { headerName: 'Aniversário' },
  { headerName: 'Contratado' },
  { headerName: 'Acções' }
];
let rows: Rows[] = [
  {
    birthDate: '2021-03-01T01:00:34.393Z',
    firstName: 'Finn',
    hasContract: 'yes',
    id: '1'
  },
  {
    birthDate: '2021-03-01T01:00:34.393Z',
    firstName: 'My name',
    hasContract: 'yes',
    id: '2'
  }
];
test('Should render <Table /> without crash', async () => {
  render(
    <Table
      rows={rows}
      columns={columns}
      deleteCallBack={deleteCallBack}
      searchCallback={searchCallback}
    />
  );
  expect(screen).toBeTruthy();

  let deleteIcon = await screen.findAllByTestId('delete-icon') as HTMLElement[];
  let searchIcon = await screen.findAllByTestId('search-icon') as HTMLElement[];
  expect(deleteIcon.length).toBe(2);
  expect(searchIcon.length).toBe(2);

  userEvent.click(deleteIcon[0]);

  expect(deleteCallBack).toBeCalledTimes(1);

  userEvent.click(searchIcon[0]);

  expect(searchCallback).toBeCalledTimes(1);
});

test('Should render <Table /> withcake icon', async () => {
  rows = [
    ...rows,
    {
      birthDate: '2021-09-01T01:00:34.393Z',
      firstName: 'My other name',
      hasContract: 'Not',
      id: '3'
    }
  ]
  render(
    <Table
      rows={rows}
      columns={columns}
      deleteCallBack={deleteCallBack}
      searchCallback={searchCallback}
    />
  );
  expect(await screen.findByTestId('cake-icon')).toBeTruthy();
});