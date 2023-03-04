import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";

//@ts-ignore
const Sidebar =({width}) => {

    const nav = [{
        name:'Home',
        route: '/'

    },{
        name: 'Projects',
        route: '/Projects'
    },
    {
        name: 'Blogs',
        route: '/blogs'
    }
    ]

    return (
        <>
            <Box bg={'#000000db'} color={"#fff"} 
                position={"fixed"} left={0}
                top={0} transition={'1s ease-in-out'}
                bottom={0} w={width} zIndex={'1'} >
                    

                <Box display={'flex'} justifyContent={'center'} 
                h={'100vh'} alignItems={'center'} overflow={'hidden'} >
                    <UnorderedList listStyleType={'none'} >
                        {
                            nav.map ( items => (
                                <>
                                   <Link href={items.route}>
                                     <ListItem  my={'5em'}>{items.name}</ListItem> 
                                   </Link> 
                                </>
                            ))
                        }
                    </UnorderedList>
                </Box>


            </Box>
        </>
    )
}

export default Sidebar ;