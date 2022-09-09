import { Box , Text , Center , Image  } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

interface ItemModels {
    name ?: string ,
    image ?: string, 
    description ?: string
}

const ProjectBox =()=> {
    return (
        <>


            <Box w={['100%','30%']} maxH={'60vh'}  bg={'var(--glass)'} position={'relative'}>

                    <Box py={'3em'} px={'1em'} >
                        <Center>
                         <Image src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1658534732/quick/dashboard_zosbzh.svg'}/>
                        </Center>
                    </Box>

                    <Box bg={'var(--flats)'}
                       right={0} left={0} bottom={0} py={'2em'} px={'1em'}>
                        <Text fontWeight={'bold'} fontSize={'1.5em'}>Quickk</Text>

                        <Text>A 3 in 1 App for writers, Create blog in 2 mins </Text>

                        <Box display={'none'}>
                            <FaGithub/>
                            
                        </Box>
                   
                    </Box>
                </Box>
        
        </>
    )
}

export default ProjectBox;