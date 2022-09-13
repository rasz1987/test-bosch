import { render } from '@testing-library/react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/header/Header';

test('Should render <Header /> without crash', async () => {
  const view = render(<Header />);
  const { container } = view;

  let select = container.querySelector('input[name="select"]') as Element;
  let btn = await screen.findByRole('button') as HTMLElement;

  expect(select.getAttribute('value')).toBe('1')
  expect(btn).toBeTruthy();

  await act(async () => {
    userEvent.click(btn);
  });

  let presentation = await screen.findByRole('presentation') as HTMLElement;
  let englishOption = presentation.querySelector('li[data-value="3"]') as Element;

  expect(presentation).toBeTruthy();
  expect(englishOption).toBeTruthy();

  await act(async () => {
    userEvent.click(englishOption);
  });
  select = container.querySelector('input[name="select"]') as Element;
  expect(select.getAttribute('value')).toBe('3')
});