import { Container } from "@chakra-ui/react";

const ContainerLayout = ({children}:any) => {

    return (
        <>

            <Container maxW={['100%', '80%']}>
                {children}
            </Container>
        
        </>
    )
}

export default ContainerLayout;