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
            transition={'ease-in-out 1s'}
            overflow={'hidden'} w={open} color={'var(--gray)'}>

                <Flex justifyContent={'center'} h={'100vh'} textAlign={'center'} alignItems={'center'}>
                    <Box>
                        <Text fontWeight={'bold'}>Obiabo@127.0.0.1</Text>
                        <DefaultText fontWeight="bold" fontSize="30px"> Sudo Who Am I ?</DefaultText>
                        <Text>{'> '}Root</Text>
                            <Box onClick={handleMod}>
                                <Buttons
                                bg={'var(--default-text)'} 
                                color={'#000'}>chmod +x *</Buttons>
                            </Box>
                    </Box>
                </Flex>

            </Box>
        
        </>
    )
}

export default LoaderScreen;