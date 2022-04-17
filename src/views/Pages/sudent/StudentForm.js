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
import { useHistory, useParams } from "react-router-dom";
import { CustomInput } from "components/shared/CustomInput";
import React, { useState, useEffect } from "react";
import { getStudentInfo, postStudentInfo } from "redux/actions/studentCus"
import profile from "../../../assets/img/profile1.png";
import "./profileImage.css";


function StudentForm() {
  const [form, setForm] = useState({
    studentFirst_name: "",
    studentMiddle_name: "",
    studentLast_name: "",
    student_sex: "",
    student_dob: "",
    student_sor: "",
    student_lga: "",
    student_nationality: "",
    student_religion: "",
    // gurdain Details
    gurdian_name: "",
    gurdian_sex: "",
    gurdian_dob: "",
    gurdian_pob: "",
    gurdian_sor: "",
    gurdian_lga: "",
    gurdian_address: "",
    gurdian_phoneNo: "",
    gurdian_nationality: "",
    gurdian_religion: "",
  });
  const [image, setImage] = useState("")
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const history = useHistory();
  const params = useParams()


  const handleSubmit = () => {
    let tost = id > 0 ? "Update successfully" : "Submit successfully"
    let toste = id > 0 ? "update" : "insert"

    postStudentInfo(
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
    getStudentInfo(
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
                onClick={() => history.push("/admin/student")}
              >
                Back
              </Button>
            </Grid>
          </Flex>

          {/* <GridItem f="right">
                <Text fontSize="20">Profile Image</Text> 
                <div className="profile-pic-wrapper">
                  <div className="pic-holder">
                    {/* <img
                      id="profilePic"
                      class="pic"
                      src={profile}
                    /> }

                    <label for="newProfilePhoto" className="upload-file-block">
                      opload image
                    </label>
                    <CustomInput
                      className="uploadProfileInput"
                      type="file"
                      name="profile_pic"
                      id="newProfilePhoto"  
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        setImage(URL.createObjectURL(e.target.files[0]))
                      }
                    />
                    <>
                      <img
                        src={image && image}
                        alt="`"
                         style={{
                           width: "auto",
                           height: "auto",
                         }}
                      />
                    </>
                  </div>
                </div>
              </GridItem> */}
          <SimpleGrid minChildWidth="250px" spacing="40px">
            <GridItem>
              <FormLabel>Student Name</FormLabel>
              <CustomInput
                type="text"
                name="studentFirst_name"
                value={form.studentFirst_name}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Middle Name</FormLabel>
              <CustomInput
                type="text"
                name="studentMiddle_name"
                value={form.studentMiddle_name}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Last Name</FormLabel>
              <CustomInput
                type="text"
                name="studentLast_name"
                value={form.studentLast_name}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Sex</FormLabel>
              <Select
                name="student_sex"
                value={form.student_sex}
                onChange={handleChange}
              >
                <option>Other</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </GridItem>
            <GridItem>
              <FormLabel>Date Of Birth</FormLabel>
              <CustomInput
                type="date"
                name="student_dob"
                value={form.student_dob}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>State Of origin</FormLabel>
              <CustomInput
                type="text"
                name="student_sor"
                value={form.student_sor}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Local Govt Area</FormLabel>
              <CustomInput
                type="text"
                name="student_lga"
                value={form.student_lga}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Nationality</FormLabel>
              <CustomInput
                type="text"
                name="student_nationality"
                value={form.student_nationality}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Religion</FormLabel>
              <CustomInput
                type="text"
                name="student_religion"
                value={form.student_religion}
                onChange={handleChange}
              />
            </GridItem>
          </SimpleGrid>
          {/* <CustomButton>Submit</CustomButton> */}
        </Card>
      </Flex>
      <Text fontSize="30px" fontFamily={"fantasy"} mt="2" >
        PARENT/GURDIAN PERSONAL DATA
      </Text>
      <Flex mt="4">
        <Card>
          <SimpleGrid minChildWidth="250px" spacing="40px">
            <GridItem>
              <FormLabel>Name of parent/Gurdian Name</FormLabel>
              <CustomInput
                type="text"
                name="gurdian_name"
                value={form.gurdian_name}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Sex</FormLabel>
              <Select
                name="gurdian_sex"
                value={form.gurdian_sex}
                onChange={handleChange}
              >
                <option>Other</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
            </GridItem>
            <GridItem>
              <FormLabel>Date of Birth</FormLabel>
              <CustomInput
                type="date"
                name="gurdian_dob"
                value={form.gurdian_dob}
                onChange={handleChange}
              />
            </GridItem>

            <GridItem>
              <FormLabel>Place of birth</FormLabel>
              <CustomInput
                type="text"
                name="gurdian_pob"
                value={form.gurdian_pob}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>State Of origin</FormLabel>
              <CustomInput
                type="text"
                name="gurdian_sor"
                value={form.gurdian_sor}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Local Govt Area</FormLabel>
              <CustomInput
                type="text"
                name="gurdian_lga"
                value={form.gurdian_lga}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Gurdian Phone Number</FormLabel>
              <CustomInput
                type="number"
                name="gurdian_phoneNo"
                value={form.gurdian_phoneNo}
                onChange={handleChange}
              />
            </GridItem>

            <GridItem>
              <FormLabel>Nationality</FormLabel>
              <CustomInput
                type="text"
                name="gurdian_nationality"
                value={form.gurdian_nationality}
                onChange={handleChange}
              />
            </GridItem>
            <GridItem>
              <FormLabel>Religion</FormLabel>
              <CustomInput
                type="text"
                name="gurdian_religion"
                value={form.gurdian_religion}
                onChange={handleChange}
              />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid minChildWidth="250px" spacing="40px" mt="5">
            <GridItem>
              <FormLabel>Residential/Home Address</FormLabel>
              <Textarea
                name="gurdian_address"
                value={form.gurdian_address}
                onChange={handleChange} />
            </GridItem>
          </SimpleGrid>
          <CustomButton onClick={handleSubmit}> {id > 0 ? "Update" : "Submit"}</CustomButton>
        </Card>
      </Flex>
    </div>
  );
}

export default StudentForm;
