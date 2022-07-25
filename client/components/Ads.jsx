import Image from "next/image";
import React from "react";

const Ads = () => {
  return (
    <div className="limitScreen  mt-10 lg:mt-16">
      <div className="grid   grid-cols-3 grid-rows-2 gap-y-6  md:gap-4 lg:gap-y-2 lg:gap-x-8">
        <div className="adsItem">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_11.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="adsItem md:row-span-2 h-[350px]   md:h-full  ">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_2.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="adsItem">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_3.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="adsItem">
          <div className="relative scaleAnimation w-full h-full cursor-pointer ">
            <Image
              alt="Memoryzone ads banner"
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_22.jpg?1655450481933"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
        <div className="adsItem">
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
