import React from "react";

HeaderComponent.propTypes = {};

function HeaderComponent(props) {
  return (
    <header className="bg-[#212A3E] py-5 sticky top-0">
      <div className="mx-3 xl:max-w-[1280px] flex justify-between items-center">
          <img
            src="/logo-no-background.png"
            alt=""
            className="logo w-[30%]"
          />
        <div className="">
          <i className="fa-solid fa-bars text-3xl text-white"></i>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
