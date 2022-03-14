import React from "react";
import Card from "components/Card/Card";
import { Box, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";

function Userdetails({ results = [] }) {
  return (
    <div>
      <Card h="500px">
        <Img alt="Image" />
        <SimpleGrid columns={2} spacing={10} mt="60px">
          {results &&
            results.map((item) => (
              <>
                <Text>
                  Full Name: {item.first_name} {item.second_name}{" "}
                  {item.last_name}{" "}
                </Text>
                <Text>Reg Number: {item.registration_no}</Text>
                <Text>Phone No {item.phone_no}</Text>
                <Text>Email {item.email}</Text>
                <Text>PSN NO: {item.psn}</Text>
                <Text>Gender: {item.gender}</Text>
              </>
            ))}
        </SimpleGrid>
        <Button
          mt="20"
          bg="yellow.500"
          color="white"
          _hover={{
            bg: "yellow.600",
          }}
          mr="4"
        >
          Procced payment
        </Button>
      </Card>
    </div>
  );
}

export default Userdetails;
