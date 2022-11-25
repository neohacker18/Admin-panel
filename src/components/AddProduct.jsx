import React, { useState } from "react";
import { Stack, Button } from "@chakra-ui/react";
import "../../public/main.css";
import axios from "axios";

const AddProduct = () => {
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("M");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("Male");

  const url = "http://localhost:8000/admin/add-product";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(brand)
    axios
      .post(url, {
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
      <form id="register__form" onSubmit={handleSubmit}>
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
          {/* <input
            type="name"
            id="title"
            name="title"
            aria-describedby="title"
            placeholder="Enter Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /> */}
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
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
        <Button type="submit" bg={"red.300"} color={"black"}>
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
