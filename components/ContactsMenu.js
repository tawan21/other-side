import React from 'react'
import { Avatar, Box, Heading, Text, Flex, Spacer, HStack, FlatList } from 'native-base'

function ContactsMenu() {
  const data = [{
    fullName: "Aafreen Khan",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    fullName: "Sujitha Mathur",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    fullName: "Kiara",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }];

  return (
    <Box>
      <Heading color='white' fontSize="xl" paddingY='3'>
        Favourites
      </Heading>
      <FlatList data={data} renderItem={({
        item
      }) => <Box pl={["0", "4"]} pr={["0", "5"]} py="2">
          <HStack space={[3, 5]} justifyContent="space-between">
            <Avatar size="48px" source={{
              uri: item.avatarUrl
            }} />
            <Flex direction='row' alignItems='center'>
              <Text _dark={{
                color: "white"
              }} color="white">
                {item.fullName}
              </Text>
            </Flex>
            <Spacer />
          </HStack>
        </Box>} />
    </Box>
  )
}

export default ContactsMenu