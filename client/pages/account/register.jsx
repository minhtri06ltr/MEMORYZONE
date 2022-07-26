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
import { loadingNotify } from "../../redux/notifySlice";

const RegisterPage = () => {
  const account = useSelector(
    (state) => state.account,
  );
  const router = useRouter();
  const dispatch = useDispatch();

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
    dispatch(loadingNotify(true));
    const res = await postData(
      "account/register",
      registerForm,
    );
    if (!res.success) {
      setErrorMessage(res.error);
    } else {
      alert(res.message);
    }
    dispatch(loadingNotify(false));
  };
  useEffect(() => {
    if (
      Object.keys(account.user).length !== 0 &&
      JSON.parse(localStorage.getItem("isLogin"))
    ) {
      router.push("/");
    }
  }, [
    Object.keys(account.user).length,
    router,
    account.user,
  ]);
  const structure1 = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://memoryzone.vercel.app",
          name: "Home page",
        },
      },
    ],
  };
  return (
    <Layout
      structures={[structure1]}
      title="Register an account | Memoryzone - Professional in technology"
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

      <div className="my-10 limitScreen">
        <h1 className="text-text font- text-lg block">
          REGISTER AN ACCOUNT
        </h1>
        <div>
          <form
            onSubmit={registerHandler}
            className="my-1 flex flex-col xl:flex-row  xl:space-x-8"
          >
            <div className="w-full ">
              <span className="text-text text-sm pb-4  block">
                If you don&apos;t have an account,
                please register here
              </span>
              {errorMessage && (
                <span className="text-text text-sm block ">
                  {errorMessage}
                </span>
              )}
              <div className="my-4">
                <div className="flex xl:items-center w-full flex-col xl:flex-row xl:space-x-6">
                  <div className="mb-6 flex-1">
                    <label
                      htmlFor="firstName"
                      className="text-text mb-2.5 block text-sm"
                    >
                      First name *
                    </label>
                    <input
                      onChange={
                        registerFormHandler
                      }
                      required
                      type="text"
                      className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                      placeholder="First name"
                      name="firstName"
                      id="firstName"
                      value={
                        registerForm.firstName
                      }
                    />
                  </div>
                  <div className="mb-6 flex-1">
                    <label
                      htmlFor="lastName"
                      className="text-text mb-2.5 block text-sm"
                    >
                      Last name *
                    </label>
                    <input
                      id="lastName"
                      onChange={
                        registerFormHandler
                      }
                      required={true}
                      type="text"
                      className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                      placeholder="Last name"
                      name="lastName"
                      value={
                        registerForm.lastName
                      }
                    />
                  </div>
                </div>
                <div className="flex xl:items-center w-full flex-col xl:flex-row xl:space-x-6">
                  <div className="mb-6 flex-1">
                    <label
                      htmlFor="email"
                      className="text-text mb-2.5 block text-sm"
                    >
                      Email *
                    </label>
                    <input
                      onChange={
                        registerFormHandler
                      }
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

                  <div className="mb-6 flex-1">
                    <label
                      htmlFor="password"
                      className="text-text mb-2.5 block text-sm"
                    >
                      Password *
                    </label>
                    <input
                      id="password"
                      onChange={
                        registerFormHandler
                      }
                      required={true}
                      type="password"
                      className="w-full border outline-none rounded-sm border-[#e5e5e5] text-sm px-6 py-2 "
                      placeholder="Password"
                      name="password"
                      value={
                        registerForm.password
                      }
                      minLength={6}
                    />
                  </div>
                </div>

                <div className="flex mt-6  bottom-0 space-x-6 items-center">
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
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
