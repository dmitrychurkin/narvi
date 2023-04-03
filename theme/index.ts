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
                size: 'small',
                InputProps: {
                    disableUnderline: true
                }
            },
            styleOverrides: {
                root: ({ theme }) =>
                    theme.unstable_sx({
                        '& .MuiInputLabel-root': {
                            fontWeight: 300,
                            fontSize: '1rem',
                            color: 'var(--macro-input-placeholder-color)'
                        },
                        '& .MuiInputBase-root': {
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: 'var(--macro-input-border-color)',
                            borderRadius: '0.5rem',
                            backgroundColor: theme.vars.palette.common.white,
                            '&.Mui-focused': {
                                backgroundColor: theme.vars.palette.common.white
                            },
                            ':hover': {
                                backgroundColor: theme.vars.palette.common.white,
                                borderColor: 'var(--macro-input-border-color-hover)'
                            }
                        }
                    })
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

                    --macro-input-placeholder-color: #8C8BB9;
                    --macro-input-border-color: rgb(206, 213, 227);
                    --macro-input-border-color-hover: rgb(112, 133, 174);
                }
                a {
                    text-decoration: none;
                }
            `
        }
    }
});

export default theme;
