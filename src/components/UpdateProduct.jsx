import React, { useState } from "react";
import { Stack, Button } from "@chakra-ui/react";
import "../../public/main.css";
import axios from "axios";

const UpdateProduct = () => {
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("M");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [prodId, setProdId] = useState("");
  const url = "";
  const handleSubmit = () => {
    axios
      .post(url, {
        prodId: prodId,
        brand: brand,
        title: title,
        size: size,
        description: description,
        price: price,
        imageUrl: imageUrl,
        category: category,
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
      <form id="update__form" onSubmit={handleSubmit}>
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
        <Stack>
          <label htmlFor="brand">Brand</label>
          <input
            type="name"
            id="brand"
            name="brand"
            aria-describedby="brand"
            placeholder="Enter Product Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Stack>
        <br />
        <Stack>
          <label htmlFor="title">Title</label>
          <input
            type="name"
            id="title"
            name="title"
            aria-describedby="title"
            placeholder="Enter Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Stack>
        <br />
        <Stack>
          <label htmlFor="title">Size</label>
          <select
            name="size"
            id="size"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <input type="hidden" name="size" id="size" value={size} />
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Stack>
        <br />
        <Stack>
          <label htmlFor="picture">Picture</label>
          <input
            type="name"
            id="picture"
            name="picture"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Stack>
        <br />
        <Stack>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
          <input
            type="hidden"
            name="category"
            id="input_category"
            value={category}
          />
        </Stack>
        <br />
        <Button type="submit" bg={"green.300"} color={"black"}>
          Update Product
        </Button>
      </form>
    </div>
  );
};

export default UpdateProduct;
