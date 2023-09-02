import { Button, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <HStack  p={'4'} wrap={'wrap'}  shadow={'base'} bgColor={'blackAlpha.900'} justifyContent={'space-between'} >
   <Stack direction={'row'}>

    <Button  variant={'unstyled'} color={'white'}>
      <Link to={'/'}>Home</Link>

    </Button>
    <Button variant={'unstyled'} color={'white'}>
      <Link to={'/exchanges'}>Exchanges</Link>

    </Button>
    <Button variant={'unstyled'} color={'white'}>
      <Link to={'/coins'}>Coins</Link>

    </Button>

   </Stack>
   <Stack direction={'row'}  spacing={'5'}>
   <Button variant={'link'} color={'white'}>
      <Link to={'/login'}>Login</Link>


    </Button>
   <Button variant={'link'} color={'white'}>
      <Link to={'/signup'}>Sign Up</Link>


    </Button>
   </Stack>

   </HStack>
  )
}

export default Header
