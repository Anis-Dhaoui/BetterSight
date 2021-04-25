import React, { useState } from 'react'
import { Carousel, CarouselIndicators, CarouselItem } from 'reactstrap';
import RenderProducts from './RenderProducts'

export default function Home(props) {

    const items = [
        {
          src: './images/carousel_images/slide_1.jpg',
          altText: 'Slide 1'
        },
        {
          src: './images/carousel_images/slide_2.jpg',
          altText: 'Slide 2'
        },
        {
          src: './images/carousel_images/slide_3.jpg',
          altText: 'Slide 3'
        }
      ];
      
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} width="100%" height="430px" />
              <div className="carousel-overlay"></div>
            </CarouselItem>
          );
        });
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 px-0 mb-2 home-carousel">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                    </Carousel>
                </div>
            </div> 
            <div className="row">
                <div className="col-12">
                    {RenderProducts(props.products, props.perPage)}
                </div>
            </div>
        </div>
    )
}
