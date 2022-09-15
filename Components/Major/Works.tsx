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

                <Flex gap={'2em'} flexDir={['column','row']} justifyContent={'center'} display={['none','inline-flex']}>
                    <ProjectBox name={'Quickk Blog'}
                        description={'A Platform to make you create blog in 2 mins, and earn donations in crypto'}
                    />
                    <ProjectBox name="SecuWallet" 
                        description={'The key component that provides secure, diversied and user-friendly non-custodial wallet solution for everyone.'}/>

                     <ProjectBox name="Utifi"
                        description=" Making Digital Service Better for 
                        Everyone, pay bills with ease"/>
                </Flex>


                {/* display this on monile  */}
                <Box display={['block', 'none']}>
                     <ProjectBox name={'Quickk Blog'}
                        description={'A Platform to make you create blog in 2 mins, and earn donations in crypto'}
                    />
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