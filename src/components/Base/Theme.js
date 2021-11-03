import { createTheme } from "@material-ui/core";

export const Theme = createTheme({
    typography: {
        fontFamily: 'Rubik',
        h1: { /// only used once i.e in top heading
            fontSize: '50px',
            fontWeight: 500,
            lineHeight: '70px',
            textTransform: 'none'
        },
        h2: { /// useing in many places
            fontSize: '35px',
            fontWeight: 500,
            lineHeight: '50px'
        },
        h6: { //// using for logo
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '23.7px'
        },
        h5: { /// using for counts eg: 90+(user) 30+(locations) 50+(servers)
            fontSize: '25px',
            fontWeight: 700,
            lineHeight: '30px'
        },
        subtitle1: { /// fontsize: 16, fontWeight: 400
            lineHeight: '30px',
            textTransform: 'none',
        },
        subtitle2: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '25px',
        },
        body1: {
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '30px'
        },
        body2: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '30px'
        },
        button: {
            fontSize: '16px',
        }
    },
    palette: {
        primary: {
            main: '#0B132A'
        },
        secondary: {
            main: '#f53838'
        },
        text: {
            secondary: '#4F5665'
        }
    },
});
