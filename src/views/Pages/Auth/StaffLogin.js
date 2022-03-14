import React, { useReducer, useState } from "react";
// Chakra imports
import {
  Flex,
  FormControl,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Center,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import { CustomButton } from "components/shared/CustomButton";
import { CustomInput } from "components/shared/CustomInput";
import { staffLogin } from "redux/actions/auth";
import { WARNING_TOAST } from "variables/toasts";
import { SUCCESS_TOAST } from "variables/toasts";
import { ERROR_TOAST } from "variables/toasts";
// import {  } from "../../store/Store";
import { Context } from "../../../context/Store";
import { STAFF } from "redux/actions/actionType";
function StaffLogin(props) {
  const history = useHistory();
  const titleColor = useColorModeValue("green.500", "green.500");
  const textColor = useColorModeValue("gray.400", "white");

  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ reg_number: "", password: "" });
  const { dispatch } = React.useContext(Context);
  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    let errors = [];
    Object.keys(form).forEach((item) => {
      if (form[item] === "") {
        errors.push(item + " cannot be empty!");
      }
    });
    // if(form.password !== form)

    if (errors.length) {
      toast({ title: errors[0], ...WARNING_TOAST });
    } else {
      setIsLoading(true);
      staffLogin(
        form,
        (result) => {
          console.log(result);
          if (result.success) {
            setIsLoading(false);
            dispatch({ type: STAFF, payload: result.user });
            toast({ title: result.message, ...SUCCESS_TOAST });
            history.push("/auth/exams/update/information");
          } else {
            toast({ title: result.message, ...WARNING_TOAST });
          }
        },
        (err) => {
          setIsLoading(false);
          console.log(err);
          toast({ title: err, ...ERROR_TOAST });
        }
      );
    }
  };

  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="center"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "50%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            {/* <Button>Backz</Button> */}
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome To
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="30px"
            >
              CBPE
            </Text>
            <FormControl>
              <CustomInput
                label="Registration Number"
                placeholder="KANOSG00000"
                name="reg_number"
                onChange={handleChange}
                value={form.reg_number}
              />

              <CustomInput
                label="Password"
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
              <CustomButton isLoading={isLoading} onClick={handleSubmit}>
                LOG IN
              </CustomButton>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default StaffLogin;
