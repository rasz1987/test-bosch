import {
  FC,
  useCallback
} from 'react';
import Select, {
  SelectChangeEvent
} from "@mui/material/Select";
import { useTranslation } from 'react-i18next';
import { langList } from './Utils';
import styles from './Header.styles';
import MenuItem from "@mui/material/MenuItem";

const Header: FC = () => {
  const classes = styles();
  const { i18n } = useTranslation();

  const handleChange = useCallback((event: SelectChangeEvent<number>) => {
    const { value } = event.target;
    const lang = langList.filter((lang) => lang.id === value);
    const selectedLang = lang[0].label;

    i18n.changeLanguage(selectedLang);
  }, [i18n]);

  return (
    <div className={classes.content} >
      <Select
        MenuProps={{
          disableScrollLock: true,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: "menu",
        }}
        name="select"
        defaultValue={1}
        required
        onChange={handleChange}
      >
        {
          langList.map((ele) => (
            <MenuItem
              key={ele.id}
              value={ele.id}
              disableGutters={true}
              disableRipple
            >
              {ele.label}
            </MenuItem>
          ))
        }
      </Select>
    </div>
  )
};

export default Header;