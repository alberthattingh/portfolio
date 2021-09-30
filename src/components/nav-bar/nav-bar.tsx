import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, SimpleGrid } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../logo.svg';

export interface NavItem {
    name: string;
    uri: string;
    id: number;
}

interface ButtonProps {
    navItem: NavItem;
    isSelected: boolean;
}

function NavButton(props: ButtonProps): React.ReactElement {
    const { navItem, isSelected } = props;
    const colour = useColorModeValue('gray.200', 'green.500');

    return (
        <Flex
            textAlign='center'
            alignItems='center'
            justifyContent='center'
            color={isSelected ? 'white' : colour}>
            <Center
                flex={1}
                bg={isSelected ? colour : 'transparent'}
                borderWidth={isSelected ? 1 : 0}
                borderColor={colour}
                _hover={{
                    textDecoration: 'none',
                    borderColor: colour,
                    borderWidth: 1,
                    cursor: 'pointer',
                }}
                rounded='xl'>
                <Link
                    style={{
                        height: '100%',
                        width: '100%',
                        padding: '8px 8px 8px 8px',
                    }}
                    to={navItem.uri}>
                    {navItem.name}
                </Link>
            </Center>
        </Flex>
    );
}

interface Props {
    navItems: NavItem[];
    selectedId: number;
}

export default function NavBar(props: Props): React.ReactElement {
    const { navItems, selectedId } = props;

    return (
        <Flex
            w='100%'
            h='10vh'
            bg={useColorModeValue('green.500', 'gray.800')}
            justifyContent='space-between'
            px={5}>
            <Box w='25%' h='100%' bg=''>
                <Image h='100%' minH='50px' src={logo} />
            </Box>
            <SimpleGrid w='50%' h='100%' columns={navItems.length} spacing={5}>
                {navItems.map((item) => (
                    <NavButton
                        navItem={item}
                        isSelected={item.id === selectedId}
                    />
                ))}
            </SimpleGrid>
        </Flex>
    );
}
