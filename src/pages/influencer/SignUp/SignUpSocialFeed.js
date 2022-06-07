import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConnectSocialFeed from "../../../components/ConnectSocialFeed";
import MyDialog from "../../../components/MyDialog";
import SuccessfullSignUp from "../../../components/SuccessfullSignUp";
import { postSignUp } from "../../../store/SignUp/action";

function SignUpSocialFeed({ setSignUpStatus }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpState = useSelector((state) => state.signUpState);
  const [showSuccessfullSignUp, setShowSuccessfullSignUp] = useState(false);
  const [socialFeed, setSocialFeed] = useState({
    name: "",
    show: false,
  });
  const [tempFeeds, setTempFeeds] = useState([]);
  const signUp = useSelector((state) => state.signUp);

  useEffect(() => {
    if (signUp.status === "success") {
      setShowSuccessfullSignUp(true);
    }
  }, [signUp]);

  const tempFeedsHandler = (isSelected, item) => {
    if (isSelected) {
      const temp = [...tempFeeds];
      const index = temp.indexOf((i) => i.name === item);
      temp.splice(index, 1);
      setTempFeeds([...temp]);
    } else {
      setTempFeeds([...tempFeeds, { name: item }]);
    }
  };

  function resetSuccessfullSignup() {
    setShowSuccessfullSignUp(false);
    dispatch({ type: "SIGN_UP_RESET" });
    navigate("/login");
  }

  return (
    <div className="w-[1100px] m-auto">
      <MyDialog isOpen={socialFeed.show} close={() => setSocialFeed({ name: "", show: false })} className="rounded-8">
        <ConnectSocialFeed close={() => setSocialFeed({ name: "", show: false })} name={socialFeed.name} />
      </MyDialog>
      <MyDialog isOpen={showSuccessfullSignUp} close={resetSuccessfullSignup} className="rounded-8">
        <SuccessfullSignUp close={resetSuccessfullSignup} />
      </MyDialog>
      <h1 className="text-3xl text-center mb-2">Social Feed</h1>
      <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex flex-wrap gap-8 justify-center">
        {social.map((item) => {
          const isSelected = tempFeeds.find((i) => i.name === item);
          return (
            <div
              key={item}
              className={`flex w-[180px] items-center justify-center gap-4 border-2 rounded-[4px] px-5 py-2 cursor-pointer ${
                isSelected && "border-b-active"
              }`}
              onClick={() => tempFeedsHandler(isSelected?.name ? true : false, item)}
            >
              <img className="w-[36px] h-[36px]" src={`/svgs/${item}.svg`} alt={item} />
              <div>
                <p className="text-sm font-bold">
                  {item.slice(0, 1).toUpperCase()}
                  {item.slice(1)}
                </p>
                <p
                  className="text-[13px] color-primary cursor-pointer underline"
                  // onClick={() => setSocialFeed({ name: item, show: true })}
                >
                  connect
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14 flex justify-center cursor-pointer">
        <button
          className="w-[400px] rounded-[50px] bg-primary text-white py-2"
          onClick={() => {
            dispatch({ type: "UPDATE_SIGNUP_STATE", data: { social_feeds: [...tempFeeds] } });
            const temp = { ...signUpState, social_feeds: [...tempFeeds] };
            delete temp.profile_pic;
            delete temp.cover_pic;
            delete temp.pan_card;
            delete temp.aadhar_card_back;
            delete temp.aadhar_card_front;
            delete temp.category;

            const data = new FormData();
            data.append("data", JSON.stringify(temp));
            data.append("profile_pic", signUpState.profile_pic);
            data.append("cover_pic", signUpState.cover_pic);
            data.append("pan_card", signUpState.pan_card);
            data.append("aadhar_card_back", signUpState.aadhar_card_back);
            data.append("aadhar_card_front", signUpState.aadhar_card_front);
            console.log("data", data);
            dispatch(postSignUp(data));
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignUpSocialFeed;

const social = [
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
  "mx takatak",
  "moj",
  "josh",
  "spotify",
];
