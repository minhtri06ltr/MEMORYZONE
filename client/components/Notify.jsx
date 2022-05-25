import { useSelector } from "react-redux";
import { Loading } from ".";

const Notify = () => {
  const notify = useSelector((state) => state.notify);

  return notify.loading && <Loading />;
};

export default Notify;
