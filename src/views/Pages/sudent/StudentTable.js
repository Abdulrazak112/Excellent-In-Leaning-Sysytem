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
  Text,
  Select
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { CustomButton } from "components/shared/CustomButton";
import { SearchBar } from "components/shared/SearchBar";
import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { getStudentInfo, postStudentInfo } from "redux/actions/studentCus";



function StudentTable() {
  const history = useHistory();
  const [result, setResult] = useState([]);
  const { isOpen, onOpen, onClose, } = useDisclosure();
  const [ters, setTers] = useState([])
  const [search, setSearch] = useState("")
  const [form, setForm] = useState({
    student_class: ""
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = useCallback(() => {
    postStudentInfo(
      { ...form, query_type: "update_class", id: ters.id },
      (data) => {
        // alert("succ")
        onClose()
        getList()
      },
      (err) => {
        alert("bad request")
      }
    );
  }, [form])

  const getList = () => {
    getStudentInfo(
      { query_type: "select" },
      (data) => {
        setResult(data)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  useEffect(() => {
    handleSubmit()
    getList()

  }, [form])

  const handleDelete = (id) => {
    postStudentInfo(
      { id, query_type: "delete" },
      (data) => {
        getList()
        onClose()
      },
      (err) => {
        alert("bad request")
      }
    );
  }

  const handleEdit = (id) => {
    history.push(`/admin/student/new/${id}`)
  }

  const actionModal = (item) => {
    setTers(item)
    // setForm(ters)
  }


  const rows = [];
  result.length &&
    result.forEach((item, index) => {
      if (
        item.studentFirst_name
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) === -1 &&
        item.gurdian_name
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) === -1 &&
        item.student_class
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) === -1
      )
        return;
      rows.push(item);
    });

  return (
    <Flex direction="column" pt={{ base: "10px", md: "5px" }} mt="19">
      <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
        {/* {JSON.stringify(result)} */}
        <Flex direction="row">
          <Grid>
            <CustomButton onClick={() => history.push("/admin/student/new")}>
              Add New Student
            </CustomButton>
          </Grid>
        </Flex>
        <SearchBar
          placeholder="Search for student class, student name, gurdian name" name="search"
          onChange={(e) => { setSearch(e.target.value) }} value={search}
        />
        <CardBody>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Classs</Th>
                <Th> Name</Th>
                <Th> Age</Th>
                <Th> Sex</Th>
                <Th> Religion</Th>
                <Th>Gurdian Name</Th>
                <Th>Gurdian Age</Th>
                {/* <Th>Class</Th> */}
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((item) =>
                <Tr>
                  <Td>{item.student_class === "" ? (<Text color="green.400" fontSize="18px">pending</Text>) : item.student_class}</Td>
                  <Td>{item.studentFirst_name} {item.studentMiddle_name} {item.studentLast_name}</Td>
                  <Td>{item.student_dob}</Td>
                  <Td>{item.student_sex}</Td>
                  <Td>{item.student_religion}</Td>
                  <Td>{item.gurdian_name}</Td>
                  <Td>{item.gurdian_dob}</Td>
                  <Td display={"row"}>
                    <Button size="sm" bg="green.500" color="white" onClick={() => { onOpen(), actionModal(item) }}>
                      action
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
          <ModalHeader>TAKE THE ACTION, {ters.studentFirst_name} {ters.studentMiddle_name} {ters.studentLast_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* {JSON.stringify(ters)} */}
            <Select placeholder="--select or update the student class--"
              name="student_class" value={form.student_class} onChange={handleChange}  >
              <option>PLAY GROUP</option>
              <option>PRE-NURSERY</option>
              <option>NURSERY 1</option>
              <option>NURSERY 2</option>
              <option>PRIMARY 1</option>
              <option>PRIMARY 2</option>
              <option>PRIMARY 3</option>
              <option>PRIMARY 4</option>
              <option>PRIMARY 5</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={2} onClick={() => history.push(`/admin/student/details/${ters.id}`)}>
              View Details
            </Button>
            <Button bg="green.600" color="white" onClick={() => handleEdit(ters.id)} mr={2}>Edit Details</Button>
            <Button bg="red.600" color="white" onClick={() => handleDelete(ters.id)}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default StudentTable;



