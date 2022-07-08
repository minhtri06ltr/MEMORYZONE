import { NotFound } from "../components";

const Custom404 = () => {
  return (
    <NotFound
      title="Page not found"
      description="We can not found the URL you entered may be it
deleted, or invalid. Return to home
page to continue shopping."
      layoutTitle="Memoryzone |   Page not found"
      layoutDescription="Sorry we can not find this page please contact to admin for this problem"
    />
  );
};

export default Custom404;
