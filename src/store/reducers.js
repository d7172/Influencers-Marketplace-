import { combineReducers } from "redux";
import { signUpState } from "./SignUp/localSignUp";
import { signUp } from "./SignUp/reducer";

const reducers = combineReducers({
  signUpState,
  signUp,
});

export default reducers;
