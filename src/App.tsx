import { useState, useEffect } from "react";
import "./App.css";
import { Data } from "./types";
import fetchData from "./utils/fetchData";
import { Loader, Error, List } from "./components";

function App() {
  const [data, setData] = useState<Data>({ creators: [], products: [] });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const updateData = async () => {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage("");

      const result: Data | undefined = await fetchData();
      if (!result) {
        setIsError(true);
        setErrorMessage("There has been an error when receiving the data");
      } else {
        setData(result);
      }
      setIsLoading(false);
    };

    updateData();
  }, []);

  return (
    <div className="h-screen items-center bg-background">
      <div className="flex flex-col m-auto w-96 pt-16">
        <header className="flex justify-center pb-8">
          <h1 className="text-3xl text-main font-bold">Top Creators List</h1>
        </header>

        {isLoading && <Loader />}
        {isError && <Error message={errorMessage} />}
        {!isLoading && !isError && <List data={data} />}
      </div>
    </div>
  );
}

export default App;
