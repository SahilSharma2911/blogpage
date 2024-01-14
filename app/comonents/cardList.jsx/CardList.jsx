import React from "react";
// import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
// import Card from "../card/Card";

// const getData = async (page,cat) => {
//   const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("failed");
//   }

//   return res.json();
// };

const CardList = async ({ page, cat }) => {
  //   const { posts, count } = await getData(page,cat);

  //   const POST_PER_PAGE = 2;

  //   const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  //   const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className=" mt-[20px]">
      <h1 className="text-3xl font-semibold">Recent Posts</h1>
      <div className="">
        {/* {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))} */}
        <Card />
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={cat}  /> */}
      <Pagination/>
    </div>
  );
};

export default CardList;
