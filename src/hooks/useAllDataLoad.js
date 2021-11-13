import { useState, useEffect } from "react";

const useAllDataLoad = () => {
  const [productData, setProductData] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [dataLoadTime, setDataLoadTime] = useState(true);
  const [getDatacallagin, setgetDatacallagin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/allproduct/show`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, []);

  // orderList database
  useEffect(() => {
    fetch(`http://localhost:5000/oderlist`)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, [getDatacallagin]);

  const deleteOrderList = (id) => {
    fetch(`http://localhost:5000/oderlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const updateorderList = orderList.filter((order) => order._id !== id);
        setOrderList(updateorderList);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  };

  const udateOrderlist = (data) => {
    setgetDatacallagin(false);
    fetch(`http://localhost:5000/statusupdate/${data.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data.modifiedCount);
          setgetDatacallagin(true);
        }
      });
  };

  return {
    deleteOrderList,
    udateOrderlist,
    productData,
    dataLoadTime,
    orderList,
  };
};

export default useAllDataLoad;
