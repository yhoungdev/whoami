/* eslint-disable react/no-unescaped-entities */
//@ts-nocheck
import { Box, Text, Flex, Image, Center } from '@chakra-ui/react';
import Buttons from '../Minors/Buttons';
import DefaultText from '../Minors/DefaultText';

const Information = () => {
  return (
    <>
      <Box bg={'var(--flats)'} p={'2em'}>
        <Center>
          <DefaultText fontSize='1.1em' fontWeight='bold'>
            {' '}
            About Me (NeoFetch){' '}
          </DefaultText>
        </Center>

        <Box gap={'2'}>
          <Box textAlign={['center', 'left']}>
            <Text textAlign={'center'} display={'none'}>
              {' '}
              Hey Nate, how is life{' '}
            </Text>
          </Box>

          <Flex
            my={'2em'}
            gap={['4em', '2em']}
            flexDir={{ base: 'column', md: 'column', lg: 'row' }}
          >
            <Box textAlign={'center'} px={['', '2em']}>
              <Center>
                <Text
                  fontSize={'2.2em'}
                  bg={'var(--glass)'}
                  w={'fit-content'}
                  mx={'center'}
                  px={'0.2em'}
                  borderRadius={'0.2em'}
                >
                  &#x1F4BB;
                </Text>
              </Center>
              <Text my={'1em'}>
                I am always on my screen researching and surfing the internet,
                so I put security and privacy as a high priority, because
                security doesn't, exist in this world called the internet. That
                is why I preach the Gospel of Tor and Duck Duck Go.
              </Text>
            </Box>

            <Box textAlign={'center'} px={['', '2em']}>
              <Center>
                <Text
                  fontSize={'2.2em'}
                  bg={'var(--glass)'}
                  w={'fit-content'}
                  mx={'center'}
                  px={'0.2em'}
                  borderRadius={'0.2em'}
                >
                  &#128039;
                </Text>
              </Center>

              <Text my={'1em'}>
                I am Obsessed with Linux Operating System, Am a big fan of the
                Linux operating system over my years of experience in the Linux
                Ecosystem I have tested many awesome Linux distros such as.
                Ubuntu, Kali Linux, Parrot Security, Kubuntu, Tails, and even
                Rasbian ( Raspberry Pi ).
              </Text>
            </Box>

            <Box textAlign={'center'} px={['', '2em']}>
              <Center>
                <Text
                  fontSize={'2.2em'}
                  bg={'var(--glass)'}
                  w={'fit-content'}
                  mx={'center'}
                  px={'0.2em'}
                  borderRadius={'0.2em'}
                >
                  🛹
                </Text>
              </Center>

              <Text my={'1em'}>
                If I am not facing my big inches monitor, I go skating in the
                smooth feel of Nature, feeling the fresh air and nice
                environment with my Head phone on and then listen to cool music.
                If I am not skaiting i go for tours with my phone and taking
                cool potrait 📸 of the beautiful world, God has wonderfully
                made. 😊
              </Text>
            </Box>
          </Flex>

          <Center>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/file/d/1vcnbXRQIzjcm6fSXAgdU3db7rpiLt3S7/view?usp=sharing'
            >
              <Buttons color='black' bg='green.300'>
                View Resume
              </Buttons>
            </a>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default Information;
