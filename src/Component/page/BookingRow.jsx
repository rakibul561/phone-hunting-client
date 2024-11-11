import React from 'react';

const BookingRow = ({book}) => {
    console.log(book);
    

    const { customerName, _id, email, image, date, price} = book;
    return (
        <div>
            
            <tr>
       
            <td>
                <div className="avatar">
                    <div className="rounded  w-24 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
          
            <td>{date}</td>

            <td>${price}</td>
          
           
        </tr>
        </div>
    );
};

export default BookingRow;