import React from "react";

function Support() {
  return (
    <div className="flex flex-col boxShadow gap-6 mt-10 ml-10 mr-8 pt-8 pb-8 justify-center items-center text-center relative">
      <h1 className="text-[32px] font-[500]">Stuck?Contact Us!</h1>
      <p className="text-[18px]  text-[#939393]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis enim, tristique amet justo, lectus <br />{" "}
        in sed. Lorem ipsum dolor sit amet, consectetur adip
      </p>
      <div className="flex gap-[75px] mt-20">
        <div className="bg-white boxShadow rounded p-10" >
          <img className="w-[45px]" src="/svgs/support-icon1.svg" alt="img" />
        </div>
        <div className="bg-white boxShadow rounded p-10" >
          <img className="w-[45px]" src="/svgs/support-icon2.svg" alt="img" />
        </div>
        <div className="bg-white boxShadow rounded p-10" >
          <img className="w-[45px]" src="/svgs/support-icon3.svg" alt="img" />
        </div>
      </div>
      <img className="absolute right-0 bottom-0 w-[290px]" src="/images/undraw_searching_p5ux-1.png" alt="img" />
    </div>
  );
}

export default Support;