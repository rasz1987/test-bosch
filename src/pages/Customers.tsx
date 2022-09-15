import {
  FC,
  useContext,
  useCallback,
  useState,
  useEffect,
  ChangeEvent
} from 'react';
import {
  Columns,
  Rows
} from '../Interfaces'
import { CustomersContext } from '../context/CustomersContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Table from '../components/table/Table';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const Customers: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { customers, setCustomers } = useContext(CustomersContext);
  const [rows, setRows] = useState<Rows[] | []>([]);
  const columns: Columns[] = [
    { headerName: t('name') },
    { headerName: t('birthday') },
    { headerName: t('hasContract') },
    { headerName: t('actions') }
  ];

  useEffect(() => {
    setRows(customers.map(ele => ({
      id: ele.id,
      firstName: ele.firstName,
      hasContract: t(ele.hasContract ? 'yes' : 'not'),
      birthDate: ele.birthDate,
    })));
    // eslint-disable-next-line
  }, [customers, t]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) {
      setRows(customers.filter(ele => ele.hasContract).map(ele => ({
        id: ele.id,
        firstName: ele.firstName,
        hasContract: t(ele.hasContract ? 'yes' : 'not'),
        birthDate: ele.birthDate,
      })));
      return;
    };
    setRows(customers.filter(ele => !ele.hasContract).map(ele => ({
      id: ele.id,
      firstName: ele.firstName,
      hasContract: t(ele.hasContract ? 'yes' : 'not'),
      birthDate: ele.birthDate,
    })))
  }, [customers, t]);

  const handleDelete = useCallback((id) => {
    const newCustomers = customers.filter(ele => ele.id !== id);
    setRows(newCustomers.map(ele => ({
      id: ele.id,
      firstName: ele.firstName,
      hasContract: t(ele.hasContract ? 'yes' : 'not'),
      birthDate: ele.birthDate,
    })))
    setCustomers(newCustomers);
  }, [customers, setCustomers, t]);

  return (
    <div>
      <>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox data-testid='has-contract' onChange={handleChange} />}
            label={
              <Typography variant='body2' color='text.secondary'>
                {t('hasContract')}
              </Typography>
            }
          />
        </FormGroup>
        <Table
          columns={columns}
          rows={rows}
          deleteCallBack={handleDelete}
          searchCallback={(id) => navigate(`/customer/${id}`)}
        />
      </>
    </div>
  )
};

export default Customers;