import Link from "next/link";
import { Layout, Path } from "../../components";
import { useState, useEffect } from "react";
import { validRegister } from "../../utils/validate";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { postData } from "../../utils/requestMethod";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const account = useSelector(
    (state) => state.account,
  );
  const router = useRouter();

  const [errorMessage, setErrorMessage] =
    useState("");
  const [registerForm, setRegisterForm] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isAdmin: false,
    });

  const registerFormHandler = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };
  const registerHandler = async (e) => {
    e.preventDefault();
    const errorMessage = validRegister(
      registerForm.firstName,
      registerForm.lastName,
      registerForm.email,
      registerForm.password,
    );
    if (errorMessage) {
      alert(`${errorMessage}`);
      return;
    }

    const res = await postData(
      "account/register",
      registerForm,
    );
    if (!res.success) {
      setErrorMessage(res.error);
    } else {
      alert(res.message);
    }
  };
  useEffect(() => {
    if (
      Object.keys(account.user).length !== 0 &&
      JSON.parse(localStorage.getItem("isLogin"))
    ) {
      router.push("/");
    }
  }, [Object.keys(account.user).length, router]);

  return (
    <Layout
      title="Memoryzone | Register"
      description="Memoryzone register an account"
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "Register an account",
            pathName: "/account/register",
          },
        ]}
      />

      <div className="m-10">
        <span className="text-text font- text-lg block">
          REGISTER AN ACCOUNT
        </span>
        <div>
          <form
            onSubmit={registerHandler}
            className="my-1 flex space-x-8"
          >
            <div className="w-1/2">
              <span className="text-text text-sm pb-4  block">
                If you don't have an account,
                please register here
              </span>
              {errorMessage && (
                <span className="text-text text-sm block ">
                  {errorMessage}
                </span>
              )}
              <div className="my-4">
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="text-text mb-2.5 block text-sm"
                  >
                    First name *
                  </label>
                  <input
                    onChange={registerFormHandler}
                    required
                    type="text"
                    className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="First name"
                    name="firstName"
                    id="firstName"
                    value={registerForm.firstName}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-text mb-2.5 block text-sm"
                  >
                    Email *
                  </label>
                  <input
                    onChange={registerFormHandler}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    name="email"
                    type="email"
                    className="w-full border rounded-sm outline-none border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="Email"
                    id="email"
                    value={registerForm.email}
                  />
                </div>
                <div className="flex mt-10 space-x-6 items-center">
                  <button
                    type="submit"
                    className="text-sm transition ease-out border border-primary bg-primary text-white hover:bg-white hover:text-primary rounded-sm px-6 py-2.5"
                  >
                    Register
                  </button>
                  <Link href="/account/login">
                    <span className="text-[#575454] cursor-pointer text-sm underline hover:text-primary ">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <span className="text-text text-sm invisible  block">
                *
              </span>
              <div className="my-8">
                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="text-text mb-2.5 block text-sm"
                  >
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    onChange={registerFormHandler}
                    required={true}
                    type="text"
                    className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="Last name"
                    name="lastName"
                    value={registerForm.lastName}
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
                    id="password"
                    onChange={registerFormHandler}
                    required={true}
                    type="password"
                    className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="Password"
                    name="password"
                    value={registerForm.password}
                    minLength={6}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
