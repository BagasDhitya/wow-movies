import React, { FC } from 'react'

interface Props {
    children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className='bg-wow-deep-blue flex h-screen w-full'>{children}</div>
    )
}

export default Layout