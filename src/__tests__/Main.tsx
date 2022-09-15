import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockCustomerData } from '../mocks/mocks';
import Main from '../pages/Main';

jest.mock('../hooks/useAxiosApi.tsx', () => () => ({
  apiGet: async (url: string) => {
    return await [mockCustomerData];
  }
}));

test('Should redner <Main /> without crash', async () => {
  const view = render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );

  await waitFor(() => { });

  expect(view).toBeTruthy();
});