import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Dropdown from "../../../components/Dropdown";
import { categoryList } from "../../influencer/SignUp/Category";
import ResonForRejction from "../../../components/ResonForRejction";
import MyDialog from "../../../components/MyDialog";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesData } from "../../../store/Categories/action";
import { personalDetailsSchema } from "../../../utils/formsSchema";
import { useNavigate, useParams } from "react-router-dom";
import { InfActiveReject } from "../../../store/Admin/Influencer/Active-Reject/action";
import { brandActiveReject } from "../../../store/Admin/Brand/Active-Reject/action";
import { getCountryData } from "../../../store/Country/action";
import { getStatesData } from "../../../store/State/action";


const initForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: {},
  organization_name: "",
  organization_type: "",
  about_yourself: "",
  address_details: {},
  profile_title: "",
  cover_pic: "",
  about_organization: "",
  address: "",
};
export const FormError = ({ children }) => {
  return <p className="text-red-500 text-xs italic mt-1">{children}</p>;
};
export const ImgUpload = ({ children }) => {
  return <p className="text-[13px] mt-1 text-green-600">Added {children}</p>;
};

function BrandViewDetails({ route }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rejectBid, setRejectBid] = useState(false);
  const [reason, setReason] = useState("");
  const [personalDetails, setPersonalDetails] = useState(initForm);
  let categoryData = [];
  const disable = route === "rejected-user";
  const dispatch = useDispatch();
  // categoryData = useSelector((state) => state?.categories);
  let newUserdata = useSelector((state) => state?.brandNewUser);

  const brandNewUser = newUserdata?.results.filter((i) => i.id == id)[0];

  let activeUserdata = useSelector((state) => state?.BrandActiveUser);

  // const BrandActiveUser = activeUserdata?.results.filter((i) => i?.BrandDetail?.id == id)[0]?.brandDetail;

  const BrandActiveUser = activeUserdata?.results.filter((i) => i?.id == id)[0];

  let rejectedUserData = useSelector((state) => state?.brandrejecteduser);

  const brandrejecteduser = rejectedUserData?.results.filter((i) => i.id == id)[0];


  useEffect(() => {
    dispatch(getCountryData());
    dispatch(getStatesData());
    
  }, []);
  let Country = useSelector((state) =>
  state?.countryList?.results.map((r) => {
      return { id: r?.id, name: r?.name, label: r?.name };
  })
  );

  let State = useSelector((state) =>
  state?.stateList?.results.map((r) => {
      return { id: r?.id, name: r?.name, label: r?.name };
  })
);


  const User = {
    first_name: (brandNewUser || BrandActiveUser || brandrejecteduser)?.first_name,
    last_name: (brandNewUser || BrandActiveUser || brandrejecteduser)?.last_name,
    email: (brandNewUser || BrandActiveUser || brandrejecteduser)?.email,
    phone: { dail_code: "+91", contact_number: (brandNewUser || BrandActiveUser || brandrejecteduser)?.contact_number },
    organization_name: (brandNewUser || BrandActiveUser || brandrejecteduser)?.organization_name,
    organization_type: (brandNewUser || BrandActiveUser || brandrejecteduser)?.organization_type,
    about_yourself: (brandNewUser || BrandActiveUser || brandrejecteduser)?.about_yourself,
    profile_title: (brandNewUser || BrandActiveUser || brandrejecteduser)?.profile_title,
    profile_pic: (brandNewUser || BrandActiveUser || brandrejecteduser)?.profile_pic,
    cover_pic: (brandNewUser || BrandActiveUser || brandrejecteduser)?.cover_pic,
    zipcode: (brandNewUser || BrandActiveUser || brandrejecteduser)?.zipcode,
    country: (brandNewUser || BrandActiveUser || brandrejecteduser)?.country,
    about_organization: (brandNewUser || BrandActiveUser || brandrejecteduser)?.about_organization,
    address: (brandNewUser || BrandActiveUser || brandrejecteduser)?.address,
    state: (brandNewUser || BrandActiveUser || brandrejecteduser)?.state,
  };

  const handleApproveInf = () => {
    const approvalData = new FormData();
    approvalData.append("brand_id", JSON.parse(id));
    approvalData.append("status", "active");
    dispatch(InfActiveReject(approvalData, navigate));
  };
  const handleRejectInf = () => {
    const rejectData = new FormData();
    console.log("rejectDatareject", rejectData);
    rejectData.append("brand_id", JSON.parse(id));
    rejectData.append("status", "reject");
    rejectData.append("reason", reason);
    dispatch(brandActiveReject(rejectData, navigate));
    setRejectBid(false);
    navigate("/admin/brand/rejected-user");
  };
  useEffect(() => {
    id && setPersonalDetails(User);
    dispatch(getCategoriesData());
  }, [brandNewUser, BrandActiveUser]);


  function updateQuotion (status, desc) {

    const id = BrandActiveUser?.id;


    const data = new FormData();
    data.append("status", status);
    data.append("brand_id", JSON.stringify(id));
    dispatch(brandActiveReject(data, navigate));
  }

  return (
    <>
      <div className="flex gap-4 px-4 w-[100%] justify-center items-center h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs
          options={[
            { title: "influencer" },
            {
              title: route,
              onClick: () => {
                navigate(`/admin/influencer/${route}`);
              },
            },
            { title: personalDetails.id },
          ]}
        />
      </div>
      <MyDialog isOpen={rejectBid} close={() => setRejectBid(false)} className="rounded-8">
        <ResonForRejction
          close={() => setRejectBid(false)}
          reason={reason}
          setReason={setReason}
          onSubmit={() => handleRejectInf()}
        />
      </MyDialog>
      <div className=" w-full min-w-infNavbar px-8 items-center justify-between">
        <div className=" gap-4 px-4 w-[100%] mt-[5px] bg-[white]">
          <h1 className="text-start text-2xl font-bold mt-4">Personal Details</h1>
          <p className="block mb-[15px] text-[12px]  font-[400] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur
          </p>

          <Formik
            enableReinitialize={true}
            initialValues={personalDetails}
            validationSchema={personalDetailsSchema}
            onSubmit={(values) => {
              console.log(values, "handle submit");
              setPersonalDetails({});
            }}
          >
            {({ handleChange, handleSubmit, values, errors, setFieldValue, touched}) => {
              return (
                <>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          value={values.first_name}
                          onChange={(e) => setFieldValue("first_name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Last Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          value={values.last_name}
                          onChange={(e) => setFieldValue("last_name", e.target.value)}
                        />
                      </div>
                      {/* <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          User Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-168"
                          id="userName"
                          type="text"
                          placeholder="User Name"
                          value={values.user_name}
                          onChange={(e) => setFieldValue("user_name", e.target.value)}
                        />
                      </div> */}
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Email
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="email"
                          type="text"
                          value={values.email}
                          placeholder="example@gmail.com"
                          onChange={(e) => {
                            setFieldValue("email", e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Phone Number
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="phone"
                          type="text"
                          placeholder="Phone Number"
                          value={values.phone.contact_number}
                          onChange={(e) => {
                            const numberReg = /^[0-9]*$/;
                            if (numberReg.test(e.target.value)) {
                              setFieldValue("phone", { dial_code: "+91", contact_number: e.target.value });
                            }
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Organization Name
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          //   id="email"
                          type="text"
                          value={values.organization_name}
                          placeholder="Boat"
                          onChange={(e) => {
                            setFieldValue("organization_name", e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                          Type of Organization
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          //   id="email"
                          type="text"
                          value={values.organization_type}
                          placeholder="LLP"
                          onChange={(e) => {
                            setFieldValue("organization_type", e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-10 flex gap-20">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Cover Picture</label>

                        <div className="mt-1 flex w-390 ">
                          <img
                            className="w-360 h-[100px] border-2 border-gray-300 border-dashed rounded-md"
                            // src={values?.cover_pic}
                            alt="avtar"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <label className="form-label inline-block mb-2">About Your Self </label>
                      <textarea
                        // disabled={disable}
                        className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        value={values.about_organization}
                        onChange={(e) => setFieldValue("about_organization", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-8 text-[16px] font-[600] w-[180px]">Contact Details</div>
                  <div className="block mb-[15px] text-[12px] font-[400] text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="w-[1100px]">
                    <div className="flex flex-wrap gap-10 items-center">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="country">
                          Country
                        </label>
                        <input
                          //   disabled={disable}
                          className="input-field w-390"
                          id="country"
                          type="text"
                          placeholder="country"
                            value={Country[0]?.name}
                            onChange={(val) => setFieldValue("country", { id: val?.id, name: val?.name })}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="city">
                          State
                        </label>
                        <input
                          //   disabled={disable}
                          className="input-field w-390"
                          id="city"
                          type="text"
                          placeholder="State"
                          value={State[0]?.name}
                          onChange={(val) => setFieldValue("state", { id: val?.id, name: val?.name })}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="address">
                          Address
                        </label>
                        <input
                          //   disabled={disable}
                          className="input-field w-390"
                          id="address"
                          type="text"
                          placeholder="address"
                            value={values.address}
                            onChange={handleChange("address")}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="zip code">
                          ZIP code
                        </label>
                        <input
                          disabled={disable}
                          className="input-field w-390"
                          id="ZIP code"
                          type="text"
                          value={values.zipcode}
                          placeholder="zip code"
                          onChange={handleChange("ZIP code")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="mt-14 cursor-pointer">
                      <button
                        type="button"
                        className="w-[150px] rounded-[50px] bg-primary text-white py-2"
                        onClick={() => {
                          BrandActiveUser && updateQuotion("active","")
                        }}
                        // onClick={() => {
                        //   console.log({ ...values, gender: values.gender.charAt(0) }, "values");
                        //   (route === "new-user" || route === "rejected-user") && handleApproveInf();
                        // }}
                      >
                        {"Approved"}
                        {/* {route === "new-user" && `Approve`}
                        {route === "active-user" && `Save`}
                        {route === "rejected-user" && `Re Active`} */}
                      </button>
                    </div>
                    <div className="m-14 cursor-pointer">
                      <button
                        type="button"
                        className="w-[150px] rounded-[50px] bg-[#FFFFFF] py-2 box-shadow-button"
                        onClick={() => {
                          route === "active-user"
                            ? setRejectBid(true)
                            : route === "active-user"
                            ? navigate(`/admin/brand/active-user`)
                            : navigate(`/admin/brand/rejected-user`);
                        }}
                      >
                        {"Reject"}
                        {/* {route === "new-user" ? `Reject` : `Cancel`} */}
                      </button>
                    </div>
                  </div>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
export default BrandViewDetails;
