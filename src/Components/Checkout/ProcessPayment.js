import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CardForm from './CardForm';

const stripePromise = loadStripe('pk_test_51IhWCcI7an14lDavo9PJzWkbGeDrS5msVwWouloi1nuls4kOt1DZlQz0AWGNXjfOGnZx96U7fKZwHdV2napQVBYl00e7N7ZjT6');

const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm handlePaymentSuccess={handlePaymentSuccess}></CardForm>
        </Elements>
    );
};

export default ProcessPayment;