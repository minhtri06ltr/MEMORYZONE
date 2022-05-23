import Link from "next/link";
import { Layout, Path } from "../../components";
import axios from "axios";
import { useState } from "react";

const login = () => {
  const loginHandler = async () => {
    const res = await axios.post("/api/account/login", loginForm);
    console.log(res.data);
  };
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [forgotEmail, setForgotEmail] = useState("");
  const loginFormHandler = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Layout
      title="Memoryzone | Login"
      description="Memoryzone login to account"
    >
      <Path path={["Home", "Log in to account"]} />
      <div className="m-10">
        <span className="text-text font- text-lg block">LOG IN TO ACCOUNT</span>
        <div className="my-1 flex space-x-8">
          <div className="w-1/2">
            <span className="text-text text-sm  block">
              If you already have an account, log in here.
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginHandler();
              }}
              className="my-8"
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
                  value={loginForm.email}
                  onChange={(e) => loginFormHandler(e)}
                  rules={{
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  }}
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
                  className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                  placeholder="Password"
                  name="password"
                  value={loginForm.password}
                  minLength={6}
                  required={true}
                  onChange={(e) => loginFormHandler(e)}
                />
              </div>
              <div className="flex mt-10 space-x-6 items-center">
                <button
                  type="submit"
                  className="text-sm transition ease-out border border-primary bg-primary text-white hover:bg-white hover:text-primary rounded-sm px-6 py-2"
                >
                  Login
                </button>
                <Link href="register">
                  <span className="text-[#575454] cursor-pointer text-sm underline hover:text-primary ">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
          <div className="w-1/2">
            <span className="text-text text-sm  block">
              Forgot your password? Enter your email address to retrieve your
              password via email.
            </span>
            <form className="my-8">
              <div className="mb-6">
                <label
                  htmlFor="forgotEmail"
                  className="text-text mb-2.5 block text-sm"
                >
                  Email *
                </label>
                <input
                  rules={{
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  }}
                  type="email"
                  className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                  placeholder="Email"
                  name="forgotEmail"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
              </div>
              <label
                htmlFor="password"
                className="text-text mb-2.5 block  text-sm"
              >
                *
              </label>
              <div className="">
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

export default login;
