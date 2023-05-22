import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseTitle from '../Pages/HookPageTitle/UseTitle';
import './ErrorPage.css'

const ErrorPage = () => {
    UseTitle("Error");

    const navigate = useNavigate();
    const navHandler =()=>{
      navigate(-1)
    }
    return (
        <div className='grid justify-items-center border'>
            <img className='imgError
            bg-gradient-to-r from-purple-300 to-pink-400' src="https://i.ibb.co/kQxjJJP/error-removebg-preview.png" alt="" />
            <div className='button'>
            <button onClick={navHandler} className='btn btn-error text-3xl mt-5 mb-5 font-bold'>go to home</button>
            </div>
        </div>
    );
};

export default ErrorPage;