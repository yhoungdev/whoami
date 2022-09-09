import { Box , Text ,Center,  Image, Flex} from "@chakra-ui/react";
import Header from "../Components/Major/Header";
import ProjectBox from "../Components/Minors/ProjectBox";
import ContainerLayout from "../Themes/Layouts/ContainerLayout";

const Projects =()=> {

    const projects = [{
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    },
    {
        name:'',
        description: '',
        image: ''
    }]

    return (
        <>
        
            <ContainerLayout>
             <Header/>

             <Box my={'3em'}>
                <Text my={'0.5em'} textAlign={'center'} 
                    fontFamily={'var(--outfit) !important'}
                    fontSize={'2em'} fontWeight={'black'} color={'#7b7b7d'}>/Projects</Text>

                    <Text textAlign={'center'} > List of Projects i have worked on </Text>
             </Box>


            <Box>


                <Flex gap={'2em'} flexDir={['column','row']} flexWrap={'wrap'}>
                {
                    projects.map( items => {
                        return (
                            <>

                                <ProjectBox/>
                            
                            </>
                        )
                    })
                }
                </Flex>


            </Box>

            </ContainerLayout>
        
        </>
    )
}


export default Projects;