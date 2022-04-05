import { combineReducers } from "redux";
import { signUpState } from "./SignUp/localSignUp";

const reducers = combineReducers({
  signUpState,
});

export default reducers;
