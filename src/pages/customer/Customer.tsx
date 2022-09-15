import {
  Link,
  useParams
} from 'react-router-dom';
import {
  FC,
  useContext
} from 'react';
import { useTranslation } from 'react-i18next';
import { CustomersContext } from '../../context/CustomersContext';
import Card from './Card';
import useStyles from './Customer.styles';

const Customer: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { customers } = useContext(CustomersContext);
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={'/'}
      >
        {t('back')}
      </Link>
      {
        customers.length > 0 &&
        <Card data={customers.filter(ele => ele.id === id)[0]} />
      }
    </div>
  )
};

export default Customer;