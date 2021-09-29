import { Image } from '@chakra-ui/image';
import { Box, Flex, Link, SimpleGrid } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import logo from '../../logo.svg';

interface NavItem {
    name: string;
    uri: string;
}

interface Props {
    navItems: NavItem[];
}

function NavButton(props: NavItem): React.ReactElement {
    const { name, uri } = props;

    return (
        <Flex
            textAlign='center'
            alignItems='center'
            justifyContent='center'
            color='white'>
            <Link
                px={2}
                py={2}
                href={uri}
                flex={1}
                _hover={{
                    textDecoration: 'none',
                    borderColor: useColorModeValue('gray.200', 'gray.700'),
                    borderWidth: 1,
                }}
                rounded='xl'>
                {name}
            </Link>
        </Flex>
    );
}

export default function NavBar(props: Props): React.ReactElement {
    const { navItems } = props;

    return (
        <Flex
            w='100%'
            h='20vh'
            bg='gray.800'
            justifyContent='space-between'
            px={5}>
            <Box w='25%' h='100%' bg=''>
                <Image h='100%' src={logo} />
            </Box>
            <SimpleGrid w='50%' h='100%' columns={navItems.length} spacing={5}>
                {navItems.map((item) => (
                    <NavButton name={item.name} uri={item.uri} />
                ))}
            </SimpleGrid>
        </Flex>
    );
}
