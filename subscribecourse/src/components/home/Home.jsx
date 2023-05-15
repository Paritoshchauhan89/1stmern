import { Stack, VStack, Heading,Text, Button,Image, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import vg from "../../assets/images/bg.png"
import {CgGoogle, CgYoutube, cgGoogle,cgYoutube,} from "react-icons/cg"
import {SiCounterstrike,SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assets/videos/intro.mp4"
 
const Home = () => {
  return (
    <>
    <section>
        <div className="container">
            <Stack direction={["column","row"]} height="100%" justifyContent={["center","space-between"]} alignItems='center' spacing={['16','56']}>
<VStack width={"full"} alignItems={['center','flex-end']}>
  <Heading>
  Learn for the cirtified
  </Heading>
<Text children="Your Goal Acheieved fastly with the help of Experts" />
<Link to="/courses">

<Button size={"lg"} colorScheme='purple'>
    Explore Now
</Button>
</Link>
</VStack>
<Image className={"vector-graphics"} box-size={"md"} width="500px" src={vg} objectFit="contaion"/>
            </Stack>
        </div>
        <Box padding={'8'} bg={"#2B4088"}>
            <Heading textAlign={"center"} fontFamily={'body'} color={'purple.400'}  children="Our Brands"/>
        <HStack className="brandsBanner" justifyContent={'space-evenly'} marginTop='4'>
<CgGoogle/>
<CgYoutube/>
<SiCoursera/>
<SiUdemy/>
<DiAws/>

        </HStack>
        </Box>
<div className="container2">
  <video autoPlay
  controls controlsList="nodownload nofullscreen noremoteplayback"
  disablePictureInPicture disableRemotePlayback
  src={introVideo}>
    
  </video>
</div>
    </section>
    
    </>
  )
}

export default Home