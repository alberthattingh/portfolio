// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const colors = {
    brand: {},
};

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, colors });

export default theme;
