import { Button, Container } from "@chakra-ui/react";
import ContainerLayout from "../Themes/Layouts/ContainerLayout";
import LoaderScreen from "./boot";

const Homepage= () => {
    return (
        <>  

          <LoaderScreen/>

          <ContainerLayout>
                
          </ContainerLayout>
        
        </>
    )
}

export default Homepage;