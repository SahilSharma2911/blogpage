import Image from "next/image";
import Featured from "./comonents/featured/Featured";
import CategoryList from "./comonents/categoryList/CategoryList";
import CardList from "./comonents/cardList.jsx/CardList";
import Menu from "./comonents/menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div className="mx-[30px] sm:mx-[100px] flex mt-[30px] gap-6">
        <div className="w-full md:w-3/5">
          {/* <CardList page={page} />
          <CardList /> */}
          <CardList/>
        </div>
        <div className="w-2/5 hidden md:flex">
          <Menu/>
        </div>
      </div>
    </div>
  );
}
