import { Container, Box, Heading } from '@chakra-ui/react';

function Page() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p="3" md={6} align="center">
        Hello, I&apos;m a Frontend developer based in Korea!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dokyun Kim
          </Heading>
          <p>Frontend Developer</p>
        </Box>
      </Box>
    </Container>
  );
}

export default Page;
