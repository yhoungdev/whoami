import { Box , Text, Button,  useDisclosure } from "@chakra-ui/react";
import { Logo } from "../Minors/Logo";
import {FaBars} from 'react-icons/fa'
import Sidebar from "./Sidebar";
import { useState } from "react";
import ModalLayout from "../../Themes/Layouts/modalLayout";



const Header = () => {


    let [ open , setOpen ] = useState(0);
    const { isOpen , onOpen , onClose } = useDisclosure();
    const [ pubKey , setPubKey ] = useState('npub143zs0f3d2qurmdktxv9lwjej6wgfvqflsumer23jwa0dsdjqd26qypr9fz')

    //handle close 
    const handleSidebar =()=> {
        if( open === 0) { 
            //@ts-ignore
            setOpen('50%')
         } else {
            setOpen(0)
         }
    }

    return (
        <>

            <Box display={'flex'} py={'0.5em'} alignItems={'center'} justifyContent={'space-between'}>
                
                <Box>
                    <Logo/>
   
                </Box>

                <Box  
                 display={'flex'}
                 
                 alignItems={'center'}
                 gap={'1em'}>
                <Box 
                 borderRadius={'0.5em'}
                 bg={'var(--glass)'}
                 p={'0.5em'}
                 cursor={'pointer'}
                 onClick={onOpen}>
                   Nostr 🔑
                </Box>

                <Box onClick={handleSidebar} transition={'1s ease-in-out'}>
                    {open === 0 ? <FaBars/>  : <Text fontSize={'2em'}>&times;</Text>}
                </Box>
                </Box>
            </Box>

            <Sidebar width={open}/>
            <ModalLayout isOpen={isOpen} onClose={onClose}>
                <Box textAlign={'center'} py={'2em'}>
                    <Text fontWeight={'bold'}>My Nostr Publick Key </Text>
                    <Text my={'2em'}>
                        {pubKey}
                     </Text>

                     <Button bg={'var(--glass)'}
                      _hover={{'bg':'black'}}>  Copy PubKey </Button>

                </Box>
            </ModalLayout>
        
        </>
    )
}

export default Header ;