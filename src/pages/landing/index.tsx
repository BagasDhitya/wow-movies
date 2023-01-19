import React from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

const Landing = () => {
    return (
        <Layout>
            <div className='p-52'>

            </div>
            <div className='p-52'>
                <h1 className='text-wow-coral-red'>Watch Your Taste!</h1>
                <div className='mt-10 mr-30'>
                    <p className='text-wow-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className='mt-10'>
                    <Button
                        id='started'
                        label='started'
                        title='Get Started'
                        type={'medium'}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Landing