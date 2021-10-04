import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react';
import CoverHeading from '../../shared/components/cover-heading/cover-heading';

export default function Home(): React.ReactElement {
    const mainHeading = ['Designer.', 'Code monkey.', 'Problem solver.'];
    return (
        <SimpleGrid columns={2} w='100%' spacingY={8} p={8}>
            <Box>
                <CoverHeading text={mainHeading} />
            </Box>
            <Box />
            <SimpleGrid columns={2} spacingX={8}>
                <Box>
                    <Text>
                        My name is Albert Hattingh. I am a full-stack software
                        engineer based in Johannesburg, and I am passionate
                        about building complex software solutions from scratch
                        and learning new technologies. I am 21 years old and
                        graduated from the North West University Potchefstroom
                        Campus in 2020.
                    </Text>
                </Box>
                <Box>
                    <Text>
                        Although I am young, what I lack in experience I make up
                        for in tenacity, ambition and drive to be one of the
                        best in my field. “Work until you no longer have to
                        introduce yourself,” is a quote that best describes my
                        mission and proves my dedication to every project I take
                        on.
                    </Text>
                </Box>
            </SimpleGrid>
            <Box />
            <Box />
        </SimpleGrid>
    );
}
