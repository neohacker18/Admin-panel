import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import '../../public/main.css'

const UpdateProduct = () => {
  return (
    <div><form id="update__form">
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
    <Stack>
      <label htmlFor="name">Name</label>
      <input
        type="name"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder="Enter Product Name"
      />
    </Stack>
    <br />
    <Stack>
      <label htmlFor="description">Description</label>
      <input
        type="name"
        id="desc"
        name="desc"
        aria-describedby="desc"
        placeholder="Enter Description"
      />
    </Stack>
    <br />
    <Stack>
      <label htmlFor="price">Price</label>
      <input
        type="name"
        id="price"
        name="price"
        aria-describedby="price"
        placeholder="Enter Price"
      />
    </Stack>
    <br />
    <Stack>
      <label htmlFor="password">Picture</label>
      <input
        type="file"
        id="password"
        name="picture"
        accept="image/png, image/jpeg"
        placeholder="Enter password"
      />
    </Stack>
    <br />
    <Stack>
      <label htmlFor="password">Category</label>
      <input
        type="name"
        id="category"
        name="category"
        placeholder="Enter category"
      />
    </Stack>
    <br />
    <Button type="submit" bg={'red.300'} color={'black'}>Add Product</Button>
  </form>
</div>
  )
}

export default UpdateProduct