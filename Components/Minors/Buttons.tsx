import { Button } from "@chakra-ui/react";

interface ButtonModel {
    color ?: string,
    bg ?: string,
    children ?: string,
    _hover ?: string,
    onClick ?: fn(a: string) => void
}
const Buttons =({color,bg,children, _hover , onClick}:ButtonModel) => {
    return (
        <>  

            <Button  my={'1em'} px={'2em'}  onClick={onClick}
            py={'1.3em'} bg={bg} color={color}>
                {children}
            </Button>
        
        </>
    )
}

export default Buttons;