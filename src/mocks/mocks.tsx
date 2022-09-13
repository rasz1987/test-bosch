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