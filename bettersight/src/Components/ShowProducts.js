import React from 'react'
import RenderProducts from './RenderProducts'

export default function ShowProducts(props) {
    return (
        <div>
            {console.log(props.products)}
            {RenderProducts(props.products, props.perPage)}
        </div>
    )
}
