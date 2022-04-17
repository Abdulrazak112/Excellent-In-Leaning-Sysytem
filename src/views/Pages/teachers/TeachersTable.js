import React, { useEffect, useState, useCallback } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { CustomButton } from "components/shared/CustomButton";
import { SearchBar } from "components/shared/SearchBar";
import { useHistory } from "react-router-dom"
import { getTeachersInfo } from "redux/actions/teacherCus";
import { postTeachersInfo } from "redux/actions/teacherCus";



function TeachersTable() {
  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])
  const [ters, setTers] = useState([])
  const { isOpen, onOpen, onClose, } = useDisclosure();
  const history = useHistory()
  // console.log(ters)
  const getList = () => {
    getTeachersInfo(
      { query_type: "select" },
      (data) => {
        setResult(data)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  const handleEdit = () => {

  }

  const handleDelete = (id) => {
    postTeachersInfo(
      { id, query_type: "delete" },
      (data) => {
        alert("successfull delete")
        getList()
        onClose()
      },
      (err) => {
        alert("bad request")
      }
    );
  }

  useEffect(() => {
    getList()
  }, [])

  const actionModal = (item) => {
    setTers(item)
    // setForm(ters)
  }

  const rows = [];
  result.length &&
    result.forEach((item, index) => {
      if (
        item.full_name
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) === -1 &&
        item.subject_teaching
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) === -1
      )
        return;
      rows.push(item);
    });
  return (
    <div>
      <Flex direction="column" pt={{ base: "10px", md: "5px" }} mt="19">
        <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <Flex direction="row">
            <Grid>
              <CustomButton onClick={() => history.push("/admin/teachers/new")}>
                Add New Teacher
              </CustomButton>
            </Grid>
          </Flex>
          <SearchBar
            placeholder="Search for student or gurdian" name="searche"
            onChange={(e) => { setSearch(e.target.value) }} value={search}
          />
          <CardBody>
            {/* {JSON.stringify(ters)} */}
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  {/* <Th>N</Th> */}
                  <Th>Teacher Name</Th>
                  <Th>Teacher Age</Th>
                  <Th>Teacher Sex</Th>
                  <Th>Teacher Religion</Th>
                  <Th>Subject Teaching</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {rows && rows.map((item) =>
                  <Tr>
                    <Td>{item.full_name}</Td>
                    <Td>{item.dob}</Td>
                    <Td>{item.sex}</Td>
                    <Td>{item.religion}</Td>
                    <Td>{item.subject_teaching}</Td>
                    <Td>
                      <Button size="sm" bg="green.500" onClick={() => { onOpen(), actionModal(item) }}>
                        action
                      </Button>
                      <Button size="sm" bg="red.600" onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>TAKE THE ACTION</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* {ters} */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={2} onClick={() => history.push(`/admin/teachers/teacher/profile/${ters.id}`)}>
                View Teacher Profile
              </Button>
              <Button bg="green.600" color="white" onClick={() => history.push(`/admin/teachers/new/${ters.id}`)} mr={2}>Edit Teacher details</Button>


            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </div>
  )
}

export default TeachersTable