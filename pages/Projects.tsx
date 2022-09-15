import { Box , Text ,Center,  Image, Flex} from "@chakra-ui/react";
import { Footer } from "../Components/Major/Footer";
import Header from "../Components/Major/Header";
import ProjectBox from "../Components/Minors/ProjectBox";
import ContainerLayout from "../Themes/Layouts/ContainerLayout";

const Projects =()=> {

    const projects = [{
        name:'Quickk',
        description: 'A Platform to make you create blog in 2 mins, and earn donations in crypto',
        image: ''
    },
    {
        name:'SecuWallet',
        description: ` The key component that provides secure, diversied
         and user-friendly non-custodial wallet solution for everyone. `,
        image: ''
    },
    {
        name:'Utifi',
        description: `Making Digital Service Better for Everyone, pay bills with ease`,
        image: ''
    },
    {
        name:'SchMgT',
        description: ` A School Management Solution 
        for school to keep records of thier Datas `,
        image: ''
    },
    {
        name:'Galactic Ops',
        description: ` A Simple NFT platform homepage  `,
        image: ''
    },
    {
        name:'Parrot',
        description: ` A Projects to showcase web3 
        projects and receive reviews from users  `,
        image: ''
    },
    // {
    //     name:'Freexit',
    //     description: ' A Logistic platform for easy shipments ',
    //     image: ''
    // },
    {
        name:'Setroi',
        description: `Appears In Newspapers And Position In Google, An Informative platform`,
        image: ''
    },
    {
        name:'Anti Porno',
        description: `A simple and small chrome extension
            that blocks and redirects erotic words `,
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

                                <ProjectBox name={items.name} description={items.description}/>
                            
                            </>
                        )
                    })
                }
                </Flex>


            </Box>
            
            <Box>
                
            </Box>

            <Footer/>

            </ContainerLayout>
        
        </>
    )
}


export default Projects;