import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack gap={4}>
        <Heading size="2xl">404</Heading>
        <Text color="gray.500">
          요청하신 페이지를 찾을 수 없습니다.
        </Text>
        <Button onClick={() => navigate('/', { replace: true })}>
          홈으로 이동
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFoundPage;