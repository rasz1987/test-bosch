import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { FC } from 'react';
import { urlList } from './constants/urls';
import Grid from '@mui/material/Grid';
import Header from './components/header/Header';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <BrowserRouter >
      <Grid container>
        <Header />
        <Routes>
          <Route path={urlList.customers} element={<Customers />} />
          <Route path={urlList.customer} element={<Customer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
