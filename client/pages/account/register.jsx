import Link from "next/link";
import { Layout, Path } from "../../components";
import { useState } from "react";

const register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log(registerForm);
  const registerFormHandler = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Layout
      title="Register | Memoryzone"
      description="Memoryzone register an account"
    >
      <Path path={["Home", "Register an account"]} />
      <div className="m-10">
        <span className="text-text font- text-lg block">
          REGISTER AN ACCOUNT
        </span>
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerHandler();
            }}
            className="my-1 flex space-x-8"
          >
            <div className="w-1/2">
              <span className="text-text text-sm  block">
                If you don't have an account, please register here
              </span>

              <div className="my-8">
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="text-text mb-2.5 block text-sm"
                  >
                    First name *
                  </label>
                  <input
                    onChange={registerFormHandler}
                    required={true}
                    type="text"
                    className="w-full border rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="First name"
                    id="firstName"
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
                    required={true}
                    type="email"
                    className="w-full border rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <div className="flex mt-10 space-x-6 items-center">
                  <button
                    type="submit"
                    className="text-sm transition ease-out border border-primary bg-primary text-white hover:bg-white hover:text-primary rounded-sm px-6 py-2.5"
                  >
                    Register
                  </button>
                  <Link href="login">
                    <span className="text-[#575454] cursor-pointer text-sm underline hover:text-primary ">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <span className="text-text text-sm invisible  block">*</span>
              <div className="my-8">
                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="text-text mb-2.5 block text-sm"
                  >
                    Last name *
                  </label>
                  <input
                    onChange={registerFormHandler}
                    required={true}
                    type="text"
                    className="w-full border rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="Last name"
                    id="lastName"
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
                    onChange={registerFormHandler}
                    required={true}
                    type="password"
                    className="w-full border rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                    placeholder="Password"
                    id="password"
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

export default register;
