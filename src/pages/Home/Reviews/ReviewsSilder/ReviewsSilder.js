import React from "react";

const ReviewsSilder = ({ review }) => {
  const { username, reviewsdets, photoURL } = review;

  return (
    <div className="row p-3">
      <div className="col">
        <div className="card p-0 h-100">
          <div className=" rounded-3">
            <div className=" bg-black text-white">
              <p className="text-start p-3">{reviewsdets?.slice(0, 150)}</p>
            </div>

            <div className="d-flex justify-content-center my-3">
              <img
                src={photoURL}
                alt=""
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              />
              <div className="mx-4 text-start text-black">
                <h4>{username}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSilder;
