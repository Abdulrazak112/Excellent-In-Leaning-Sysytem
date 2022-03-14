import React from "react";
// import { useSelector } from "react-redux";
import { FormLabel, Grid, GridItem, Input } from "@chakra-ui/react";
import moment from "moment";

function DaterangeSelector({ from, to, handleChange }) {
  const today = moment().format("YYYY-MM-DD");

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10">
          <FormLabel style={{ fontWeight: "bold" }}>Date:</FormLabel>
          <Input
            type="date"
            value={from}
            name="from"
            onChange={handleChange}
            className="border-dark"
          />
        </GridItem>
        {/* <GridItem colStart={4} colEnd={6} h="10">
          <FormLabel style={{ fontWeight: "bold" }}>To:</FormLabel>
          <Input
            type="date"
            value={to}
            name="to"
            onChange={handleChange}
            className="border-dark"
          />
        </GridItem> */}
      </Grid>
    </>
  );
}

export default DaterangeSelector;
