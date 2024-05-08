import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ffff');
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8'>
            <div className='mt-8 sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <h1 className='mt-4 mb-6 text-center text-xl font-extrabold text-gray-900'>
                        Welcome to SoleChiba
                    </h1>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                                Full Name
                            </label>
                            <input 
                                type='text'
                                name='name'
                                autoComplete='name'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                focus:outline-none focus:ring-black focus:border-black sm:text-sm'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email Address
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
                            <div className='relative'>
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
                                            className='h-6 w-6 cursor-pointer'
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className='h-6 w-6 cursor-pointer'
                                            onClick={() => setVisible(true)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor='avatar' className='block text-sm font-medium text-gray-700'>
                                Avatar
                            </label>
                            <div className='mt-2 flex items-center'>
                                <span className='inline-block h-12 w-12 rounded-full overflow-hidden'>
                                    {
                                        avatar ? 
                                        (
                                            <img src={URL.createObjectURL(avatar)} 
                                                alt="avatar"
                                                className='h-full w-full object-cover rounded-full'
                                            />
                                        ) : (
                                            <RxAvatar className="h-full w-full" />
                                        )
                                    }
                                </span>
                                <label htmlFor="file-input"
                                    className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'
                                >
                                    <span>
                                        Upload your photo
                                    </span>
                                    <input 
                                        type='file' 
                                        name='avatar' 
                                        id='file-input' 
                                        accept='.jpg,.jpeg,.png'
                                        onChange={handleFileInputChange}
                                        className='sr-only'
                                    />
                                </label>
                            </div>
                        </div>
                    
                        <div>
                            <Button 
                                type="submit" 
                                className="w-full px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-700">Already have an account? <Link to="/login" className="font-bold text-black hover:text-gray-900 hover:underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
