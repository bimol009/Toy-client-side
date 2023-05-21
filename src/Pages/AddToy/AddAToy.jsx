import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const AddAToy = () => {
    const checkOutPage = useLoaderData();

  const {user} = useContext(AuthContext)

  const { price, picture, category,_id } = checkOutPage;

   const handleCheck = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const price = form.price.value;

    const CheckBook = {
      customerName: name,
      email,
      category,
      photo,
      price: price,
    };
    console.log(CheckBook)
    fetch('http://localhost:5000/addBook',{
        method: "POST",
        headers: {
          "content-type": "application/json", 
          "Access-Control-Allow-Methods":'*',
          "Access-Control-Allow-Headers":('Content-Type','X-Auth-Token','Origin','AuthoriZation'),
        },
        body: JSON.stringify(CheckBook),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if(data.insertedId){
              alert("service successfully")
            }
    })

   

}

  return (
    <div>
      <h2>Book: {name} </h2>

      <div className="card-body">
        <form onSubmit={handleCheck}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                defaultValue={user?.displayName}
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
                placeholder="photo url"
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CateGory</span>
            </label>
            <input
              type="text"
              name="category"
              required
              defaultValue={category}
              className="input input-bordered"
              placeholder="Category"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error btn-block">Proceed</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;