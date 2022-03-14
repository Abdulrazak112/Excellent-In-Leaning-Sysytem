import { Flex } from "@chakra-ui/react";
import Card from "components/Card/Card";
import React from "react";

function ParentForm(params) {
  return (
    <div>
      <Flex mt="20">
        <Card>
          <h1>Hello Parent Form</h1>
        </Card>
      </Flex>
    </div>
  );
}

export default ParentForm
