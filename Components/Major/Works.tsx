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
      contributor: false,
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694504562/whoami/bookhiveclient_m8ubxo.png',
      link: 'https://bookhive-client.vercel.app',
    },

    {
      name: 'Gitsecure',
      contributor: false,
      description:
        'Securely monitor and manage secrets with Gitsecure. Detect and manage leaked credentials in your codebase seamlessly.',
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694509270/whoami/317shots_so_mu7jzw.png',
      link: 'https://gitsecure.dev/',
    },
    {
      name: 'Nidful',
      description: 'Nidful is a platform designed to facilitate vulnerability disclosure and bug bounty programs within the Nigerian and African market.',
      contributor: false,
      image:
        '/assets/images/nidfulImage.png',
      link: 'https://www.nidful.com/',
    },
    {
      name: 'LinkBolt',
      description:
        'Seamless Link Sharing Connecting Devices. Unify Your Links, Everywhere',
      contributor: false,
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694508102/whoami/854shots_so_bzt6ky.png',
      link: 'https://www.linkbolt.click/ ',
    },

    {
      name: 'Quickpay NG',
      description: 'Welcome to the future of Agriculture',
      contributor: false,
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694508696/whoami/252shots_so_xso7jf.png',
      link: 'https://quickpayng.com/',
    },

    {
      name: 'Nostr View',
      description: `The app store for applications built ontop the Nostr protocol`,
      contributor: false,
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694511401/whoami/Screenshot_from_2023-09-12_10-36-26_ptfsvo.png',
      links: 'https://github.com/yhoungdev/nostr-view',
    },
    {
      name: 'Opensauced Hot',
      description: `Find Open-Source Repositories
      to contribute today `,
      contributor: true,
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694511930/whoami/864shots_so_bxhn7p.png',
      link: 'https://github.com/open-sauced/hot',
    },
    {
      name: 'Astro Doc',
      description: `Astro builds fast content sites, powerful web applications, dynamic server APIs, and everything in-between.`,
      contributor: true,
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694512134/whoami/Screenshot_from_2023-09-12_10-48-25_nconf1.png',
      link: 'https://github.com/withastro/docs',
    },
    {
      name: 'UploadFly',
      description: `React upload widget for Simple and open-source cloud infrastructure that makes it easy for developers to upload files.`,
      contributor: true,
      image:
        'https://res.cloudinary.com/dhdqt4xwu/image/upload/v1694512718/whoami/Screenshot_from_2023-09-12_10-58-13_f6qluk.png',
      link: 'https://github.com/uploadfly/react-widget',
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
          {projects?.map((items) => {
            return (
              <>
                <ProjectBox
                  name={items.name}
                  description={items.description}
                  image={items?.image}
                  contributor={items?.contributor}
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
          <Link href={'https://github.com/yhoungdev'}>
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
