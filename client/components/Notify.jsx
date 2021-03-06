import { Loading } from ".";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Notify = () => {
  const router = useRouter();
  const notify = useSelector(
    (state) => state.notify,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath && setLoading(false);

    router.events.on(
      "routeChangeStart",
      handleStart,
    );
    router.events.on(
      "routeChangeComplete",
      handleComplete,
    );
    router.events.on(
      "routeChangeError",
      handleComplete,
    );

    return () => {
      router.events.off(
        "routeChangeStart",
        handleStart,
      );
      router.events.off(
        "routeChangeComplete",
        handleComplete,
      );
      router.events.off(
        "routeChangeError",
        handleComplete,
      );
    };
  });

  return (
    (loading || notify.loading) && <Loading />
  );
};

export default Notify;
