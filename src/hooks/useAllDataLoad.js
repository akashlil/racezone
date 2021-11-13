import { useState, useEffect } from "react";

const useAllDataLoad = () => {
  const [productData, setProductData] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [dataLoadTime, setDataLoadTime] = useState(true);
  const [getDatacallagin, setgetDatacallagin] = useState(false);

  useEffect(() => {
    fetch(`https://aqueous-gorge-85514.herokuapp.com/allproduct/show`)
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
    fetch(`https://aqueous-gorge-85514.herokuapp.com/oderlist`)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      })
      .finally(() => {
        setDataLoadTime(false);
      });
  }, [getDatacallagin]);

  const deleteOrderList = (id) => {
    fetch(`https://aqueous-gorge-85514.herokuapp.com/oderlist/${id}`, {
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
    fetch(`https://aqueous-gorge-85514.herokuapp.com/statusupdate/${data.id}`, {
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
