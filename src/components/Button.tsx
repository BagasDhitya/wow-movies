import React, { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: any;
    title?: string;
    label: string;
    id: string;
}

const Button: FC<Props> = ({ type, label, id, onClick, title }) => {

    const long = 'bg-wow-coral-red w-80 h-12 text-white rounded-md'
    const medium = 'bg-wow-coral-red w-60 h-12 text-white rounded-md'
    const short = 'bg-wow-coral-red w-40 h-12 text-white rounded-md'

    return (
        <button className={type === 'long' ?
            long :
            `${type === 'medium' ?
                medium : `${type === 'short' && short
                }`
            }`
        }>
            {title}
        </button>
    )
}

export default Button