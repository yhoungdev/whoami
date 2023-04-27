import { Box, Text, Center, Image } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

interface ItemModels {
  name?: string;
  image?: string;
  github?: string;
  description?: string;
  link?: string;
  display?: boolean;
}

const ProjectBox = ({
  name,
  image,
  description,
  link,
  display,
  github,
}: ItemModels) => {
  return (
    <>
      <Box
        w={['100%', '100%', '30%']}
        bg={'var(--glass)'}
        position={'relative'}
      >
        <Box py={'3em'} px={'1em'}>
          <Box
            bgImage={image}
            h={'10vh'}
            bgSize={'contain'}
            mx={'auto'}
            w={'50%'}
            bgRepeat={'no-repeat'}
          ></Box>
        </Box>

        {/* <Center>
                             <Image src={image} w={'30%'} alt={'logo for project'}/>
                        </Center> */}

        <Box
          bg={'var(--flats)'}
          position={'relative'}
          right={0}
          left={0}
          bottom={0}
          py={'2em'}
          px={'1em'}
        >
          <Text my={'0.5em'} fontWeight={'bold'} fontSize={'1.5em'}>
            {name}
          </Text>

          <Text> {description} </Text>

          <Box my={'1em'} display={'flex'} gap={'1em'}>
            {/* @ts-ignopre */}
            {/* <Link href={github}>
                                <FaGithub fontSize={'1.4em'}/>
                            </Link> */}

            {/* <Box display={display ? 'none' : 'block'}>
                            <Box display={'flex'}
                                 bg={'blackAlpha.200'} 
                                cursor={'pointer'} gap={'0.5em'}>
                                   <FaGithub fontSize={'1.3em'}/> Code
                            </Box>
                            </Box> */}

            <a href={link}>
              <Box
                display={'flex'}
                borderRadius={'8px'}
                p={'0.7em 1em'}
                bg={'var(--glass)'}
                cursor={'pointer'}
              >
                <HiExternalLink fontSize={'1.4em'} /> Live Preview
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectBox;
