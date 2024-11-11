import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CartDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState({}); 
    console.log(product);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(err => console.error('Error fetching product:', err)); 
    }, [id]);
      
      const {brand, description, image, slug, phone_name , _id} = product;
    return (
        <div>
            <header className=" border border-black m-4 bg-base-200">
                

                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg space-y-2">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                {brand}
                            </h1>
                            <p className="mt-4 text-black text-xl dark:text-gray-300">
                                {phone_name}
                            </p>
                            <p className=" text-black text-xl dark:text-gray-300">
                                {slug}
                            </p>
                            
                            <p className="mt-4 text-gray-800 dark:text-gray-300">
                               {description}
                            </p>
                            <Link
                                 to={`/checkout/${_id}`}
                          
                          type="button" className="px-12 btn bg-red-600 text-white py-3 font-semibold ">Book Now</Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img
                            className="object-cover border border-red-700 lg:p-12 rounded-xl"
                            src= {image}
                            alt=""
                        />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default CartDetails;
