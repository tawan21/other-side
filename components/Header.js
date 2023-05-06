import React from 'react'
import { Flex, Spacer, Box, Heading } from "native-base";
import Entypo from 'react-native-vector-icons/Entypo';

function Header() {
  return (
    <Flex direction='row'>
      <Box><Entypo name='notification' size={24} color='#efefef' /></Box>
      <Spacer />
      <Box><Heading color='white'>Meet & Chat</Heading></Box>
      <Spacer />
      <Box><Entypo name='new-message' size={24} color='#efefef' /></Box>
    </Flex>
  )
}

export default Header