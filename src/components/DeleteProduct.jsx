import React, { useState } from "react";
import { Stack, Button } from "@chakra-ui/react";
import axios from "axios";

const DeleteProduct = () => {
  const [prodId, setProdId] = useState("");

  const url = "http://localhost:8000/admin/delete-product";
  const handleSubmit = () => {
    axios
      .post(url, {
        prodId: prodId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form id="delete__form" onSubmit={handleSubmit}>
        <Stack>
          <label htmlFor="prodId">Product ID</label>
          <input
            type="name"
            id="prodId"
            name="prodId"
            aria-describedby="prodId"
            placeholder="Enter Product ID"
            value={prodId}
            onChange={(e) => setProdId(e.target.value)}
          />
        </Stack>
        <br />
        <Button type="submit" bg={"red.400"} color={"black"}>
          Delete Product
        </Button>
      </form>
    </div>
  );
};

export default DeleteProduct;
