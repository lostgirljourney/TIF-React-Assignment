import { useRouter } from 'next/router';
import { Flex, Button, Text, Img } from '@chakra-ui/react';

const Card = ({ title, slug, excerpt, featured_image }) => {
  const router = useRouter();
  return (
    <Flex
      p="40px 0"
      borderRadius="27px"
      height="max-content"
      flexDirection="column"
      justifyContent="center"
      padding={{ xsm: '28px', lg: '27px 43px 43px' }}
      marginBottom={{ xsm: '63px' }}
      border="0.876168px solid #373737"
      width={{
        xsm: '271px',
        lg: '290px',
        lgBy2: '320px',
        xl: '350px'
      }}
      alignItems={{ xsm: 'center', lgBy2: 'flex-start' }}
    >
      <Img
        loading="lazy"
        objectFit="cover"
        borderRadius="27px"
        marginBottom="39px"
        alt="featured_image"
        src={featured_image}
        width={{ xsm: '204px', lg: '250px', xl: '326px' }}
        height={{ xsm: '166px', lg: '203px', xl: '257px' }}
      />
      <Text
        fontWeight="700"
        color="brand.primary"
        height={{ md: '48px' }}
        w={{ sm: '100%', lgBy2: '290px' }}
        align={{ xsm: 'center', lgBy2: 'left' }}
        fontSize={{ xsm: '16px', lgBy2: '21px' }}
        letterSpacing={{ xsm: '0.05em', lg: '0' }}
        marginBottom={{ xsm: '20px', lgBy2: '27px' }}
        style={{ fontFamily: `'Poppins', sans-serif` }}
      >
        {title}
      </Text>
      <Text
        fontWeight="400"
        height="106px"
        color="brand.bodySecondary"
        marginBottom={{ xsm: '26px' }}
        width={{ xsm: '100%', lgBy2: '295px' }}
        align={{ xsm: 'center', lgBy2: 'left' }}
        fontSize={{ xsm: '12px', lgBy2: '15px' }}
        lineHeight={{ xsm: '22px', lgBy2: '27px' }}
        style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
      >
        {excerpt.length > 170 ? `${excerpt.substring(0, 170)}...` : excerpt}
      </Text>
      <Button
        color="#424961"
        fontSize="11px"
        fontWeight="600"
        variant="outline"
        padding="7.5px 0"
        colorScheme="white"
        borderRadius="27px"
        letterSpacing="0.03em"
        border="2px solid #424961"
        height={{ xsm: 'max-content', lgBy2: '42px' }}
        width={{ xsm: '118px', lgBy2: '131px' }}
        style={{ fontFamily: `'Open Sans', sans-serif` }}
        onClick={() => {
          router.push(`/blog/${slug}`);
        }}
      >
        Read More
      </Button>
    </Flex>
  );
};

export default Card;
