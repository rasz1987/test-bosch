import { makeStyles } from '@material-ui/styles';
import { colorList } from '../../constants/colors';

export default makeStyles({
  header: {
    backgroundColor: colorList.header
  },
  actionsContent: {
    '& svg': {
      cursor: 'pointer'
    }
  },
  birthdayBackground: {
    backgroundColor: colorList.gray
  },
  birthdayRow: {
    '& span': {
      marginRight: '10px'
    }
  }
});