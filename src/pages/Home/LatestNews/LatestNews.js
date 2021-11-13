import React from "react";

const LatestNews = () => {
  return (
    <div className="container">
      <div className="section-gap">
        <div className=" col-md-6 col-12 mx-auto text-center">
          <p className="text-uppercase fw-bolder">news</p>
          <h1>Latest News Post</h1>
          <p className="fs-5">
            Best Latest Bikes in India · Boom Motors Corbett 14. Rs. 89,999 -
            1.24 Lakh · Ducati Hypermotard 950. Rs. 12.99 - 16.24 Lakh ·
            Kawasaki Z650RS. Rs. · 5. | read ...
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 border-0 rounded-3">
              <img
                src="https://templatekits.themewarrior.com/roadpedal/wp-content/uploads/sites/29/2021/08/post0-8.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Morbideli ornare at mauris in aliquam ut tellus.
                </h5>
                <p className="card-text">August 19, 2021 No Comments</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 rounded-3">
              <img
                src="https://templatekits.themewarrior.com/roadpedal/wp-content/uploads/sites/29/2021/08/post0-7.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Ut pharetra sed velit et sapien eros scelerisque.
                </h5>
                <p className="card-text">August 19, 2021 No Comments</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 rounded-3 ">
              <img
                src="https://templatekits.themewarrior.com/roadpedal/wp-content/uploads/sites/29/2021/08/post0-6.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Amcorper maecenas facilisis a nam amet amet.
                </h5>
                <p className="card-text">August 19, 2021 No Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
