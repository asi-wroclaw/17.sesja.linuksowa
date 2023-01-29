import { Button, Center, Flex, HStack, useTheme, VStack, Heading, Spacer, Grid, GridItem } from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'
import { text } from 'stream/consumers';


const PreviousEditions = () => {
    const theme = useTheme();

    const content = {
        text: 'Zobacz poprzednie prelekcje',
        buttonText: 'PRZEJDŹ DO NAGRAŃ',
        url: 'https://www.youtube.com/embed/jMk-6SDVXC8',
    }

    return <Box
        display="flex"
        justifyContent="center"
        width="100%"
        bg={theme.colors.primary}
        minHeight="70vh"
        opacity="90%">
        <Flex width="95%"
            marginY="auto"
            marginX={{ base: "2%", md: "20%", lg: "0" }}
            justifyContent="space-evenly"
            alignItems="center"
            direction={{ base: 'column', lg: 'row' }}>
            <Center>
                <VStack flex='1' spacing='64px'>
                    <Heading as="h2" fontSize={{ base: '4xl', md: '7xl' }} textAlign="center" fontWeight="semibold">{content.text}</Heading>
                    {/* To be replaced with default button */}
                    <Button>{content.buttonText}</Button>
                </VStack>
            </Center>
            <Center flex='2'>
                <iframe width={888} height={500} src={content.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Center>
        </Flex>
    </Box>
};

export default PreviousEditions;