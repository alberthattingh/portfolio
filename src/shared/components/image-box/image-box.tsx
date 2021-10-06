import { Image } from '@chakra-ui/image';
import { Box, Center } from '@chakra-ui/layout';
import React from 'react';

interface Props {
    maxWidth: string;
    maxHeight: string;
    src: string;
}

export default function ImageBox(props: Props): React.ReactElement {
    const { maxWidth, maxHeight, src } = props;

    return (
        <Box maxW={maxWidth} maxH={maxHeight} pos='relative'>
            <Box>
                <svg
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{ maxHeight }}>
                    <path
                        fill='#38A169'
                        // eslint-disable-next-line max-len
                        d='M44.6,-57.3C58.3,-51.3,70.5,-39.1,72.3,-25.4C74.1,-11.8,65.4,3.3,56.5,14.6C47.7,25.9,38.7,33.4,29.3,41.8C19.8,50.2,9.9,59.6,-2,62.3C-13.9,65,-27.7,61.1,-39.3,53.4C-50.8,45.7,-60.1,34.1,-62,21.7C-63.9,9.3,-58.4,-3.9,-56.1,-20.6C-53.9,-37.2,-55,-57.2,-46.2,-64.8C-37.4,-72.3,-18.7,-67.5,-1.7,-65.2C15.4,-62.9,30.8,-63.2,44.6,-57.3Z'
                        transform='translate(100 100)'
                    />
                </svg>
            </Box>
            <Center pos='absolute' bottom={0} right={0}>
                <Image src={src} maxW='75%' rounded={25} />
            </Center>
        </Box>
    );
}
