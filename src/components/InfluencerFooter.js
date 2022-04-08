import React from "react";

function InfluencerFooter() {
  return (
    <div className="w-[1200px] m-auto flex flex-col">
      <div className="flex w-full h-[250px] justify-between">
        <div className="w-[400px]">
          <h1 className="text-[32px] text-[#1E266D]">Influencers</h1>
          <p className="text-[18px] leading-[26px] w-[300px] text-[#455880] mt-3">
            Influencer marketplaces built to work seamlesly with the impacting block editor to create beautifully
            designed pages in minutes.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-[150px] items-start">
          <h1 className="text-[22px] text-[#1E266D]">Company</h1>
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Blog</button>
        </div>
        <div className="w-[200px] text-[#1E266D]">
          <h1 className="text-[22px] mb-2.5">Product</h1>
          <p className="mb-2">
            Brand? <button className="underline color-primary">Join us</button>
          </p>
          <p>
            Brand? <button className="underline color-primary">Join us</button>
          </p>
        </div>
        <div className="text-[#1E266D] w-[200px]">
          <h1>Resources</h1>
          <div className="flex gap-3.5 my-2">
            <img src="/svgs/small-facebook-icon.svg" alt="" />
            <img src="/svgs/small-instagram-icon.svg" alt="" />
            <img src="/svgs/small-twitter-icon.svg" alt="" />
            <img src="/svgs/small-ball-icon.svg" alt="" />
          </div>
          <h1>Contact us</h1>
          <p>1800-1200-1330</p>
          <p>test@domain.com</p>
        </div>
      </div>
      <div className="flex h-[80px] items-center justify-between">
        <p className="text-[14px] text-[#455880]">Copyright &copy;2022 tempy.club</p>
        <div>
          <button className="mr-10 text-[14px] text-[#455880]">Privacy Policy</button>
          <button className="text-[14px] text-[#455880]">Terms of Service</button>
        </div>
      </div>
    </div>
  );
}

export default InfluencerFooter;
