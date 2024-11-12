import React, { useEffect } from 'react';
import Service from '../../Cart/Service';
import { useLoaderData } from 'react-router-dom';
import ServiceCart from '../../Cart/ServiceCart';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Product = () => {
    const item = useLoaderData();

    useEffect(()=>{
        Aos.init();
    },[])
   
    
    return (
        <div  data-aos="zoom-in">
            <h1 className='text-xl text-center font-semibold '>Product page</h1>
            <p className='text-center  lg:w-[800px] mx-auto'>Our mobile product collection features the latest technology and reliable brand smartphones to simplify your digital life. Each product comes with a long-lasting battery, advanced camera, and fast processor, ensuring top-notch performance. Our mobile products offer diverse designs and affordable prices</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2'>
                {
                    item?.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                    >
                    </ServiceCart>)
                }
            </div>
         
        </div>
    );
};

export default Product;