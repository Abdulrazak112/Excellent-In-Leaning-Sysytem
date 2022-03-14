import { Flex, Grid, Heading, Image, Img, Text, Link } from "@chakra-ui/react";
import { CustomButton } from "components/shared/CustomButton";
import { useHistory } from "react-router-dom";
import React from "react";
import Logo from "../../../assets/img/kano-log.png";
function LandingPage() {
  const history = useHistory();
  return (
    <Grid>
      <Flex position="relative" mb="15vh" mt="5vh">
        <Flex
          h={{ sm: "initial", md: "50vh", lg: "60vh" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="center"
          mb="3px"
          pt={{ sm: "0px", md: "0px" }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{ userSelect: "none" }}
            w={{ base: "100%", md: "50%", lg: "50%" }}
          >
            <Img boxSize="350px" src={Logo} alt="Kano State Logo" />
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="-20vh" position="relative" justifyContent="center">
        <Heading>
          <Text fontSize="23">KANO STATE OFFICE OF THE HEAD OF CEVIL</Text>
          <Text fontSize="20" style={{ textAlign: "center" }}>
            {" "}
            SERVICE MANPOWER DIRECTORY
          </Text>
          <Text
            fontSize="19"
            style={{ textAlign: "center", marginBottom: "3em" }}
          >
            EXAMINATION DEPARTMENT
          </Text>
        </Heading>
      </Flex>
      <Flex mt="-10vh" position="relative" justifyContent="center">
        <Flex mr="20px">
          {/* <Link to="/auth/staff"> */}
          <CustomButton onClick={() => history.push("/auth/staff")}>
            <Text>Staff Login</Text>
          </CustomButton>
          {/* </Link> */}
        </Flex>
        <Flex ml="10px">
          {/* <Link to="/auth/signin"> */}
          <CustomButton onClick={() => history.push("/auth/signin")}>
            <Text>Admin Login</Text>
          </CustomButton>
          {/* </Link> */}
        </Flex>
      </Flex>

      <Flex mt="-2vh" position="relative" justifyContent="center">
        <Flex mr="20px">
          <Text>
            <Link
              color="teal.500"
              onClick={() => history.push("/auth/new/registration")}
            >
              Create New Registration
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}

export default LandingPage;
