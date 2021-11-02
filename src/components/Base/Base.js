import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Network from '../Network/Network';
import Package from '../Package/Package';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

const theme = createTheme({
    typography: {
        fontFamily: 'Rubik',
        h2: {
            fontSize: '35px',
            fontWeight: 500
        },
        h6: {
            fontSize: '18px',
            fontWeight: 500
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


function Base() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Features />
            <Package />
            <Network />
            <Reviews />
            <Subscribe />
            <Footer />
        </ThemeProvider>
    );
}

export default Base;