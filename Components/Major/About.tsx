import { Box, Text, Flex, Image, Center  } from "@chakra-ui/react";
import Buttons from "../Minors/Buttons";
import DefaultText from "../Minors/DefaultText";

const About =()=> {
    return (
        <>

          <Box bg={'var(--flats)'} p={'2em'}>
            <DefaultText fontSize="1.1em" fontWeight="bold"> About Me (NeoFetch) </DefaultText>
            
            <Box gap={'2'}>


                <Box textAlign={['center', 'left']}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis repellendus excepturi odio libero eum ad alias at itaque, velit reiciendis qui recusandae quasi illum, quidem beatae architecto vero culpa dolore.</Text>
                </Box>

                <Flex my={'2em'} gap={'4em'} flexDir={['column','row']}>

                    <Box textAlign={'center'} px={['','3em']}>

                       <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🎯</Text>
                       </Center>
                        <Text my={'1em'}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quas quidem dolorem nam voluptas numquam ipsa expedita repudiandae ex sequi ducimus voluptatem, nisi doloribus quibusdam molestias voluptatum eos ratione? Quo.
                        </Text>

                    </Box>

                    <Box textAlign={'center'}  px={['','3em']}>
                         <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🛹</Text>
                       </Center>

                        <Text my={'1em'}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quas quidem dolorem nam voluptas numquam ipsa expedita repudiandae ex sequi ducimus voluptatem, nisi doloribus quibusdam molestias voluptatum eos ratione? Quo.
                        </Text>

                    </Box>


                </Flex>
                
                <Center>
                    <Buttons color="black" bg="green.300">View Resume</Buttons>
                </Center>

            </Box>

          </Box>    
        
        </>
    )
}

export default About;