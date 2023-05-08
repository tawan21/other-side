import React from 'react'
import { VStack } from 'native-base'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

function Home({navigation}) {
  return (
      <VStack space={4} safeArea bg='gray.800' padding='15px' height='100%'>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactsMenu />
      </VStack>
  )
}

export default Home