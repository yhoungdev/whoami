import { Box , Text , Center , Image  } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import {HiExternalLink } from 'react-icons/hi';
interface ItemModels {
    name ?: string ,
    image ?: string, 
    description ?: string
}

const ProjectBox =({name , image , description }: ItemModels )=> {
    return (
        <>


            <Box w={['100%','30%']} maxH={'60vh'}  bg={'var(--glass)'} position={'relative'}>

                    <Box py={'3em'} px={'1em'} >
                        <Center>
                         <Image src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1662747247/QUICKK10_1_arplnz.svg'}/>
                        </Center>
                    </Box>

                    <Box bg={'var(--flats)'}
                       right={0} left={0} bottom={0} py={'2em'} px={'1em'}>
                        <Text fontWeight={'bold'} fontSize={'1.5em'}>{name}</Text>

                        <Text> {description} </Text>

                        <Box my={'1em'} display={'flex'} gap={'1em'}>


                            <FaGithub fontSize={'1.4em'}/>

                            <Box display={'flex'} bg={'blackAlpha.200'} 
                                cursor={'pointer'}>
                                <HiExternalLink fontSize={'1.4em'}/> Live Preview
                            </Box>


                            
                        </Box>
                   
                    </Box>
                </Box>
        
        </>
    )
}

export default ProjectBox;