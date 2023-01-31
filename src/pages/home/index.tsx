import React from 'react'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <div className='mt-20'>
                <Card
                    id={'card'}
                />
            </div>
        </Layout>
    )
}

export default Home