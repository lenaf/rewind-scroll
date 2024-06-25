import { Children } from "react";

interface CarouselProps extends React.HTMLProps<HTMLDivElement> {
    id: string;
    autoSlide?: boolean;
    showArrows?: boolean;
}

export function Carousel({ className, children, id, autoSlide = true, showArrows, ...rest }: CarouselProps) {

    const scrollToIndex = (index: number, carouselId: string) => {
        const carousel = document.getElementById(carouselId);
        const carouselItems = carousel?.childNodes;
        if (carousel) {
            const target = document.querySelector<HTMLDivElement>(id)!;
            const left = target.offsetLeft;
            carousel.scrollTo({ left: left });
        }
    };

    return (
        <div
            {...rest}
            id={id}
            className={`carousel ${className}`}
        >
            {Children.map(children, (child, index) =>
                <div className='carousel-item w-full'>
                    {child}
                </div>)}

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}
