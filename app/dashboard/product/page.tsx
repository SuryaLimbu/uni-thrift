"use client";
import React from "react";
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
  SelectItem
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div>
        <div>
          
          <Button onPress={onOpen} color="primary">
            Add New Product
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
                    <Input
                      autoFocus
                      label="Product Title"
                      placeholder="Enter your Product Title"
                      variant="bordered"
                    />
                   <Textarea
                   label="Product Description"
                   placeholder="Enter your Product Description"
                   variant="bordered"
                   className="max-w-full"
                   />
                    <div className="flex py-2 px-1 justify-between gap-2">
                      <Input
                      label="Price"
                      placeholder="Enter your Price"
                      variant="bordered"
                      />
                      <Select
                    label="Category"
                    placeholder="Select your Category"
                    variant="bordered"
                    className="max-w-full"
                    >
                    <SelectItem value="1" key={""}>Category 1</SelectItem>
                    <SelectItem value="2" key={""}>Category 2</SelectItem>
                    <SelectItem value="3" key={""}>Category 3</SelectItem>
                    </Select>
                      
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Save All Product Info
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div></div>
      </div>
    </>
  );
}
