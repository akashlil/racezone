import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../context/useAuth";
import useAllDataLoad from "../../../../hooks/useAllDataLoad";

const UserOrder = () => {
  const { user } = useAuth();
  const { orderList, dataLoadTime, deleteOrderList } = useAllDataLoad();
  let userorderlist = orderList?.filter((order) => order.email === user?.email);
  console.log(orderList);
  return (
    <div className="row row-cols-md-3 row-cols-1 myorder-section-gap">
      {dataLoadTime ? (
        <div className="spinner-border text-success mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        userorderlist.map((items) => (
          <div className="col" key={items._id}>
            <div className="shadow py-3 m-4 bg-body rounded" key={items._id}>
              <div className="d-flex justify-content-between align-items-center  px-4">
                <div>
                  <Link
                    className="text-decoration-none text-success fw-bolder"
                    to={`/productdetals/${items.productId}`}
                  >
                    <p className="m-0">{items.productname}</p>
                  </Link>
                  {items.status === 1 ? (
                    <span className="badge bg-danger">Order pedding</span>
                  ) : items.status === 2 ? (
                    <span className="badge bg-primary">Order shopping</span>
                  ) : (
                    <span className="badge bg-success">Order successfully</span>
                  )}

                  <p className>
                    {items.productprice} {""}tk
                  </p>
                </div>
                <div>
                  <button
                    className="btn btn-light"
                    onClick={() =>
                      window.confirm(
                        "Are you sure ? this item has been detected "
                      ) && deleteOrderList(items._id)
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserOrder;
