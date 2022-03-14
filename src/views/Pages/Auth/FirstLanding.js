import {
  Flex,
  Grid,
  Heading,
  Image,
  Img,
  Text,
  Link,
  SimpleGrid,
  Box,
  Spacer,
  Button,
  GridItem,
  FormLabel,
  Container,
  Center,
  useToast,
} from "@chakra-ui/react";
import { CustomButton } from "components/shared/CustomButton";
import { useHistory } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../../assets/img/kano-log.png";
import profile from "../../../assets/img/profile1.png";
import FlutterFile from "./flutter/FlutterFile";
import Card from "components/Card/Card";
import { ERROR_TOAST, SUCCESS_TOAST } from "variables/toasts";
import { CustomInput } from "components/shared/CustomInput";
import { getStaffList } from "redux/actions/staff";
import Userdetails from "./UserDetails";
function FirstLanding() {
  const [form, setForm] = useState({
    registration_no: "",
    phone_no: "",
  });
  const toast = useToast();
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (form.registration_no === "" || form.phone_no === "") {
      toast({ title: "Invalid", ...ERROR_TOAST });
    } else {
      getStaffList(
        { ...form, query_type: "user-details" },
        (data) => {
          setResults(data);
          toast({ title: "success", ...SUCCESS_TOAST });
          setOpen(true);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Img
        src={Logo}
        style={{
          width: "100%",
          height: "100vh",
          opacity: 0.2,
          position: "absolute",
          alignItems: "center",
        }}
        alt="logo-img"
      />

      <Flex>
        <Box p="2" mt="5px">
          <Heading size="md"></Heading>
        </Box>
        <Spacer />
        <Box mt="3px">
          <Button
            onClick={() => history.push("/auth/new/registration")}
            bg="green.500"
            p="6"
            w="40"
            color="white"
            _hover={{
              bg: "green.800",
            }}
            mr="4"
          >
            New Registration
          </Button>

          <Button
            onClick={() => history.push("/auth/staff")}
            bg="green.500"
            color="white"
            p="6"
            w="40"
            _hover={{
              bg: "green.800",
            }}
            mr="4"
          >
            Staff Login
          </Button>

          <Button
            onClick={() => history.push("/auth/signin")}
            bg="green.500"
            color="white"
            p="6"
            w="40"
            _hover={{
              bg: "green.800",
            }}
          >
            Admin Login
          </Button>
        </Box>
      </Flex>

      {/* {JSON.stringify(results.)} */}
      <Container maxW="container.xl">
        <Grid
          // h="500px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          mt="50px"
        >
          <GridItem colSpan={3}>
            <Flex mt="160px" position="relative" justifyContent="center">
              <Heading>
                <Text fontSize="30" color="green.800" textAlign="center">
                  OFFICE OF THE HEAD OF CIVIL SERVICE
                </Text>
                <Text fontSize="25" color="green.800" textAlign="center">
                  KANO STATE
                </Text>
                <Text
                  fontSize="25"
                  color="green.800"
                  style={{ textAlign: "center" }}
                >
                  HUMAN RESOURCE & SERVICE IMPROVEMENT DIRECTORATE
                </Text>
                <Text
                  fontSize="20"
                  color="green.800"
                  style={{ textAlign: "center", marginBottom: "3em" }}
                >
                  PROMOTIONAL EXAMINATION
                </Text>
              </Heading>
            </Flex>
          </GridItem>

          <GridItem rowSpan={3} colSpan={2}>
            {open === false ? (
              <Card>
                <FormLabel>KANOSG</FormLabel>
                <CustomInput
                  type="text"
                  name="registration_no"
                  value={form.registration_no}
                  onChange={handleChange}
                />

                <FormLabel>Phone No</FormLabel>
                <CustomInput
                  type="text"
                  name="phone_no"
                  value={form.phone_no}
                  onChange={handleChange}
                />

                <CustomButton onClick={handleSubmit}>Submit</CustomButton>
              </Card>
            ) : (
              <Card h="650px">
                <Center>
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={profile}
                    alt="Dan Abramov"
                  />
                </Center>
                <SimpleGrid columns={2} spacing={10} mt="60px">
                  {results &&
                    results.map((item) => (
                      <>
                        <Text>
                          Full Name: {item.first_name} {item.second_name}{" "}
                          {item.last_name}{" "}
                        </Text>
                        <Text>Reg Number: {item.registration_no}</Text>
                        <Text>Phone No {item.phone_no}</Text>
                        {/* <Text>Email: {item.email}</Text> */}
                        <Text>Gender: {item.gender}</Text>
                        {/* <Text>Gender: {item.gender}</Text> */}
                      </>
                    ))}
                </SimpleGrid>
                <FlutterFile results={results} />
              </Card>
            )}
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default FirstLanding;
