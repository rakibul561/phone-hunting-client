import React from 'react';
import Rating from 'react-rating';

const ServiceCart = ({ service }) => {
    const { brand, phone_name, image, rating } = service;
    
    return (
        <div className=''>
            <div className="p-6 rounded-md shadow-md bg-base-300">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72" />
                <div className="mt-6 mb-2">
                    <h2 className="block text-xs font-medium tracking-widest uppercase">{brand}</h2>
                    <div className='flex justify-between'>
                        <h2 className="text-lg font-semibold tracking-wide">{phone_name}</h2>
                        <div className="flex items-center">
                            <Rating
                                initialRating={rating}                 
                                emptySymbol={<span style={{ fontSize: '1.5em', color: 'lightgray' }}>☆</span>}  
                                fullSymbol={<span style={{ fontSize: '1.5em', color: 'gold' }}>★</span>}       
                                readonly                                 
                            />
                        </div>
                    </div>
                </div>
                <button type="button" className="flex btn items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md">See More</button>
            </div>
        </div>
    );
};

export default ServiceCart;
