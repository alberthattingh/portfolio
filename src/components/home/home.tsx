import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { map } from 'rxjs';
import GithubService from '../../services/github.service';
import CoverHeading from '../../shared/components/cover-heading/cover-heading';
import ImageBox from '../../shared/components/image-box/image-box';

interface Props {
    githubService: GithubService;
    username: string;
}

export default function Home(props: Props): React.ReactElement {
    const { githubService, username } = props;

    const mainHeading = ['Engineer.', 'Code monkey.', 'Problem solver.'];

    const [coverImage, setCoverImage] = useState<string>('');

    useEffect(() => {
        githubService
            .getUser(username)
            .pipe(map((response) => response.response))
            .subscribe((userData) => {
                setCoverImage(userData.avatar_url);
            });
    }, [username, githubService]);

    return (
        <SimpleGrid columns={2} w='100%' p={8} columnGap={8}>
            <SimpleGrid columns={1} spacingY={8}>
                <CoverHeading text={mainHeading} />
                <SimpleGrid columns={2} spacingX={8}>
                    <Box>
                        <Text>
                            My name is Albert. I am a full-stack software
                            engineer based in Johannesburg, and I am passionate
                            about building complex software solutions and
                            learning new technologies. I am 22 years old and
                            graduated from the North West University
                            Potchefstroom Campus in 2020.
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Although I am young, what I lack in experience I
                            make up for in tenacity, ambition and drive to be
                            one of the best in my field. “Work until you no
                            longer have to introduce yourself,” is a quote that
                            best describes my mission and proves my dedication
                            to every project I take on.
                        </Text>
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
            <ImageBox src={coverImage} maxWidth='100%' maxHeight='75vh' />
        </SimpleGrid>
    );
}
