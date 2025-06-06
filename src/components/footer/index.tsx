import { Center, Link, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

const Footer = () => {
  const { t } = useTranslation();

  const content = {
    cocText: t('cocText'),
    cocButtonText: t('cocButtonText'),
    cocLink: t('cocLink'),
  };

  return (
    <Center
      id="footer"
      as="section"
      display="flex"
      justifyContent="center"
      width="100%"
      bg={'primary'}
      minHeight="10vh"
      color="white"
      fontSize={['lg', '2xl']}
      textAlign="center"
      paddingLeft={4}
    >
      <Text>
        {content.cocText}
        <Link href={content.cocLink} target="_blank" padding={2}>
          <Text as="u">{content.cocButtonText}</Text>
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
