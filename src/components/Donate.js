import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Donate = () => {
  const [donation, setDonation] = useState(0);
  const [product, setProduct] = useState({
    name: "React from FB",
    price: donation,
    productBy: "HTNH",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const url =
      "https://398cufeam1.execute-api.us-east-1.amazonaws.com/dev/payment";
    return fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        const { status } = response;
        console.log("Status: ", status);
        setDonation(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="container">
        <h5>Please donate to HTNH</h5>
        <label for="price" data-error="wrong" data-success="right">
          Enter Amount in USD (US Dollars)
        </label>
        <input
          type="number"
          name="price"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
        />

        <StripeCheckout
          stripeKey="pk_test_51IB7huDaD5goVVmvi9YCfHydaCnUIY2l0FC6mKFaLFgfLlNWNghIGzAqk3NeFfzKfCNY3fPo5VLSmz04t001qHuu00EMvYSYsU"
          token={makePayment}
          billingAddress
          name="Please donate"
          amount={donation * 100}
        >
          <button className="btn-large red">Donate</button>
        </StripeCheckout>
        <hr />
      </div>
    </div>
  );
};

export default Donate;
