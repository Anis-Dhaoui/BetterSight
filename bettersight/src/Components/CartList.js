import React from 'react'

export default function CartList(props) {

    const inCartList = props.addedToCart.filter((item) => item.incart === true);
    return (
        <div>
            {console.log("CartList:",inCartList)}
        </div>
    )
}
