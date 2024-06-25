import { Children, useState } from "react";
import Button from "./Button";

interface CarouselProps extends React.HTMLProps<HTMLDivElement> {
    id: string;
    isAutoPlay?: boolean;
    showArrows?: boolean;
}

export function Carousel({ className, children, id, isAutoPlay = true, showArrows, ...rest }: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemsLength = Children.count(children);

    const scrollToIndex = (index: number) => {
        const carousel = document.getElementById(id);
        if (carousel) {
            const left = (carousel?.childNodes[index] as HTMLElement)?.offsetLeft;
            carousel.scrollTo({ left: left, behavior: 'instant' });
        }
    };

    const scrollForward = () => {
        const newActiveIndex = activeIndex + 1 >= itemsLength ? 0 : activeIndex + 1;
        scrollToIndex(newActiveIndex);
        setActiveIndex(newActiveIndex);
    };

    const scrollBack = () => {
        const newActiveIndex = activeIndex < 1 ? itemsLength - 1 : activeIndex - 1;
        scrollToIndex(newActiveIndex);
        setActiveIndex(newActiveIndex);
    };

    // useEffect(() => {
    //     if (isAutoPlay) {
    //         const intervalId = setInterval(() => {
    //             scrollForward();
    //         }, 4000);
    //         return () => clearInterval(intervalId);
    //     }
    // }, [activeIndex]);

    return (
        <div
            {...rest}
            id={id}
            className={`carousel w-full ${className}`}
        >
            {Children.map(children, (child) =>
                <div className='carousel-item relative w-full'>
                    {child}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Button onClick={() => scrollBack()} className="btn-circle">❮</Button>
                        <Button onClick={() => scrollForward()} className="btn-circle">❯</Button>
                    </div>
                </div>)}
        </div>
    )
}
