import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout, Path } from "../../../components";
import { useLocalStorageLogin } from "../../../utils/getLocalValue";
import { getData, postData } from "../../../utils/requestMethod";

const ResetPassword = () => {
  const user = useSelector((state) => state.account.user);
  const router = useRouter();
  const { query } = useRouter();
  const [resetForm, setResetForm] = useState({
    password: "",
    userId: "",
    cfPassword: "",
  });
  const resetFormHandle = (e) => {
    setResetForm({
      ...resetForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(resetForm);
  const resetHandle = async (e) => {
    e.preventDefault();
    if (resetForm.cfPassword !== resetForm.password) {
      alert("Password and confirm password is incorrect!");
      return;
    }
    if (resetForm.userId === "") {
      alert("Missing user id please reload page");
      return;
    }
    if (query.token) {
      const res = await postData(`account/reset/${query.token}`, resetForm);
      console.log(res);
    } else {
      alert("Missing validate token please take new one!");
      return;
    }
  };

  let checkLogin = useLocalStorageLogin();
  useEffect(() => {
    const validateToken = async () => {
      const res = await getData(`account/reset/${query.token}`, query.token);

      if (!res.success) {
        if (res.error === "jwt expired") {
          router.push("/account/login");
          alert("Validate token was expired please take new one!");
        }
        if (res.error === "jwt malformed") {
          router.push("/account/login");
          alert("Invalid token");
        }
      } else
        setResetForm({
          ...resetForm,
          userId: res.userId,
        });
    };
    query.token && validateToken();
  }, [query.token]);
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("isLogin")) &&
      Object.keys(user).length !== 0
    ) {
      router.push("/");
    }
  }, [Object.keys(user).length]);

  if (Object.keys(user).length === 0 && (!checkLogin || checkLogin === null))
    return (
      <Layout
        title="Memoryzone | Password retrieval"
        description="Memoryzone user reset forgot password"
      >
        <Path
          path={[
            { title: "Home", pathName: "/" },
            {
              title: "Change password",
              pathName: "/account/reset/test",
            },
          ]}
        />
        <div className="w-full flex items-center flex-col  justify-center my-12">
          <div className="space-y-4">
            <span className="block text-base font-semibold text-text">
              PASSWORD RETRIEVAL
            </span>
            <span className="block text-sm text-text">Enter new password</span>
            <form onSubmit={resetHandle} className="space-y-8">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 text-text"
                >
                  Password *
                </label>
                <input
                  name="password"
                  value={resetForm.password}
                  id="password"
                  minLength={6}
                  required
                  onChange={resetFormHandle}
                  className="outline-none border text-text px-6 py-2 w-[555px] border-[#ebebeb]"
                  type="password"
                />
              </div>
              <div>
                <label
                  htmlFor="cfPassword"
                  className="block mb-2 text-sm text-text"
                >
                  Confirm password *
                </label>
                <input
                  minLength={6}
                  required
                  name="cfPassword"
                  value={resetForm.cfPassword}
                  id="cfPassword"
                  onChange={resetFormHandle}
                  className="outline-none border text-text px-6 py-2 w-[555px] border-[#ebebeb]"
                  type="password"
                />
              </div>

              <div className="space-x-10">
                <button className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6">
                  Add address
                </button>
                <Link href="/">
                  <span className="text-[#575454] cursor-pointer text-sm underline hover:text-primary ">
                    Cancel
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  else
    return (
      <Layout
        title="Memoryzone | Password retrieval"
        description="Memoryzone user reset forgot password"
        removeLayout={true}
      ></Layout>
    );
};

export default ResetPassword;
