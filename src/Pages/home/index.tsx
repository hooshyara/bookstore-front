import React from "react";
import Header from "./header/header";
import Item from "../../Components/home/item";

export default function Home() {
  return (
    <>
      <div className="d-flex flex-column gap-4">
        <Header />
        <div className="d-flex gap-3 align-items-center justify-content-around flex-wrap">
          <Item title="کتاب صوتی" link="src/assets/home/category/1.png"/>
          <Item title="کتاب متنی" link="src/assets/home/category/2.png"/>
          <Item title="کتاب تاریخی" link="src/assets/home/category/3.png"/>
          <Item title="رمان خارجی" link="src/assets/home/category/4.jpg"/>
          <Item title="روانشناسی" link="src/assets/home/category/5.png"/>
        </div>
      </div>
    </>
  );
}
