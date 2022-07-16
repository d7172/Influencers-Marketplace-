import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Dropdown from "../../components/Dropdown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBrandActiveUserData } from "../../store/Admin/Brand/ActiveUser/action";
import { addNewCampaignData, updateCampaignData } from "../../store/Admin/Campaign/NewCampaign/action";
import { getCountryData } from "../../store/Country/action";
import { getStatesData } from "../../store/State/action";
import { getCategoriesData } from "../../store/Categories/action";
import { MultiSelect } from "react-multi-select-component";
import ResonForRejection from "../../components/ResonForRejction";
import MyDialog from "../../components/MyDialog";

const initForm = {
  title: "",
  from_date: "",
  to_date: "",
  about_campaign: "",
  category: "",
  campain_strategy: "",
  campain_goal: "",
  promotion_goal: "",
  project_duration_in_days: null,
  age_group: [],
  gender: { label: "", value: "" },
  audience_interest: "",
  number_of_influencer: "",
  number_of_followers: "",
  amount: 0,
  revise_amount: 0,
  admin_amount: 0,
  social_media_deliverables: [],
  minimum_facebook_reach: [],
  minimum_facebook_engagement: [],
  number_of_days: "",
  facebook_deliverables: "",
  industry: [],
  payout_type: "",
  budget_type: "",
  budget_per_influencer: "",
  expected_budget_per_influencer: "",
  note_from_brand: "",
  note_from_admin: "",
  terms_and_condition: "",
  brand: { id: null, name: "" },
  country: { id: null, name: "" },
  state: { id: null, name: "" },
};

const platforms = [
  "facebook",
  "instagram",
  "linkedin",
  "youtube",
  "amazon",
  "twitter",
  "blog",
  "zomato",
  "swiggy",
  "roposo",
  "mx_takatak",
  "moj",
  "josh",
  "spotify",
];

const industires = [
  "beauty",
  "health",
  "fashion",
  "food",
  "parenting",
  "entertainment",
  "humor",
  "travel",
  "fitness",
  "sports",
  "technology",
  "diy",
];

export const FormError = ({ children }) => {
  return <p className="text-red-500 text-xs italic mt-1">{children}</p>;
};
export const ImgUpload = ({ children }) => {
  return <p className="text-[13px] mt-1 text-green-600">Added {children}</p>;
};

