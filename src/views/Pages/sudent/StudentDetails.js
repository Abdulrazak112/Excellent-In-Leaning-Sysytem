import React, { useState, useEffect } from "react"
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
import { useHistory, useParams } from "react-router-dom"
import { getStudentInfo, postStudentInfo } from "redux/actions/studentCus"


function StudentDetails() {
	const [results, setResults] = useState([])
	const params = useParams()
	const history = useHistory()

	useEffect(() => {
		let id = params.id
		console.log(results)
		getStudentInfo(
			{ query_type: "selectId", id },
			(data) => {
				setResults(data);
				//				alert("success")
			},
			(err) => {
				console.log(err);
			}
		);
	}, [])
	const datas = results[0]
	return (
		<div>
			<Flex mt="20" >
				<Card>
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
					<SimpleGrid minChildWidth="250px" spacing="40px" fontSize={"17"}>
						<GridItem>
							<Text>Full Name: {datas && datas.studentFirst_name} {datas && datas.studentMiddle_name} {datas && datas.studentLast_name} </Text>
						</GridItem>
						<GridItem>
							<Text>Gender: {datas && datas.student_sex} </Text>
						</GridItem>
						<GridItem>
							<Text>Date Of Birth: {datas && datas.student_dob} </Text>
						</GridItem>
						<GridItem>
							<Text>State Of Origin: {datas && datas.student_sor}</Text>
						</GridItem>
						<GridItem>
							<Text>Local Govt Area: {datas && datas.student_lga} </Text>
						</GridItem>
						<GridItem>
							<Text>Nationality: {datas && datas.student_nationality}</Text>
						</GridItem>
						<GridItem>
							<Text>Religion: {datas && datas.student_religion}</Text>
						</GridItem>
						<GridItem>
							<Text>Class: {datas && datas.student_class}</Text>
						</GridItem>
					</SimpleGrid>
					<Text fontSize="28px" textAlign="center" fontFamily={"fantasy"} mt="2" mb="4">
						PARENT/GURDIAN PERSONAL DETAILS
					</Text>
					<SimpleGrid minChildWidth="250px" spacing="40px" fontSize={"17"}>
						<GridItem>
							<Text>Gurdian Name: {datas && datas.gurdian_name} </Text>
						</GridItem>
						<GridItem>
							<Text>Gender: {datas && datas.gurdian_sex}</Text>
						</GridItem>
						<GridItem>
							<Text>Date Of Birth: {datas && datas.gurdian_dob}</Text>
						</GridItem>
						<GridItem>
							<Text>Place Of Birth: {datas && datas.gurdian_pob} </Text>
						</GridItem>
						<GridItem>
							<Text>State Of Origin: {datas && datas.gurdian_sor}</Text>
						</GridItem>
						<GridItem>
							<Text>Local Govt Area: {datas && datas.gurdian_lga}</Text>
						</GridItem>
						<GridItem>
							<Text>Phone Number: {datas && datas.gurdian_phoneNo}</Text>
						</GridItem>
						<GridItem>
							<Text>Nationality: {datas && datas.gurdian_nationality}</Text>
						</GridItem>
						<GridItem>
							<Text>Religion: {datas && datas.gurdian_religion}</Text>
						</GridItem>

					</SimpleGrid>
					<SimpleGrid minChildWidth="250px" mt="10" fontSize={"17"}>
						<GridItem>
							<Text>Residential Home Address: {datas && datas.gurdian_address}</Text>
						</GridItem>
					</SimpleGrid>
				</Card>
			</Flex>
		</div>
	)
}

export default StudentDetails