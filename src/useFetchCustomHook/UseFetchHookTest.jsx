import React from "react";
import useFetch from "./UseFetch";
import './usefetch.css'

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  return (
    <div className="fetch-container">
      <h1 className="fetch-title">Use Fetch Hook</h1>

      {loading ? <h3 className="status loading">Loading!!!!</h3> : null}
      {error ? <h3 className="status error">Data could not be fetched!!{error}</h3>: null}
      <div className="product-list">

        {data && data.products && data.products.length>0 ? data.products.map((item)=> {
            return(
                <p key={item.key}>{item.title}</p>
            )
        }) : null}
      </div>
    </div>
  );
};

export default UseFetchHookTest;
