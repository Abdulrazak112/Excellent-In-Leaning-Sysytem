import {
  Flex,
  Grid,
  GridItem,
  Select,
  FormLabel,
  FormControl,
  Button,
  useToast,
  Container,
} from "@chakra-ui/react";
import { SUCCESS_TOAST } from "variables/toasts";

import Card from "components/Card/Card";
import { CustomButton } from "components/shared/CustomButton";
import { CustomInput } from "components/shared/CustomInput";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { newStaff } from "redux/actions/staff";
import { getStaffList } from "redux/actions/staff";
import { getStaffRegistrationNo } from "redux/actions/staff";
import { ERROR_TOAST } from "variables/toasts";
import AutoComplete from "components/Card/Autocomplete";
import { getMdas } from "redux/actions/staff";
import { getGl, getCadre } from "redux/actions/staff";
import { getField } from "redux/actions/staff";
import { ExaminationSlip } from "./ExaminationSlip";
import profile from "../../../assets/img/profile1.png";
import "./profileImage.css";
function NewRegistration() {
  const [image, setImage] = useState(null);
  const toast = useToast();
  const [form, setForm] = useState({
    registration_no: "",
    psn: "",
    first_name: "",
    gender: "",
    phone_no: "",
    cadre: "",
    gl: "",
    second_name: "",
    last_name: "",
    mda: "",
    field: "",
    image: "",
  });
  const [mda, setMda] = useState([]);
  const [gl, setGl] = useState([]);
  const [cadre, setCadre] = useState([]);
  const [fields, setFields] = useState();
  const params = useParams();
  const history = useHistory();
  const registration_no = params.registration_no;
  const [open, setOpen] = useState(false);

  const getStaffRegistrationNo = useCallback(() => {
    getStaffList(
      { query_type: "get-registration-no", registration_no },
      (data) => {
        if (data.length) {
          setForm(data[0]);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const getMDACode = useCallback(() => {
    getMdas(
      (res) => {
        setMda(res);
      },
      (e) => {
        console.log(e);
      }
    );
  }, []);
  // const getGl = useCallback(() => {

  // }, []);

  const change = ({ target: { value, name } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    // setPicture(URL.createObjectURL(value.target.files[0]));
  };

  const handleSubmit = () => {
    let type = registration_no && registration_no ? "update" : "insert";
    let reg = registration_no && registration_no ? registration_no : "";
    if (
      form.registration_no === "" ||
      form.psn === "" ||
      form.first_name === "" ||
      form.gender === "" ||
      form.phone_no === "" ||
      form.cadre === "" ||
      form.gl === "" ||
      form.second_name === "" ||
      form.last_name === "" ||
      form.mda === "" ||
      form.field === ""
    ) {
      toast({ title: "Invalid Form", ...ERROR_TOAST });
    } else {
      newStaff(
        { ...form, query_type: type, reg, image },
        (data) => {
          if (data.success) {
            history.goBack();
            toast({
              title:
                registration_no && registration_no
                  ? "Update Successfully"
                  : "Submited Successfully",
              ...SUCCESS_TOAST,
            });
          } else {
            toast({ title: data.msg, ...ERROR_TOAST });
          }
        },
        (err) => {
          toast({ title: data.msg, ...ERROR_TOAST });
        }
      );
      // setOpen(true);
    }
  };

  useEffect(() => {
    getStaffRegistrationNo();
    getMDACode();
    getGl(
      (res) => {
        setGl(res);
      },
      (e) => {
        console.log(e);
      }
    );
    getCadre(
      (res) => {
        setCadre(res);
      },
      (e) => {
        console.log(e);
      }
    );
    getField(
      (res) => {
        setFields(res);
      },
      (e) => {
        console.log(e);
      }
    );
    // getGl()
  }, [getStaffRegistrationNo, getMDACode]);

  return (
    <div>
      <Container maxW="container.lg">
        {/* {JSON.stringify(image)} */}
        {open === false ? (
          <Flex>
            <Card>
              <Flex direction="row">
                <Grid>
                  <CustomButton onClick={() => history.goBack()}>
                    Back
                  </CustomButton>
                </Grid>
                <div></div>
              </Flex>
              {/* {JSON.stringify(form)} */}
              <GridItem>
                {/* <FormLabel>Image</FormLabel> */}
                <div className="profile-pic-wrapper">
                  <div className="pic-holder">
                    {/* <img
                      id="profilePic"
                      class="pic"
                      src={profile}
                    /> */}

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
                        // style={{
                        //   width: "190px",
                        //   height: "150px",
                        // }}
                      />
                    </>
                  </div>
                </div>
              </GridItem>
              <Grid
                // h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
              >
                <GridItem>
                  <FormLabel>Registrations No</FormLabel>
                  <CustomInput
                    type="text"
                    name="registration_no"
                    onChange={change}
                    value={form.registration_no}
                  />
                </GridItem>

                <GridItem>
                  <FormLabel>First Name</FormLabel>
                  <CustomInput
                    type="text"
                    name="first_name"
                    onChange={change}
                    value={form.first_name}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>Second Name</FormLabel>
                  <CustomInput
                    type="text"
                    name="second_name"
                    onChange={change}
                    value={form.second_name}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>Last Name</FormLabel>
                  <CustomInput
                    type="text"
                    name="last_name"
                    onChange={change}
                    value={form.last_name}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>PSN No</FormLabel>
                  <CustomInput
                    type="text"
                    name="psn"
                    onChange={change}
                    value={form.psn}
                  />
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <Select
                      id="country"
                      placeholder="Select gender"
                      name="gender"
                      onChange={change}
                      value={form.gender}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormLabel>Phone No</FormLabel>
                  <CustomInput
                    type="number"
                    name="phone_no"
                    onChange={change}
                    value={form.phone_no}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>Cadre</FormLabel>
                  <AutoComplete
                    suggestions={cadre}
                    labelKey="cadre"
                    // labelKey1="code"
                    handleChanges={(val) => {
                      if (val) {
                        let value = val;
                        setForm((p) => ({ ...p, ["cadre"]: value.cadre }));
                      }
                    }}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>Grade Level</FormLabel>
                  <AutoComplete
                    suggestions={gl}
                    labelKey="gl"
                    // labelKey1="code"
                    handleChanges={(val) => {
                      if (val) {
                        let value = val;
                        setForm((p) => ({ ...p, ["gl"]: value.gl }));
                      }
                    }}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>MDA</FormLabel>
                  <AutoComplete
                    suggestions={mda}
                    labelKey="mda"
                    // labelKey1="code"
                    handleChanges={(val) => {
                      if (val) {
                        let value = val;
                        setForm((p) => ({ ...p, ["mda"]: value.mda }));
                      }
                    }}
                  />
                </GridItem>
                <GridItem>
                  <FormLabel>Field</FormLabel>
                  <AutoComplete
                    suggestions={fields}
                    labelKey="field"
                    // labelKey1="code"
                    handleChanges={(val) => {
                      if (val) {
                        let value = val;
                        setForm((p) => ({ ...p, ["field"]: value.field }));
                      }
                    }}
                  />
                </GridItem>

                {/* <GridItem>
                  <FormLabel>Image</FormLabel>
                  <CustomInput
                    type="file"
                    name="image"
                    onChange={(e) =>
                      setImage(URL.createObjectURL(e.target.files[0]))
                    }
                    value={form.image}
                  />
                  <center>
                    <img
                      src={image && image}
                      alt="`"
                      style={{
                        width: "190px",
                        height: "150px",
                      }}
                    />
                  </center>
                </GridItem> */}
              </Grid>
              <Flex direction="row" justifyContent="center">
                <Grid>
                  <center>
                    <CustomButton onClick={handleSubmit} p="6" w="40">
                      {registration_no && registration_no ? "Update" : "Submit"}
                    </CustomButton>
                  </center>
                </Grid>
              </Flex>
            </Card>
          </Flex>
        ) : (
          <ExaminationSlip form={form} />
        )}
      </Container>
    </div>
  );
}

export default NewRegistration;
