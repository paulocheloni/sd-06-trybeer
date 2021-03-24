import { makeStyles } from '@material-ui/core/styles';

const TWO = 2;
const ZERO = 0;
const EIGHT = 8;
const FOUR = 4;
const SIX = 6;
const TEN = 10;
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(TWO),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(EIGHT, ZERO, SIX),
  },
  heroButtons: {
    marginTop: theme.spacing(FOUR),
  },
  cardGrid: {
    paddingTop: theme.spacing(TEN),
    paddingBottom: theme.spacing(EIGHT),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '89%', // 16:9 // 50.25
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(SIX),
  },
}));

export default useStyles;
