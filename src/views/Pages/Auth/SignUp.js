// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
// Assets
import BgSignUp from 'assets/img/BgSignUp.png'
import { CustomButton } from 'components/shared/CustomButton'
import { CustomInput } from 'components/shared/CustomInput'
import { CustomSwitch } from 'components/shared/CustomSwitch'
import React, { useState } from 'react'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { useHistory } from 'react-router'
import { createUser } from 'redux/actions/auth'
import { SUCCESS_TOAST } from 'variables/toasts'
import { ERROR_TOAST } from 'variables/toasts'
import { WARNING_TOAST } from 'variables/toasts'

function SignUp() {
  const titleColor = useColorModeValue('green.500', 'green.500')
  const textColor = useColorModeValue('gray.700', 'white')
  const bgColor = useColorModeValue('white', 'gray.700')
  const bgIcons = useColorModeValue('green.200', 'rgba(255, 255, 255, 0.5)')
  const history = useHistory()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    retype_password: '',
  })

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
      createUser(
        form,
        () => {
          setIsLoading(false)
          toast({ title: 'Account successfully created', ...SUCCESS_TOAST })
        },
        (err) => {
          setIsLoading(false)
          console.log(err)
          toast({ title: err, ...ERROR_TOAST })
        },
      )
    }
  }

  const passwordNotMatch =
    form.retype_password !== '' && form.password !== form.retype_password
  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      {/* <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box> */}

      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ userSelect: 'none' }}
          w={{ base: '100%', md: '50%', lg: '40%' }}
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: '100px' }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Create Account
          </Text>
          {/* <HStack spacing="15px" justify="center" mb="22px">
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaFacebook}
                  w="30px"
                  h="30px"
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaApple}
                  w="30px"
                  h="30px"
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaGoogle}
                  w="30px"
                  h="30px"
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize="lg"
            color="gray.400"
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            or
          </Text> */}
          <FormControl>
            <CustomInput
              label="Name"
              type="text"
              placeholder="Your full name"
              mb="5px"
              onChange={handleChange}
              name="fullname"
              value={form.fullname}
            />

            <CustomInput
              label="Email"
              type="email"
              placeholder="Your email address"
              mb="5px"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <CustomInput
              label="Password"
              type="password"
              mb="5px"
              placeholder="Your password"
              onChange={handleChange}
              name="password"
              value={form.password}
            />

            <CustomInput
              label="Retry Password"
              mb="5px"
              type="password"
              placeholder="Your password"
              onChange={handleChange}
              name="retype_password"
              isInvalid={passwordNotMatch}
              errorMessage={'Passwords do not match'}
            />

            <CustomSwitch
              id="remember-login"
              colorScheme="teal"
              label="Remember me"
              mb="10px"
            />

            <CustomButton
              onClick={handleSubmit}
              isLoading={isLoading}
            >
              SIGN UP
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
              Already have an account?
              <Link
                color={titleColor}
                as="span"
                ms="5px"
                fontWeight="bold"
                onClick={() => history.push('/auth/signin')}
              >
                Sign In
              </Link>
            </Text>
            {/* <AlertDialog /> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SignUp
