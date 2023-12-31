import React from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../HookPageTitle/UseTitle";

const Update = () => {
  UseTitle("Update Toy");
  const AllToy = useLoaderData();
 
  const { customerName,name, photo, price, email, picture, category, _id } = AllToy;

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const customerName = from.customerName.value;
    const quantity = from.quantity.value;
    const category = from.category.value;
    const about = from.about.value;
    const picture = from.photo.value;
    const price = from.price.value;

    const newToy = {
      customerName: customerName,
      name,
      quantity,
      category,
      about,
      picture,
      price,
    };
  

    fetch(`https://toy-web-server-side.vercel.app/addBook/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated SuccessFully");
        }
      });
  };

  return (
    <div>
      <div className=" bg-red-200 p-10 mt-5 mb-5 rounded-xl">
        <h2 className="text-3xl text-center mb-4 font-extrabold">
          Update Your Toy {customerName}
        </h2>
        <form onSubmit={handleUpdateToy}>
          {/* Row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">customer Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="customerName"
                  defaultValue={customerName}
                  placeholder="Customer name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={picture}
                  placeholder="Photo Url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Row */}
          <div className="mb-8">
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
          </div>

          <input type="submit" value="Toy Add" className="btn  btn-block" />
        </form>
      </div>
    </div>
  );
};

export default Update;
