import { makeStyles } from '@material-ui/core/styles';
const EIGHT = 8;
const TEN = 10;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  container: {
    paddingTop: theme.spacing(TEN),
    paddingBottom: theme.spacing(EIGHT),
  },
}));

export default useStyles;
