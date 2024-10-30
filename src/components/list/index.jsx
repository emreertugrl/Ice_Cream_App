import { useEffect, useState } from "react";
import TrendButton from "./TrendButton";
import Loader from "./../loader/index";
import Error from "./../error/index";
import api from "./../../api";
import Card from "../card";
import Cart from "./../cart/index";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/iceCreams")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="mt-[30px] lg:mt-[100px]">
      <Cart />
      <TrendButton />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
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
