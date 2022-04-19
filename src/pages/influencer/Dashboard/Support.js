import React from "react";

function Support() {
  return (
    <div className="flex flex-col gap-6 mt-20 justify-center items-center text-center">
      <h1 className="text-[32px] font-[500]">Stuck?Contact Us!</h1>
      <p className="text-[18px]  text-[#939393]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis enim, tristique amet justo, lectus <br />{" "}
        in sed. Lorem ipsum dolor sit amet, consectetur adip
      </p>
      <div className="flex gap-[150px] mt-20">
        <img src="/svgs/support-icon1.svg" alt="img" />
        <img src="/svgs/support-icon2.svg" alt="img" />
        <img src="/svgs/support-icon3.svg" alt="img" />
      </div>
      <img className="absolute right-4 bottom-0" src="/svgs/support-icon4.svg" alt="img" />
    </div>
  );
}

export default Support;
