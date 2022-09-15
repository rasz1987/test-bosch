import {
  Routes,
  Route,
} from 'react-router-dom';
import {
  urlList,
  apiUrl
} from '../constants/urls';
import {
  FC,
  useEffect,
  useContext
} from 'react';
import { CustomersResponse } from '../components/backend/Responses';
import { CustomersContext } from '../context/CustomersContext'
import useStyles from '../App.styles';
import apiAxios from '../hooks/useAxiosApi';
import Grid from '@mui/material/Grid';
import Header from '../components/header/Header';
import Customer from './customer/Customer';
import Customers from './Customers';
import NotFound from '../pages/NotFound';

const Main: FC = () => {
  const { setCustomers } = useContext(CustomersContext);
  const { apiGet } = apiAxios<CustomersResponse[]>();
  const classes = useStyles();

  useEffect(() => {
    apiGet(apiUrl).then(res => {
      if (typeof res !== 'string') {
        setCustomers(res);
        return;
      };

      // Show error message with a toast component
      console.log(res);
    })
    // eslint-disable-next-line
  }, []);

  return (
    <Grid
      container
      className={classes.content}
    >
      <Header />
      <Grid
        item
        xs={10}
        className={classes.item}
      >
        <Routes>
          <Route path={urlList.customers} element={<Customers />} />
          <Route path={urlList.customer} element={<Customer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default Main