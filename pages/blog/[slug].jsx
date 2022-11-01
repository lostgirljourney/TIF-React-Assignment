import { useRef } from 'react';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import { Image, Text, Box, Button, Flex } from '@chakra-ui/react';

import Layout from '../layout';
import { getAllBlogs, getBlog } from '../../services';

export async function getStaticProps({ params }) {
  const blog = await getBlog(params.slug);
  return {
    props: {
      blog: blog
    }
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.slug
      }
    })),
    fallback: false
  };
}

const Blog = ({ blog }) => {
  const router = useRouter();
  const ref = useRef(null);

  return (
    <Layout mode="dark">
      <LoadingBar color="#E23744" ref={ref} />
      <Flex
        width="100%"
        padding="3px 12px"
        alignItems="center"
        justifyContent="space-between"
        height={{ xsm: '38px', sm: '94px' }}
      >
        <Image
          alt="favicon"
          cursor="pointer"
          src="/favicon.png"
          height={{ xsm: '33px', sm: '83px' }}
          width={{ xsm: '43px', sm: '107px' }}
          onClick={() => {
            router.push('/');
            ref.current.continuousStart();
          }}
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Button
          gap="14px"
          color="white"
          bg="brand.red"
          fontWeight="700"
          colorScheme="red"
          borderRadius="27px"
          width={{ xsm: '69px', sm: '125px' }}
          height={{ xsm: '21px', sm: '43px' }}
          fontSize={{ xsm: '9px', sm: '15.1059px' }}
          style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
        >
          Explore Now!
        </Button>
      </Flex>
      <Flex
        width="100%"
        bg="brand.red"
        color="#F2F2F2"
        alignItems="center"
        height="max-content"
        flexDirection="column"
        justifyContent="center"
        padding={{ xsm: '29px 10px', sm: '97px 20px 62px' }}
      >
        <Text
          fontWeight="700"
          align={{ xsm: 'center' }}
          marginBottom={{ xsm: '2px' }}
          fontSize={{ xsm: '21px', sm: '62px' }}
          style={{ fontFamily: `'Poppins', sans-serif` }}
        >
          {blog.title}
        </Text>
        <Text
          fontWeight="400"
          align={{ xsm: 'center' }}
          w={{ xsm: '236px', sm: '95%' }}
          fontSize={{ xsm: '10px', sm: '16px' }}
          lineHeight={{ xsm: '14px', sm: '27px' }}
          marginBottom={{ xsm: '17px', sm: '53px' }}
          style={{ fontFamily: `'Open Sans', sans-serif` }}
        >
          {blog.subtitle}
        </Text>
        <Text
          w="236px"
          align="center"
          fontWeight="700"
          lineHeight={{ xsm: '27px' }}
          fontSize={{ xsm: '11px', sm: '16px' }}
          style={{ fontFamily: `'Open Sans', sans-serif` }}
        >
          By {blog.author}
        </Text>
      </Flex>
      <Box
        w="100%"
        fontWeight="400"
        height="max-content"
        color="brand.bodySecondary"
        fontSize={{ xsm: '9px', sm: '16px' }}
        lineHeight={{ xsm: '14px', sm: '27px' }}
        style={{
          fontFamily: `'Open Sans', sans-serif`,
          whiteSpace: 'pre-line'
        }}
        padding={{ xsm: '44px 28px 52px', lg: '115px 243px', md: '100px' }}
      >
        {blog.content}
      </Box>
    </Layout>
  );
};

export default Blog;
