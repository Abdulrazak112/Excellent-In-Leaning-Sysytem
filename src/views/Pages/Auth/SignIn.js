import React, { useState } from 'react'
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue, useToast
} from '@chakra-ui/react'
import { useHistory } from 'react-router'
import { CustomButton } from 'components/shared/CustomButton'
import { CustomInput } from 'components/shared/CustomInput'
import { CustomSwitch } from 'components/shared/CustomSwitch'
import { login } from 'redux/actions/auth'
import { WARNING_TOAST } from 'variables/toasts'
import { SUCCESS_TOAST } from 'variables/toasts'
import { ERROR_TOAST } from 'variables/toasts'
// Assets
// import signInImage from "assets/img/signInImage.png";

function SignIn() {
  const history = useHistory()
  // Chakra color mode
  const titleColor = useColorModeValue('green.500', 'green.500')
  const textColor = useColorModeValue('gray.400', 'white')

  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({ username: '', password: '' })
  const [rememberMe, setRemeberMe] = useState(false)

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }))

  const handleSubmit = () => {
    let errors = [] 
    Object.keys(form).forEach((item) => {
      if (form[item] === '') {
        errors.push(item + ' cannot be empty!')
      }
    })
    // if(form.password !== form)

    if (errors.length) {
      toast({ title: errors[0], ...WARNING_TOAST })
    } else {
      setIsLoading(true)
      login(
        form,
        () => {
          setIsLoading(false)
          toast({ title: 'Login successful', ...SUCCESS_TOAST })
          history.push('/admin/dashboard')
        },
        (err) => {
          setIsLoading(false)
          console.log(err)
          toast({ title: err, ...ERROR_TOAST })
        },
      )
    }
  }

  return (
    <Flex position="relative" mb="40px">
      {/* {JSON.stringify(form)} */}
      <Flex
        h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="center"
        mb="30px"
        pt={{ sm: '100px', md: '0px' }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ userSelect: 'none' }}
          w={{ base: '100%', md: '50%', lg: '50%' }}
        >
          <Flex
            direction="column"
            w="100%" 
            background="transparent"
            p="48px"
            mt={{ md: '150px', lg: '80px' }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            {/* {JSON.stringify(form)} */}
            <FormControl>
              <CustomInput
                label="username"
                placeholder="Your email adress"
                name="username"
                onChange={handleChange}
                value={form.username}
              />

              <CustomInput
                label="Password"
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
              <CustomSwitch
                id="remember-login"
                checked={rememberMe}
                onChange={() => setRemeberMe((p) => !p)}
                label="Remember me"
              />
              {/* <FormControl display="flex" alignItems="center">
                <Switch
                 
                  colorScheme="teal"
                  me="10px"
                  checked={rememberMe}
                  onChange={() => setRemeberMe((p) => !p)}
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  
                </FormLabel>
              </FormControl> */}
              <CustomButton isLoading={isLoading} onClick={handleSubmit}>
                SIGN IN
              </CustomButton>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link
                  onClick={() => history.push('/auth/signup')}
                  color={titleColor}
                  as="span"
                  ms="5px"
                  fontWeight="bold"
                >
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box> */}
      </Flex>
    </Flex>
  )
}

export default SignIn
