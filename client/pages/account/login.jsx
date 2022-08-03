import Link from "next/link";
import { Layout, Path } from "../../components";
import { postData } from "../../utils/requestMethod";
import { useEffect, useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import Cookies from "js-cookie";
import { loginSuccess } from "../../redux/accountSlice";
import { useRouter } from "next/router";
import { validateEmail } from "../../utils/validate";
import { structure1 } from "../../utils/schemaStructures";

const LoginPage = () => {
  const router = useRouter();
  const user = useSelector(
    (state) => state.account.user,
  );
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] =
    useState("");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [forgotEmail, setForgotEmail] =
    useState("");

  const forgotEmailHandle = async (e) => {
    e.preventDefault();
    if (forgotEmail === "") {
      alert("Please fill all required fields");
      return;
    }
    if (!validateEmail(forgotEmail)) {
      alert("Invalid email");
      return;
    }
    const res = await postData(
      "account/forgotPassword",
      forgotEmail,
    );
    if (!res.success) {
      alert(res.error);
      return;
    }
    alert(res.message);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (
      loginForm.email === "" ||
      loginForm.password === ""
    ) {
      alert("Please fill all required fields");
      return;
    }
    if (!validateEmail(loginForm.email)) {
      alert("Invalid email");
      return;
    }
    const res = await postData(
      "account/login",
      loginForm,
    );
    if (!res.success) {
      setErrorMessage(res.error);
    } else {
      Cookies.set(
        "refreshToken",
        res.refreshToken,
        {
          expires: 7,
          path: "/api/account/accessToken",
        },
      );
      dispatch(
        loginSuccess({
          accessToken: res.accessToken,
          user: res.user,
        }),
      );
      localStorage.setItem("isLogin", true);
    }
  };

  const loginFormHandler = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (
      JSON.parse(
        localStorage.getItem("isLogin"),
      ) &&
      Object.keys(user).length !== 0
    ) {
      if (router.query?.return === "checkout") {
        router.push("/checkout");
      } else router.push("/");
    }
  }, [Object.keys(user).length, router, user]);

  return (
    <Layout
      title="Log in to account | Memoryzone - Professional in technology"
      description="Memoryzone login to account"
      structures={[structure1]}
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "Log in to account",
            pathName: "/account/login",
          },
        ]}
      />
      <div className="my-10 limitScreen">
        <h1 className="text-text  text-lg block">
          LOG IN TO ACCOUNT
        </h1>
        <div className="my-1 space-y-8 lg:space-y-0 flex flex-col xl:flex-row xl:space-x-8">
          <div className="w-full xl:w-1/2">
            <h2 className="text-text text-sm pb-4 block">
              If you already have an account, log
              in here.
            </h2>
            {errorMessage && (
              <span className="text-text block text-sm">
                {errorMessage}
              </span>
            )}
            <form
              onSubmit={loginHandler}
              className="my-4"
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-text mb-2.5 block text-sm"
                >
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={loginForm.email}
                  onChange={(e) =>
                    loginFormHandler(e)
                  }
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="text-text mb-2.5 block text-sm"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                  placeholder="Password"
                  name="password"
                  value={loginForm.password}
                  minLength={6}
                  required
                  onChange={(e) =>
                    loginFormHandler(e)
                  }
                />
              </div>
              <div className="flex mt-10 space-x-6 items-center">
                <button
                  type="submit"
                  className="text-sm transition ease-out border border-primary bg-primary text-white hover:bg-white hover:text-primary rounded-sm px-6 py-2"
                >
                  Login
                </button>
                <Link href="/account/register">
                  <span className="text-[#575454] cursor-pointer text-sm underline hover:text-primary ">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
          <div className="w-full xl:w-1/2">
            <h2 className="text-text text-sm  block">
              Forgot your password? Enter your
              email address to retrieve your
              password via email.
            </h2>
            <form
              onSubmit={forgotEmailHandle}
              className="my-8"
            >
              <div className="mb-6">
                <label
                  htmlFor="forgotEmail"
                  className="text-text mb-2.5 block text-sm"
                >
                  Email *
                </label>
                <input
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  type="email"
                  id="forgotEmail"
                  className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                  placeholder="Email"
                  name="forgotEmail"
                  value={forgotEmail}
                  onChange={(e) =>
                    setForgotEmail(e.target.value)
                  }
                />
              </div>
              <label className="invisible mb-2.5 block  text-sm">
                *
              </label>
              <div>
                <button
                  type="submit"
                  className="text-sm  transition ease-out border border-primary bg-primary text-white hover:bg-white hover:text-primary rounded-sm px-6 py-2"
                >
                  Password retrieval
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
