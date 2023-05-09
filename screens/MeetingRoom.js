import React from 'react'
import StartMeeting from '../components/StartMeeting';
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

let socket;

function MeetingRoom() {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');

  const joinRoom = () => {
    socket.emit('join-room', { userName: name, roomId: roomId });
  };

  useEffect(() => {
    const API_URL = 'http://192.168.1.69:3001';
    socket = io(API_URL);
  }, []);

  return (
    <StartMeeting name={name} roomId={roomId} setName={setName} setRoomId={setRoomId} joinRoom={joinRoom} />
  )
}

export default MeetingRoom