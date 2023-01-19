import React from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../../components/Layout'
import Button from '../../components/Button'

const Landing = () => {

    const navigate = useNavigate()

    return (
        <Layout>
            <div className='p-52 bg-wow-coral-red'>
            </div>
            <div className='p-52'>
                <h1 className='text-wow-coral-red'>Watch Your Taste!</h1>
                <div className='mt-10 mr-30'>
                    <p className='text-wow-white'>Presented for those of you who want to find films based on your imagination and fantasy</p>
                </div>
                <div className='mt-10'>
                    <Button
                        id='started'
                        title='Get Started'
                        type={'medium'}
                        onClick={() => navigate('/register')}
                    />
                </div>
                <div className='mt-5'>
                    <button onClick={() => navigate('/login')} className='text-wow-white text-sm font-12'>Already have an account? Click here!</button>
                </div>
            </div>
        </Layout>
    )
}

export default Landing