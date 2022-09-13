import '@testing-library/jest-dom';
import { TransProps } from 'react-i18next';
import { mockI18Next } from './mocks/mocks';

jest.mock('react-i18next', () => ({
  initReactI18next: { type: '3rdParty', init: jest.fn() },
  useTranslation: () => {
    return mockI18Next;
  },
  Trans: (props: TransProps<string>) => {
    return props.i18nKey;
  },
}));