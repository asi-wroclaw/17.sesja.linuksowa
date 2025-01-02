import DefaultButton from '@/components/common/DefaultButton';
import { Box, Center, Flex, Heading, Link, VStack } from '@chakra-ui/react';
import { YouTubeEmbed } from '@next/third-parties/google';
import { useTranslation } from 'next-export-i18n';

const PreviousEdition = () => {
  const { t } = useTranslation('common');
  const youtubeVideo = 'r2FVjVojHDE';
  const youtubePlaylist = 'PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0';
  const previousEditionUrl =
    'https://www.youtube.com/watch?v=r2FVjVojHDE&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0';

  const content = {
    text: t('seeLastEdition'),
    buttonText: t('goToRecordings'),
    youtubeIframeTitle: t('youtubeIframeTitle'),
  };

  return (
    <Box
      id="previous"
      as="section"
      position="relative"
      zIndex="2"
      marginBottom={'4em'}
      display="flex"
      width="100%"
      bg="white"
      minHeight="70vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width="95%"
        marginY={{ base: '5%', lg: 'auto' }}
        direction={{ base: 'column', lg: 'row' }}
        gap="5px"
      >
        <Center flex={1}>
          <VStack gap="3em">
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '7xl' }}
              lineHeight={1.2}
              textAlign="center"
              fontWeight="semibold"
            >
              {content.text}
            </Heading>
            <Link
              _hover={{ textDecorationLine: 'none' }}
              href={previousEditionUrl}
              target="_blank"
            >
              <DefaultButton
                _hover={{ color: 'black' }}
                text={content.buttonText}
                size={'xl'}
                fontSize={'lg'}
              />
            </Link>
          </VStack>
        </Center>
        <Center flex={2} marginTop="3em">
          {/* the same max-width must be set for a parent div and the <lite-youtube> element */}
          <Box maxW={'1200px'} width="100%" height="100%">
            <YouTubeEmbed
              videoid={youtubeVideo}
              params={`list=${youtubePlaylist}`}
              style="max-width: 1200px"
            />
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};

export default PreviousEdition;
