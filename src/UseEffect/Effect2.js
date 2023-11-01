import React, { useEffect, useState } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Effect = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const fetchDrink = async (apiUrl) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiUrl);
      const { drinks } = await response.json();
      setData(drinks);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (!drinks) {
        throw new Error("Drinks Not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong",
      });
    }
    //console.log(drinks);
  };
  useEffect(() => {
    const correctUrl = `${url}${searchItem}`;
    fetchDrink(correctUrl);
  }, [searchItem]);
  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something new..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
      <hr />
      {loading && !isError?.status && <h3>Loading...</h3>}
      {isError?.status && <h2 style={{ color: "red" }}>{isError.msg}</h2>}
      {!loading && !isError?.status && (
        <ul className="cocktail-data ">
          {data.map((obj) => {
            const { idDrink, strDrink, strDrinkThumb } = obj;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div>
                  <h3>{strDrink}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {/* <h1>Drinks count :{data.length}</h1> */}
    </div>
  );
};
export default Effect;
