import Image from "next/image";

const Brand = () => {
  return (
    <div className="limitScreen">
      <div className='relative text-center before:content-[""] before:w-full before:absolute before:h-[1px] before:top-1/2 before:left-0 before:z-0 before:bg-[#ebebeb]'>
        <span className="inline-block relative text-xl  text-center z-10 px-6 bg-white font-semibold text-text">
          FAVORITE BRANDS
        </span>
      </div>
      <div className="flex items-center  flex-wrap justify-between mt-8">
        <div className="brandItem h-[100px]">
          <Image
            alt="Memoryzone Kingston technology logo"
            layout="responsive"
            width="100%"
            height="100%"
            quality={100}
            objectFit="contain"
            src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_1.png?1655450481933"
          />
        </div>
        <div className="brandItem">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            quality={100}
            objectFit="contain"
            alt="Memoryzone Crucial  logo"
            src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_2.png?1655450481933"
          />
        </div>
        <div className="brandItem">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            quality={100}
            objectFit="contain"
            alt="Memoryzone Samsung logo"
            src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_3.png?1655450481933"
          />
        </div>
        <div className="brandItem -translate-y-[10px]">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            quality={100}
            objectFit="contain"
            alt="Memoryzone Western Digital logo"
            src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_4.png?1655450481933"
          />
        </div>
        <div className="brandItem">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            quality={100}
            objectFit="contain"
            alt=" Memoryzone Intel logo"
            src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_5.png?1655450481933"
          />
        </div>
        <div className="brandItem">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            quality={100}
            objectFit="contain"
            alt="Memoryzone SeaGate logo"
            src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_6.png?1655450481933"
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
