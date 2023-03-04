import { Box, Center, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Buttons from "../Minors/Buttons";
import ProjectBox from "../Minors/ProjectBox";


const Work =()=> {

    const projects = [

        {
            name:'Freexit',
            description: 'A logistic platforms, for sending percels easily anywhere',
            image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1677952850/metaOps/1642418779504_xfme0l.jpg',
           link: ' '
        },

        {
            name:'Private Me',
            description: 'An Open Source community for Anonymity and whistle blowers',
            image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1677950350/metaOps/Frame_1_2_p2jqnu.svg',
           link: ' https://private-mee.netlify.app/https://private-mee.netlify.app/ '
        },

        {
            name:'Git Secure',
            description: 'A Sectret Ops platform, which scan leaked credentials in your codebase',
            image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1677952740/metaOps/Group_237749_evqbkp.svg',
            link: ' '
        },

        {
            name:'MetaOps Gaming Site ',
            description: 'Join the competitive gamoing of MetaOps and put your gaming skill to test',
            image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1677728773/metaOps/Frame_42310_pgs5ga.png',
           link: 'https://metaopsgaming.com/https://metaopsgaming.com/ '
        },
        
        
        {
        name:'Quickk',
        description: 'A Platform to make you create blog in 2 mins, and earn donations in crypto',
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1662747247/QUICKK10_1_arplnz.svg',
        link:'https://quickk.blog/'
    },
    
    {
        name:'Setroi',
        description: `Appears In Newspapers And Position In Google, An Informative platform`,
        image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1676146181/Portfolio/footer_svg.c02dfa2814883b11d4fb18de8f471247_jcbh6s.svg',
        links:[{
            github:'www.github.com/yhoungdev/private-me-'
        }]
    },
    {
        name:'Anti Porno',
        description: `A simple and small chrome extension
            that blocks and redirects erotic words `,
        image: '',
        link: 'https://github.com/yhoungdev/anti-porno'
    }]

    return (
        <>
        
          <Box my={'2em'}>


                <Center>
                    <Text my={'2em'} fontWeight={'bold'} fontSize={'1.8em'}>Some items i have worked on</Text>
                </Center>

                <Flex gap={'2em'} flexDir={['column','row']} flexWrap={'wrap'}>
                {
                    projects.splice(0,3).map( items => {
                        return (
                            <>

                                <ProjectBox name={items.name}
                                     description={items.description}
                                     image={items?.image}
                                      //@ts-ignore
                                     link={items.link}/>
                                
                            </>
                        )
                    })
                }
                </Flex>


                {/* display this on monile  */}
                <Box display={['block', 'none']}>
                     <ProjectBox name={'Quickk Blog'}
                        description={'A Platform to make you create blog in 2 mins, and earn donations in crypto'}
                    />
                </Box>

                
                <Center>
                   <Link href={'/Projects'}>
                       <Text my={'3em'} cursor={'pointer'}>
                          View More
                       </Text>
                   </Link>
                </Center>


          </Box>
        
        </>
    )
}

export default Work;