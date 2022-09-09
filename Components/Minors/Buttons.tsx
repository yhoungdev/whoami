import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface ButtonModel {
    color ?: string,
    bg ?: string,
    children ?: string,
    _hover ?: string,
    handler ?: any, 
    border ?: any 
}
const Buttons =({color,bg,children, _hover ,border , handler}:ButtonModel) => {
    return (
        <>  

            <Button  my={'1em'} px={'2em'}  onClick={handler}
                py={'1.3em'} bg={bg} color={color} border={border} >
                {children}
            </Button>
        
        </>
    )
}

export default Buttons;