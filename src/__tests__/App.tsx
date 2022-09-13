import { render } from '@testing-library/react';
import App from '../App';

test('Should render <App /> without crash', async () => {
  const view = render(<App />);

  expect(view).toBeTruthy();
})