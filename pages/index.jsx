import LoadingBar from 'react-top-loading-bar';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Image, Flex, Text } from '@chakra-ui/react';

import Layout from './layout';
import Card from './components/Card';
import { getBlogs } from '../services';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBlogs(pageCount);
      setBlogs(result);
    };
    fetchData();
  }, [pageCount]);

  return (
    <Layout mode="light">
      <LoadingBar color="#E23744" ref={ref} />
      <main>
        <Image
          top="33px"
          left="100px"
          width="107px"
          height="83px"
          alt="favicon"
          loading="lazy"
          src="/favicon.png"
          position="absolute"
          display={{ xsm: 'none', lg: 'block' }}
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Button
          top="18px"
          right="18px"
          color="white"
          fontSize="11px"
          fontWeight="600"
          variant="outline"
          colorScheme="white"
          position="absolute"
          borderRadius="30px"
          letterSpacing="0.03em"
          width={{ xsm: '87px', md: '122px' }}
          height={{ xsm: '31px', md: '42px' }}
          style={{ fontFamily: `'Open Sans', sans-serif` }}
        >
          Get In Touch
        </Button>
        <Flex
          width="100%"
          flexWrap="wrap"
          alignItems="flex-start"
          flexDirection="row-reverse"
          justifyContent="space-between"
          minHeight={{ xsm: '808px', lg: 'max-content' }}
          paddingBottom={{ lgBy2: '150px' }}
        >
          <Image
            maxHeight={{ xsm: '100%', lgBy2: '75%' }}
            maxWidth={{ xsm: '100%', lgBy2: '75%' }}
            loading="lazy"
            alt="hero-section"
            src="/images/hero-section.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <Box
            alignItems="center"
            paddingBottom="68px"
            flexDirection="column"
            minHeight="max-content"
            justifyContent="center"
            width={{ xsm: '100%', lgBy2: '396px' }}
            display={{ xsm: 'flex', lgBy2: 'block' }}
            paddingTop={{ xsm: '75px', lgBy2: '227px' }}
            paddingLeft={{ lgBy2: '70px', xl: '100px' }}
          >
            <Text
              fontWeight="700"
              color="brand.primary"
              marginBottom={{ xsm: '21px' }}
              width={{ xsm: '240px', md: '345px' }}
              height={{ xsm: '130px', md: '207px' }}
              fontSize={{ xsm: '38px', md: '62px' }}
              lineHeight={{ xsm: '46px', md: '69px' }}
              align={{ xsm: 'center', lgBy2: 'left' }}
              style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
            >
              Discover the <span style={{ color: '#E23744' }}>Best</span> Food
              and Drinks
            </Text>
            <Text
              fontWeight="400"
              color="brand.bodySecondary"
              height={{ xsm: '36px', md: '55px' }}
              width={{ xsm: '249px', md: '345px' }}
              fontSize={{ xsm: '11px', md: '16px' }}
              lineHeight={{ xsm: '18px', md: '27px' }}
              align={{ xsm: 'center', lgBy2: 'left' }}
              marginBottom={{ xsm: '32px', md: '26px' }}
              style={{ fontFamily: `'Open Sans', sans-serif` }}
            >
              Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
            <Button
              gap="6px"
              color="white"
              bg="brand.red"
              fontWeight="700"
              colorScheme="red"
              borderRadius="30px"
              fontSize="12.2664px"
              width={{ xsm: '120px' }}
              height={{ xsm: '40px' }}
              style={{ fontFamily: `'Open Sans', sans-serif` }}
            >
              Explore Now!
            </Button>
          </Box>
        </Flex>
        <Box
          width="100%"
          alignItems="center"
          bg="brand.bgPrimary"
          justifyContent="center"
          display={{ xsm: 'flex' }}
          flexDirection={{ xsm: 'column', md: 'row' }}
          height={{ xsm: 'max-content', md: '468px' }}
          padding={{ xsm: '140px 0 130px', md: '100px 0' }}
        >
          <Box
            height="468px"
            bgSize="cover"
            bgPosition="center"
            bgImage="/images/about.jpg"
            width={{ xsm: '100%', md: '348px' }}
            display={{ xsm: 'none', md: 'block' }}
            marginRight={{ md: '75px', lg: '200px' }}
          />
          <Flex
            flexDirection="column"
            alignItems={{ xsm: 'center', md: 'flex-start' }}
            justifyContent={{ xsm: 'center', md: 'flex-start' }}
          >
            <Text
              fontWeight="600"
              color="brand.primary"
              align={{ xsm: 'center' }}
              marginBottom={{ xsm: '21px' }}
              fontSize={{ xsm: '26px', lgBy2: '45px' }}
              lineHeight={{ xsm: '35px', lgBy2: 1 }}
              style={{ fontFamily: `'Poppins', sans-serif` }}
            >
              About Us
            </Text>
            <Text
              fontWeight="400"
              height={{ xsm: '138px' }}
              color="brand.bodySecondary"
              marginBottom={{ xsm: '16px' }}
              align={{ xsm: 'center', md: 'left' }}
              width={{ xsm: '275px', lgBy2: '447px' }}
              fontSize={{ xsm: '11px', lgBy2: '15px' }}
              lineHeight={{ xsm: '21px', lgBy2: '27px' }}
              style={{ fontFamily: `'Open Sans', sans-serif` }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Text>
            <Button
              gap="13px"
              color="white"
              bg="brand.red"
              fontWeight="600"
              colorScheme="red"
              borderRadius="27px"
              letterSpacing="0.03em"
              width={{ xsm: '96px', lgBy2: '132px' }}
              height={{ xsm: '25px', lgBy2: '42px' }}
              fontSize={{ xsm: '11px', lgBy2: '16px' }}
              style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
            >
              Read More
            </Button>
          </Flex>
        </Box>
        <Box
          width="100%"
          alignItems="center"
          height="max-content"
          flexDirection="column"
          justifyContent="center"
          display={{ xsm: 'flex', lg: 'block' }}
          padding={{
            xsm: '132px 0 57px',
            lg: '158px 50px 65px',
            xl: '158px 108px 65px'
          }}
        >
          <Text
            fontWeight="600"
            color="brand.primary"
            letterSpacing="0.04em"
            fontSize={{ xsm: '28px' }}
            lineHeight={{ xsm: '54px' }}
            marginBottom={{ xsm: '23px', lg: '41px' }}
            style={{ fontFamily: `'Poppins', sans-serif` }}
          >
            Latest Articles
          </Text>
          <Flex
            width="100%"
            alignItems="center"
            flexWrap={{ xsm: 'wrap', lg: 'nowrap' }}
            display={pageCount === 1 ? 'flex' : 'none'}
            flexDirection={{ xsm: 'column', sm: 'row' }}
            justifyContent={{
              xsm: 'center',
              sm: 'space-evenly',
              lg: 'space-between'
            }}
          >
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                {...blog}
                continuousStart={ref.current.continuousStart}
              />
            ))}
          </Flex>
          <Flex
            width="100%"
            alignItems="center"
            flexWrap={{ xsm: 'wrap', lg: 'nowrap' }}
            display={pageCount === 2 ? 'flex' : 'none'}
            flexDirection={{ xsm: 'column', sm: 'row' }}
            justifyContent={{
              xsm: 'center',
              sm: 'space-evenly',
              lg: 'space-between'
            }}
          >
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                {...blog}
                continuousStart={ref.current.continuousStart}
              />
            ))}
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Button
              size="xsm"
              bg="white"
              padding="0"
              color="#424961"
              colorScheme="gray"
              borderRadius="5px"
              border="1px solid #424961"
              disabled={pageCount === 1}
              w={{ xsm: '16px', md: '29px' }}
              h={{ xsm: '16px', md: '29px' }}
              onClick={() => setPageCount(1)}
              marginRight={{ xsm: '7px', md: '14px' }}
            >
              <ChevronLeftIcon />
            </Button>
            <Text
              color="#424961"
              fontWeight="400"
              lineHeight={{ xsm: '27px' }}
              fontSize={{ xsm: '12px', md: '22px' }}
              style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
            >
              {pageCount}/2
            </Text>
            <Button
              size="xsm"
              bg="white"
              padding="0"
              color="#424961"
              borderRadius="5px"
              colorScheme="gray"
              border="1px solid #424961"
              disabled={pageCount === 2}
              w={{ xsm: '16px', md: '29px' }}
              h={{ xsm: '16px', md: '29px' }}
              onClick={() => setPageCount(2)}
              marginLeft={{ xsm: '7px', md: '14px' }}
            >
              <ChevronRightIcon />
            </Button>
          </Flex>
        </Box>
      </main>
    </Layout>
  );
};

export default Home;
