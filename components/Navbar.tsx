'use client'

import ColorModeSwitch from '@/components/ColorModeSwitch'
import logo from '@/public/logo.webp'
import { HStack } from '@chakra-ui/react'
import Image from 'next/image'

export function Navbar() {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image src={logo} alt={'Logo'} width={60} />
      <ColorModeSwitch />
    </HStack>
  )
}
