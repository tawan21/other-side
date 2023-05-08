import React from 'react'
import { Box, Button, Flex, Text } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function MenuButtons({navigation}) {
  return (
    <Flex direction='row' justify='space-evenly'>
      <Box>
        <Button onPress={() => navigation.navigate('Meeting')} borderRadius='full' bg='primary.600'><FontAwesome name={'video-camera'} size={24} color={'#efefef'} /></Button>
        <Text textAlign='center' color='white'>New Meeting</Text>
      </Box>
      <Box>
        <Button borderRadius='full' bg='tertiary.600'><FontAwesome name={'plus-square'} size={24} color={'#efefef'} /></Button>
        <Text textAlign='center' color='white'>Join</Text>
      </Box>
    </Flex>
  )
}

export default MenuButtons