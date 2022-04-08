import React from "react";

function Home() {
  return (
    <div className="w-full min-w-screen h-full pb-20">
      <div className="bg-[#381069] w-full h-full min-h-[95vh]">
        <div className="max-w-[1200px] m-auto flex items-center justify-between">
          <div className=" text-white ">
            <p className="text-[24px]">Solutions for your digital marketing</p>
            <h1 className="text-[64px] mt-7 leading-[70px]">
              A digital agency <br /> for the digital age
            </h1>
            <button className="bg-[#FF0049] rounded-full w-[313px] h-[50px] mt-14 cursor-pointer">
              Are you influancer ? Join now
            </button>
          </div>
          <div className="mt-[3vh]">
            <img className="w-[620px] max-h-[90vh]" src={`/images/inf-landing1.png`} alt="img" />
          </div>
        </div>
      </div>
      <div className="text-center mt-14 max-w-[1200px] m-auto mb-14">
        <h1 className="text-[48px] font-medium">How it works</h1>
        <p className="text-[19px] text-[#455880] mt-2">New times require new ways of working.</p>
        <p className="text-[19px] text-[#455880]">This is how we create fresh products for you.</p>
        <div className="flex mt-24 justify-between">
          {/* 1 */}
          <div className="flex flex-col items-center justify-center w-[340px] text-center">
            <div className="relative w-[336px] h-[335px]">
              <img className="absolute" src="/svgs/bg-orange.svg" alt="svg" />
              <img className="absolute z-[2] top-[-70px]" src="/images/inf-landing2.png" alt="svg" />
            </div>
            <div className="text-left w-[239px]">
              <h3 className="text-[28px] text-[#1E266D] font-medium">Planning</h3>
              <p className="text-[17px] leading-[27px] text-[#455880] w-[239px]">
                We plan, we strategize, we sketch, we do research.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center justify-center w-[340px] text-center">
            <div className="relative w-[336px] h-[335px]">
              <img className="absolute" src="/svgs/bg-blue.svg" alt="svg" />
              <img className="absolute z-[2] top-[-55px] left-6" src="/images/inf-landing3.png" alt="svg" />
            </div>
            <div className="text-left w-[239px]">
              <h3 className="text-[28px] text-[#1E266D] font-medium">Planning</h3>
              <p className="text-[17px] leading-[27px] text-[#455880] w-[239px]">
                We plan, we strategize, we sketch, we do research.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center justify-center w-[340px] text-center">
            <div className="relative w-[336px] h-[335px]">
              <img className="absolute" src="/svgs/bg-yellow.svg" alt="svg" />
              <img className="absolute z-[2] top-[-70px]" src="/images/inf-landing4.png" alt="svg" />
            </div>
            <div className="text-left w-[239px]">
              <h3 className="text-[28px] text-[#1E266D] font-medium">Planning</h3>
              <p className="text-[17px] leading-[27px] text-[#455880] w-[239px]">
                We plan, we strategize, we sketch, we do research.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 w-[1200px] m-auto">
        <h1 className="text-[60px] leading-[65px] font-medium">
          Amazing features that will boost your <br /> productivity.
        </h1>
        <p className="text-[21px] mt-6 text-[#455880]">
          New times require new ways of working. This is how we create fresh products for you.{" "}
          <span className="block">New times require new ways of working. This is how we</span>
        </p>
        <div className="flex justify-between my-20">
          <div className="flex w-[570px] bg-white  flex-wrap justify-between item gap-10">
            {/* 1 */}
            <div className="text-left w-[250px]">
              <img className="" src="/svgs/inf-landing-icon1.svg" alt="img" />
              <h1 className="text-[24px] my-6">Design new way</h1>
              <p className="text-[16px] leading-[27px]">
                Lorem ipsum dolor si amet, an dus situ sint pertinacia consti tuto, mir dignsius quo great.
              </p>
            </div>
            {/* 2 */}
            <div className="text-left w-[250px]">
              <img className="" src="/svgs/inf-landing-icon2.svg" alt="img" />
              <h1 className="text-[24px] my-6">Better your brand</h1>
              <p className="text-[16px] leading-[27px]">
                Lorem ipsum dolor si amet, an dus situ sint pertinacia consti tuto, mir dignsius quo great.
              </p>
            </div>
            {/* 3 */}
            <div className="text-left w-[250px]">
              <img className="" src="/svgs/inf-landing-icon3.svg" alt="img" />
              <h1 className="text-[24px] my-6">Batter your brand</h1>
              <p className="text-[16px] leading-[27px]">
                Lorem ipsum dolor si amet, an dus situ sint pertinacia consti tuto, mir dignsius quo great.
              </p>
            </div>
            {/* 4 */}
            <div className="text-left w-[250px]">
              <img className="" src="/svgs/inf-landing-icon4.svg" alt="img" />
              <h1 className="text-[24px] my-6">Make a difference</h1>
              <p className="text-[16px] leading-[27px]">
                Lorem ipsum dolor si amet, an dus situ sint pertinacia consti tuto, mir dignsius quo great.
              </p>
            </div>
            <button className="bg-[#FF0049] rounded-full w-[313px] h-[50px] text-white cursor-pointer">
              Are you influancer ? Join now
            </button>
          </div>
          <div>
            <img className="w-[570px] h-full " src={`/images/inf-landing5.png`} alt="img" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative m-auto w-full m ax-w-[1600px] mb-[150px]">
        <img className="h-[800px] w-[50%]" src={`/images/inf-landing6.png`} alt="img" />
        <img className="h-[800px] w-[50%]" src={`/images/inf-landing7.png`} alt="img" />
        <h1 className="absolute text-[48px] font-medium leading-[60px] top-[31.5%] mr-[28px] text-center">
          <span className="text-white">Build a web</span>site which <br /> <span className="text-white">loads</span>{" "}
          fast.
        </h1>
        <p className="absolute text-[21px] text-center font-medium top-[48.5%] ">
          <span className="text-white">New times require new ways of</span> working. This is how we create <br />{" "}
          <span className="text-white">fresh produ</span>cts for you.
        </p>
        <button className="absolute top-[66%] bg-[#FF0049] rounded-full w-[313px] h-[50px] text-white cursor-pointer">
          Are you influancer ? Join now
        </button>
        <div className="absolute flex items-center justify-between px-6 rounded-[25px] bottom-[-15%] w-[1300px] h-[236px] bg-black">
          <div className="text-white px-10">
            <h1 className="text-[60px] mb-6 font-medium">24m</h1>
            <p className="w-[179px] text-[18px]">
              Installations <br /> Projects Completed
            </p>
          </div>
          <div className="text-white px-10">
            <h1 className="text-[60px] mb-6 font-medium">68k</h1>
            <p className="w-[179px] text-[18px]">
              Minutes of <br /> Zoom Meetings
            </p>
          </div>
          <div className="text-white px-10">
            <h1 className="text-[60px] mb-6 font-medium">1m+</h1>
            <p className="w-[179px] text-[18px]">
              Monthly views <br /> On Mobile Devices
            </p>
          </div>
          <div className="text-white px-10">
            <h1 className="text-[60px] mb-6 font-medium">24m</h1>
            <p className="w-[179px] text-[18px]">
              Installations <br /> Projects Completed
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center text-center">
        <h1 className="text-[60px] leading-[65px] font-medium mt-10">
          Amazing features that will boost your <br /> productivity.
        </h1>
        <p className="text-[21px] mt-6 text-[#455880]">
          New times require new ways of working. This is how we create fresh products for you.{" "}
          <span className="block">New times require new ways of working. This is how we</span>
        </p>
        <p className="mt-16 text-[34px] leading-[51px]">
          Donec metus lorem, vulputate at sapien <br /> sit amet, auctor iaculis lorem. In <br /> vel hendrerit nisi.
        </p>
        <p className="text-[18px] mt-10">Happy User</p>
        <p className="text-[14px]">Amazon</p>
        <div className="flex gap-10 mt-6">
          <img src="/svgs/inf-landing-icon5.svg" alt="" />
          <img src="/svgs/inf-landing-icon6.svg" alt="" />
          <img src="/svgs/inf-landing-icon7.svg" alt="" />
        </div>
      </div>
      <div className="relative flex text-center justify-center w-full max-w-[1600px] h-[950px] m-auto  mt-14">
        <img className="absolute " src="/images/inf-landing8.svg" alt=" " />
        <div className="absolute text-white mt-20 ">
          <h1 className="font-medium text-[40px]">Simplicity meets innovative Brands</h1>
          <p className="mt-6">
            Instantly generate design specs and connect integrations <br /> that power up your workflow.
          </p>
          <div className="flex flex-wrap gap-10 mt-16 w-[1200px] m-auto ">
            {socialOptions.map(({ name, img }) => {
              return (
                <div className="w-[250px] h-[264px] flex flex-col items-center justify-center gap-10 rounded-[18px] bg-light-transparent box-shadow-social hover:scale-110 hover:bg-dark-transparent ">
                  <img className="w-[100px] h-[100px]" src={`/svgs/${img}`} alt={name} />
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[1200px] m-auto text-center ">
        <h1 className="font-medium text-[48px] leading-[60px]">
          Offer your services in different <br /> categories!
        </h1>
        <p className="text-[21px] mt-6 text-[#455880]">
          New times require new ways of working. This is how we create fresh products for you.
          <span className="block">New times require new ways of working. This is how we</span>
        </p>
        <div className="flex gap-20 mt-20">
          <div className="text-left">
            <img className="w-[350px] h-[325px]" src="/images/inf-landing12.png" alt="img" />
            <h1 className="text-[38px] font-medium mt-4">Blue Jewellery</h1>
            <p className="text-[21px] text-[#455880] ">Arrangement of blue jewellery gift boxes.</p>
          </div>
          <div className="text-left">
            <img className="w-[350px] h-[325px]" src="/images/inf-landing9.png" alt="img" />
            <h1 className="text-[38px] font-medium mt-4">Blue Jewellery</h1>
            <p className="text-[21px] text-[#455880] ">Arrangement of blue jewellery gift boxes.</p>
          </div>
          <div className="text-left">
            <img className="w-[350px] h-[325px]" src="/images/inf-landing10.png" alt="img" />
            <h1 className="text-[38px] font-medium mt-4">Blue Jewellery</h1>
            <p className="text-[21px] text-[#455880] ">Arrangement of blue jewellery gift boxes.</p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex gap-10 w-[1200px] m-auto justify-between items-center">
        <div className="w-[500px]">
          <h1 className="text-[48px] leading-[50px]">Beyond conventional agencies.</h1>
          <p className="my-6 text-[24px]">
            Nulla facilisi. Nullam in magna id dolor blandit <br /> imperdiet Nulla facilisi. Nullam in magna
          </p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button
                  className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Branding Strategy
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button
                  className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Branding Strategy
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingThree">
                <button
                  className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Branding Strategy
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[650px] h-[560px]" src="/images/inf-landing11.png" alt="img" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between px-24 rounded-[25px] w-[1200px] m-auto h-[236px] bg-black mt-16">
          <h1 className="text-[48px] leading-[60px] text-white">
            Ready to launch with <br /> your next Brand?
          </h1>
          <button className="bg-[#FF0049] text-white rounded-full w-[313px] h-[50px] cursor-pointer">
            Are you influancer ? Join now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

const socialOptions = [
  {
    name: "Face Book",
    img: "facebook.svg",
  },
  {
    name: "Instagram",
    img: "instagram.svg",
  },
  {
    name: "Linkedin",
    img: "linkedin.svg",
  },
  {
    name: "Youtube",
    img: "youtube.svg",
  },
  {
    name: "Amazon",
    img: "amazon.svg",
  },
  {
    name: "Swiggy",
    img: "swiggy.svg",
  },
  {
    img: "josh.svg",
    name: "Josh",
  },
  {
    name: "Zomato",
    img: "zomato.svg",
  },
];
