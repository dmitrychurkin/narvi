import { Lexend } from 'next/font/google';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const lexend = Lexend({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#2A2C64'
                }
            }
        }
    },
    typography: {
        fontFamily: lexend.style.fontFamily,
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
                InputProps: {
                    disableUnderline: true
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: _ => `
                :root {
                    --macro-green-light: #1AFFB6;
                    --macro-blue-dark: #2A2C64;
                    --macro-blue-light: #6968A4;
                    --macro-grey-light: #F6F5FA;

                    --macro-font-size-h1: 2rem;
                    --macro-font-weight-h1: 700;
                    --macro-line-height-h1: 40 / 32;

                    --macro-font-size-regular: 1rem;
                    --macro-font-weight-regular: 400;
                    --macro-line-height-regular: 24 / 20;

                    --macro-font-size-labelled-group: 1.25rem;
                    --macro-font-weight-labelled-group: 500;
                    --macro-line-height-labelled-group: 24 / 20;
                    --macro-color-labelled-group: var(--macro-blue-dark);
                }
                a {
                    text-decoration: none;
                }
            `
        }
    }
});

export default theme;
