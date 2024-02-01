import React from "react";
import plasticrasor from "../Images/plasticrasor.jpg";
import plasticscrapper from "../Images/plasticscrapper.jpg";
import scrapper from "../Images/scrapper.jpg";

const Products = () => {
  // Sample product data (replace with your actual product data)
  const products = [
    {
      id: 1,
      name: "Plastic Rasor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      availability: "In Stock",
      imageUrl: plasticrasor,
    },
    {
      id: 2,
      name: "Plastic Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: plasticscrapper,
    },
    {
      id: 2,
      name: "Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: scrapper,
    },
    {
      id: 2,
      name: "Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: scrapper,
    },
    {
      id: 1,
      name: "Plastic Rasor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      availability: "In Stock",
      imageUrl: plasticrasor,
    },
    {
      id: 2,
      name: "Plastic Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: plasticscrapper,
    },
    {
      id: 2,
      name: "Plastic Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: plasticscrapper,
    },
    {
      id: 2,
      name: "Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: scrapper,
    },
    {
      id: 1,
      name: "Plastic Rasor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      availability: "In Stock",
      imageUrl: plasticrasor,
    },
    {
      id: 1,
      name: "Plastic Rasor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      availability: "In Stock",
      imageUrl: plasticrasor,
    },
    {
      id: 2,
      name: "Plastic Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: plasticscrapper,
    },
    {
      id: 2,
      name: "Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: scrapper,
    },
    {
      id: 2,
      name: "Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: scrapper,
    },
    {
      id: 1,
      name: "Plastic Rasor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      availability: "In Stock",
      imageUrl: plasticrasor,
    },
    {
      id: 2,
      name: "Plastic Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: plasticscrapper,
    },
    {
      id: 2,
      name: "Plastic Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: plasticscrapper,
    },
    {
      id: 2,
      name: "Scrapper",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
      availability: "Out of Stock",
      imageUrl: scrapper,
    },
    {
      id: 1,
      name: "Plastic Rasor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
      availability: "In Stock",
      imageUrl: plasticrasor,
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "#8EE5EC",
          width: "100%",
          minHeight: "300px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            marginLeft: "5%",
            marginTop: "10px",
            paddingTop: "20px",
            color: "#002A86",
          }}
        >
          Your Statement, Our Products
        </h1>
        <h2 style={{ marginLeft: "5%", marginTop: "5px" }}>
          Custom Business Signage, Graphics & So Much More
        </h2>
        <p style={{ marginLeft: "5%", marginTop: "5px" }}>
          Your business needs to be seen, and NOORSIGN has a wide variety of
          products to help communicate your message to prospective customers and
          clients. Our expert team can assist you with everything from custom
          signs and graphics to digital displays, interior décor, custom signage
          solutions, and everything in between. Each business is unique and will
          require a different approach, which is why our team will take the time
          to learn about your needs and recommend the products and services we
          think will best help you reach more people.
        </p>
        <p style={{ marginLeft: "5%", marginTop: "5px" }}>
          Products and services may vary by location. Please reach out to your
          local NOORSIGN center for more information.
        </p>
      </div>

      <div className="container mt-4 p-4">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="card" style={{ width: "21.1rem" }}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
                <div className="card-body" style={{maxHeight:"200px"}}>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    Price:{" "}
                    <span style={{ color: "blue" }}>{product.price}</span>
                  </p>
                  <p className="card-text">
                    Availability:{" "}
                    <span style={{ color: "green" }}>
                      {product.availability}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
