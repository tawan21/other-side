import React from 'react'
import { VStack, Input, Button } from 'native-base'

function StartMeeting({ name, roomId, setName, setRoomId, joinRoom }) {
  return (
    <VStack space={4} padding={4} bg='gray.800' height='100%'>
      <Input variant='rounded' placeholder='Enter Name' bg='gray.600' color='white' borderWidth='0' _focus={{ bg: 'gray.700' }} onChangeText={text => setName(text)} />
      <Input variant='rounded' placeholder='Enter Room ID' bg='gray.600' color='white' borderWidth='0' _focus={{ bg: 'gray.700' }} onChangeText={text => setRoomId(text)} />
      <Button borderRadius='full' bg='tertiary.600' onPress={joinRoom}>Start Meeting</Button>
    </VStack>
  )
}

export default StartMeeting