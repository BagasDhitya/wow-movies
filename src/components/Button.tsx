import React, { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: any;
    title?: string;
    id: string;
}

const Button: FC<Props> = ({ type, id, onClick, title }) => {

    const long = 'bg-wow-coral-red w-80 h-12 text-white rounded-md'
    const medium = 'bg-wow-coral-red w-60 h-12 text-white rounded-md'
    const short = 'bg-wow-coral-red w-40 h-12 text-white rounded-md'

    return (
        <button
            id={id}
            onClick={onClick}
            className={type === 'long' ?
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