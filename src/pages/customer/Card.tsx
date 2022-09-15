import { FC } from 'react';
import { CardComponentProp } from '../../Interfaces';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent: FC<CardComponentProp> = ({
  data
}) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        image={data.avatar}
        alt='User Avatar'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {`${t('name')}: ${data.firstName}`}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          {`${t('lastName')}: ${data.lastName}`}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          {`${t('email')}: ${data.email}`}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          {`${t('birthday')}: ${new Date(data.birthDate).toLocaleDateString()}`}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {`${t('description')}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardComponent;