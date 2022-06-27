const Term = () => {
  return (
    <div className="border-t border-[#ddd]">
      <span className="cursor-pointer text-sm text-right text-primary block hover:text-[#006533] py-3">
        Terms of use
      </span>
      <div className="text-right pb-6">
        <span className="text-primary text-sm font-semibold block">
          Please keep an eye on your email to
          receive updates on your order, including
          the shipping unit and the waybill
          number.
        </span>
        <span className="text-sm block">
          Due to the impact of the Covid-19
          epidemic, some areas may receive goods
          later than expected. Thank you for your
          understanding!
        </span>
        <span className="text-sm block">
          ** You can choose to pay in advance via
          bank transfer for contactless delivery.
        </span>
      </div>
    </div>
  );
};
export default Term;
