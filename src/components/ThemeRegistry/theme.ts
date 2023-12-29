import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    button: {
      textTransform: 'none'
    }
  },
});

export default theme;
