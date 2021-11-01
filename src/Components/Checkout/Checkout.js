import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Book from '../Book/Book';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [bookingData, setBookingData] = useState({});
    useEffect(() => {
        const url = `https://cryptic-escarpment-26918.herokuapp.com/checkoutData/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBookingData(data)
        })
    }, [id])
    
    return (
        <div className="container-fluid" style={{height:"90vh"}}>
            <div className="pt-5">
                <Book loggedInUser={loggedInUser} bookingData={bookingData}></Book>
            </div>  
        </div>
    );
};

export default Checkout;