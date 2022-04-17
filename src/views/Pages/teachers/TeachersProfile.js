import { Button, Flex, Text } from "@chakra-ui/react"
import React from "react"
import "./profile.css"
import avatar from "../../../assets/img/avatar.png"


function TeachersProfile() {
    return (
        <div>
            <Flex mt={20}>
                <div className="card">
                    <center>
                        <img src={avatar} alt="John" className="images" style={{ width: "100%", height: "10em" }} />
                    </center>

                    <Text fontSize="25px" color="white" fontFamily={"fantasy"} mt="5">Al-Ameen Lawan Yusuf </Text>
                    <Text color="white">CEO & L.Y YAMARKUMI</Text>
                    <Text color="white">Science And Technical</Text>
                    <div style={{ margin: "24px 0" }}>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                    </div>
                    <p><Button bg="black" width="100%" color="white">Contact</Button></p>
                </div>
            </Flex>
        </div>
    )
}

export default TeachersProfile