import { useSelector } from "react-redux";
import { Loading } from ".";

const Notify = () => {
  const notify = useSelector((state) => state.notify);
  console.log();
  return notify.loading && <Loading />;
};

export default Notify;
