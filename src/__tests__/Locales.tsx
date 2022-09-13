import en from '../locales/en';
import es from '../locales/es';
import pt from '../locales/pt';
import i18n from '../locales/i18n';

test('Should return locales without crash', () => {
  expect(en).toMatchSnapshot();
  expect(es).toMatchSnapshot();
  expect(pt).toMatchSnapshot();
  expect(i18n).toMatchSnapshot();
});