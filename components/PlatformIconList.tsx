import { Platform } from '@/hooks/usePlatforms'
import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import { BsGlobe } from 'react-icons/bs'
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'

interface Props {
  platforms: Platform[]
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          color={'gray.500'}
          key={platform.id}
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  )
}

export default PlatformIconList
