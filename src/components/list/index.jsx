import { useEffect, useState } from "react";
import api from "./../../api";
import TrendButton from "./TrendButton";
import Loader from "./../loader/index";
import Error from "./../error/index";
import Card from "../card";
const List = () => {
  const iceCreams = "/iceCreams";
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
        <Error />
      ) : (
        data && (
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-8">
            {data.map((item, key) => (
              <Card key={key} item={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default List;
