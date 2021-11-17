import React from "react";

const Pay = ({ payOrder }) => {
  const { productname } = payOrder;
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {productname}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-header">
            <h6 class="modal-title" id="exampleModalLabel">
              {"Payment Bikash Number : +88017366666"}
            </h6>
          </div>
          <div class="modal-header">
            <h6 class="modal-title" id="exampleModalLabel">
              {"Payment Rocket Number : +88017366666"}
            </h6>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Your Bikash / Rocket Number
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  Pay Tanx id
                </label>
                <input class="form-control"></input>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              data-bs-dismiss="modal"
              type="button"
              class="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
