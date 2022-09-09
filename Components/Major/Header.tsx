import { Box } from "@chakra-ui/react";
import { Logo } from "../Minors/Logo";
import {FaBars} from 'react-icons/fa'
const Header = () => {
    return (
        <>

            <Box display={'flex'} py={'0.5em'} alignItems={'center'} justifyContent={'space-between'}>
                
                <Box>
                    <Logo/>
   
                </Box>

                <Box>
                    <FaBars/> 
                </Box>
            </Box>
        
        </>
    )
}

export default Header ;