//@ts-nocheck
import { Center, Text, Box, Flex } from '@chakra-ui/react';
import DefaultText from './DefaultText';
import Buttons from './Buttons';

const Information = () => {
  return (
    <>
      <Box bg={'var(--flats)'} p={'2em'}>
        <DefaultText fontSize='1.1em' fontWeight='bold'>
          {' '}
          About Me (NeoFetch){' '}
        </DefaultText>

        <Box gap={'2'}>
          <Box textAlign={['center', 'left']}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis repellendus excepturi odio libero eum ad alias at
              itaque, velit reiciendis qui recusandae quasi illum, quidem beatae
              architecto vero culpa dolore.
            </Text>
          </Box>

          <Flex my={'2em'} gap={'4em'} flexDir={['column', 'row']}>
            <Box textAlign={'center'} px={['', '3em']}>
              <Center>
                {' '}
                <Box bg={'var(--flats)'} p={'2em'}>
                  <DefaultText fontSize='1.1em' fontWeight='bold'>
                    {' '}
                    About Me (NeoFetch){' '}
                  </DefaultText>

                  <Box gap={'2'}>
                    <Box textAlign={['center', 'left']}>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis repellendus excepturi odio libero eum
                        ad alias at itaque, velit reiciendis qui recusandae
                        quasi illum, quidem beatae architecto vero culpa dolore.
                      </Text>
                    </Box>

                    <Flex my={'2em'} gap={'4em'} flexDir={['column', 'row']}>
                      <Box textAlign={'center'} px={['', '3em']}>
                        <Center>
                          <Text
                            fontSize={'2.2em'}
                            bg={'var(--glass)'}
                            w={'fit-content'}
                            mx={'center'}
                            px={'0.2em'}
                            borderRadius={'0.2em'}
                          >
                            🎯
                          </Text>
                        </Center>
                        <Text my={'1em'}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quae quas quidem dolorem nam voluptas numquam
                          ipsa expedita repudiandae ex sequi ducimus voluptatem,
                          nisi doloribus quibusdam molestias voluptatum eos
                          ratione? Quo.
                        </Text>
                      </Box>

                      <Box textAlign={'center'} px={['', '3em']}>
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
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quae quas quidem dolorem nam voluptas numquam
                          ipsa expedita repudiandae ex sequi ducimus voluptatem,
                          nisi doloribus quibusdam molestias voluptatum eos
                          ratione? Quo.
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
                <Text
                  fontSize={'2.2em'}
                  bg={'var(--glass)'}
                  w={'fit-content'}
                  mx={'center'}
                  px={'0.2em'}
                  borderRadius={'0.2em'}
                >
                  🎯
                </Text>
              </Center>
              <Text my={'1em'}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                quas quidem dolorem nam voluptas numquam ipsa expedita
                repudiandae ex sequi ducimus voluptatem, nisi doloribus
                quibusdam molestias voluptatum eos ratione? Quo.
              </Text>
            </Box>

            <Box textAlign={'center'} px={['', '3em']}>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                quas quidem dolorem nam voluptas numquam ipsa expedita
                repudiandae ex sequi ducimus voluptatem, nisi doloribus
                quibusdam molestias voluptatum eos ratione? Quo.
              </Text>
            </Box>
          </Flex>

          <Center>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/file/d/1jenKDjnTK6By8cbsiocCoMnnRFdjTbUw/view?usp=share_link'
            >
              <Buttons color='black' bg='green.300'>
                View Resume
              </Buttons>
            </a>
          </Center>
        </Box>
      </Box>{' '}
      <Box bg={'var(--flats)'} p={'2em'}>
        {/* @ts-ignore */}
        <DefaultText fontSize='1.1em' fontWeight='bold'>
          {' '}
          About Me (NeoFetch){' '}
        </DefaultText>

        <Box gap={'2'}>
          <Box textAlign={['center', 'left']}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis repellendus excepturi odio libero eum ad alias at
              itaque, velit reiciendis qui recusandae quasi illum, quidem beatae
              architecto vero culpa dolore.
            </Text>
          </Box>

          <Flex my={'2em'} gap={'4em'} flexDir={['column', 'row']}>
            <Box textAlign={'center'} px={['', '3em']}>
              <Center>
                <Text
                  fontSize={'2.2em'}
                  bg={'var(--glass)'}
                  w={'fit-content'}
                  mx={'center'}
                  px={'0.2em'}
                  borderRadius={'0.2em'}
                >
                  🎯
                </Text>
              </Center>
              <Text my={'1em'}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                quas quidem dolorem nam voluptas numquam ipsa expedita
                repudiandae ex sequi ducimus voluptatem, nisi doloribus
                quibusdam molestias voluptatum eos ratione? Quo.
              </Text>
            </Box>

            <Box textAlign={'center'} px={['', '3em']}>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                quas quidem dolorem nam voluptas numquam ipsa expedita
                repudiandae ex sequi ducimus voluptatem, nisi doloribus
                quibusdam molestias voluptatum eos ratione? Quo.
              </Text>
            </Box>
          </Flex>

          <Center>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/file/d/1jenKDjnTK6By8cbsiocCoMnnRFdjTbUw/view?usp=share_link'
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
