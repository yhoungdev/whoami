
import { Image , Text , Box, Flex  } from "@chakra-ui/react";
const Hero =()=> {
    return (
        <>

            <Box position={'relative'}>


              <Flex justify={['center']} px={['0','3em']}
                    alignItems={'center'} gap={'1em'}  py={'2em'}
                    flexDir={['column' , 'row']} h={'100vh'}>

                    <Box>
                        <Image borderRadius={'0.5em'} boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    </Box>

                    <Box px={'1em'}  maxW={['100%','25em']}>
                        <Text textAlign={['center', ' left ']}>whoami 👋</Text>
                        <Text fontWeight={'bold'} fontSize={['2em','71.3152px']}
                            fontFamily={'var(--general)'}
                         >
                            Obiabo Immanuel
                        </Text>
                        <Text textAlign={['center', ' left ']}>Front End Developer </Text>
                    </Box>

              </Flex>



                <Box position={'absolute'} bottom={0} left={0}>
                    <Image src="https://res.cloudinary.com/dhkccnvyn/image/upload/v1659283237/quick/Group_44_gor4ho.svg" />
                </Box>

            </Box>
        
        </>
    )
}

export default Hero;