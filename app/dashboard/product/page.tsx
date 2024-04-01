"use client";
import React, { FormEvent, useState } from "react";
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
import ProductTable from "./table";
import { PiPlus } from "react-icons/pi";

export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className=" ">
          <Button onPress={onOpen} color="primary">
            Add New Product <PiPlus />
          </Button>
          <Modal
            isOpen={isOpen}
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
                      <Input
                        autoFocus
                        label="Product Title"
                        placeholder="Enter your Product Title"
                        variant="bordered"
                        value={formData.title}
                        onChange={handleInputChange}
                        name="title"
                      />
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
                          label="Price"
                          placeholder="Enter your Price"
                          variant="bordered"
                          value={formData.price}
                          onChange={handleInputChange}
                          name="price"
                        />
                        <Select
                          label="Category"
                          placeholder="Select your Category"
                          variant="bordered"
                          className="max-w-full"
                          value={formData.category}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              category: event.target.value,
                            })
                          }
                          name="category"
                        >
                          <SelectItem value="1" key={""}>
                            Category 1
                          </SelectItem>
                          <SelectItem value="2" key={""}>
                            Category 2
                          </SelectItem>
                          <SelectItem value="3" key={""}>
                            Category 3
                          </SelectItem>
                        </Select>
                      </div>
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" type="submit">
                        Save All Product Info
                      </Button>
                    </form>
                  </ModalBody>
                  {/* <ModalFooter></ModalFooter> */}
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <ProductTable />
        </div>
      </div>
    </>
  );
}
