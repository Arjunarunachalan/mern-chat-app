import React from "react";
import { Container, Box, Text, Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
const HomePage = () => {
  return (
    <Container maxW="lg" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        bg={"white"}
        w="100%"
        p={3}
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="2xl" fontFamily="Work Sans" color="black">
          Talk-A-Tive
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Log in</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel >
          <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
