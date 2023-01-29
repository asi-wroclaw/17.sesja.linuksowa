import { Text, VStack, Heading } from "@chakra-ui/react"
import Image, { StaticImageData } from 'next/image';

type ImageItemProps = {
  imageSrc: string | StaticImageData,
  title: string,
  text: string
};

const ImageItem = ({ imageSrc, title, text }: ImageItemProps) => {
  return <VStack flex="1">
    <Image alt={`${title} image`} src={imageSrc} />
    <Heading fontWeight="bold" as="h4" textAlign="center">{title}</Heading>
    <Text textAlign="center">{text}</Text>
  </VStack>;
}

export default ImageItem;