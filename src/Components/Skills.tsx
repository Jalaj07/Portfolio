import {
  Box,
  Heading,
  Progress,
  Text,
  VStack,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Tag,
  Card,
  CardBody,
  Divider,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import image1 from "./Images/Big Data Certificate.png";

const MotionBox = motion(Box);

const frontendSkills = [
  { name: "React", level: 80 },
  { name: "TypeScript", level: 65 },
  { name: "CSS", level: 85 },
];

const backendSkills = [
  { name: "Node.js", level: 50 },
  { name: "Express.js", level: 45 },
  { name: "MongoDB", level: 40 },
];

const certificates = [
  "./Images/Big Data Certificate.png",
  "./Images/Coursera XXJTQQ3P43YA_page-0001.jpg",
  "./Images/Jalaj Varshney_page-0001.jpg",
  "./Images/JalajWDP_ecertificate_page-0001.jpg",
];

const CustomProgressBar = ({ value }: { value: number }) => {
  const [key, setKey] = useState(0);

  return (
    <Box
      w="100%"
      bg="gray.200"
      borderRadius="full"
      h="8px"
      overflow="hidden"
      border="2px solid"
      borderColor="gray.200"
    >
      <Box
        key={key}
        w={`${value}%`}
        h="100%"
        bgGradient="linear(to-r, white, red.500)"
        transition="width 1s ease-out"
        as={motion.div}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
      />
    </Box>
  );
};

const Skills = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const tabBgColor = useColorModeValue("white", "gray.700");
  const tabTextColor = useColorModeValue("gray.700", "gray.200");
  const selectedTabTextColor = "red.500";
  const hoverTabTextColor = "red.500";

  const glassBg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );
  const glassBoxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
  const glassBackdropFilter = "blur(4px)";
  const glassBorder = "1px solid rgba(255, 255, 255, 0.18)";

  const glassTileStyle = {
    bg: glassBg,
    boxShadow: glassBoxShadow,
    backdropFilter: glassBackdropFilter,
    border: glassBorder,
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [currentCertificate, setCurrentCertificate] = useState(0);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertificate((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MotionBox
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      width="100%"
      py={20}
      bg={bgColor}
    >
      <Box maxWidth="container.xl" margin="auto" px={4}>
        <Text color="blue.500" fontSize="md" mb={4} textAlign="center">
          3+ MONTHS OF EXPERIENCE
        </Text>
        <Heading as="h2" size="2xl" mb={8} textAlign="center">
          My Resume
        </Heading>
        <Tabs variant="unstyled" index={tabIndex} onChange={handleTabChange}>
          <TabList
            bg={tabBgColor}
            borderRadius="lg"
            p={0}
            mb={20}
            boxShadow="md"
          >
            {["Education", "Professional Skills", "Experience"].map(
              (tab, index) => (
                <Tab
                  key={tab} // Unique key based on tab name
                  _selected={{
                    color: selectedTabTextColor,
                    bgGradient: "linear(to-r, rgba(0, 0, 0, 0.05), white)",
                    _hover: {
                      bgGradient: "linear(to-r, rgba(0, 0, 0, 0.05), white)",
                    },
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  _hover={{
                    transform: "translateY(-2px)",
                    bgGradient: "linear(to-r, rgba(0, 0, 0, 0.05), white)",
                    boxShadow: "lg",
                    transition: "all 0.2s ease-in-out",
                    color: hoverTabTextColor,
                  }}
                  color={tabTextColor}
                  fontSize="xl"
                  py={4}
                  px={6}
                  borderRadius="md"
                  flex={1}
                  transition="all 0.2s"
                >
                  {tab}
                </Tab>
              )
            )}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text color="red.500" fontSize="md" mb={3}>
                2003 ~ 2024
              </Text>
              <Heading as="h1" size="2xl" mb={20}>
                Education
              </Heading>
              <Flex>
                <Box width="50%" position="relative">
                  <Box
                    position="absolute"
                    left="0"
                    top="0"
                    bottom="0"
                    width="5px"
                    bg="gray.200"
                    zIndex={1}
                  />
                  <VStack spacing={8} align="stretch">
                    {[
                      {
                        title: "B.Tech in CSE",
                        institution:
                          "Vellore Institute of Technology, Bhopal (2018-2022)",
                        grade: "7.52 / 10 GPA",
                        description:
                          "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
                      },
                      {
                        title: "High School Education",
                        institution: "St. John's School, Faridabad (2016-2018)",
                        grade: "67.4 / 100 %",
                        description:
                          "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
                      },
                      {
                        title: "Secondary School Education",
                        institution: "St. John's School, Faridabad (2014-2016)",
                        grade: "8.6 / 10 CGPA",
                        description:
                          "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
                      },
                    ].map((education) => (
                      <Box key={education.title} position="relative">
                        {" "}
                        {/* Unique key based on title */}
                        <Box
                          position="absolute"
                          left="-16px"
                          top="20"
                          width="32px"
                          height="30px"
                          borderRadius="full"
                          border="6px solid"
                          borderColor="gray.200"
                          zIndex={2}
                        >
                          <Box
                            position="absolute"
                            left="60%"
                            top="50%"
                            transform="translate(-50%, -50%)"
                            width="16px"
                            height="20px"
                            borderRadius="full"
                            bg="white"
                          />
                        </Box>
                        <Card
                          ml={6}
                          {...glassTileStyle}
                          transform="translateY(-2px)"
                        >
                          <Box role="group">
                            <CardBody
                              _hover={{
                                bgGradient: "linear(to-r, red.500, pink.500)",
                                color: "white",
                                boxShadow: "lg",
                                transition: "all 0.3s ease-in-out",
                              }}
                            >
                              <Text fontSize="2xl">{education.title}</Text>
                              <Flex
                                alignItems="center"
                                mt={1}
                                mb={2}
                                justifyContent="space-between"
                              >
                                <Text
                                  fontSize="s"
                                  color="gray.600"
                                  mt={-3}
                                  _groupHover={{
                                    color: "white",
                                    transition: "all 0.3s ease-in-out",
                                  }}
                                >
                                  {education.institution}
                                </Text>
                                <Tag
                                  size="md"
                                  colorScheme="red"
                                  boxShadow="lg"
                                  bg="white"
                                  color="red.500"
                                  mt={-8}
                                  _groupHover={{
                                    bg: "red.500",
                                    color: "white",
                                  }}
                                >
                                  {education.grade}
                                </Tag>
                              </Flex>
                              <Divider />
                              <Text fontSize="l" mt={-2}>
                                {education.description}
                              </Text>
                            </CardBody>
                          </Box>
                        </Card>
                      </Box>
                    ))}
                  </VStack>
                </Box>
                <Box width="50%" pl={6} display={{ base: "none", lg: "block" }}>
                  <Image
                    borderRadius="lg"
                    boxShadow="lg"
                    src={certificates[currentCertificate]}
                    alt="Certificate"
                    objectFit="contain"
                    w="full"
                    h="full"
                  />
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Text color="red.500" fontSize="md" mb={3}>
                PROFESSIONAL SKILLS
              </Text>
              <Heading as="h1" size="2xl" mb={10}>
                Professional Skills
              </Heading>
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                gap={4}
              >
                <Box flex="1" {...glassTileStyle} p={5}>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Frontend
                  </Text>
                  {frontendSkills.map((skill) => (
                    <Box key={skill.name} mb={4}>
                      <Flex justifyContent="space-between">
                        <Text fontSize="lg">{skill.name}</Text>
                        <Text fontSize="lg">{skill.level}%</Text>
                      </Flex>
                      <CustomProgressBar value={skill.level} />
                    </Box>
                  ))}
                </Box>
                <Box flex="1" {...glassTileStyle} p={5}>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Backend
                  </Text>
                  {backendSkills.map((skill) => (
                    <Box key={skill.name} mb={4}>
                      <Flex justifyContent="space-between">
                        <Text fontSize="lg">{skill.name}</Text>
                        <Text fontSize="lg">{skill.level}%</Text>
                      </Flex>
                      <CustomProgressBar value={skill.level} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <Text color="red.500" fontSize="md" mb={3}>
                WORK EXPERIENCE
              </Text>
              <Heading as="h1" size="2xl" mb={10}>
                Work Experience
              </Heading>
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                gap={4}
              >
                <Box flex="1" {...glassTileStyle} p={5}>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Job Experience
                  </Text>
                  {[
                    {
                      title: "Frontend Development",
                      institution: "ThirdEye Ai - (JBM Group)",
                      grade: "2024 - Present",
                      description: [
                        "Created React components and managed state using Redux.",
                        "Integrated third-party libraries and APIs for enhanced functionality.",
                        "Collaborated with designers to implement responsive and user-friendly interfaces.",
                      ],
                    },
                  ].map((experience) => (
                    <Box key={experience.title} mb={6}>
                      <Text fontSize="lg" fontWeight="bold">
                        {experience.title}
                      </Text>
                      <Text fontSize="md" color="gray.600">
                        {experience.institution} - {experience.grade}
                      </Text>
                      <Box mt={2}>
                        {experience.description.map((desc, index) => (
                          <Text key={index} fontSize="md">
                            • {desc}
                          </Text>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </MotionBox>
  );
};

export default Skills;
