import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Jumbotron } from 'reactstrap'
import RenderProducts from './RenderProducts'

export default function ShowMenWomenProd(props) {
    const [whichHeader, setwhichHeader] = useState({image: null, header: null});
    const currentUrl = useLocation();

    useEffect(() => {
        switch (currentUrl.pathname) {
            case "/men":
                setwhichHeader({...whichHeader, image:"../images/jumbotron_images/men_glasses.jpg", header:"Men's Glasses"})
                break;
            case "/women":
                setwhichHeader({...whichHeader, image:"../images/jumbotron_images/women_glasses.jpg", header:"Women's Glasses"})
                break;  
            case "/men/eyeglasses":
            case "/women/eyeglasses":
                setwhichHeader({...whichHeader, image:"../images/jumbotron_images/eyeglasses.jpg"})
                break;
            case "/men/sunglasses":
            case "/women/sunglasses":
                setwhichHeader({...whichHeader, image:"../images/jumbotron_images/sunglasses.jpg"})
                break;      
            default:
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [currentUrl.pathname])

    return (
        <div>
            {console.log(currentUrl.pathname)}
            <Jumbotron id="jumbotron_header" fluid style={{padding:"0"}}>
                <img src={whichHeader.image} width="100%" height="100%" alt={currentUrl.pathname} className="img-responsive" />
                <h1 className="titleOverlay">{whichHeader.header}</h1>
            </Jumbotron>
            {RenderProducts(props.products, props.perPage)}
        </div>
    )
}
