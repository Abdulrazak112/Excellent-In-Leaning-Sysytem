import {
  Button,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Select,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import { CustomButton } from "components/shared/CustomButton";
import { CustomInput } from "components/shared/CustomInput";
import React from "react";

function StudentForm() {
  return (
    <div>
      <Flex mt="20">
        <Card>
          <SimpleGrid minChildWidth="250px" spacing="40px">
            <GridItem>
              <FormLabel>Student Name</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Middle Name</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Last Name</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Sex</FormLabel>
              <Select>
                <option>Other</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </GridItem>
            <GridItem>
              <FormLabel>Date Of Birth</FormLabel>
              <CustomInput type="date" />
            </GridItem>
            <GridItem>
              <FormLabel>State Of origin</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Local Govt Area</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Nationality</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Religion</FormLabel>
              <CustomInput type="text" />
            </GridItem>
          </SimpleGrid>
          {/* <CustomButton>Submit</CustomButton> */}
        </Card>
      </Flex>
      <Text fontSize="30px" fontFamily={"fantasy"} mt="2">
        PARENT/GURDIAN PERSONAL DATA
      </Text>
      <Flex mt="4">
        <Card>
          <SimpleGrid minChildWidth="250px" spacing="40px">
            <GridItem>
              <FormLabel>Name of parent/Gurdian Name</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Sex</FormLabel>
              <Select>
                <option>Other</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </GridItem>
            <GridItem>
              <FormLabel>Date of Birth</FormLabel>
              <CustomInput type="date" />
            </GridItem>

            <GridItem>
              <FormLabel>Place of birth</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>State Of origin</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Local Govt Area</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Nationality</FormLabel>
              <CustomInput type="text" />
            </GridItem>
            <GridItem>
              <FormLabel>Religion</FormLabel>
              <CustomInput type="text" />
            </GridItem>
          </SimpleGrid>
          <CustomButton>Submit</CustomButton>
        </Card>
      </Flex>
    </div>
  );
}

export default StudentForm;
