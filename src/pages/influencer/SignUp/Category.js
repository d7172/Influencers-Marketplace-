import React, { useState } from "react";
import { FormError } from "./PersonalDetails";

function Category({ signUp, setSignUp, setSignUpStatus }) {
  const [zeroCategoryError, setZeroCategoryError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [channel, setChannel] = useState({
    name: "",
    link: "",
  });

  function handleSelectCategory(title) {
    const isSelected = selectedCategory.includes(title);
    if (isSelected) {
      const temp = selectedCategory;
      const index = temp.indexOf(title);
      temp.splice(index, 1);
      setSelectedCategory([...temp]);
    } else if (selectedCategory.length < 5) {
      setSelectedCategory([...selectedCategory, title]);
    }
  }
  return (
    <div className="w-[1100px] m-auto">
      <h1 className="text-3xl text-center mb-2">Category Details</h1>
      <p className="text-sm text-gray-400 text-center mb-10">You can choose upto 5 category.</p>
      <div className="flex flex-wrap gap-8">
        {categoryList.map(({ title, svg }) => {
          const isSelected = selectedCategory.includes(title);
          return (
            <div
              key={title}
              className={`flex items-center justify-center gap-3 w-fit px-7 py-2 border-2 rounded-[4px] cursor-pointer ${
                isSelected && "border-b-active"
              }`}
              onClick={() => handleSelectCategory(title)}
            >
              <img className="w-[30px] h-[30px]" src={`/svgs/${svg}.svg`} alt={title} />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>

      {/* ADD YOUTUBE CHANNEL */}

      {/* <div className="mt-10">
        <h1 className="text-3xl text-center mb-2">Add your youtube channel</h1>
        <p className="text-sm w-390 text-gray-400 text-center mb-10 m-auto">
          Log in to your account using email and password provided during registration.
        </p>
        <div className="flex gap-20">
          <div>
            <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
              Youtube Channel Name
            </label>
            <input
              className="appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
              id="channel"
              type="text"
              placeholder="Youtube channel name"
              value={channel.name}
              onChange={(e) => setChannel({ ...channel, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2" htmlFor="firstName">
              Youtube Link
            </label>
            <input
              className="appearance-none border rounded w-390 h-48  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-300"
              id="link"
              type="text"
              placeholder="https//www.youtube.com/"
              value={channel.link}
              onChange={(e) => setChannel({ ...channel, link: e.target.value })}
            />
          </div>
        </div>
      </div> */}
      <div className="mt-14 flex justify-center cursor-pointer">
        <button
          className="w-[400px] rounded-[50px] bg-primary text-white py-2"
          onClick={() => {
            if (selectedCategory.length) {
              setSignUp({
                ...signUp,
                category: [...selectedCategory],
              });
              setSignUpStatus(3);
              setZeroCategoryError(false);
            } else {
              setZeroCategoryError(true);
            }
          }}
        >
          Next
        </button>
      </div>
      {zeroCategoryError && (
        <div className="text-center">
          <FormError>Choose at least one category.</FormError>
        </div>
      )}
    </div>
  );
}

export default Category;

export const categoryList = [
  {
    title: "Beauty",
    svg: "beauty",
  },
  {
    title: "Health",
    svg: "health",
  },
  {
    title: "Fashion & Lifestyle",
    svg: "fashion",
  },
  {
    title: "Food & Beverages",
    svg: "food",
  },
  {
    title: "Parenting",
    svg: "parenting",
  },
  {
    title: "Entertainment",
    svg: "entertainment",
  },
  {
    title: "Humor",
    svg: "humor",
  },
  {
    title: "Travel & Holidays",
    svg: "travel",
  },
  {
    title: "Fitness",
    svg: "fitness",
  },
  {
    title: "Sports",
    svg: "sports",
  },
  {
    title: "Diy & Decor",
    svg: "diy",
  },
];
