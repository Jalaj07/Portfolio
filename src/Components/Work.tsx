import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import { HiMenuAlt2, HiBookOpen, HiCode } from 'react-icons/hi';
import { HiTv, HiCube, HiLightBulb } from 'react-icons/hi2';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  const glassBg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );
  const glassBoxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
  const glassBackdropFilter = "blur(4px)";
  const glassBorder = "1px solid rgba(255, 255, 255, 0.18)";
  const hoverBgColor = useColorModeValue(
    'linear(to-r, #8A2387, #E94057, #F27121)',
    'linear(to-r, #4A00E0, #8E2DE2, #FF416C)'
  );
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const iconColor = useColorModeValue('red.500', 'red.300');

  return (
    <Box
      p={12}
      shadow={glassBoxShadow}
      borderRadius="lg"
      bg={glassBg}
      backdropFilter={glassBackdropFilter}
      border={glassBorder}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        '& .hover-gradient': {
          opacity: 1,
        },
        '& .content': {
          color: 'white',
        },
        '& svg': {
          color: 'white',
        },
      }}
      position="relative"
      overflow="hidden"
      height="300px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <VStack
        align="start"
        spacing={4}
        zIndex={1}
        position="relative"
        className="content"
      >
        <Icon as={icon} w={8} h={8} color={iconColor} transition="0.3s" />
        <Heading size="md" fontWeight="semibold">
          {title}
        </Heading>
        <Text transition="0.3s">
          {description}
        </Text>
      </VStack>
      <Box
        className="hover-gradient"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0}
        bgGradient={hoverBgColor}
        transition="opacity 0.3s"
      />
    </Box>
  );
};

const Work = () => {
  const features: FeatureProps[] = [
    {
      icon: HiCode,
      title: 'Frontend Development',
      description: 'Creating responsive and dynamic websites using modern frameworks and best practices.',
    },
    {
      icon: HiCube,
      title: 'Full Stack Development',
      description: "Building end-to-end web applications, from server-side logic to client-side interfaces.",
    },
    {
      icon: HiTv,
      title: 'App Development',
      description: "Developing custom applications to streamline business processes and enhance user experiences.",
    },
    {
      icon: HiMenuAlt2,
      title: 'Emailer Development',
      description: 'Crafting responsive and engaging email templates for effective marketing campaigns.',
    },
    {
      icon: HiLightBulb,
      title: 'Mobile App Development',
      description: 'Building native and cross-platform mobile applications for iOS and Android devices.',
    },
    {
      icon: HiBookOpen,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing interfaces to enhance user satisfaction and engagement.',
    },
  ];

  return (
    <Box id="work" minHeight="100vh" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} as="section" textAlign="left" mb={12} alignItems="flex-start">
          <Text color="blue.500" fontSize="md">WORK</Text>
          <Heading as="h2" size="2xl" mb={4}>What I Do</Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Work;