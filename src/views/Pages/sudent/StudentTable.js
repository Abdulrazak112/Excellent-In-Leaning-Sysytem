import {
  Button,
  Flex,
  Grid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { CustomButton } from "components/shared/CustomButton";
import { SearchBar } from "components/shared/SearchBar";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getGl } from "redux/actions/staff";

function StudentTable() {
  const history = useHistory();
  const [list, setList] = useState([]);

  return (
    <Flex direction="column" pt={{ base: "10px", md: "5px" }} mt="17">
      <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
        <Flex direction="row">
          <Grid>
            <CustomButton onClick={() => history.push("/admin/student/new")}>
              Add New Student
            </CustomButton>
          </Grid>
        </Flex>
        <SearchBar placeholder="Search for student" />
        <CardBody>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                {/* <Th>N</Th> */}
                <Th>Student Name</Th>
                <Th>Student Age</Th>
                <Th>Student Sex</Th>
                <Th>Student Religion</Th>
                <Th>Gurdian Name</Th>
                <Th>Gurdian Age</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {/* <Td>1</Td> */}
                <Td>Mustapha Isah Toyin</Td>
                <Td>20 yrs</Td>
                <Td>Male</Td>
                <Td>Musllim</Td>
                <Td>Murtala Adewale Akinyemi</Td>
                <Td>30 yrs</Td>
                <Td display={"row"}>
                  <Button size="sm" bg="green.500">
                    Edit
                  </Button>
                  <Button size="sm" bg="red.600">
                    Delete
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default StudentTable;
