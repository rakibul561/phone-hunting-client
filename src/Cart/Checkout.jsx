import { useContext } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";





const Checkout = () => {
    const services = useLoaderData();
    console.log(services);
    
    const { description,phone_name, image,_id } = services;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            image,
            date,
            service: description,
            service_id: _id,
            price: phone_name
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Booking successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })



    }

    return (
        <div>
            <div className="bg-base-300 rounded-lg mt-8">
           
                <form onSubmit={handleBooking}  className="card-body">
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">brand name</span>
                            </label>
                            <input type="text" defaultValue={phone_name} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811] btn-block" type="submit" value=" confrom Bookings" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Checkout;