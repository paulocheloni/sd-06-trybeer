import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: '#fbb80f',
    marginBottom: '0',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 260px)',
    justifyContent: 'center',
  },
  card: {
    // Os 3 primeiros ajeitam o card com header/entre si
    margin: '20px 10px auto 10px',
    transform: 'translateY(70px)',
    flexDirection: 'column',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    // maxWidth: 250,
    overflow: 'visible',
  },
  cardMedia: {
    margin: 'auto',
    width: '80%',
    height: '350px',
    // borderRadius: '4px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
  },
  titleContainer: {
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '600',
  },
  priceContainer: {
    textAlign: 'center',
    fontSize: '25px',
    marginTop: '20px',
    fontWeight: '800',
  },
  quantityButton: {
    '&:focus': {
      outline: 'none',
    },
  },
  totalpriceButton: {
    width: '100%',
    backgroundColor: '#32325b',
    marginTop: '100px',
    // marginBottom: '20px',
    height: '80px',
    fontWeight: 600,
    fontSize: '30px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
  },
}));

export default useStyles;
