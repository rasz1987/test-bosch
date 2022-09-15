import {
  Dispatch,
  SetStateAction
} from 'react';
import { CustomersResponse } from './components/backend/Responses';

export type OnClickType = (id: string) => void;

export type UrlType = {
  [x: string]: string
};

export type GetFunctionType<T extends {}> = (url: string) => Promise<string | T>;

export type InitialState = CustomersResponse[] | [];
export interface UseRequest<T extends {}> {
  apiGet: GetFunctionType<T>
};

export interface CustomerContextProp {
  customers: InitialState,
  setCustomers: Dispatch<SetStateAction<InitialState>>
};

export type Rows = {
  firstName: string;
  hasContract: boolean;
  id: string;
  birthDate: string;
};

export interface Columns {
  headerName: string;
};

export interface TableProps {
  columns: Columns[];
  rows: Rows[];
  deleteCallBack: OnClickType;
  searchCallback: OnClickType;
};

export interface CardComponentProp {
  data: CustomersResponse
};