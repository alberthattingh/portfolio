import { Center, Flex, SimpleGrid } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

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

    const primaryColour = useColorModeValue('gray.200', 'green.500');
    const colour = [
        useColorModeValue('gray.200', 'white'),
        useColorModeValue('gray.200', 'white'),
        primaryColour,
    ];

    return (
        <Flex
            textAlign='center'
            alignItems='center'
            justifyContent='center'
            color={isSelected ? 'white' : colour}>
            <Center
                flex={1}
                bg={[
                    'transparent',
                    'transparent',
                    isSelected ? primaryColour : 'transparent',
                ]}
                borderWidth={1}
                borderColor={isSelected ? colour : 'transparent'}
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
    const [expanded, setExpanded] = useState(false);

    return (
        <Flex
            w='100%'
            h={[expanded ? '40vh' : '10vh', expanded ? '40vh' : '10vh', '10vh']}
            bg={[
                'green.500',
                'green.500',
                useColorModeValue('green.500', 'gray.800'),
            ]}
            justifyContent='space-between'
            px={5}>
            <Center w='10%' h='100%' bg=''>
                <HamburgerIcon
                    w={8}
                    h={8}
                    onClick={() => setExpanded(!expanded)}
                    visibility={['visible', 'visible', 'hidden']}
                />
            </Center>
            <SimpleGrid
                visibility={[
                    expanded ? 'visible' : 'hidden',
                    expanded ? 'visible' : 'hidden',
                    'visible',
                ]}
                w='50%'
                h='100%'
                columns={[1, 2, navItems.length]}
                spacing={[0, 2, 5]}>
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
