'use client'

import logo from '@/public/logo.webp'
import { HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'

export function Navbar() {
  return (
    <HStack>
      <Image src={logo} alt={'Logo'} width={60} />
      <Text>Navbar</Text>
    </HStack>
  )
}
