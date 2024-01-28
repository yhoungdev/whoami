import { Box, Text, Center, Image, Flex, Button } from '@chakra-ui/react';
import { Footer } from '../Components/Major/Footer';
import Header from '../Components/Major/Header';
import ProjectBox from '../Components/Minors/ProjectBox';
import ContainerLayout from '../Themes/Layouts/ContainerLayout';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'LinkBolt',
      description:
        'Seamless Link Sharing Connecting Devices. Unify Your Links, Everywhere',
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1687289099/whoami/Screenshot_from_2023-06-20_20-17-24_hk9qb0.png',
      link: 'https://www.linkbolt.click/ ',
    },
    {
      name: 'Book Hive',
      description:
        'Unleash your love for books on our open platform. Connect, explore, and engage with fellow book lovers. Join us today and be part of a vibrant literary community.',
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1684939754/bookhive/logo_xiwu2l.svg',
      link: 'https://bookhive-client.vercel.app',
    },

    {
      name: 'Go-Geeper',
      description: 'Welcome to the future of Agriculture',
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1667532944/logo_eapsno.svg',
      link: 'https://indexpage.gogeeper.com/',
    },

    {
      name: 'Horsemen NFT',
      description:
        'Horsemen Society is a community-focused project made up of 7000 unique digital items on the Ethereum blockchain.',
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1687289895/whoami/Screenshot_from_2023-06-20_20-37-51_bcjyo3.png',
      link: 'https://horsemen-nft.vercel.app/',
    },

    {
      name: 'Private Me',
      description: 'An Open Source community for Anonymity and whistle blowers',
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1677950350/metaOps/Frame_1_2_p2jqnu.svg',
      link: 'https://private-mee.netlify.app/ ',
    },

    // {
    //   name: 'Git Secure',
    //   description:
    //     'A Sectret Ops platform, which scan leaked credentials in your codebase',
    //   image:
    //     'https://res.cloudinary.com/dhkccnvyn/image/upload/v1677952740/metaOps/Group_237749_evqbkp.svg',
    //   link: ' ',
    // },

    {
      name: 'MetaOps Gaming Site ',
      description:
        'Join the competitive gamoing of MetaOps and put your gaming skill to test',
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1677728773/metaOps/Frame_42310_pgs5ga.png',
      link: 'https://metaopsgaming.com/https://metaopsgaming.com/ ',
    },

    {
      name: 'Quickk',
      description:
        'A Platform to make you create blog in 2 mins, and earn donations in crypto',
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1662747247/QUICKK10_1_arplnz.svg',
      link: 'https://quickk.blog/',
    },
    // {
    //     name:'SecuWallet',
    //     description: ` The key component that provides secure, diversied
    //      and user-friendly non-custodial wallet solution for everyone. `,
    //     image: 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1656241542/secuWallet/SecuWallet_Horizontal_Logo_-_White_jfkykd.png',
    //     links:[{
    //         github:'www.github.com/yhoungdev/private-me-'
    //     }]
    // },
    // {
    //     name:'Utifi',
    //     description: `Making Digital Service Better for Everyone, pay bills with ease`,
    //     image: '',
    //     links:[{
    //         github:'www.github.com/yhoungdev/private-me-'
    //     }]
    // },
    // {
    //     name:'SchMgT',
    //     description: ` A School Management Solution
    //     for school to keep records of thier Datas `,
    //     image: '',
    //     links:[{
    //         github:'www.github.com/yhoungdev/private-me-'
    //     }]
    // },

    // {
    //     name:'Freexit',
    //     description: ' A Logistic platform for easy shipments ',
    //     image: ''
    // },
    {
      name: 'Setroi',
      description: `Appears In Newspapers And Position In Google, An Informative platform`,
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1676146181/Portfolio/footer_svg.c02dfa2814883b11d4fb18de8f471247_jcbh6s.svg',
      links: [
        {
          github: 'www.github.com/yhoungdev/private-me-',
        },
      ],
    },
    {
      name: 'Anti Porno',
      description: `A simple and small chrome extension
            that blocks and redirects erotic words `,
      image: '',
      link: 'https://github.com/yhoungdev/anti-porno',
    },
  ];

  return (
    <>
      <ContainerLayout>
        <Header />

        <Box my={'3em'}>
          <Text
            my={'0.5em'}
            textAlign={'center'}
            fontFamily={'var(--outfit) !important'}
            fontSize={'2em'}
            fontWeight={'black'}
            color={'#7b7b7d'}
          >
            /Projects
          </Text>

          <Text textAlign={'center'}> List of Projects i have worked on </Text>
        </Box>

        <Box>
          <Flex
            gap={'2em'}
            flexDir={['column', 'column', 'row']}
            flexWrap={'wrap'}
          >
            {projects.map((items) => {
              return (
                <>
                  <ProjectBox
                    name={items.name}
                    description={items.description}
                    image={items?.image}
                    //@ts-ignore
                    link={items.link}
                  />
                </>
              );
            })}
          </Flex>
        </Box>

        <a href={'https://github.com/yhoungdev'}>
          <Box
            mx={'auto'}
            w={'fit-content'}
            my={'2em'}
            display={'flex'}
            borderRadius={'8px'}
            p={'0.7em 1em'}
            bg={'var(--glass)'}
            cursor={'pointer'}
            alignItems={'center'}
            gap={'1em'}
          >
            View More <FaGithub />
          </Box>
        </a>

        <Footer />
      </ContainerLayout>
    </>
  );
};

export default Projects;
