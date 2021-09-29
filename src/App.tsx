import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import NavBar from './components/nav-bar/nav-bar';

const NAV_ITEMS = [
    { name: 'Home', uri: '' },
    { name: 'About me', uri: '' },
    { name: 'Portfolio', uri: '' },
    { name: 'Fun stuff', uri: '' },
    { name: 'Contact me', uri: '' },
];

function App(): React.ReactElement {
    return (
        <Box w='100vw'>
            <NavBar navItems={NAV_ITEMS} />
        </Box>
    );
}

export default App;
