import { useState, useEffect } from "react";
const Home = () => {
  const [productList, setProductlist] = useState([]);
  useEffect(() => {
    window
      .fetch("api/avo")
      .then((response) => response.json())
      .then(({ data }) => setProductlist(data));
  }, []);

  return (
    <div>
      <h1>Hola Platzi</h1>
      {productList.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
