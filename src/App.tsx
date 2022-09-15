import { BrowserRouter } from 'react-router-dom';
import { FC } from 'react';
import CustomerProvider from './context/CustomersContext'
import Main from './pages/Main';

const App: FC = () => (
  <BrowserRouter >
    <CustomerProvider>
      <Main />
    </CustomerProvider>
  </BrowserRouter>
);

export default App;
