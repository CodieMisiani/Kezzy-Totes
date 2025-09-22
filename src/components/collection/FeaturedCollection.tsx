import React from "react";
import { Button } from "../ui/button";

function FeaturedCollection() {
  return (
    <>
      <section className="w-[700px] mr-auto ml-auto">
        <div>
          <h2 className="text-lg sm:text-5lg md:text-7lg  cursor-default">
            Featured Collection
          </h2>
        </div>
        <div>
          <h1>
            Discover our most loved designs, crafted with care and built to last
          </h1>
        </div>
        <div></div>
        <div>
          <Button>View All Products</Button>
        </div>
      </section>
    </>
  );
}

export default FeaturedCollection;
