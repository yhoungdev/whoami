import { Box, Center, Text, Image } from "@chakra-ui/react";

const Work =()=> {
    return (
        <>
        
          <Box my={'2em'}>


                <Center>
                    <Text fontWeight={'bold'} fontSize={'1.8em'}>Things i have worked on </Text>
                </Center>

                <Box my={'0.5em'}>


                    <Box>

                        <Box w={['100%' , '25%']} h={'30vh'} bgImage={'https://bit.ly/dan-abramov'}>
                                
                        </Box>

                        <Text>Lorem ipsum dolor sit amet consectetur</Text>
                    </Box>

                </Box>

          </Box>
        
        </>
    )
}

export default Work;