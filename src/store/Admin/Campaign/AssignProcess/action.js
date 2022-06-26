import { networkRequest } from "../../../_shared/api";

export const getAssignProcessData = (payload, activePage) => {
  const url = `admin-assigncampaigns-process/?campaign_id=1&category=fashion&social_platform=facebook`;
  return (dispatch) => {
    networkRequest(
      url,
      "GET",
      "JSON",
      payload,
      (res) => {
        dispatch({ type: "ASSIGN_PROCESS_SUCCESS", data: res });
      },
      () => {
        dispatch({ type: "ASSIGN_PROCESS_FAIL" });
      }
    );
  };
};
