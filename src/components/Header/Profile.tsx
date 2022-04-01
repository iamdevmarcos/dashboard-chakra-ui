import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcos Andre</Text>
        <Text color="gray.300" fontSize="small">
          marcosdev.me@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Marcos Andre"
        src="https://avatars.githubusercontent.com/u/92524722?v=4"
      />
    </Flex>
  );
}
