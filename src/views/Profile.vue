<template>
  <div class="mt-3">
    <h3 class="mt-6 mb-4 px-3 border-start border-5 border-chocolate">商品列表</h3>
    <div class="row">
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="border-0 ps-0">Lorem ipsum</th>
              <th scope="col" class="border-0">Lorem ipsum</th>
              <th scope="col" class="border-0">Lorem ipsum</th>
              <th scope="col" class="border-0"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-bottom border-top">
              <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                <img
                  src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                  alt=""
                  style="width: 72px; height: 72px; object-fit: cover;"
                />
                <p class="mb-0 fw-bold ms-3 d-inline-block">Lorem ipsum</p>
              </th>
              <td class="border-0 align-middle" style="max-width: 160px;">
                <div class="input-group pe-5">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon1"
                    >
                      <font-awesome-icon icon="minus" class="fas fa-minus"></font-awesome-icon>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control border-0 text-center my-auto shadow-none"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value="1"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-dark border-0 py-2"
                      type="button"
                      id="button-addon2"
                    >
                      <font-awesome-icon icon="plus" class="fas fa-plus"></font-awesome-icon>
                    </button>
                  </div>
                </div>
              </td>
              <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT$12,000</p></td>
              <td class="border-0 align-middle">
                <font-awesome-icon icon="times" class="fas fa-times"></font-awesome-icon>
              </td>
            </tr>
            <tr class="">
              <th scope="row" class="border-0 px-0 font-weight-normal py-4"></th>
              <td class="border-0 align-middle text-end" style="max-width: 160px;">總額：</td>
              <td class="border-0 align-middle"></td>
              <td class="border-0 align-middle"></td>
            </tr>
          </tbody>
        </table>
        <div class="input-group w-50 mb-3">
          <input
            type="text"
            class="form-control rounded-0 border-bottom border-top-0
              border-start-0 border-end-0 shadow-none"
            placeholder="Coupon Code"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-dark border-bottom border-top-0
                border-start-0 border-end-0 rounded-0"
              type="button"
              id="button-addon2"
            >
              <font-awesome-icon icon="paper-plane" class="fas fa-paper-plane"></font-awesome-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <h4 class="fw-bold mb-4">Order Detail</h4>
          <table class="table text-muted border-bottom">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">Total</p>
            <p class="mb-0 h4 fw-bold">NT$24,000</p>
          </div>
          <a href="./checkout.html" class="btn btn-dark w-100 mt-4">Lorem ipsum</a>
        </div>
      </div>
    </div>
  </div>
</template>
