import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const me = () => {
  return (
    <div className="py-20 " id="More">
      <h1 className="heading">
        More about {"\n"}
        <span className="text-purple">Me</span>
      </h1>
      <div className="flex flex-col items-center pt-9 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default me;
