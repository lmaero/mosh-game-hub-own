'use client'

import ColorModeSwitch from '@/components/ColorModeSwitch'
import SearchInput from '@/components/SearchInput'
import logo from '@/public/logo.webp'
import { HStack, Image } from '@chakra-ui/react'

export function Navbar() {
  return (
    <HStack padding='10px'>
      <Image src={logo.src} alt='Logo' boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}
