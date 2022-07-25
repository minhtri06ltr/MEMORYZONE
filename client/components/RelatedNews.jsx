import Image from "next/image";

const RelatedNews = () => {
  return (
    <div className="flex-1 mt-12 lg:mt-0">
      <h2 className="text-base font-semibold block text-text">
        RELATED NEWS
      </h2>
      <div className="space-y-6 divide-y divide-[#e5e5e5]">
        <div className="pt-5 flex items-start">
          <Image
            src="https://bizweb.sapocdn.net/thumb/small/100/329/122/articles/1200x1200.jpg?v=1649059004967"
            quality={100}
            height={90}
            width={90}
            alt="Memoryzone related news thumbnail"
            objectFit="contain"
          />
          <h3 className="ml-5 text-sm text-[#707070] cursor-pointer hover:text-primary">
            April Boom - Buy Victus Get Omen
          </h3>
        </div>
        <div className="pt-5 flex items-start">
          <Image
            src="https://bizweb.sapocdn.net/thumb/small/100/329/122/articles/1200x1200.jpg?v=1649059004967"
            quality={100}
            height={90}
            width={90}
            alt="Memoryzone related news thumbnail"
            objectFit="contain"
          />
          <h3 className="ml-5 text-sm text-[#707070] cursor-pointer hover:text-primary">
            April Boom - Buy Victus Get Omen
          </h3>
        </div>
        <div className="pt-5 flex items-start">
          <Image
            src="https://bizweb.sapocdn.net/thumb/small/100/329/122/articles/1200x1200.jpg?v=1649059004967"
            quality={100}
            height={90}
            width={90}
            alt="Memoryzone related news thumbnail"
            objectFit="contain"
          />
          <h3 className="ml-5 text-sm text-[#707070] cursor-pointer hover:text-primary">
            April Boom - Buy Victus Get Omen
          </h3>
        </div>
      </div>
    </div>
  );
};
export default RelatedNews;
