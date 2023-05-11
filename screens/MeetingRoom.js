import React from 'react'
import StartMeeting from '../components/StartMeeting';
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Text } from 'native-base';
import { Camera } from 'expo-camera';
import { Alert } from 'react-native';

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

  return (
    startCam ? <Camera type={'front'} style={{ width: '100%', height: '100%' }}></Camera> :
      <StartMeeting name={name} roomId={roomId} setName={setName} setRoomId={setRoomId} joinRoom={joinRoom} />
  )
}

export default MeetingRoom