import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiGraphql, SiAmazon, SiKubernetes, SiTensorflow, SiAzuredevops, SiJira, SiSlack, SiMongodb, SiPostgresql, SiRedis, SiNginx, SiJenkins } from "react-icons/si";
import { keyframes } from "@emotion/react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Custom X.com icon
export const XIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const spin = keyframes`
  from { transform: rotateX(0) rotateY(0); }
  to { transform: rotateX(360deg) rotateY(360deg); }
`;

interface HeroProps {
  name: string;
  titles: string[];
  description: string;
  imageUrl: string;
  socialLinks: {
    instagram: string;
    twitter: string;
    linkedin: string;
    github: string;
  };
}

const Hero = ({
  name,
  titles,
  description,
  socialLinks,
}: HeroProps) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const buttonShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const skillIcons = [
    { component: FaReact, color: "#61DAFB" },
    { component: FaNodeJs, color: "#339933" },
    { component: FaPython, color: "#3776AB" },
    { component: FaDatabase, color: "#336791" },
    { component: FaDocker, color: "#2496ED" },
    { component: SiTypescript, color: "#3178C6" },
    { component: SiJavascript, color: "#F7DF1E" },
    { component: SiGraphql, color: "#E10098" },
    { component: SiAmazon, color: "#FF9900" },
    { component: FaGithub, color: "#181717" },
    { component: FaLinkedin, color: "#0A66C2" },
    { component: FaInstagram, color: "#E4405F" },
    { component: SiKubernetes, color: "#326CE5" },
    { component: SiTensorflow, color: "#FF6F00" },
    { component: SiAzuredevops, color: "#0078D7" },
    { component: SiJira, color: "#0052CC" },
    { component: SiSlack, color: "#4A154B" },
    { component: SiMongodb, color: "#47A248" },
    { component: SiPostgresql, color: "#336791" },
    { component: SiRedis, color: "#DC382D" },
    { component: SiNginx, color: "#009639" },
    { component: SiJenkins, color: "#D24939" },
  ];

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: (prev.x + 0.2) % 360,
        y: (prev.y + 0.1) % 360
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <MotionBox
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      width="100%"
      py={20}
      bg={bgColor}
      position="relative"
    >
      <Box
        maxWidth="container.xl"
        margin="auto"
        px={4}
        position="relative"
        zIndex={1}
      >
        <HStack
          alignItems="center"
          spacing={8}
          flexDirection={["column", "column", "row"]}
        >
          <VStack align="flex-start" spacing={4} flex={1}>
            <Heading as="h1" size="2xl">
              Hi, I'm{" "}
              <Text as="span" color="blue.500">
                {name}
              </Text>
              <br />
              <Box height="60px" overflow="hidden">
                <Text as="span" color="blue.500">
                  a
                </Text>{" "}
                <AnimatePresence mode="wait">
                  <MotionText
                    key={currentTitleIndex}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    display="inline-block"
                  >
                    {titles[currentTitleIndex]}
                  </MotionText>
                </AnimatePresence>
              </Box>
            </Heading>
            <Text>{description}</Text>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold" fontSize="lg" mt={4}>
                  FIND ME ON
                </Text>
                <HStack spacing={4}>
                  {[
                    {
                      icon: FaInstagram,
                      link: socialLinks.instagram,
                      gradient: "linear(to-r, #833ab4, #fd1d1d, #fcb045)",
                    },
                    {
                      icon: XIcon,
                      link: socialLinks.twitter,
                      gradient: "linear(to-r, #000000, #434343)",
                    },
                    {
                      icon: FaLinkedin,
                      link: socialLinks.linkedin,
                      gradient: "linear(to-r, #0077B5, #00A0DC)",
                    },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      as="a"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="lg"
                      width="50px"
                      height="50px"
                      borderRadius="md"
                      variant="outline"
                      boxShadow={buttonShadow}
                      _hover={{
                        bgGradient: social.gradient,
                        color: "white",
                      }}
                    >
                      <Icon as={social.icon} boxSize="20px" />
                    </Button>
                  ))}
                </HStack>
              </VStack>
              <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold" fontSize="lg" mt={4}>
                  CHECK MY SKILLS
                </Text>
                <Button
                  as="a"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  width="50px"
                  height="50px"
                  borderRadius="md"
                  variant="outline"
                  boxShadow={buttonShadow}
                  _hover={{
                    bgGradient: "linear(to-r, #24292e, #4a4a4a)",
                    color: "white",
                  }}
                >
                  <Icon as={FaGithub} boxSize="20px" />
                </Button>
              </VStack>
            </Flex>
          </VStack>
          <Box flex={1} height="400px" position="relative" style={{ perspective: "1000px" }}>
            <Box
              position="absolute"
              top="50%"
              left="55%"
              transform="translate(-50%, -50%)"
              width="300px"
              height="300px"
            >
              <Box
                position="relative"
                width="100%"
                height="100%"
                sx={{
                  transformStyle: "preserve-3d",
                  animation: `${spin} 20s linear infinite`
                }}
              >
                {skillIcons.map((Icon, index) => {
                  const phi = Math.acos(-1 + (2 * index) / skillIcons.length);
                  const theta = Math.sqrt(skillIcons.length * Math.PI) * phi;
                  const x = 150 * Math.cos(theta) * Math.sin(phi);
                  const y = 150 * Math.sin(theta) * Math.sin(phi);
                  const z = 150 * Math.cos(phi);

                  return (
                    <Box
                      key={index}
                      position="absolute"
                      left="50%"
                      top="50%"
                      transform={`translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`}
                      color={Icon.color}
                    >
                      <Icon.component size={30} />
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>
    </MotionBox>
  );
};

export default Hero;
