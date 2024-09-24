import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  VStack,
  IconButton,
  Collapse,
  Link,
  Container,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  Icon,
  Switch,
  keyframes,
  IconProps,
} from "@chakra-ui/react";
import { Sun, Moon, Menu, X, Twitter } from "lucide-react";
import { BellIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowLongUp } from "react-icons/hi2";
import { motion } from "framer-motion";
import { XIcon } from "./Components/Hero";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const MotionBox = motion(Box);

const glow = keyframes`
  0% { filter: drop-shadow(0 0 2px #fff); }
  50% { filter: drop-shadow(0 0 5px #fff); }
  100% { filter: drop-shadow(0 0 2px #fff); }
`;

const shine = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const SunIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="5" fill="currentColor">
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <g fill="currentColor">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect
          key={i}
          x="11"
          y="1"
          width="2"
          height="3"
          transform={`rotate(${angle} 12 12)`}
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </g>
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 12 12"
      to="360 12 12"
      dur="10s"
      repeatCount="indefinite"
    />
  </Icon>
);

const MoonIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
    >
      <animate
        attributeName="opacity"
        values="0.7;1;0.7"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 12 12"
      to="-360 12 12"
      dur="20s"
      repeatCount="indefinite"
    />
  </Icon>
);

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(colorMode === "dark");

  const navItems = [
    { name: "HOME", section: "home" },
    { name: "WORK", section: "work" },
    { name: "PORTFOLIO", section: "portfolio" },
    { name: "SKILLS", section: "skills" },
    { name: "CONTACT", section: "contact" },
  ];

  const onChange = () => {
    setIsChecked(!isChecked);
    toggleColorMode();
  };

  return (
    <Box minHeight="100vh" bg={colorMode === "dark" ? "gray.800" : "gray.100"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg={colorMode === "dark" ? "gray.900" : "white"}
        color={colorMode === "dark" ? "white" : "black"}
        boxShadow="md"
        position="sticky"
        top={0}
        zIndex={7}
      >
        {/* Toggle button for mobile menu */}
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          icon={mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          aria-label="Toggle Navigation"
          variant="ghost"
        />

        {/* Desktop Menu */}
        <Flex
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          align="center"
          flexGrow={1}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.section}`}
              padding="0.5rem 1rem"
              _hover={{ textDecoration: "none", color: "pink.500" }}
            >
              {item.name}
            </Link>
          ))}
        </Flex>

        {/* Dark Mode Toggle */}
        <Button
          as="div"
          role="group"
          onClick={onChange}
          position="relative"
          width="60px"
          height="32px"
          borderRadius="full"
          bg={isChecked ? "rgba(30, 41, 59, 0.8)" : "rgba(186, 230, 253, 0.8)"}
          _hover={{ cursor: "pointer" }}
          transition="all 0.2s"
          padding={0}
          overflow="hidden"
        >
          <Box
            position="absolute"
            left={isChecked ? "calc(100% - 28px)" : "2px"}
            top="2px"
            width="28px"
            height="28px"
            borderRadius="full"
            bg="white"
            boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)"
            transition="left 0.2s"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              as={isChecked ? MoonIcon : SunIcon}
              color={isChecked ? "yellow.200" : "orange.400"}
              w={5}
              h={5}
              animation={`${glow} 2s infinite, ${shine} 2s infinite`}
            />
          </Box>
        </Button>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={mobileMenuOpen} animateOpacity>
        <MotionBox
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          display={{ md: "none" }}
          bg={colorMode === "dark" ? "gray.900" : "white"}
          shadow="md"
        >
          <VStack spacing={4} align="start" padding="1rem">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`#${item.section}`}
                padding="0.5rem 1rem"
                _hover={{ textDecoration: "none", color: "pink.500" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </VStack>
        </MotionBox>
      </Collapse>

      {/* Main content */}
      <VStack spacing={0}>
        <Hero
          name="Jalaj Varshney"
          titles={[
            "Frontend Developer",
            "UI/UX Enthusiast",
            "Software Developer",
          ]}
          description="Motivated software developer with hands-on experience in frontend development. Seeking opportunities to contribute to dynamic projects aiming to leverage my knowledge for organizational growth."
          imageUrl="/images/pngwing.com.png"
          socialLinks={{
            instagram: "https://www.instagram.com/_jalaj_varshney",
            twitter: "https://x.com/jalaj_varshney",
            linkedin: "https://www.linkedin.com/in/jalaj-varshney-9382b0158/",
            github: "https://github.com/Jalaj07",
          }}
        />
        <Work />
        <Portfolio />
        <Skills />
        <Contact />
      </VStack>

      <Footer />
    </Box>
  );
};

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const buttonShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      color={textColor}
      py={40} // Increased from 10 to 20
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          <Box>
            <Heading
              as="h2"
              size="xl"
              mb={4}
              color={useColorModeValue("gray.800", "gray.100")}
              fontWeight="bold"
            >
              Jalaj Varshney
            </Heading>
            <HStack spacing={4}>
              {[
                {
                  icon: FaGithub,
                  link: "https://github.com/Jalaj07",
                  gradient: "linear(to-r, #24292e, #4a4a4a)",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/jalaj-varshney-9382b0158/",
                  gradient: "linear(to-r, #0077B5, #00A0DC)",
                },
                {
                  icon: XIcon,
                  link: "https://x.com/jalaj_varshney",
                  gradient: "linear(to-r, #000000, #434343)",
                },
              ].map((social, index) => (
                <Button
                  key={index}
                  as="a"
                  href={social.link}
                  target="_blank"
                  bg={bgColor}
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
          </Box>
          <Box>
            <Heading
              as="h4"
              size="md"
              mb={4}
              color="red.500"
              fontWeight="normal"
            >
              Quick Links
            </Heading>
            <VStack align="start" spacing={2}>
              <Link href="#home">About</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#contact">Contact</Link>
            </VStack>
          </Box>
          <Box>
            <Heading
              as="h4"
              size="md"
              mb={4}
              color="red.500"
              fontWeight="normal"
            >
              Resources
            </Heading>
            <VStack align="start" spacing={2}>
              <Link
                href="https://drive.google.com/file/d/1KdciN-vGTtNkSlb6jsMl5LaiWT8KWcjw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
              </Link>
              <Link>Authentication</Link>
              <Link>Terms of Service</Link>
            </VStack>
          </Box>
          <Box>
            <Heading
              as="h4"
              size="md"
              mb={4}
              color="red.500"
              fontWeight="normal"
            >
              Developers
            </Heading>
            <VStack align="start" spacing={2}>
              <Link>Documentation</Link>
              <Link>Authentication</Link>
              <Link>API Reference</Link>
              <Link>Open Source</Link>
            </VStack>
          </Box>
        </SimpleGrid>
        <Text
          mt={10}
          textAlign="center"
          opacity={0.7}
          position="relative"
          bottom="0px"
          top="150px"
          left="0"
          right="0"
        >
          © 2024. All rights reserved by Jalaj Varshney
        </Text>
      </Container>
      {showScrollTop && (
        <IconButton
          aria-label="Scroll to top"
          icon={<HiOutlineArrowLongUp />}
          position="fixed"
          bottom="20px"
          left="20px"
          onClick={scrollToTop}
          color="red"
          bg="gray.150"
          _hover={{ bg: "gray.400" }}
          size="lg"
          borderRadius="full"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)" // Add drop shadow
          transition="all 0.2s" // Smooth transition for hover effect
          _active={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" }} // Slightly reduce shadow when clicked
        />
      )}
    </Box>
  );
};

export default App;
