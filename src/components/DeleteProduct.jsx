import React from "react";
import { Heading,Stack, Button } from "@chakra-ui/react";

const DeleteProduct = () => {
  return (
    <div>
      <form id="delete__form">
        <Stack>
          <label htmlFor="prodId">Product ID</label>
          <input
            type="name"
            id="prodId"
            name="prodId"
            aria-describedby="prodId"
            placeholder="Enter Product ID"
          />
        </Stack>
        <br />
        <Button type="submit" bg={"red.300"} color={"black"}>
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default DeleteProduct;
