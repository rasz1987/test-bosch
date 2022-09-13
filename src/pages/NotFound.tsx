import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs>
        {t('title')}
      </Grid>
    </Grid>
  )
};

export default NotFound;