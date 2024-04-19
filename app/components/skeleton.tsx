import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const SkeletonCard = () => {
  return (
    <Card className=" space-y-5 p-4 shadow-none" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[300px] w-full object-cover sm:h-[450px] rounded-2xl bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      
      </div>
    </Card>
  );
};

export default SkeletonCard;
