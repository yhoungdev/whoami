import { Box, Flex, Text } from "@chakra-ui/react";
import Buttons from "../Components/Minors/Buttons";
import DefaultText from "../Components/Minors/DefaultText";
import { useState } from "react";

const LoaderScreen = () => {

    const [ open , setOpen ] = useState('100%')

    //handle mode 
    const handleMod =()=> {
        setOpen('0%')
    }

    return (
        <>

            <Box bg={'black'} position={'fixed'}
            bottom={0} right={0} left={0} top={0} 
            transition={'ease-in-out 1s'} zIndex={999999}
            overflow={'hidden'} w={open} color={'var(--gray)'}>

                

                <Flex justifyContent={'center'}  h={'100vh'} textAlign={'center'} alignItems={'center'}>
                    <Box>
                        <Text fontSize={'4em'} className={'move'}>&#128039;</Text>
                        <Text fontWeight={'bold'}>sudo whoami</Text>
                       
                        <Text>{'> '}Root</Text>
                            <Box onClick={handleMod}>
                                <Buttons
                                bg={'var(--default-text)'} 
                                color={'#000'}>ssh obiabo@127.0.0.1</Buttons>
                            </Box>
                    </Box>
                </Flex>

            </Box>
        
        </>
    )
}

export default LoaderScreen;