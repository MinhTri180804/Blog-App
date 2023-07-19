import React from "react";

FooterComponent.propTypes = {};

function FooterComponent(props) {
  return (
    <footer className="bg-[#212A3E] py-7">
      <div className="container flex justify-center items-center">
        <div className="slogan w-[50%] ">
          <img src="/slogan-no-background.png" alt="" />
        </div>
      </div>
      <div className="list-contact flex gap-6 justify-center items-center mt-[20px]">
        <i className="fa-brands fa-facebook-f w-[35px] h-[35px] text-center leading-[35px] rounded-[50%] bg-white"></i>
        <i className="fa-brands fa-tiktok w-[35px] h-[35px] text-center leading-[35px] rounded-[50%] bg-white"></i>
        <i className="fa-brands fa-twitter w-[35px] h-[35px] text-center leading-[35px] rounded-[50%] bg-white"></i>
        <i className="fa-solid fa-envelope w-[35px] h-[35px] text-center leading-[35px] rounded-[50%] bg-white"></i>
        <i className="fa-solid fa-location-dot w-[35px] h-[35px] text-center leading-[35px] rounded-[50%] bg-white"></i>
      </div>
    </footer>
  );
}

export default FooterComponent;
