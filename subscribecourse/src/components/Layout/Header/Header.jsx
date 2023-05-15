import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { RiMenu5Fill } from 'react-icons/ri';

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width={'12'} 
        height={'12'} 
        rounded="full" 
        position={'fixed'}
        top="6" 
        left="6"
      >
        <RiMenu5Fill />

      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur (3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottom={'1px'}>Course Subscription</DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>

    </>
  )
}

export default Header