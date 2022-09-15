import { Box, Text, Flex, Image, Center  } from "@chakra-ui/react";
import Buttons from "../Minors/Buttons";
import DefaultText from "../Minors/DefaultText";

const About =()=> {
    return (
        <>

          <Box bg={'var(--flats)'} p={'2em'}>
            <DefaultText fontSize="1.1em" fontWeight="bold" textAlign={['center','left']}> About Me (NeoFetch) </DefaultText>
            
            <Box gap={'2'}>


                <Box textAlign={['center', 'left']} px={['', '2em']}>
                   <Flex gap={'3em'} my={'2em'} flexDir={['column','row']} alignItems={'center'}>
                 
                        <Image display={'none'} boxSize='200px' src='https://res.cloudinary.com/dhkccnvyn/image/upload/v1662745429/1662421356129_cdkaxo.webp' alt='Dan Abramov' />
                    
                    <Box>
                        <Text my={'1em'}>
                            {'> '} sudo whoami
                        </Text>
                        <Text lineHeight={'1.7em'}>
                        I am Obiabo Immanuel, A Solution-oriented and problem solver with over 
                        4 years of experience building and maintaining software and software architecture. 
                        Highly skilled in communication, collaboration, and designing of appealing user-centered,
                         and friendly interfaces, Building and designing scalable web components, PWA and SPA  with modern
                          javascript frameworks/library like , ReactJs, NextJs, Typescript and Astro.build, 
                         I give applications live by consuming Rest Apis 

                        </Text>
                    </Box>
                   </Flex>
                </Box>

                <Flex my={['5em','6em']} gap={'4em'} flexDir={['column','row']}>

                    <Box textAlign={'center'} px={['','3em']}>

                       <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🎯</Text>

                         
                       </Center>
                       <Text fontWeight={'bold'} my={'0.5em'}>Open Source </Text>
                        <Text my={'1em'}>
                             I add and give back to the tech ecosystem by contributing and sourcing for  Open Source projects, over the past time i have  contributed to 
                            to repositories such as  Open Sauce , Astro.build and others 
                        </Text>

                    </Box>

                    <Box textAlign={'center'}  px={['','3em']}>
                         <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🎨 </Text>
                       </Center>
                       <Text my={'1em'} fontWeight={'bold'}> Sense of UI/UX Design  </Text>

                        <Text my={'1em'}>
                         As a frontend developer, I have a good sense of UI/UX design I design awesome
                         Interfaces,  low and high-fidelity mockups, and over the past years, I have used 
                         tools such as Figma, Whimsical, and Mockup Plus.
                            
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