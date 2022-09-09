import { Box, Text, Flex, Image, Center  } from "@chakra-ui/react";
import Buttons from "../Minors/Buttons";
import DefaultText from "../Minors/DefaultText";

const About =()=> {
    return (
        <>

          <Box bg={'var(--flats)'} p={'2em'}>
            <DefaultText fontSize="1.1em" fontWeight="bold"> About Me (NeoFetch) </DefaultText>
            
            <Box gap={'2'}>


                <Box textAlign={['center', 'left']} px={['', '2em']}>
                    <Text my={'1em'}>
                        {'> '} sudo whoami
                    </Text>
                    <Text>
                        I am Obiabo Immanuel a Solution-oriented and problem solver with over 4 years of experience building and
                        maintaining software and software architecture. Highly skilled in communication,
                        collaboration, and designing of appealing user-centered, and friendly interfaces. And
                        contributing to other applications through Open source contributions.
                    </Text>
                </Box>

                <Flex my={'2em'} gap={'4em'} flexDir={['column','row']}>

                    <Box textAlign={'center'} px={['','3em']}>

                       <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🎯</Text>

                         
                       </Center>
                       <Text fontWeight={'bold'} my={'0.5em'}>Open Source </Text>
                        <Text my={'1em'}>
                             I add and contribute back to the tech ecosystem by contributing to sourcing and contributing 
                             to Open Source projects, i have contributed to 
                             Open Sauce , Astro.build and others 
                        </Text>

                    </Box>

                    <Box textAlign={'center'}  px={['','3em']}>
                         <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🛹</Text>
                       </Center>
                       <Text my={'1em'} fontWeight={'bold'}> Sense of UI/UX Design  </Text>

                        <Text my={'1em'}>
                            As a frontend developer i have sense of UI/UX design tool such as figma and Whimsical,
                            I create easily scalable 
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