import { Children, useEffect, useRef, useState } from "react";
import Button from "./Button";

interface CarouselProps extends React.HTMLProps<HTMLDivElement> {
    id: string;
    isAutoPlay?: boolean;
    showArrows?: boolean;
}

export function Carousel({ className, children, id, isAutoPlay = true, showArrows, ...rest }: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemsLength = Children.count(children);
    const isFirstActive = activeIndex === 0;
    const isLastActive = activeIndex === itemsLength - 1;
    const autoPlayIntervalId = useRef<any>(null);
    const triggerAutoPlayStart = useRef(isAutoPlay);
    const clearAutoPlayInterval = () => clearInterval(autoPlayIntervalId.current);

    const scrollToIndex = (index: number) => {
        const carousel = document.getElementById(id);
        if (carousel) {
            const left = (carousel?.childNodes[index] as HTMLElement)?.offsetLeft;
            carousel.scrollTo({ left: left, behavior: 'instant' });
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        if (triggerAutoPlayStart) {
            if (autoPlayIntervalId.current) clearAutoPlayInterval();
            autoPlayIntervalId.current = setInterval(() => {
                scrollToIndex(isLastActive ? 0 : activeIndex + 1)
            }, 3000);
            triggerAutoPlayStart.current = false;
        }
        return clearAutoPlayInterval;
    }, [triggerAutoPlayStart, activeIndex]);

    return (
        <div className={`relative w-full ${className}`}>
            <div
                {...rest}
                id={id}
                className="carousel relative w-full"
            >
                {Children.map(children, (child) =>
                    <div className='carousel-item w-full'>
                        {child}
                    </div>)}
            </div>
            <div className="z-10 absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <Button
                    id='scroll-back'
                    onClick={() => {
                        scrollToIndex(activeIndex - 1);
                        triggerAutoPlayStart.current = true;
                    }}
                    disabled={isFirstActive}
                    className={`btn-circle ${isFirstActive ? 'invisible' : ''}`}
                >
                    ❮
                </Button>
                <Button
                    id='scroll-forward'
                    onClick={() => {
                        scrollToIndex(activeIndex + 1);
                        triggerAutoPlayStart.current = true;
                    }}
                    disabled={isLastActive}
                    className={`btn-circle ${isLastActive ? 'invisible' : ''}`}
                >
                    ❯
                </Button>
            </div>
        </div>
    )
}
