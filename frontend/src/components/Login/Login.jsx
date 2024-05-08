import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom'; // Import Link if using React Router

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Here you can add your login logic
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember me:", rememberMe);
    }

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8'>
            <div className='mt-8 sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div className='mt-4 mb-6 text-center text-xl font-extrabold text-gray-900'>
                        Login to your account
                    </div>
                    <form className='space-y-6' onSubmit={handleLoginSubmit}>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email address
                            </label>
                            <input 
                                type='email'
                                name='email'
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                focus:outline-none focus:ring-black focus:border-black sm:text-sm'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <div className='mt-1 relative'>
                                <input 
                                    type={visible ? 'text' : 'password'}
                                    name='password'
                                    autoComplete='current-password'
                                    required
                                    value={password}   
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                    focus:outline-none focus:ring-black focus:border-black sm:text-sm'
                                />
                                <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400'>
                                    {visible ? (
                                        <AiOutlineEye
                                            className='h-5 w-5 cursor-pointer'
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className='h-5 w-5 cursor-pointer'
                                            onClick={() => setVisible(true)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700 sm:block">Remember me</label>
                            </div>
                            <Link to="/forgot-password" className="text-sm font-bold text-black hover:text-gray-900 hover:underline">Forgot Password?</Link>
                        </div>
                        <div>
                            <Button 
                                type="submit" 
                                className="w-full px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-700">Don't have an account? <Link to="/sign-up" className="font-bold text-black hover:text-gray-900 hover:underline">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
