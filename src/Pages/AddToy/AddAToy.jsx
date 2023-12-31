import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UseTitle from "../HookPageTitle/UseTitle";

const AddAToy = () => {
  UseTitle("ADD YOUR TOY");
  const checkOutPage = useLoaderData();

  const { user } = useContext(AuthContext);

  const { price, picture, category, name,about } = checkOutPage;

  const handleCheck = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const customerName = form.customerName.value;
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const price = form.price.value;

    const CheckBook = {
      customerName: customerName,
      name,
      email,
      SubCategory: category,
      photo,
      picture,
      quantity,
      price: price,
      about
    };

    fetch("https://toy-web-server-side.vercel.app/addBook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers":
          ("Content-Type", "X-Auth-Token", "Origin", "AuthoriZation"),
      },
      body: JSON.stringify(CheckBook),
    })
      .then((res) => res.json())
      .then((data) => {
    
        if (data.insertedId) {
          alert("service successfully");
        }
      });
  };

  return (
    <div>
      <div className="card-body  bg-red-300 mt-5 mb-5 p-5 rounded-xl">
        <form className="p-10" onSubmit={handleCheck}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
            <div className="form-control">
              <input
                type="text"
                name="customerName"
                required
                placeholder="Name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                defaultValue={name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
                placeholder="Price"
                required
                defaultValue={price}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="photo"
                required
                placeholder={picture}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="phone"
                required
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="category"
                required
                defaultValue={category}
                className="input input-bordered"
                placeholder="Category"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="quantity"
                required
                className="input input-bordered"
                placeholder="Quantity"
              />
            </div>
          </div>
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text">About</span>
              </label>
              <label className="input-group">
                <textarea
                  className="textarea input-group"
                  type="text"
                  name="about"
                  placeholder="about"
                ></textarea>
              </label>
            </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary font-bold btn-block">Proceed</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
