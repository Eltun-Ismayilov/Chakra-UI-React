import { Flex, Heading, Box, Text, Button, Spacer, HStack, Avatar, AvatarBadge } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px"> 
       <Avatar src='/img/mario.png'>
       <AvatarBadge width="1.3em" bg="teal.500">
        <Text fontSize="xs" color="white">7</Text>
       </AvatarBadge>
       </Avatar>
        <Text>eltunhi@code.edu.az</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}
