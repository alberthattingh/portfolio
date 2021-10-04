import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';

interface Props {
    text: string[];
    size?: string;
    w?: string;
}

export default function CoverHeading(props: Props): React.ReactElement {
    const { text, size, w } = props;

    return (
        <Box maxW={w}>
            {text.map((line) => (
                <Heading as='h1' size={size} textAlign='end'>
                    {line}
                </Heading>
            ))}
        </Box>
    );
}

CoverHeading.defaultProps = {
    size: '4xl',
    w: '50vw',
};
