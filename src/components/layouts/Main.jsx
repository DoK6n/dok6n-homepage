import Head from 'next/head';
import { Box, Container, ColorModeScript } from '@chakra-ui/react';
import theme from '../../lib/theme';
import Navbar from '../navbar';

function Main({ children, router }) {
  return (
    <Box as="main" ph={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dok6n - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
}

export default Main;
