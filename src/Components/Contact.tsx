import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Heading,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { XIcon } from "./Hero";

interface ContactInfo {
  name: string;
  title: string;
  description: string;
  phone: string;
  email: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
  };

  const contactInfo: ContactInfo = {
    name: "Jalaj Varshney",
    title: "Intern",
    description:
      "I am available for work. Connect with me via mail or call in to my number.",
    phone: "+91 93554370085",
    email: "jalajvarshney20@gmail.com",
  };

  const glassBg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );
  const glassBoxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
  const glassBackdropFilter = "blur(4px)";
  const glassBorder = "1px solid rgba(255, 255, 255, 0.18)";

  const buttonBg = useColorModeValue(
    "linear(to-r, gray.100, white)",
    "linear(to-r, gray.900, black)"
  );
  const buttonHoverBg = "linear(to-r, #ff00cc, #3333ff)"; // Colorful gradient
  const buttonColor = useColorModeValue("black", "white");
  const buttonHoverColor = "white"; // Text color on hover
  const buttonShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  const buttonHoverShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";

  const firstTileBg = useColorModeValue("gray.50", "gray.700");
  const secondTileBg = useColorModeValue("gray.100", "gray.800");
  const inputBg = useColorModeValue("white", "gray.700");

  return (
    <Box id="contact" py={20} minHeight="110vh">
      <Flex direction="column" maxW="2400px" mx="auto">
        {" "}
        {/* Main container */}
        <Text color="blue.500" fontSize="md" mb={10} textAlign="center">
          CONTACT
        </Text>
        <Heading as="h2" size="2xl" textAlign="center" mb={12}>
          Contact With Me
        </Heading>
        <Flex direction={["column", "column", "row"]} gap={8}>
          {" "}
          {/* Flex container for tiles */}
          {/* Contact Info Tile */}
          <Box
            flex={["1", "1", "5"]}
            bg={firstTileBg}
            boxShadow={glassBoxShadow}
            backdropFilter={glassBackdropFilter}
            borderRadius="lg"
            border={glassBorder}
            p={8}
            height="800px"
            display="flex"
            flexDirection="column"
          >
            <VStack align="stretch" spacing={0} flex={1}>
              <Box
                overflow="hidden"
                borderRadius="md"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image
                  src="https://fastly.picsum.photos/id/57/600/400.jpg?hmac=-WLCxphHRfgmgJEdfIk4zzXVUlpHypN9T99N8iO4BQc"
                  alt="Demo image"
                  width={600}
                  height={300}
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </Box>
              <Text fontSize="3xl" fontWeight="bold">
                {contactInfo.name}
              </Text>
              <Text fontSize="20" color="gray.400">
                {contactInfo.title}
              </Text>
              <Text fontSize="20">{contactInfo.description}</Text>
              <Text fontSize="20">Phone: {contactInfo.phone}</Text>
              <Text fontSize="20">Email: {contactInfo.email}</Text>
            </VStack>

            {/* FIND ME ON section */}
            <VStack align="flex-start" spacing={2} mt="auto">
              <Text fontWeight="bold" fontSize="lg">
                FIND ME ON
              </Text>
              <HStack spacing={4}>
                {[
                  {
                    icon: FaInstagram,
                    link: "https://www.instagram.com/your_instagram",
                    gradient: "linear(to-r, #833ab4, #fd1d1d, #fcb045)",
                  },
                  {
                    icon: XIcon,
                    link: "https://twitter.com/your_twitter",
                    gradient: "linear(to-r, #000000, #434343)",
                  },
                  {
                    icon: FaLinkedin,
                    link: "https://www.linkedin.com/in/your_linkedin",
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
          </Box>
          {/* Contact Form Tile */}
          <Box
            flex={["1", "1", "8"]}
            as="form"
            onSubmit={handleSubmit}
            bg={secondTileBg}
            boxShadow={glassBoxShadow}
            backdropFilter={glassBackdropFilter}
            borderRadius="lg"
            border={glassBorder}
            p={8}
            height="800px"
            display="flex"
            flexDirection="column"
          >
            <VStack align="stretch" spacing={6} flex={1}>
              <HStack spacing={4}>
                <FormControl flex={1}>
                  <FormLabel>YOUR NAME</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    bg={inputBg}
                  />
                </FormControl>
                <FormControl flex={1}>
                  <FormLabel>PHONE NUMBER</FormLabel>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    bg={inputBg}
                  />
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel>EMAIL</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  bg={inputBg}
                />
              </FormControl>
              <FormControl>
                <FormLabel>SUBJECT</FormLabel>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  bg={inputBg}
                />
              </FormControl>
              <FormControl flex={1} display="flex" flexDirection="column">
                <FormLabel>YOUR MESSAGE</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  resize="none"
                  flex={1}
                  minHeight="150px" // Set a minimum height
                  bg={inputBg}
                />
              </FormControl>
              <Box height={4} /> // This creates extra space
              <Button
                type="submit"
                size="lg"
                bgGradient={buttonBg}
                color={buttonColor}
                boxShadow={buttonShadow}
                _hover={{
                  bgGradient: buttonHoverBg,
                  color: buttonHoverColor,
                  boxShadow: buttonHoverShadow,
                }}
                transition="all 0.3s ease"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
