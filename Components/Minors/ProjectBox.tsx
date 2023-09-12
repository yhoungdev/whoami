import { Box, Text, Center, Image, Badge } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

interface ItemModels {
  name?: string;
  image?: string;
  github?: string;
  description?: string;
  link?: string;
  display?: boolean;
  contributor?: boolean;
}

const ProjectBox = ({
  name,
  image,
  description,
  link,
  contributor,
}: ItemModels) => {
  return (
    <Box w={['100%', '100%', '30%']} bg={'var(--flats)'} position={'relative'}>
      <Box
        pt={'3em'}
        px={'1em'}
        bg={''}
        h={'200px'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundImage={image}
      ></Box>

      <Box position={'relative'} right={0} left={0} bottom={0} px={'1em'}>
        <Text my={'0.5em'} fontWeight={'bold'} fontSize={'1.5em'}>
          {name}
        </Text>

        <Text> {description} </Text>

        <Box
          my={'1em'}
          display={'flex'}
          gap={'1em'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          {contributor && (
            <Box
              bg={'green'}
              borderRadius={'10px'}
              h={'fit-content'}
              px={'10px'}
            >
              Contributor
            </Box>
          )}
          <a href={link}>
            <Box
              display={'flex'}
              borderRadius={'8px'}
              p={'0.5em 1em'}
              bg={'var(--glass)'}
              cursor={'pointer'}
              gap={'.4em'}
            >
              <HiExternalLink fontSize={'1.4em'} /> Preview
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectBox;
