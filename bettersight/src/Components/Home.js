import React from 'react'
import RenderProducts from './RenderProducts'

export default function Home(props) {
    return (
        <div>
            {RenderProducts(props.products, props.perPage)}
        </div>
    )
}
