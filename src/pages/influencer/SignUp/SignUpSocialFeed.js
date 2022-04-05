import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ConnectSocialFeed from "../../../components/ConnectSocialFeed";
import MyDialog from "../../../components/MyDialog";
import SuccessfullSignUp from "../../../components/SuccessfullSignUp";
import { postSignUp } from "../../../store/SignUp/action";

function SignUpSocialFeed({ signUp, setSignUp, setSignUpStatus }) {
  const dispatch = useDispatch();
  const [socialFeed, setSocialFeed] = useState({
    name: "",
    show: false,
  });
  return (
    <div className="w-[1100px] m-auto">
      <MyDialog isOpen={socialFeed.show} close={() => setSocialFeed({ name: "", show: false })} className="rounded-8">
        <ConnectSocialFeed
          signUp={signUp}
          close={() => setSocialFeed({ name: "", show: false })}
          setSignUp={setSignUp}
          name={socialFeed.name}
        />
      </MyDialog>
      <MyDialog isOpen={false} close={() => {}} className="rounded-8">
        <SuccessfullSignUp />
      </MyDialog>
      <h1 className="text-3xl text-center mb-2">Social Feed</h1>
      <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
        Log in to your account using email and password provided during registration.
      </p>
      <div className="flex flex-wrap gap-8 justify-center">
        {social.map((item) => (
          <div key={item} className="flex w-[180px] items-center justify-center gap-4 border-2 rounded-[4px] px-5 py-2">
            <img className="w-[36px] h-[36px]" src={`/svgs/${item}.svg`} alt={item} />
            <div>
              <p className="text-sm font-bold">
                {item.slice(0, 1).toUpperCase()}
                {item.slice(1)}
              </p>
              <p
                className="text-[13px] color-primary cursor-pointer underline"
                onClick={() => setSocialFeed({ name: item, show: true })}
              >
                connect
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex justify-center cursor-pointer">
        <button
          className="w-[400px] rounded-[50px] bg-primary text-white py-2"
          onClick={() => {
            const temp = { ...signUp };
            delete temp.profile_pic;
            delete temp.cover_pic;
            delete temp.pan_card;
            delete temp.aadhar_card_back;
            delete temp.aadhar_card_front;

            const data = new FormData();
            data.append("req_params", temp);
            data.append("profile_pic", signUp.profile_pic);
            data.append("cover_pic", signUp.cover_pic);
            data.append("pan_card", signUp.pan_card);
            data.append("aadhar_card_back", signUp.aadhar_card_back);
            data.append("aadhar_card_front", signUp.aadhar_card_front);
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
