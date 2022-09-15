import {
  createContext,
  useState,
  FC
} from 'react';
import {
  InitialState,
  CustomerContextProp
} from '../Interfaces';

export const initialDefaultState: InitialState = [];

export const CustomersContext = createContext<CustomerContextProp>({
  customers: initialDefaultState,
  setCustomers: () => { }
});

const CustomersProvider: FC = ({ children }) => {
  const [customers, setCustomers] = useState<InitialState>(initialDefaultState);

  return (
    <CustomersContext.Provider
      value={{
        customers,
        setCustomers
      }}
    >
      {children}
    </CustomersContext.Provider>
  )
};

export default CustomersProvider;


