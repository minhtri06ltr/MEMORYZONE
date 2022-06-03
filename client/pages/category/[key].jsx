import { Layout, Path, ProductCard } from "../../components";
import {
  SearchIcon,
  TemplateIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";

const ProductKey = () => {
  return (
    <Layout title="Test" description="">
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "Test",
            pathName: "/test",
          },
        ]}
      />
      <div className="px-10 my-12 flex space-x-8">
        <div className="w-[25%]">
          <span className="text-base text-text font-semibold block mb-2">
            BRAND
          </span>
          <div className="flex items-stretch py-6 ">
            <input
              type="text"
              placeholder="Filter by brand"
              className="outline-none flex-1 bg-white py-2 px-4 text-sm border border-[#ebebeb]"
            />
            <button className="bg-primary py-2 px-3">
              <SearchIcon width={18} color="white" height={18} />
            </button>
          </div>
          <div className="mb-10">
            <div className=" cursor-pointer hover:text-primary ">
              <input type="checkbox" className="translate-y-[1px]" />
              <label className="text-sm ml-2 ">Apple</label>
            </div>
          </div>
          <div>
            <span className="text-base text-text font-semibold block mb-2">
              PRODUCT PRICE
            </span>
            <div className="py-3">
              <input type="range" className="w-full" />
              <div className="flex items-center space-x-4 my-4">
                <input
                  disabled={true}
                  className="outline-none flex-1 text-sm text-center text-text w-[100px] bg-[#fafafa] border border-[#e1e1e1] rounded-sm"
                />
                <span>-</span>
                <input
                  value="10000000$"
                  disabled={true}
                  className="outline-none flex-1 text-sm text-center text-text w-[100px] bg-[#fafafa] border border-[#e1e1e1] rounded-sm"
                />
              </div>
              <button className="rounded-sm  hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6 w-full">
                Filter price
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-lg text-text font-semibold block mb-2">
              Video Capture
            </span>
            <div className="flex items-center">
              <button className="hover:text-white text-[#acacac]  rotate-90 mr-2 p-2 border rounded-sm border-[#dddddd] bg-white  hover:bg-primary  ">
                <ViewBoardsIcon
                  width={18}
                  height={20}
                  className="text-inherit  "
                />
              </button>
              <button className="mr-6 text-[#acacac] hover:text-white rotate-90 p-2 border rounded-sm border-[#dddddd] bg-white  hover:bg-primary  ">
                <TemplateIcon
                  width={18}
                  height={20}
                  className="text-inherit  "
                />
              </button>
              <select className="border text-[#333333] rounded-sm border-[#dddddd] w-[180px] outline-none text-sm px-4 py-2 ">
                <option>Default</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-y-10 gap-x-6 my-14">
            <ProductCard
              // key={product._id}
              name="Thiết bị Stream Elgato Gaming Video Capture HD60 PRO 1GC109901002"
              details="Thiết bị Stream Elgato Gaming Video Capture Cam Link 4K 10GAM9901"
              price={2314}
              img="https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901.png?v=1645162063000"
              slug="thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901"
            />
            <ProductCard
              // key={product._id}
              name="Thiết bị Stream Elgato Gaming Video Capture HD60 PRO 1GC109901002"
              details="Thiết bị Stream Elgato Gaming Video Capture Cam Link 4K 10GAM9901"
              price={2314}
              img="https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901.png?v=1645162063000"
              slug="thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901"
            />
            <ProductCard
              // key={product._id}
              name="Thiết bị Stream Elgato Gaming Video Capture HD60 PRO 1GC109901002"
              details="Thiết bị Stream Elgato Gaming Video Capture Cam Link 4K 10GAM9901"
              price={2314}
              img="https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901.png?v=1645162063000"
              slug="thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901"
            />
            <ProductCard
              // key={product._id}
              name="Thiết bị Stream Elgato Gaming Video Capture HD60 PRO 1GC109901002"
              details="Thiết bị Stream Elgato Gaming Video Capture Cam Link 4K 10GAM9901"
              price={2314}
              img="https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901.png?v=1645162063000"
              slug="thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901"
            />
            <ProductCard
              // key={product._id}
              name="Thiết bị Stream Elgato Gaming Video Capture HD60 PRO 1GC109901002"
              details="Thiết bị Stream Elgato Gaming Video Capture Cam Link 4K 10GAM9901"
              price={2314}
              img="https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901.png?v=1645162063000"
              slug="thiet-bi-stream-elgato-gaming-video-capture-cam-link-4k-10gam9901"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductKey;
