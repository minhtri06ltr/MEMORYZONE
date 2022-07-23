import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../utils/requestMethod";
import { Layout } from "../../../components";
import Cookies from "js-cookie";

import { loginSuccess } from "../../../redux/accountSlice";

const ActiveAccountPage = () => {
  const router = useRouter();
  const { query } = router;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account);
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("isLogin")) &&
      Object.keys(user).length !== 0
    ) {
      router.push("/");
    }
    const verifyAccount = async () => {
      const res = await getData(`account/activate/${query.token}`, query.token);
      if (!res.success) {
        if (res.error === "jwt expired") {
          router.push("/account/login");
          alert("Validate token was expired please take new one!");
        } else if (res.error === "jwt malformed") {
          router.push("/account/login");
          alert("Invalid token");
        } else {
          alert(res.error);
        }
      } else {
        Cookies.set("refreshToken", res.refreshToken, {
          expires: 7,
          path: "/api/account/accessToken",
        });
        dispatch(
          loginSuccess({
            accessToken: res.accessToken,
            user: res.user,
          })
        );
        localStorage.setItem("isLogin", true);
        alert("Verify your email success");
        router.push("/");
      }
    };
    query.token && verifyAccount();
  }, [query.token, user, router, dispatch]);
  return (
    <Layout
      title="Active account | Memoryzone - Professional in technology"
      description="Memoryzone active user account page"
      removeLayout={true}
    ></Layout>
  );
};

export default ActiveAccountPage;
