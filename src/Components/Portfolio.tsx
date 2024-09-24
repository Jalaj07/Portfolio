import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  likes: number;
  type: string;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  likes,
  type,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const glassBg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );
  const glassBoxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
  const glassBackdropFilter = "blur(4px)";
  const glassBorder = "1px solid rgba(255, 255, 255, 0.18)";

  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <Box
        bg={glassBg}
        boxShadow={glassBoxShadow}
        backdropFilter={glassBackdropFilter}
        border={glassBorder}
        borderRadius="lg"
        overflow="hidden"
        onClick={() => setIsOpen(true)}
        cursor="pointer"
        h="400px"
        display="flex"
        flexDirection="column"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box p={4} pb={0} overflow="hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt={title}
              objectFit="cover"
              h="200px"
              w="100%"
              borderRadius="md"
            />
          </motion.div>
        </Box>
        <Box p={6} pt={8} flex="1">
          <Flex justify="space-between" align="center" mb={0}>
            <Text fontSize="xs" color="red.500" fontWeight="bold">
              {type.toUpperCase()}
            </Text>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                aria-label="Like project"
                leftIcon={<Icon as={FaHeart} mt="-3" />}
                color={liked ? "red.500" : "gray.500"}
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
              >
                {" "}
                <Text fontSize="sm" color={liked ? "pink.500" : "gray.500"}>
                  {likes + (liked ? 1 : 0)}
                </Text>{" "}
              </Button>
            </motion.div>
          </Flex>
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={2}
            noOfLines={2}
            color={isHovered ? "red.500" : textColor}
            transition="color 0.3s ease"
          >
            {title}
          </Text>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={title} />
            <Text mt={4}>{description}</Text>
            {link && (
              <Button
                as="a"
                href={link}
                target="_blank"
                rightIcon={<ExternalLinkIcon />}
                mt={4}
              >
                View Project
              </Button>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const Portfolio = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  const projects: ProjectProps[] = [
    {
      title: "Game-Hub",
      description:
        "Welcome to the Game Hub! This is your one-stop destination for all things gaming. Here, you can find a collection of games, resources, and community features to enhance your gaming experience.",
      image: "https://picsum.photos/seed/nft/300/200",
      likes: 59,
      type: "Gallery",
    },
    {
      title: "Online Food Delivery Mobile App Design",
      description:
        "A sleek and user-friendly mobile app design for online food delivery services.",
      image: "https://picsum.photos/seed/food/300/200",
      likes: 41,
      type: "Video",
    },
    {
      title: "Travel App Design Creativity & Application",
      description:
        "An innovative travel app design that combines creativity with practical application.",
      image: "https://picsum.photos/seed/travel/300/200",
      likes: 23,
      type: "External Link",
      link: "https://example.com/travel-app",
    },
    {
      title: "E-commerce Website Redesign",
      description:
        "A complete overhaul of an e-commerce platform, focusing on user experience and conversion optimization.",
      image: "https://picsum.photos/seed/ecommerce/300/200",
      likes: 32,
      type: "Gallery",
    },
  ];

  return (
    <Box id="portfolio" width="100%">
      <Box bg={bgColor} minH="100vh" width="100%">
        <Box maxW="1200px" mx="auto" py={8} px={4}>
          <Text color="blue.500" fontSize="md" mb={10}>
            PORTFOLIO
          </Text>
          <Heading as="h1" size="2xl" mb={12} color={textColor}>
            My Portfolio
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8} minChildWidth="280px">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
