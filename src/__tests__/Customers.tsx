import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { CustomersContext } from '../context/CustomersContext';
import { mockCustomerData } from '../mocks/mocks';
import userEvent from '@testing-library/user-event';
import Customers from '../pages/Customers';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('Should redner <Customer /> without crash', async () => {
  const setCustomers = () => { };
  const customers = [
    mockCustomerData,
    {
      ...mockCustomerData,
      firstName: 'Other name',
      hasContract: true,
      id: '2',
    }
  ];

  render(
    <MemoryRouter>
      <CustomersContext.Provider value={{
        customers: customers,
        setCustomers
      }}>
        <Customers />
      </CustomersContext.Provider>
    </MemoryRouter>
  );

  let checkBox = await screen.findByTestId('has-contract') as HTMLElement;
  expect(checkBox).toBeTruthy();
  expect(await (await screen.findAllByTestId('table-row')).length).toBe(2);

  await act(async () => {
    userEvent.click(checkBox);
  });
  expect(await (await screen.findAllByTestId('table-row')).length).toBe(1);
  expect(await screen.findByText('yes')).toBeTruthy();

  await act(async () => {
    userEvent.click(checkBox);
  });
  expect(await (await screen.findAllByTestId('table-row')).length).toBe(1);
  expect(await screen.findByText('not')).toBeTruthy();
});

test('Should redner <Customer /> and delete row', async () => {
  const setCustomers = () => { };
  const customers = [
    mockCustomerData,
    {
      ...mockCustomerData,
      firstName: 'Other name',
      hasContract: true,
      id: '2',
    }
  ];

  const view = render(
    <MemoryRouter>
      <CustomersContext.Provider value={{
        customers: customers,
        setCustomers
      }}>
        <Customers />
      </CustomersContext.Provider>
    </MemoryRouter>
  );
  expect(await (await screen.findAllByTestId('table-row')).length).toBe(2);
  let deleteIcon = await screen.findAllByTestId('delete-icon') as HTMLElement[];
  let searchIcon = await screen.findAllByTestId('search-icon') as HTMLElement[];
  expect(deleteIcon.length).toBe(2);
  expect(searchIcon.length).toBe(2);

  await act(async () => {
    userEvent.click(deleteIcon[0]);
  });

  expect(await (await screen.findAllByTestId('table-row')).length).toBe(1);

  searchIcon = await screen.findAllByTestId('search-icon') as HTMLElement[];
  expect(searchIcon.length).toBe(1);

  await act(async () => {
    userEvent.click(searchIcon[0]);
  });

  expect(mockedUsedNavigate).toBeCalledTimes(1);
});