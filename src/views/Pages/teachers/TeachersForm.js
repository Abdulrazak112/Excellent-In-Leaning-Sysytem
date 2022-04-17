import {
  Button,
  EditableTextarea,
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
import { useHistory, useParams } from "react-router-dom";
import { CustomInput } from "components/shared/CustomInput";
import React, { useEffect, useState } from "react"
import { postTeachersInfo, getTeachersInfo } from "redux/actions/teacherCus";

function TeachersForm() {
  const [form, setForm] = useState({
    full_name: "",
    phoneNo: "",
    email: "",
    dob: "",
    sex: "",
    religion: "",
    education_level: "",
    address: "",
    subject_teaching: "",
    cv: ""
  })
  const history = useHistory()
  const params = useParams()

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = () => {
    let tost = id > 0 ? "Update successfully" : "Submit successfully"
    let toste = id > 0 ? "update" : "insert"

    postTeachersInfo(
      { ...form, query_type: toste },
      (data) => {
        history.goBack();
        alert(tost)
      },
      (err) => {
        alert("bad request")
      }
    );
  };

  let id = params.id
  const hadleSelectId = () => {
    console.log(id)
    getTeachersInfo(
      { query_type: "selectId", id },
      (data) => {
        if (data.length) {
          setForm(data[0]);
          //			alert("success")
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  useEffect(() => {
    hadleSelectId()
  }, [])


  return (
    <div>
      <Flex mt="20">
        <Card>
          {/* {JSON.stringify(form)} */}
          <Flex direction="row">
            <Grid>
              <Button
                bg="green.500"
                mb="20px"
                color="white"
                _hover={{
                  bg: "green.800",
                }}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            </Grid>
          </Flex>
          <SimpleGrid minChildWidth="250px" spacing="40px">

            <GridItem>
              <FormLabel>Full Name</FormLabel>
              <CustomInput
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
              />
            </GridItem>

            <GridItem>
              <FormLabel>Phone Number</FormLabel>
              <CustomInput
                type="number"
                name="phoneNo"
                value={form.phoneNo}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Date Of Birth</FormLabel>
              <CustomInput
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Sex</FormLabel>
              <Select placeholder="--select--" name="sex" value={form.sex} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>
            </GridItem>
            <GridItem>
              <FormLabel>Religion</FormLabel>
              <CustomInput
                type="text"
                name="religion"
                value={form.religion}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Education Level</FormLabel>
              <CustomInput
                type="text"
                name="education_level"
                value={form.education_level}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Home Address</FormLabel>
              <CustomInput
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Subject Teaching</FormLabel>
              <CustomInput
                type="text"
                name="subject_teaching"
                value={form.subject_teaching}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Email Address</FormLabel>
              <CustomInput
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Resume Cv</FormLabel>
              <Textarea value={form.cv} name="cv" onChange={handleChange} />
            </GridItem>
          </SimpleGrid>
          <CustomButton onClick={handleSubmit}>{id > 0 ? "Update" : "Submit"}</CustomButton>
        </Card>
      </Flex>
    </div>
  );
}

export default TeachersForm;
