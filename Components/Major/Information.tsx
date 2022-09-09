import { Box, Text, Flex, Image, Center  } from "@chakra-ui/react";
import Buttons from "../Minors/Buttons";
import DefaultText from "../Minors/DefaultText";

const Information =()=> {
    return (
        <>

          <Box bg={'var(--flats)'} p={'2em'}>
            <DefaultText fontSize="1.1em" fontWeight="bold"> About Me (NeoFetch) </DefaultText>
            
            <Box gap={'2'}>


                <Box textAlign={['center', 'left']}>
                    <Text> Hey Nate, how is life </Text>
                </Box>

                <Flex my={'2em'} gap={['4em','2em']} flexDir={['column','row']}>

                    <Box textAlign={'center'} px={['','2em']}>

                       <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🎯</Text>
                       </Center>
                        <Text my={'1em'}>
                          As an introvert, all i have is God, Family and Friends. I am always on my screen researching and surfing the internet,
                          so i put security and privacy at high priority, because security doesnt,
                          exit in this world called the internet. That is why i preach the Gospel of Tor and Duck Duck Go
                        </Text>

                    </Box>

                    <Box textAlign={'center'}  px={['','2em']}>
                         <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🛹</Text>
                       </Center>

                        <Text my={'1em'}>
                            I am Obseesed with Linux Operating System, Am a big fan of the linux operating system 
                            over my years of experience in the linux Eco system i have tested many awesome Linux distros such as.
                            Ubuntu , Kali Linux , Parror Sec , Kubuntu, Tails and even Rasbian ( Raspberry Pi ) 
                        </Text>

                    </Box>

                    <Box textAlign={'center'}  px={['','2em']}>
                         <Center>
                           <Text fontSize={'2.2em'} bg={'var(--glass)'} 
                           w={'fit-content'} mx={'center'} px={'0.2em'} 
                           borderRadius={'0.2em'} >🛹</Text>
                       </Center>

                        <Text my={'1em'}>
                            There are somethings i do as my out door activities if am not facing my big inches monitor, i go for Blading ( Roller Blade ) in the 
                            smooth feel of Nature, feeling the fresh air and nice environment with my Head phone on and cool music which makes me feel ontop of the 
                            word, hahaha
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

export default Information;