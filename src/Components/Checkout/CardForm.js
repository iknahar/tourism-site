import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';


const CardForm = ({handlePaymentSuccess}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {

      event.preventDefault();
  
      if (!stripe || !elements) {

        return;
      }

      const cardElement = elements.getElement(CardElement);

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
      } else {
          setPaymentSuccess(paymentMethod.id);
          setPaymentError(null);
          handlePaymentSuccess(paymentMethod.id);
      }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <br/>
            <button style={{width: '5rem'}} type="submit" className="btn btn-success"disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentError && <h5 style={{color: 'red', marginTop:"1rem"}}>{paymentError}</h5>
        }
    </div>
    );
};

export default CardForm;