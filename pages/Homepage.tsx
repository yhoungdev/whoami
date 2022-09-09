import { Box, Button, Container } from "@chakra-ui/react";
import About from "../Components/Major/About";
import Header from "../Components/Major/Header";
import Hero from "../Components/Major/Hero";
import Work from "../Components/Major/Works";
import ContainerLayout from "../Themes/Layouts/ContainerLayout";
import LoaderScreen from "./boot";

const Homepage= () => {
    return (
        <>  

          {/* <LoaderScreen/> */}

          <Box>
              <ContainerLayout>
                    
                <Header/>

                <Hero/>

                <About/>

                <Work/>


              </ContainerLayout>
          </Box>
        
        </>
    )
}

export default Homepage;