function CampaignDetails({ route }) {
  const location = useLocation();
  const isAddNewCamp = location.pathname.includes("add");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [campFormDetails, setCampFormDetails] = useState(initForm);
  const [socialplatform, setSocialPlatform] = useState([]);
  const [deliverables, setDeliverables] = useState([]);
  const [selected, setSelected] = useState([]);
  const [reason, setReason] = useState("");
  const [reasonDialog, setReasonDialog] = useState(false);
  const options = [
    { id: 0, label: "Create post", value: "Create post" },
    { id: 1, label: "Create story", value: "Create story" },
    { id: 2, label: "Reels", value: "Reels" },
  ];

  let activeBrands = [];
  let Country = [];
  let State = [];
  let categoryData = [];

  useEffect(() => {
    dispatch(getBrandActiveUserData());
    dispatch(getCountryData());
    dispatch(getStatesData());
    dispatch(getCategoriesData());
    id && setCampFormDetails(Details);
  }, []);
  categoryData = useSelector((state) => state?.categories);
  activeBrands = useSelector((state) =>
    state?.BrandActiveUser?.results.map((r) => {
      return { id: r?.id, name: r?.first_name };
    })
  );
  Country = useSelector((state) =>
    state?.countryList?.results.map((r) => {
      return { id: r?.id, name: r?.name };
    })
  );
  State = useSelector((state) =>
    state?.stateList?.results.map((r) => {
      return { id: r?.id, name: r?.name };
    })
  );

  const campaignDetails = useSelector((state) =>
    route === "admin"
      ? state?.AdminNewCampaign?.results?.filter((r) => r.id == id)[0]
      : state?.BrandNewCampaign?.results?.filter((r) => r.id == id)[0]
  );

  const Details = {
    title: campaignDetails?.title,
    from_date: campaignDetails?.from_date,
    to_date: campaignDetails?.to_date,
    about_campaign: campaignDetails?.about_campaign,
    category: campaignDetails?.category,
    campain_strategy: campaignDetails?.campain_strategy,
    campain_goal: campaignDetails?.campain_goal,
    promotion_goal: campaignDetails?.promotion_goal,
    project_duration_in_days: campaignDetails?.project_duration_in_days,
    age_group: campaignDetails?.age_group,
    gender: { label: campaignDetails?.gender === "M" ? "Male" : "Female", value: campaignDetails?.gender },
    audience_interest: campaignDetails?.audience_interest,
    number_of_influencer: campaignDetails?.number_of_influencer,
    number_of_followers: campaignDetails?.number_of_followers,
    amount: campaignDetails?.amount,
    admin_amount: campaignDetails?.admin_amount,
    revise_amount: campaignDetails?.revise_amount,
    social_platform: campaignDetails?.social_platform,
    minimum_facebook_reach: [campaignDetails?.minimum_facebook_reach],
    minimum_facebook_engagement: [campaignDetails?.minimum_facebook_engagement],
    number_of_days: campaignDetails?.number_of_days,
    facebook_deliverables: campaignDetails?.facebook_deliverables,
    industry: campaignDetails?.industry,
    payout_type: campaignDetails?.payout_type,
    budget_type: campaignDetails?.budget_type,
    budget_per_influencer: campaignDetails?.budget_per_influencer,
    expected_budget_per_influencer: campaignDetails?.expected_budget_per_influencer,
    note_from_brand: campaignDetails?.note_from_brand,
    note_from_admin: campaignDetails?.note_from_admin,
    terms_and_condition: campaignDetails?.terms_and_condition,
    brand: { id: campaignDetails?.brand, name: campaignDetails?.brand_name },
    country: { id: null, name: campaignDetails?.country },
    state: { id: null, name: campaignDetails?.state },
    social_media_deliverables: campaignDetails?.social_media_deliverables,
  };

  const [deliverablesRow, setDeliverablesRow] = useState([]);

  function handlePlatformChange(isChecked, arr, social_platform, setFieldValue, currentcheckbox) {
    let temp1;
    let temp2 = arr;
    if (isChecked) {
      temp1 = [
        {
          platform: social_platform,
          deliverables: [],
          minimum_reach: null,
          minimum_engagement: null,
          duration: null,
          amount: null,
        },
      ];
      console.log(temp1, "sddsdsdsd");
      temp2 = temp2.concat(temp1);
      if (temp2.length <= 5) {
        setFieldValue("social_media_deliverables", temp2);
      } else {
        currentcheckbox.target.checked = false;
        alert("You can select only 5 platforms");
      }
    } else {
      temp2 = arr.filter((obj) => obj.platform !== social_platform);
      console.log(temp2, "temp2");
      setFieldValue("social_media_deliverables", temp2);
    }
    setFieldValue([]);
  }

  useEffect(() => {
    setDeliverables(
      socialplatform.map((item) => {
        return {
          platform: item,
          deliverables: [],
          minimum_reach: "",
          minimum_engagement: "",
          amount: null,
          duration: null,
        };
      })
    );
    setDeliverablesRow(
      socialplatform.map((item, index) => {
        return <DeliverableRow platform={item} values={deliverables[index]} />;
      })
    );
  }, [socialplatform]);
  const selectdelevrable = (e) => {
    var newdeliverbles = [];
    for (let index = 0; index < e.length; index++) {
      newdeliverbles.push({
        label: e[index],
        value: e[index],
      });
    }
    return newdeliverbles;
  };
  return (
    <>
      <div className="flex items-center gap-4 px-4 w-[100%] h-[50px] bg-[#F1F1F1]">
        <Breadcrumbs
          options={[
            {
              title: "Dashboard",
              onClick: () => {
                navigate(`/${route}/dashboard`);
              },
            },
            {
              title: "Campaign",
              onClick: () => {
                navigate(`/${route}/campaign/new-campaign`);
              },
            },
            { title: "New Campaign" },
          ]}
        />
      </div>
      <MyDialog isOpen={reasonDialog} close={() => setReasonDialog(false)} className="rounded-8">
        <ResonForRejection
          close={() => setReasonDialog(false)}
          reason={reason}
          setReason={setReason}
          onSubmit={() => {
            setReasonDialog(false);
          }}
        />
      </MyDialog>
      <div className="px-8 py-5">
        <h1 className="text-start text-2xl font-bold mb-2">Campaign Details</h1>
        <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <Formik
          enableReinitialize={true}
          initialValues={campFormDetails}
          onSubmit={(values) => {
            const data = {};
          }}
        >
          {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => {
            return (
              <div className="w-full m-auto">
                <div className="flex flex-wrap gap-10 items-center">
                  <div className="w-[30%] ">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="campaignTitle">
                      Campaign Title<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="input-field w-full"
                      id="title"
                      type="text"
                      value={values.title}
                      onChange={handleChange("title")}
                    />
                    {errors.title && touched.title && <FormError>{errors.title}</FormError>}
                  </div>
                  <div className="datepicker">
                    <label className="block text-gray-700 text-sm mb-2">
                      Campaign Date<span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      type="date"
                      className="input-field text-gray-500 mr-8"
                      placeholder="From"
                      value={values.from_date}
                      onChange={(e) => setFieldValue("from_date", e.target.value)}
                    />
                    {errors.from_date && touched.from_date && <FormError>{errors.from_date}</FormError>}
                    <input
                      type="date"
                      className="input-field text-gray-500"
                      placeholder="To"
                      value={values.to_date}
                      onChange={(e) => setFieldValue("to_date", e.target.value)}
                    />
                    {errors.to_date && touched.to_date && <FormError>{errors.to_date}</FormError>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Brand
                    </label>
                    <div>
                      <Dropdown
                        dropdownStyle="w-168"
                        className="w-168"
                        label={values?.brand?.name?.length ? values?.brand?.name : "Brand"}
                        options={activeBrands?.map((data) => {
                          return {
                            label: data.name,
                            id: data.id,
                          };
                        })}
                        onChange={(val) => setFieldValue("brand", { id: val.id, name: val.label })}
                      />
                      {errors.brand && touched.brand && <FormError>{errors.brand}</FormError>}
                    </div>
                  </div>
                  <div>
                    <label className="form-label inline-block mb-2">
                      About Your Campaign <span className="text-red-500">*</span>{" "}
                    </label>
                    <textarea
                      className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={values.about_campaign}
                      onChange={(e) => setFieldValue("about_campaign", e.target.value)}
                    />
                    {errors.about_campaign && touched.about_campaign && <FormError>{errors.about_campaign}</FormError>}
                  </div>
                  <div className="w-[30%] ">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Campaign Strategy<span className="text-red-500">*</span>
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.campain_strategy?.length ? values?.campain_strategy : "Shout Out Campaing"}
                        options={[
                          {
                            label: "Giveaway Campaing",
                          },
                          {
                            label: "Affiliate Campaing",
                          },
                          {
                            label: "Video Creation Campaing",
                          },
                          {
                            label: "Product Review",
                          },
                        ]}
                        onChange={(val) => setFieldValue("campain_strategy", val.label)}
                      />
                      {errors.campain_strategy && touched.campain_strategy && (
                        <FormError>{errors.campain_strategy}</FormError>
                      )}
                    </div>
                  </div>
                  <div className="w-[30%] mr-16">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Campaing Goal<span className="text-red-500">*</span>
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.campain_goal?.length ? values?.campain_goal : "Lead Genration"}
                        options={[
                          {
                            label: "CPC",
                          },
                          {
                            label: "Brand Awareness",
                          },
                          {
                            label: "Lead Generation",
                          },
                          {
                            label: "Reach",
                          },
                        ]}
                        onChange={(val) => setFieldValue("campain_goal", val.label)}
                      />
                      {errors.campain_goal && touched.campain_goal && <FormError>{errors.campain_goal}</FormError>}
                    </div>
                  </div>
                  <div className="w-[30%] ">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Project Duration ( No of Days )<span className="text-red-500">*</span>
                    </label>
                    <div>
                      <input
                        className="input-field w-full"
                        id="project_duration_in_days"
                        type="number"
                        placeholder="2"
                        value={values.project_duration_in_days}
                        onChange={(e) => setFieldValue("project_duration_in_days", e.target.value)}
                      />
                      {errors.project_duration_in_days && touched.project_duration_in_days && (
                        <FormError>{errors.project_duration_in_days}</FormError>
                      )}
                    </div>
                  </div>
                  <div className="w-[30%] mr-16">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Age Group:{" "}
                      <p className="text-gray-700 inline-block text-sm mt-4">{values?.age_group.toString()}</p>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <input
                        className="w-390"
                        id="age_group"
                        type="range"
                        min={10}
                        max={50}
                        value={values.age_group}
                        onChange={(val) => setFieldValue((values.age_group[0] = val.target.value))}
                      />
                      {errors.age_group && touched.age_group && <FormError>{errors.age_group}</FormError>}
                    </div>
                  </div>
                  <div className="w-[30%] cursor-pointer">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Add Category Details
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.category?.length ? values?.category : "category"}
                        // options={categoryData ? categoryData : []}
                        options={[
                          {
                            label: "category",
                          },
                          {
                            label: "Fashion Wear",
                          },
                        ]}
                        onChange={(val) => setFieldValue("category", val.label)}
                        // onChange={(val) => setFieldValue("category", val.name)}
                        // optionsLabel={"name"}
                      />
                      {errors.audience_interest && touched.audience_interest && (
                        <FormError>{errors.audience_interest}</FormError>
                      )}
                    </div>
                  </div>
                  <div className="w-[30%] ">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Country<span className="text-red-500">*</span>
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.country?.name?.length ? values.country.name : "Select country"}
                        options={Country}
                        optionsLabel="name"
                        onChange={(val) => setFieldValue("country", { id: val.id, name: val.name })}
                      />
                      {errors.country && touched.country && <FormError>{errors.country}</FormError>}
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      State<span className="text-red-500">*</span>
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.state?.name?.length ? values.state.name : "select state"}
                        options={State}
                        optionsLabel="name"
                        onChange={(val) => setFieldValue("state", { id: val.id, name: val.name })}
                      />
                      {errors.state && touched.state && <FormError>{errors.state}</FormError>}
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Gender
                    </label>
                    <div>
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values.gender.label.length ? values.gender.label : "Gender"}
                        options={[
                          {
                            label: "Male",
                            value: "M",
                          },
                          {
                            label: "Female",
                            value: "F",
                          },
                        ]}
                        onChange={(val) => setFieldValue("gender", { label: val.label, value: val.value })}
                      />
                      {errors.gender && touched.gender && <FormError>{errors.gender}</FormError>}
                    </div>
                  </div>

                  <div className="w-[30%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Audience Interest
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.audience_interest?.length ? values.audience_interest : "Fashion Wear"}
                        options={[
                          {
                            label: "Fashion Wear",
                          },
                          {
                            label: "Fashion Wear",
                          },
                        ]}
                        onChange={(val) => setFieldValue("audience_interest", val.label)}
                      />
                      {errors.audience_interest && touched.audience_interest && (
                        <FormError>{errors.audience_interest}</FormError>
                      )}
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Number of Influencer
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.number_of_influencer?.length ? values.number_of_influencer : "1"}
                        options={[
                          {
                            label: "2",
                          },
                          {
                            label: "3",
                          },
                          {
                            label: "4",
                          },
                          {
                            label: "5",
                          },
                        ]}
                        onChange={(val) => setFieldValue("number_of_influencer", val.label)}
                      />
                      {errors.number_of_influencer && touched.number_of_influencer && (
                        <FormError>{errors.number_of_influencer}</FormError>
                      )}
                    </div>
                  </div>

                  <div className="w-[30%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Number of Followers
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.number_of_followers?.length ? values.number_of_followers : "1k - 10k"}
                        options={[
                          {
                            label: "10k - 20k",
                          },
                          {
                            label: "20k - 30k",
                          },
                        ]}
                        onChange={(val) => setFieldValue("number_of_followers", val.label)}
                      />
                      {errors.number_of_followers && touched.number_of_followers && (
                        <FormError>{errors.number_of_followers}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <h1 className="text-start text-2xl font-bold mb-2 mt-8">Where Do You Want To Promote</h1>
                  <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <div className="grid grid-cols-5 gap-16 ">
                  {platforms?.map((platform, index) => (
                    <div className="flex flex-col items-center">
                      <div
                        key={index}
                        className="flex justify-center items-center mb-2 relative campaignDetailsSVG-shadow w-fit p-3 h-fit rounded-[4rem] bg-white "
                      >
                        {/* {console.log(values.social_media_deliverables.length, "dasdasdasda")} */}
                        {/* {values.social_media_deliverables.length > 5 ? */}
                        <input
                          // disabled={values.social_media_deliverables.length < 5 ? false : true}
                          id={`${platform}`}
                          name="social_platform"
                          type="checkbox"
                          className="absolute top-0 right-[10px]"
                          onChange={(val) => {
                            handlePlatformChange(
                              val.target.checked,
                              values.social_media_deliverables,
                              platform,
                              setFieldValue,
                              val
                            );
                          }}
                        />
                        <label htmlFor={`${platform}`}>
                          {" "}
                          <img src={`/svgs/${platform}.svg`} className="platformsSVG" alt="platform" />
                        </label>{" "}
                      </div>
                      <p className="text-sm font-[500]">{platform.charAt(0).toUpperCase() + platform.slice(1)}</p>
                    </div>
                  ))}
                </div>
                {values?.social_media_deliverables?.map((obj, index) => {
                  return (
                    <div className="my-8 flex items-center gap-8 border rounded-md p-4" key={index + "sd"}>
                      <Formik initialValues={obj} enableReinitialize>
                        {({ item, errors, setFieldValue, touched }) => {
                          return (
                            <>
                              <div className="flex flex-col w-full">
                                <label className="block text-gray-700 text-sm mb-2 capitalize">
                                  Minimum {obj?.platform} Reach
                                </label>
                                <input
                                  type="range"
                                  name="minimum_reach"
                                  min={0}
                                  max={10}
                                  defaultValue={0}
                                  className="px-4 py-2 w-auto"
                                  onChange={(e) => setFieldValue("minimum_reach", (obj.minimum_reach = e.target.value))}
                                  value={obj.minimum_reach}
                                />
                                <p className="text-gray-700 text-sm"> Value: {obj.minimum_reach}</p>
                              </div>
                              <div className="flex flex-col w-full">
                                <label className="block text-gray-700 text-sm mb-2 capitalize">
                                  Minimum {obj?.platform} Engagement
                                </label>
                                <input
                                  type="range"
                                  name="minimum_engagement"
                                  min={0}
                                  max={10}
                                  defaultValue={0}
                                  className="px-4 py-2 w-auto"
                                  onChange={(e) =>
                                    setFieldValue("minimum_engagement", (obj.minimum_engagement = e.target.value))
                                  }
                                  // onChange={(e) => setFieldValue("minimum_engagement", e.target.value)}
                                  value={obj.minimum_engagement}
                                />

                                <p className="text-gray-700 text-sm"> Value: {obj.minimum_engagement}</p>
                              </div>
                              <div className="w-auto">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                                  duration
                                </label>
                                <Dropdown
                                  dropdownStyle="w-[100px]"
                                  className="w-[100px]"
                                  label={obj?.duration?.length ? obj.duration : "1"}
                                  options={[
                                    {
                                      label: "2",
                                    },
                                    {
                                      label: "3",
                                    },
                                  ]}
                                  value={obj.duration}
                                  onChange={(e) => setFieldValue("duration", (obj.duration = e.label))}
                                />
                              </div>

                              <div className="w-full">
                                <label className="block text-gray-700 text-sm mb-2 capitalize" htmlFor="firstName">
                                  {obj?.platform.length ? obj?.platform : null} Deliverables
                                </label>
                                <MultiSelect
                                  options={options}
                                  value={selectdelevrable(obj.deliverables)}
                                  name="deliverables"
                                  onChange={(e) => {
                                    let arr = [];
                                    e?.map((item, index) => {
                                      arr.push(item.label);
                                    });
                                    setFieldValue("deliverables", (obj.deliverables = arr));
                                  }}
                                  labelledBy={"Select"}
                                  hasSelectAll={false}
                                />
                              </div>
                              <div className="flex flex-col text-left">
                                <label htmlFor="" className="block text-sm text-gray-700 mb-2">
                                  Price
                                </label>
                                <input
                                  type="number"
                                  className="input-field w-[110px] h-[48px] text-sm rounded-md px-2 py-1 border focus:outline-none text-gray-500"
                                  placeholder="Enter price"
                                  value={obj.amount}
                                  onChange={
                                    (e) => setFieldValue("amount", (obj.amount = e.target.value))
                                    // console.log("amout",e.target.value)
                                  }
                                />
                              </div>
                            </>
                          );
                        }}
                      </Formik>
                      <div></div>
                    </div>
                  );
                })}
                {/* {console.log("deliverables", values.social_media_deliverables)} */}
                <div className="my-8">
                  <h1 className="text-start text-2xl font-bold mb-2 mt-4">Which Industry You Want To Target</h1>
                  <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <div className="grid grid-cols-5 gap-16 ">
                  {industires.map((industry, index) => (
                    <div className="flex flex-col items-center">
                      <div
                        key={index}
                        className="flex justify-center items-center mb-2 relative campaignDetailsSVG-shadow w-fit p-3 h-fit rounded-[4rem] bg-white "
                      >
                        {" "}
                        <input
                          id={`${industry}SVG`}
                          name="industrycheck"
                          type="checkbox"
                          className="absolute top-0 right-[10px]"
                          onChange={() => {
                            values.industry.includes(industry)
                              ? values.industry.splice(values.industry.indexOf(industry), 1)
                              : values.industry.push(industry);
                          }}
                        />{" "}
                        <label htmlFor={`${industry}SVG`}>
                          {" "}
                          <img src={`/svgs/${industry}.svg`} className="industrySVG" alt="industry" />
                        </label>{" "}
                      </div>
                      <p className="text-sm font-[500]">{industry.charAt(0).toUpperCase() + industry.slice(1)}</p>
                    </div>
                  ))}
                </div>
                <div className="my-8">
                  <h1 className="text-start text-2xl font-bold mb-2 mt-4">What Will Be The Payout Per Influencer ?</h1>
                  <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <div className="flex flex-wrap gap-10">
                  <div className="w-[27%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Payout Type
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.payout_type?.length ? values.payout_type : "Barter"}
                        options={[
                          {
                            label: "Barter",
                          },
                          {
                            label: "Barter",
                          },
                        ]}
                        onChange={(val) => setFieldValue("payout_type", val.label)}
                      />
                      {errors.payout_type && touched.payout_type && <FormError>{errors.payout_type}</FormError>}
                    </div>
                  </div>
                  <div className="w-[27%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Budget Type
                    </label>
                    <div className="w-full">
                      <Dropdown
                        dropdownStyle="w-full"
                        className="w-full"
                        label={values?.budget_type?.length ? values.budget_type : "Fixed"}
                        options={[
                          {
                            label: "Fixed",
                          },
                          {
                            label: "Fixed",
                          },
                        ]}
                        onChange={(val) => setFieldValue("budget_type", val.label)}
                      />
                      {errors.budget_type && touched.budget_type && <FormError>{errors.budget_type}</FormError>}
                    </div>
                  </div>
                  <div className="w-[27%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Budget Per Influencer
                    </label>
                    <div className="w-full">
                      <input
                        className="input-field w-full"
                        id="budget_per_influencer"
                        type="number"
                        value={values?.budget_per_influencer}
                        onChange={handleChange("budget_per_influencer")}
                      />

                      {errors.budget_per_influencer && touched.budget_per_influencer && (
                        <FormError>{errors.budget_per_influencer}</FormError>
                      )}
                    </div>
                  </div>
                  <div className="w-[27%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
                      Expected Budget Per Influencer
                    </label>
                    <div className="w-full">
                      <input
                        className="input-field w-full"
                        id="expected_budget_per_influencer"
                        type="number"
                        value={values?.expected_budget_per_influencer}
                        onChange={handleChange("expected_budget_per_influencer")}
                      />
                      {errors.expected_budget_per_influencer && touched.expected_budget_per_influencer && (
                        <FormError>{errors.expected_budget_per_influencer}</FormError>
                      )}
                    </div>
                  </div>
                  <div className="w-[27%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="amount">
                      Brand Amount<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="input-field w-full"
                      id="amount"
                      type="text"
                      value={values.amount}
                      onChange={handleChange("amount")}
                    />
                    {errors.amount && touched.amount && <FormError>{errors.amount}</FormError>}
                  </div>
                 { route == "admin" ? <div className="w-[27%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="admin_amount">
                      Admin Amount<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="input-field w-full"
                      id="admin_amount"
                      type="text"
                      value={values.admin_amount}
                      onChange={handleChange("admin_amount")}
                    />
                    {errors.admin_amount && touched.admin_amount && <FormError>{errors.admin_amount}</FormError>}
                  </div> : 
                  null
                  }
                 {route == "admin" ?  <div className="w-[27%]">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="revise_amount">
                      Revise price<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="input-field w-full"
                      id="revise_amount"
                      type="text"
                      disabled
                      value={values.amount - values.admin_amount}
                      onChange={handleChange("revise_amount")}
                    />
                    {errors.revise_amount && touched.revise_amount && <FormError>{errors.revise_amount}</FormError>}
                  </div>:
                  null
                  }
                </div>
                <div className="my-8">
                  <h1 className="text-start text-2xl font-bold mb-2 mt-4">Describe Your Campaign</h1>
                  <p className="w-390 inline-block text-gray-500 text-sm text-start m-auto mb-4">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <div className="mb-8">
                  <label className="form-label inline-block mb-2">
                    Note from Brand <span className="text-red-500">*</span>{" "}
                  </label>
                  <textarea
                    className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={values.note_from_brand}
                    onChange={(e) => setFieldValue("note_from_brand", e.target.value)}
                  />
                  {errors.note_from_brand && touched.note_from_brand && <FormError>{errors.note_from_brand}</FormError>}
                </div>
                <div className="mb-8">
                  <label className="form-label inline-block mb-2">
                    Terms & Conditions <span className="text-red-500">*</span>{" "}
                  </label>
                  <textarea
                    className="block w-[860px] h-[148px] px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-blue-300 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={values.terms_and_condition}
                    onChange={(e) => setFieldValue("terms_and_condition", e.target.value)}
                  />
                  {errors.terms_and_condition && touched.terms_and_condition && (
                    <FormError>{errors.terms_and_condition}</FormError>
                  )}
                </div>

                <div className="mt-14 flex ">
                  <button
                    type="button"
                    className="rounded-[50px] bg-[#3751FF] text-white px-8 py-2 "
                    onClick={() => {
                      const temp = {
                        ...values,
                        brand: values.brand.id,
                        country: values.country.id,
                        state: values.state.id,
                        gender: values.gender.value,
                        socialplatform: values.social_media_deliverables,
                      };

                      const data = {
                        ...values,

                        brand: values.brand.id,
                        country: values.country.id,
                        state: values.state.id,
                        gender: values.gender.value,

                        social_platform: ["wre", "qww"],
                        minimum_facebook_reach: ["12", "30"],
                        minimum_facebook_engagement: ["45", "30"],
                        number_of_days: "10",
                        facebook_deliverables: "40",
                        social_media_deliverables: values.social_media_deliverables,
                      };
                      console.log("data", data);
                      if (id) {
                        const updatedData = { id: id, ...data };
                        dispatch(updateCampaignData(updatedData, navigate));
                      } else {
                        // dispatch(addNewCampaignData(data, navigate)) : dispatch(addNewCampaignData(data, navigate));
                        dispatch(addNewCampaignData(data, navigate));
                      }
                    }}
                  >
                    {id ? "Approve campaign" : "Create Campaign"}
                  </button>
                  <button
                    type="button"
                    className="rounded-[50px] text-[#969BA0] px-4 py-2 underline"
                    onClick={() => {
                      if (id) {
                        setReasonDialog(true);
                      } else {
                       route == "admin" ?
                        navigate("/admin/campaigns") : navigate("brand/new-user");
                      }
                    }}
                  >
                    {id ? "Reject" : "Cancel"}
                  </button>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default CampaignDetails;

export const imageSvg = (
  <svg
    className="mx-auto h-12 w-12 text-gray-400"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
function DeliverableRow({ platform }) {
  // const [deliverablesValues, setDeliverablesValues] = useState([]);
}
// const social_media_deliverables = [
//   {
//     platform: "instagram",
//     deliverables: ["Create story","Create post","Reels"],
//     minimum_reach: 2000,
//     minimum_engagement: 1,
//     duration: 1,
//     price: 1000
//   },
//   {
//     platform: "facebook",
//     deliverables:["Create story","Create post"],
//     minimum_reach: 156,
//     minimum_engagement: 25,
//     duration: 6,
//     price: 7800
//   }
// ]
// setNewMemory({ ...newMemory, [e.target.name]: e.target.value });
