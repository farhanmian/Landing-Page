import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Package from '../Package/Package';
import Network from '../Network/Network';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Divider from '../UI/Divider';

import { Theme } from './Theme';

function Base() {
        return (
            <ThemeProvider theme={Theme}>
                <Nav />
                <Divider />
                
                <Header />
                <Divider />
                
                <Features />
                <Divider />

                <Package />
                <Divider />


                <Network />
                <Divider />

                <Reviews />
                <Divider />

                <Subscribe />
                <Footer />
            </ThemeProvider>
        );
    }

export default Base;