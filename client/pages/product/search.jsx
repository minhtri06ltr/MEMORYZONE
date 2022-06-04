import { useRouter } from "next/router";
import { Layout, Path } from "../../components";

const Search = () => {
  const router = useRouter();

  return (
    <Layout
      title="Memoryzone | Test"
      description="Memoryzone search results with key Test"
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: 'Search results for "msi"',
            pathName: '/product/search?="test"',
          },
        ]}
      />
      <div className="px-10">
        <div className="my-12">
          <span className="block cursor-pointer text-[#575454] hover:text-primary text-2xl">
            Enter keywords to search for products
          </span>
          <div className="mt-4">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search ..."
                className="text-sm outline-none bg-white px-4 py-2 flex-1 rounded-sm border border-[#e1e1e1]"
              />
              <button
                type="submit"
                className="rounded-r-sm  hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
              >
                Search
              </button>
            </form>
          </div>
          <span className="mt-12 block text-text text-lg font-medium">
            There are 72 matching search results
          </span>
          <div className="grid grid-cols-5 gap-x-7 gap-y-12 mt-4">
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
            <div className="h-20 w-full bg-red-500"></div>
          </div>
          <div className="space-x-1.5 mt-16 flex items-center justify-center text-sm text-text">
            <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              1
            </button>
            <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              23
            </button>
            <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              ...
            </button>
            <button className="rounded-sm px-5 h-[40px] min-w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
