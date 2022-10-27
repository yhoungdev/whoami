import { Box , Text , Center , Image  } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import {HiExternalLink } from 'react-icons/hi';
import {BsInfoCircle} from 'react-icons/bs';
import Link from "next/link";
interface ItemModels {
    name ?: string ,
    image ?: string, 
    github ?: string, 
    description ?: string
}

const ProjectBox =({name , image , description , github}: ItemModels )=> {
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


                            <Link href={github}>
                                <FaGithub fontSize={'1.4em'}/>
                            </Link>

                    

                            <Box display={'flex'} bg={'blackAlpha.200'} 
                                cursor={'pointer'} gap={'0.5em'}>
                                   <BsInfoCircle fontSize={'1.3em'}/> Info
                            </Box>

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