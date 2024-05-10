import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import{server} from '../../server';

const ActivationPage = () => {
    const {activation_token} = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if(activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post(`${server}/user/activation`, {
                        activation_token,
                    });
                    console.log(res.data.message);
                } catch(err) {
                    setError(true); // Set error state to true if request fails
                    console.log(err.response.data.message);
                    setError(true); // Set
                }
            };
            activationEmail();
        }
    }, [activation_token]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {error ? (
                <p className="text-red-500">Your token is expired!</p>
            ) : (
                <p className="text-green-500">Your account has been created successfully!</p>
            )}
        </div>
    );
};

export default ActivationPage;
