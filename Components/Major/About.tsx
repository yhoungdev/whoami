import { Box, Text, Flex, Image, Center } from '@chakra-ui/react';
import Buttons from '../Minors/Buttons';
import DefaultText from '../Minors/DefaultText';

const About = () => {
  return (
    <>
      <Box bg={'var(--flats)'} p={'2em'}>
        {/* @ts-ignore */}
        <DefaultText
          fontSize='1.1em'
          fontWeight='bold'
          textAlign={['center', 'left']}
        >
          {' '}
          About Me (NeoFetch){' '}
        </DefaultText>

        <Box gap={'2'}>
          <Box textAlign={['center', 'left']} px={['', '2em']}>
            <Flex
              gap={'3em'}
              my={'2em'}
              flexDir={['column', 'row']}
              alignItems={'center'}
            >
              <Image
                display={'none'}
                boxSize='200px'
                src='https://res.cloudinary.com/dhkccnvyn/image/upload/v1662745429/1662421356129_cdkaxo.webp'
                alt='Dan Abramov'
              />

              <Box>
                <Text my={'1em'}>{'> '} sudo whoami</Text>
                <Text lineHeight={'1.7em'}>
                  As a software engineer and researcher, I am driven by the
                  desire to make a positive impact on the world through
                  technology. With extensive experience in the fields of
                  Fintech, Agro Tech, and Web3, I bring innovative ideas to life
                  by crafting user-friendly and scalable applications. I am
                  constantly pushing the boundaries of what is possible, and I
                  am committed to delivering solutions that have a meaningful
                  impact on the people and communities they serve. From my
                  workspace, I am dedicated to changing the world, one line of
                  code at a time
                </Text>
              </Box>
            </Flex>
          </Box>

          <Flex
            my={['5em', '6em']}
            gap={'4em'}
            flexDir={['column', 'column', 'row']}
          >
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
              <Text fontWeight={'bold'} my={'0.5em'}>
                Open Source{' '}
              </Text>
              <Text my={'1em'}>
                As an active member of the Github maintainers community, I
                contribute and source Open Source projects. I have contributed
                to repositories such as Open Sauce and Astro.build, among
                others. Through my dedication and expertise, I aim to give back
                to the tech ecosystem.
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
                  🎨{' '}
                </Text>
              </Center>
              <Text my={'1em'} fontWeight={'bold'}>
                {' '}
                Sense of UI/UX Design{' '}
              </Text>

              <Text my={'1em'}>
                As a frontend developer, I have a good sense of UI/UX design I
                design awesome Interfaces, low and high-fidelity mockups, and
                over the past years, I have used tools such as Figma, Whimsical,
                and Mockup Plus.
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

export default About;
