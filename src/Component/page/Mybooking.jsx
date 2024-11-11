import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { data } from 'autoprefixer';
import BookingRow from './BookingRow';

const MyOder = () => {


    const { user } = useContext(AuthContext);

    const [booking, setBookings] = useState();
    console.log(booking);

    const url = `http://localhost:5000/bookings/?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
            console.log(data);
            
    }, [url]);



    return (
        <div>

             <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-yellow-600">
                    <tr>
                          
                           
                        </tr>
                    </thead>
                    <tbody className="text-purple-600 ">
                        {/* row 1 */}
                        {
                            booking?.map(book => <BookingRow
                                key={book._id}
                                book={book}
                                
                            ></BookingRow>)
                        }



                    </tbody>
                    {/* foot */}


                </table>
            </div>
            
        </div>
    );
};

export default MyOder;