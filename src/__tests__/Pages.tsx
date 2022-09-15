import {
  render,
  screen
} from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('Should render <NotFound /> without crash', async () => {
  render(<NotFound />)

  expect(await screen.findAllByText('title')).toBeTruthy();
});