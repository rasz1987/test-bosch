import { render } from '@testing-library/react';
import { mockCustomerData } from '../mocks/mocks';
import Card from '../pages/customer/Card';

test('Should render <Card /> without crash', async () => {
  const view = render(<Card data={mockCustomerData} />);

  expect(view).toBeTruthy();

});