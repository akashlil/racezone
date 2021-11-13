import React, { useState } from "react";
import useAllDataLoad from "../../../hooks/useAllDataLoad";
import { useForm } from "react-hook-form";
const ManageallOrder = () => {
  const { dataLoadTime, orderList, deleteOrderList, udateOrderlist } =
    useAllDataLoad();
  const [statusOrder, setStatusOrder] = useState("");

  const onSubmitdd = (e) => {
    setStatusOrder(e.target.value);
    // console.log(e.target.value);
  };

  const submitstatus = (e) => {
    e.preventDefault();
    // console.log(statusOrder);
    if (statusOrder.length > 0) {
      const data = statusOrder.split(",");
      const updateStatus = { id: data[0], status: data[1] };
      console.log(updateStatus);
      udateOrderlist(updateStatus);
    }
  };
  return (
    <div className=" table-responsive t-body-h ">
      <table className="table  table-borderless   caption-top">
        <caption className="fw-bolder fs-4">Manage All Orders</caption>
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Email id</th>
            <th scope="col">Booktours List</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataLoadTime ? (
            <div className="row">
              <div
                className="spinner-border text-success mx-auto"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            orderList?.map((order) => {
              return (
                <tr key={order?._id}>
                  <th scope="row">{order?.productId}</th>
                  <td>{order?.email}</td>
                  <td>
                    {order?.productname.slice(0, 25)}
                    {"..."}
                  </td>
                  <td>
                    {order.status === 1 ? (
                      <span className="badge bg-danger">Order pedding</span>
                    ) : order.status === 2 ? (
                      <span className="badge bg-primary">Order shopping</span>
                    ) : (
                      <span className="badge bg-success">
                        Order successfully
                      </span>
                    )}
                  </td>

                  <td className="d-flex">
                    <form onSubmit={submitstatus}>
                      <select onChange={onSubmitdd}>
                        <option value={``}>option</option>
                        <option value={`${order._id},1`}>pedding</option>
                        <option value={`${order._id},2`}>Shopping</option>
                        <option value={`${order._id},3`}>Success</option>
                      </select>
                      <button className="btn btn-sm btn-info">Submit </button>
                    </form>

                    <button
                      onClick={() =>
                        window.confirm(
                          "Are you sure ? this item has been detected "
                        ) && deleteOrderList(order._id)
                      }
                      className="btn btn-sm btn-danger ms-2"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageallOrder;
