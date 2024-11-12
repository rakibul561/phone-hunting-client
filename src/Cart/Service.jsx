import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Service = () => {
    const [services, setServices] = useState([]);
     

    useEffect( () =>{
        fetch('https://phone-hunting-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    const card = services.slice(0,6);

    useEffect(()=>{
        Aos.init();
    },[])


    return (
        <div data-aos="fade-down-left">
            <div className='m-8'>
                <h2 className='text-xl text-center font-bold'>Card Item</h2>
                <p className=' text-center lg:w-[800px] mx-auto '>Our mobile product collection features the latest technology and reliable brand smartphones to simplify your digital life. Each product comes with a long-lasting battery, advanced camera, and fast processor, ensuring top-notch performance. Our mobile products offer diverse designs and affordable prices</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-2 gap-2'>
                {
                    card?.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                    >
                    </ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Service;