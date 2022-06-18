import Image from "next/image";
import React from "react";

const Ads = () => {
  return (
    <div className="w-full px-10 mt-16">
      <div className="grid  grid-cols-3 grid-rows-2 gap-8">
        <div className="  h-[180px] overflow-hidden">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_11.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="  row-span-2 h-full overflow-hidden">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_2.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="  h-[180px] overflow-hidden">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_3.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="  h-[180px] overflow-hidden">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_22.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="  h-[180px] overflow-hidden">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_4.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
