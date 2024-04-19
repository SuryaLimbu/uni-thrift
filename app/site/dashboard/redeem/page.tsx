import { Button, Input } from "@nextui-org/react";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className=" font-semibold text-lg">Enter your Redeem code</h1>
      <form action="" method="post" className="flex gap-4">
        <Input type="text" className="" placeholder="Enter your Redeem code" />
        <Button type="submit" className="text-white" color="primary">
          Redeem
        </Button>
      </form>
    </div>
  );
}
