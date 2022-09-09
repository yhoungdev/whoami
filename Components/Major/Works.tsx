import { Box, Center, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Buttons from "../Minors/Buttons";
import ProjectBox from "../Minors/ProjectBox";

const Work =()=> {
    return (
        <>
        
          <Box my={'2em'}>


                <Center>
                    <Text my={'2em'} fontWeight={'bold'} fontSize={'1.8em'}>Things i have worked on </Text>
                </Center>

                <Flex gap={'2em'} flexDir={['column','row']} display={['none','inline-flex']}>
                    <ProjectBox/>
                    <ProjectBox/>
                    <ProjectBox/>
                </Flex>


                {/* display this on monile  */}
                <Box display={['block', 'none']}>
                    <ProjectBox/>
                </Box>

                
                <Center>
                   <Link href={'/Projects'}>
                       <Text my={'3em'} cursor={'pointer'}>
                          View More
                       </Text>
                   </Link>
                </Center>


          </Box>
        
        </>
    )
}

export default Work;