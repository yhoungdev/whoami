import { Box , Text } from "@chakra-ui/react";
import { Logo } from "../Minors/Logo";
import {FaBars} from 'react-icons/fa'
import Sidebar from "./Sidebar";
import { useState } from "react";


const Header = () => {


    let [ open , setOpen ] = useState(0)

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

                <Box onClick={handleSidebar} transition={'1s ease-in-out'}>
                    {open === 0 ? <FaBars/>  : <Text fontSize={'2em'}>&times;</Text>}
                </Box>
            </Box>

            <Sidebar width={open}/>
        
        </>
    )
}

export default Header ;