import React, { FC } from 'react'

interface Props {
    id: string,
    title?: string,
    description?: string,
    image?: string
}

const Card: FC<Props> = ({ id, title, description, image }) => {
    return (
        <div id={id} className="card card-compact w-80 h-96 bg-black rounded-md shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-wow-coral-red text-white">Add to Favorites</button>
                </div>
            </div>
        </div>
    )
}

export default Card