import { Box, Text, Flex, Image, Center } from '@chakra-ui/react';
import Buttons from '../Minors/Buttons';
import DefaultText from '../Minors/DefaultText';

const About = () => {
  const data = [
    {
      content: `🌱 I cherish the wonders of nature — from the serene beauty of plants and animals to the captivating vistas that unfold before me, each offering a precious gift that fills my heart with joy.`,
    },
    {
      content: `🛹 Skating, gym vibes`,
    },
    {
      content: `🐱 When I'm not crafting code, I am sleeping or playing with my 2 beautiful white Cats. ( Luna and Luno )`,
    },
    {
      content: `⚡ Fun fact: I savor the delights of Food 🍲🥘, relishing each flavorful bite, and find solace in the embrace of solitude.`,
    },
    {
      content: `🫣 We can talk about Linux , Open Source , Crypto and Cryptograhy.`,
    },
    {
      content: `🖼️ if you have have Nice Cats 🐈, Dogs 🐶 and bunny 🐇 pictures, you can share with me`
    }
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
                alt='Obiabo Emmanuel'
              />

              <Box w={['100%', '100%', '60%']}>
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
              href='https://drive.google.com/file/d/1D-Mom_0B8_Gms9s0vyE9Kx4oH1hLDtwr/view'
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
