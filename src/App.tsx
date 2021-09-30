import React from 'react';
import './App.css';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar, { NavItem } from './components/nav-bar/nav-bar';

const NAV_ITEMS: NavItem[] = [
    { name: 'Home', uri: '/', id: 0 },
    { name: 'About me', uri: '/about', id: 1 },
    { name: 'Portfolio', uri: '/portfolio', id: 2 },
    { name: 'Fun stuff', uri: '/fun', id: 3 },
    { name: 'Contact me', uri: '/contact', id: 4 },
];

function App(): React.ReactElement {
    return (
        <Box w='100vw' bg={useColorModeValue('gray.200', 'green.500')}>
            <Router>
                <Switch>
                    <Route path='/about'>
                        <NavBar navItems={NAV_ITEMS} selectedId={1} />
                        <h2>About me</h2>
                    </Route>
                    <Route path='/portfolio'>
                        <NavBar navItems={NAV_ITEMS} selectedId={2} />
                        <h2>Portfolio</h2>
                    </Route>
                    <Route path='/fun'>
                        <NavBar navItems={NAV_ITEMS} selectedId={3} />
                        <h2>Fun stuff</h2>
                    </Route>
                    <Route path='/contact'>
                        <NavBar navItems={NAV_ITEMS} selectedId={4} />
                        <h2>Contact me</h2>
                    </Route>
                    <Route path='/'>
                        <NavBar navItems={NAV_ITEMS} selectedId={0} />
                        <h2>Home</h2>
                    </Route>
                </Switch>
            </Router>
        </Box>
    );
}

export default App;
