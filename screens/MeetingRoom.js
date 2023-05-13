import React from 'react'
import StartMeeting from '../components/StartMeeting';
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Box, Button, Flex, HStack, Spacer, Text } from 'native-base';
import { Camera } from 'expo-camera';
import { Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

let socket;

function MeetingRoom() {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCam, setStartCam] = useState(false);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') setStartCam(true);
    else Alert.alert('Camera Access Denied');
  }

  const joinRoom = async () => {
    socket.emit('join-room', { userName: name, roomId: roomId });
    await startCamera();
  };

  useEffect(() => {
    const API_URL = 'http://192.168.1.69:3001';
    socket = io(API_URL);

    socket.on('all-users', users => {
      console.log(users);
      setActiveUsers(users);
    })

    return () => {
      socket.disconnect();
    }
  }, []);

  return startCam ? (
    <Flex bg='gray.800' safeAreaBottom direction='column' height='full'>
      <Flex bg='black' direction='column' justify='center' flex='1'>
        <Camera type={'front'} style={{ width: '100%', height: '90%' }}></Camera>
        <HStack justifyContent='space-evenly'>{activeUsers.map(user => <Text key={user.userName} color='white'>{user.userName}</Text>)}</HStack>
      </Flex>
      <HStack justifyContent='space-evenly'>
        <Box>
          <Button variant='unstyled'><FontAwesome5 name='microphone' size={24} color='#efefef' /></Button>
          <Text color='white' textAlign='center'>Mute</Text>
        </Box>
        <Box>
          <Button variant='unstyled'><FontAwesome5 name='video' size={24} color='#efefef' /></Button>
          <Text color='white' textAlign='center'>Stop Video</Text>
        </Box>
        <Box>
          <Button variant='unstyled'><FontAwesome name='slideshare' size={24} color='#efefef' /></Button>
          <Text color='white' textAlign='center'>Share Screen</Text>
        </Box>
        <Box>
          <Button variant='unstyled'><FontAwesome name='group' size={24} color='#efefef' /></Button>
          <Text color='white' textAlign='center'>Participants</Text>
        </Box>
      </HStack>
    </Flex>
  ) :
    (
      <StartMeeting name={name} roomId={roomId} setName={setName} setRoomId={setRoomId} joinRoom={joinRoom} />
    )

}

export default MeetingRoom