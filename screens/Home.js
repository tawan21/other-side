import React from 'react'
import { VStack } from 'native-base'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { NativeBaseProvider } from 'native-base'

function Home() {
  return (
    <NativeBaseProvider>
      <VStack space={4} safeArea bg='gray.800' padding='15px' height='100%'>
        <Header />
        <SearchBar />
        {/* <MenuButtons />
        <ContactsMenu /> */}
      </VStack>
    </NativeBaseProvider>
  )
}

export default Home