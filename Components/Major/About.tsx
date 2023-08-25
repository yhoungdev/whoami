import { Box, Text, Flex, Image, Center } from '@chakra-ui/react';
import Buttons from '../Minors/Buttons';
import DefaultText from '../Minors/DefaultText';

const About = () => {
  const data = [
    {
      content: `🚀 Problem-solving enthusiast and software engineer with a twist – I turn challenges into style statements. From elegant solutions in code to coaxing Raspberry Pi wonders, I'm your go-to person.`,
    },
    {
      content: `🛹 Skateboarding, gym vibes, and AI experimentation (Langchain, Gorilla, Huggy Face - you name it!) keep life exciting.`,
    },
    {
      content: `📚 When I'm not crafting code, I'm indulging my inner physicist, diving into books and cosmic mysteries.`,
    },
    {
      content: `🏝️ Daydreaming of retiring at 45 to Breezefall Island in the Pacific – a cozy beach house surrounded by nature's finest.`,
    },
  ];
  return (
    <>
      <Box bg={'var(--flats)'} p={'2em'}>
        <DefaultText
          fontSize='1.1em'
          fontWeight='bold'
          textAlign={['center', 'left']}
        >
          About Me (NeoFetch)
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

              <Box w={['100%', '100%', '80%']}>
                <Text my={'1em'}>{'> '} sudo whoami</Text>
                <Flex flexDir={'column'} gap={'2em'}>
                  {data.map((item, index) => (
                    <Text lineHeight={'1.7em'} key={index}>
                      {item.content}
                    </Text>
                  ))}
                </Flex>
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
                As an active contributor to the GitHub maintainers community, I
                contribute to impactful Open Source projects. Notable
                engagements include Open Sauce and Astro.build, reflecting
                dedication to enhancing the tech landscape.
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
                With a strong adherence to best practices, I seamlessly merge
                functionality with a keen sense of UI/UX design. Additionally, I
                excel in creating fast APIs that optimize user experiences.
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
