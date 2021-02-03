import React, { useState, useEffect } from "react";
import sanityClient from "../sanityClient";

const Priests = () => {
  const [priests, setPriests] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'priest']{
                name,
                contact,
                remarks,
            }`
      )
      .then((data) => setPriests(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(priests);

  const priestData = priests.map((d, i) => {
    return (
      <ul className="collection">
        <li className="collection-item">Name: {d.name}</li>
        <li className="collection-item">Contact: {d.contact}</li>
        <li className="collection-item">Comments: {d.remarks}</li>
      </ul>
    );
  });

  return (
    <div className="container">
      <h5>Priest Details</h5>
      {priestData}
    </div>
  );
};

export default Priests;
