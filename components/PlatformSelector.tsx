import usePlatforms, { Platform } from '@/hooks/usePlatforms'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
