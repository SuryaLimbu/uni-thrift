"use client";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";

import ProductTable from "./list";
import { PiCross, PiPlus, PiX, PiXCircle } from "react-icons/pi";
import { fetchApiData, postApiData } from "@/app/lib/fetchData";
import SuccessAlert from "@/app/components/alert/success";
import DangerAlert from "@/app/components/alert/fail";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import List from "./list";
interface CategoryInterface {
  id: number;
  categoryName: string;
}
export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [successAlert, setSuccessAlert] = useState("");
  const [dangerAlert, setDangerAlert] = useState("");
  const [category, setCategory] = useState<CategoryInterface[]>([]);
  const [file, setFile] = useState<File | null>(null); // State to hold the selected file

  // console.log("successAler: ", successAlert);
  // console.log("categoryAler: ", category);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      // console.log(response);
      const data = fetchApiData("category");
      // console.log(data);
      setCategory(await data);
    };
    fetchData();
  }, []);
  var userId = getCookie("userId");
  // console.log(userId);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    postedBy: userId,
    contactDetails: "",
    productImageURL: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    contactDetails: "",
    productImageURL: "",
  });
  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "" ? "name is required" : "",
      description:
        formData.description.trim() === "" ? "Description is required" : "",
      price:
        formData.price.trim() === ""
          ? "Price is required"
          : isNaN(parseFloat(formData.price)) ||
            parseFloat(formData.price) <= 0 ||
            parseFloat(formData.price) > 1000000
          ? "Price should be a number between 0 and 1,000,000"
          : "",
      categoryId:
        formData.categoryId.trim() === "" ? "Category is required" : "",
      contactDetails:
        formData.contactDetails.trim() === ""
          ? "Contact details are required"
          : formData.contactDetails.trim().length <= 5
          ? "Contact number should be more than 5 characters"
          : "",
      productImageURL:
        formData.productImageURL.trim() === ""
          ? "Product image is required"
          : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (
      name === "productImageURL" &&
      event.target instanceof HTMLInputElement
    ) {
      const files = event.target.files;
      if (files && files.length > 0) {
        const selectedFile = files[0];
        setFile(selectedFile); // Update the file state with the selected file
      }
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const isValid = validateForm();
    const isValid= true;
    if (isValid) {
      try {
        const formDataWithFile = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataWithFile.append(key, value as string);
        });
        if (file) {
          formDataWithFile.append("productImageURL", file); // Append the file to FormData
        }
        console.log("form data:", formData);

        const response = await postApiData(formData, "product");

        if (!response) {
          setSuccessAlert("Product added successfully");
          onclose;
        } else {
          setDangerAlert("Product failed to be added");
        }

        console.log("Form submitted successfully:", formData, response);
      } catch (error) {
        console.error("Error submitting form:", error);
        setDangerAlert("Error occurred while adding the product");
      }
    } else {
      console.log("Form contains errors. Please fix them.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {successAlert !== "" ? <SuccessAlert msg={successAlert} /> : <></>}
        {dangerAlert !== "" ? <DangerAlert msg={dangerAlert} /> : <></>}

        <div className=" ">
          <Button onPress={onOpen} color="primary" className="text-white">
            Add New Product <PiPlus />
          </Button>
          <Modal
            isOpen={isOpen}
            size="full"
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Add Product Info
                  </ModalHeader>
                  <ModalBody>
                    <form onSubmit={onSubmit}>
                      <div className="py-2">
                        <Input
                          isRequired
                          label="Product name"
                          placeholder="Enter your Product name"
                          variant="bordered"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          name="name"
                        />
                      </div>
                      <Textarea
                        label="Product Description"
                        placeholder="Enter your Product Description"
                        variant="bordered"
                        className="max-w-full"
                        value={formData.description}
                        onChange={handleInputChange}
                        name="description"
                      />
                      <div className="flex py-2 px-1 justify-between gap-2">
                        <Input
                          isRequired
                          label="Price"
                          placeholder="Enter your Price"
                          variant="bordered"
                          value={formData.price}
                          onChange={handleInputChange}
                          name="price"
                          type="text"
                        />
                        <Select
                          label="Category"
                          placeholder="Select your Category"
                          variant="bordered"
                          className="max-w-full"
                          value={formData.categoryId}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              categoryId: event.target.value,
                            })
                          }
                          name="category"
                        >
                          {category.map((item) => (
                            <SelectItem value={item.id} key={item.id}>
                              {item.categoryName}
                            </SelectItem>
                          ))}
                          {/* <SelectItem value="1" key={""}>
                            Category 1
                          </SelectItem>
                          <SelectItem value="2" key={""}>
                            Category 2
                          </SelectItem>
                          <SelectItem value="3" key={""}>
                            Category 3
                          </SelectItem> */}
                        </Select>
                      </div>
                      <div className="py-2">
                        <Input
                          isRequired
                          label="Contact Details"
                          placeholder="Enter your Contact Number or Email"
                          variant="bordered"
                          value={formData.contactDetails}
                          onChange={handleInputChange}
                          name="contactDetails"
                          type="text"
                        />
                      </div>
                      <div className="py-2">
                        <Input
                          isRequired
                          label="Product Image"
                          type="file"
                          placeholder="Enter your Product Image"
                          variant="bordered"
                          name="productImageURL"
                          accept="image/*"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit" className="text-white" onPress={onClose}>
                          Save All Product Info
                        </Button>
                      </div>
                    </form>
                  </ModalBody>
                  {/* <ModalFooter></ModalFooter> */}
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>{/* <List /> */}</div>
      </div>
    </>
  );
}
