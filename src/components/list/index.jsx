import { useEffect, useState } from "react";
import api from "./../../api";
import TrendButton from "./TrendButton";
import Loader from "./../loader/index";
import Error from "./../error/index";
const List = () => {
  const iceCreams = "/iceCreams123";
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(iceCreams)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="mt-[30px] lg:mt-[100px]">
      <TrendButton />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        data && <div>data</div>
      )}
    </div>
  );
};

export default List;
