import { Box, Center, Text, Image, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Buttons from '../Minors/Buttons';
import ProjectBox from '../Minors/ProjectBox';
import { FaReact, FaRust, FaNode, FaGit } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiPrisma, SiGnubash } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';
import { DiMongodb } from 'react-icons/di';

const Work = () => {
  const projects = [
    {
      name: 'Book Hive',
      description: 'An operating system for Bibliophiles',
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1684939754/bookhive/logo_xiwu2l.svg',
      link: 'https://www.bookhive.club/',
    },

    {
      name: 'LinkBolt',
      description:
        'Seamless Link Sharing Connecting Devices. Unify Your Links, Everywhere',
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1687289099/whoami/Screenshot_from_2023-06-20_20-17-24_hk9qb0.png',
      link: 'https://www.linkbolt.click/ ',
    },

    {
      name: 'Go-Geeper',
      description: 'Welcome to the future of Agriculture',
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1667532944/logo_eapsno.svg',
      link: 'https://indexpage.gogeeper.com/',
    },

    {
      name: 'Quickk',
      description:
        'A Platform to make you create blog in 2 mins, and earn donations in crypto',
      image:
        'https://res.cloudinary.com/dhkccnvyn/image/upload/v1662747247/QUICKK10_1_arplnz.svg',
      link: 'https://quickk.blog/',
    },

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
      <Box my={'2em'}>
        <Text
          my={'2em'}
          textAlign={'center'}
          fontWeight={'bold'}
          fontSize={'1.8em'}
        >
          Technologies i work with
        </Text>

        <Box
          display={'flex'}
          gap={'2em'}
          alignItems={'center'}
          justifyContent={'center'}
          flexWrap={'wrap'}
        >
          <FaReact size={'3em'} color={'#3089ff'} />
          <FaRust size={'3em'} color='#ec4919' />
          <FaNode size={'3em'} color='#01d11b' />
          <SiTypescript size={'3em'} color={'#3089ff'} />
          <TbBrandNextjs size={'3em'} />
          <SiExpress size={'3em'} />
          <SiPrisma size={'3em'} />
          <FcLinux size={'3em'} />
          <FaGit size={'3em'} color='#ec4919' />
          <DiMongodb size={'3em'} color='#01d11b' />
          <SiGnubash size={'3em'} />
        </Box>

        <Center>
          <Text my={'2em'} fontWeight={'bold'} fontSize={'1.8em'}>
            Some items i have worked on
          </Text>
        </Center>

        <Flex gap={'2em'} flexDir={['column', 'row']} flexWrap={'wrap'}>
          {projects.splice(0, 3).map((items) => {
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

        {/* display this on monile  */}
        <Box display={['block', 'none']}>
          <ProjectBox
            name={'Quickk Blog'}
            description={
              'A Platform to make you create blog in 2 mins, and earn donations in crypto'
            }
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
  );
};

export default Work;
