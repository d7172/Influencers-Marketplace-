import { networkRequest } from "../../../_shared/api";

export const InfActiveReject = (payload, navigate) => {
  console.log(payload, "in action");
  const url = `influencer-accept-reject/`;
  return (dispatch) => {
    networkRequest(
      url,
      "POST",
      false,
      payload,
      (res) => {
        dispatch({ type: "INF_ACTIVE_REJECT_SUCCESS", data: res });
        if (res?.status_code === 200 && res?.status === "success") {
          navigate(`/admin/influencer/new-user`);
        } else {
          alert(res.messages);
        }
      },
      () => {
        dispatch({ type: "INF_ACTIVE_REJECT_FAIL" });
      }
    );
  };
};

