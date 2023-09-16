'use client'

import ColorModeSwitch from '@/components/ColorModeSwitch'
import SearchInput from '@/components/SearchInput'
import logo from '@/public/logo.webp'
import { HStack, Image } from '@chakra-ui/react'

interface Props {
  onSearch: (searchText: string) => void
}

export function Navbar({ onSearch }: Props) {
  return (
    <HStack padding='10px'>
      <Image src={logo.src} alt='Logo' boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}
