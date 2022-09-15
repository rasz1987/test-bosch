export const mockI18Next = {
  t: (str: any, options: any) => {
    if (options?.returnObjects) {
      return [];
    } else {
      return str;
    }
  },
  i18n: {
    language: 'pt',
    changeLanguage: jest.fn(),
  },
};

export let mockCustomerData = {
  avatar: 'my url',
  birthDate: '2021-10-29T20:23:19.040Z',
  email: 'myemail@gmail.com',
  firstName: 'my first name',
  hasContract: false,
  id: '1',
  lastName: 'My last name'
};