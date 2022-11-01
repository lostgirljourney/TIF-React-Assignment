import { Box, Text, Img, Flex } from '@chakra-ui/react';

const Footer = ({ mode }) => {
  return (
    <Box
      width="100%"
      alignItems="center"
      height={{ sm: 'max-content', sm: '400px' }}
      justifyContent="space-between"
      flexDirection={{ xsm: 'column', sm: 'row' }}
      display={{ xsm: 'flex', lg: 'block' }}
      bg={mode === 'light' ? '#F8F8F8' : '#2C2C2C'}
      p={{ xsm: '52px 44px 40px', sm: '84px 50px 100px' }}
    >
      <Img
        width="75px"
        height="58px"
        alt="favicon"
        objectFit="cover"
        src="/favicon.png"
        marginBottom="42px"
        display={{ xsm: 'block', sm: 'none' }}
      />
      <Flex
        width="100%"
        height="100%"
        justifyContent="space-between"
        flexDirection={{ xsm: 'column', sm: 'row' }}
      >
        <Img
          width="162px"
          height="125px"
          alt="favicon"
          objectFit="cover"
          src="/favicon.png"
          display={{ xsm: 'none', sm: 'block' }}
          alignSelf="center"
        />
        <Box
          height="116px"
          marginBottom="29px"
          width={{ xsm: '100%', sm: '220px' }}
        >
          <Text
            fontWeight="600"
            letterSpacing="0.03em"
            marginBottom={{ xsm: '6px', sm: '15px' }}
            lineHeight={{ xsm: '25px', sm: '27px' }}
            fontSize={{ xsm: '15.771px', sm: '19px' }}
            color={mode === 'light' ? 'brand.primary' : '#F2F2F2'}
            style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
          >
            Contact Us
          </Text>
          <Text
            fontWeight="400"
            fontSize={{ xsm: '8.76px', sm: '15px' }}
            lineHeight={{ xsm: '12px', sm: '23px' }}
            color={mode === 'light' ? '#646874' : 'white'}
            style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
          >
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
            <br />
            <br />
            example2020@gmail.com
            <br />
            <br />
            (904) 443-0343
          </Text>
        </Box>
        <Box width="100px" height="116px" marginBottom="29px">
          <Text
            fontWeight="600"
            letterSpacing="0.03em"
            marginBottom={{ xsm: '6px', sm: '15px' }}
            lineHeight={{ xsm: '25px', sm: '27px' }}
            fontSize={{ xsm: '15.771px', sm: '19px' }}
            color={mode === 'light' ? 'brand.primary' : '#F2F2F2'}
            style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
          >
            More
          </Text>
          <Text
            fontWeight="400"
            fontSize={{ xsm: '8.76px', sm: '15px' }}
            lineHeight={{ xsm: '12px', sm: '23px' }}
            color={mode === 'light' ? '#646874' : 'white'}
            style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
          >
            About Us
            <br />
            <br />
            Products
            <br />
            <br />
            Career
            <br />
            <br />
            Contact Us
          </Text>
        </Box>
        <Box
          width="200px"
          height="100%"
          display={{ xsm: 'none', sm: 'flex' }}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <div>
            <Text
              fontSize="19px"
              fontWeight="600"
              lineHeight="27px"
              marginBottom="16px"
              letterSpacing="0.03em"
              color={mode === 'light' ? 'brand.primary' : '#F2F2F2'}
              style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
            >
              Social Links
            </Text>
            <Flex w="76px" justifyContent="space-between" alignItems="center">
              <Img
                alt="socials"
                loading="lazy"
                marginRight={{ sm: '35px' }}
                width={{ xsm: '12px', sm: '16px' }}
                height={{ xsm: '12px', sm: '16px' }}
                src={
                  mode === 'light'
                    ? '/images/socials/ig.svg'
                    : '/images/socials/ig-light.svg'
                }
              />
              <Img
                alt="socials"
                loading="lazy"
                width={{ xsm: '12px', sm: '16px' }}
                height={{ xsm: '12px', sm: '16px' }}
                marginRight={{ sm: '35px' }}
                src={
                  mode === 'light'
                    ? '/images/socials/twitter.svg'
                    : '/images/socials/twitter-light.svg'
                }
              />
              <Img
                alt="socials"
                loading="lazy"
                marginRight={{ sm: '35px' }}
                width={{ xsm: '12px', sm: '16px' }}
                height={{ xsm: '12px', sm: '16px' }}
                src={
                  mode === 'light'
                    ? '/images/socials/fb.svg'
                    : '/images/socials/fb-light.svg'
                }
              />
            </Flex>
          </div>
          <Text
            fontSize="15px"
            fontWeight="400"
            lineHeight="25px"
            alignSelf="flex-start"
            style={{ fontFamily: `'Roboto', sans-serif` }}
            color={mode === 'light' ? '#646874' : '#828B9C'}
          >
            © 2022 Food Truck Example
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Text
          fontWeight="400"
          marginBottom="12px"
          fontSize={{ xsm: '8.76px' }}
          lineHeight={{ xsm: '12px' }}
          display={{ xsm: 'block', sm: 'none' }}
          style={{ fontFamily: `'Roboto', sans-serif` }}
          color={mode === 'light' ? '#646874' : '#828B9C'}
        >
          © 2022 Food Truck Example
        </Text>
        <Flex
          w="76px"
          justifyContent="space-between"
          alignItems="center"
          display={{ xsm: 'flex', sm: 'none' }}
        >
          <Img
            width="12px"
            height="12px"
            alt="socials"
            loading="lazy"
            src={
              mode === 'light'
                ? '/images/socials/ig.svg'
                : '/images/socials/ig-light.svg'
            }
          />
          <Img
            width="12px"
            height="12px"
            alt="socials"
            loading="lazy"
            src={
              mode === 'light'
                ? '/images/socials/twitter.svg'
                : '/images/socials/twitter-light.svg'
            }
          />
          <Img
            alt="socials"
            loading="lazy"
            width={{ xsm: '12px' }}
            height={{ xsm: '12px' }}
            src={
              mode === 'light'
                ? '/images/socials/fb.svg'
                : '/images/socials/fb-light.svg'
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
