import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <Box p={'2em'} my={'3em'}>
        <Box display={'flex'} gap={['1em', '8em']} flexDir={['column', 'row']}>
          <UnorderedList mx={0} listStyleType={'none'}>
            <ListItem>
              <a href='https://web.telegram.org/k/#@Obiabo'>Telegram</a>
            </ListItem>
            <ListItem>
              <a href='mailto:sudowhoami@duck.com'>sudowhoami@duck.com</a>
            </ListItem>
          </UnorderedList>

          {/* <UnorderedList mx={0} listStyleType={'none'}>
            <ListItem>/Blogs</ListItem>

            <Link href={'/Projects'}>
              <ListItem>/Works </ListItem>
            </Link>
          </UnorderedList> */}
        </Box>

        <Box my={'3em'} display={'flex'} justifyContent={['space-between']}>
          <Box>sudo whoami &copy; 2023</Box>

          <Box display={'inline-flex'} gap={'2em'}>
            <a
              href='https://github.com/yhoungdev'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/obiabo-emmanuel-5a66371aa/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>

            <a
              href={'https://twitter.com/obiabo_immanuel'}
              rel='noreferrer'
              target='_blank'
            >
              <FaTwitter />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};
