import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { ProgressIndicatorContext } from 'src/context/ProgressIndicatorContext';


const DEFAULT_ANIMATION_TIMER = 1000;
const DEFAULT_ANIMATION_TIMER_BUFFER = 200;
const DEFAULT_ANIMATION = 'ease-in-out';

const KEY_UP = 38;
const KEY_DOWN = 40;
const MINIMAL_DELTA_Y_DIFFERENCE = 5;

type PageScrollerProps = React.ComponentPropsWithRef<'div'>;

export const PageScroller = ({ children }: PageScrollerProps) => {
  const { activeIndex, setActiveIndex } = useContext(ProgressIndicatorContext);
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const pageContainer = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);
  const previousTouchMove = useRef<number | null>(null);
  const numberOfPages = React.Children.count(children);
  const isAtStart = (activeIndex ?? 0) === 0;
  const isAtEnd = activeIndex === numberOfPages - 1;

  const scrollToIndex = useCallback(
    (index: number) => {
      if (pageContainer?.current) {
        pageContainer.current.style.transform = `translate3d(0, -${index * 100}%, 0)`;
        setActiveIndex?.(index);
      }
    },
    [pageContainer]
  );

  useEffect(() => {
    if (typeof activeIndex === 'number') {
      scrollToIndex(activeIndex);
    }
  }, [activeIndex]);

  const scrollToIndexWithPause = useCallback(
    (index: number) => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        scrollToIndex(index);
        setTimeout(() => {
          isScrolling.current = false;
        }, DEFAULT_ANIMATION_TIMER + DEFAULT_ANIMATION_TIMER_BUFFER);
      }
    },
    [pageContainer]
  );

  const scrollDown = useCallback(() => {
    if (!isAtEnd) {
      scrollToIndex((activeIndex ?? 0) + 1);
    }
  }, [scrollToIndex, activeIndex]);

  const scrollUp = useCallback(() => {
    if (!isAtStart) {
      scrollToIndex((activeIndex ?? 0) - 1);
    }
  }, [scrollToIndex, activeIndex]);

  const scrollDownWithPause = useCallback(() => {
    if (!isAtEnd) {
      scrollToIndexWithPause((activeIndex ?? 0) + 1);
    }
  }, [scrollToIndex, activeIndex]);

  const scrollUpWithPause = useCallback(() => {
    if (!isAtStart) {
      scrollToIndexWithPause((activeIndex ?? 0) - 1);
    }
  }, [scrollToIndex, activeIndex]);

  const touchMove = useCallback(
    (event: React.TouchEvent) => {
      if (previousTouchMove.current === null) {
        previousTouchMove.current = event.touches[0].clientY;
      } else {
        if (event.touches[0].clientY > previousTouchMove.current) {
          scrollUpWithPause();
        } else {
          scrollDownWithPause();
        }
      }
    },
    [scrollUpWithPause, scrollUpWithPause]
  );

  const onWheel = useCallback(
    (event: React.WheelEvent) => {
      if (Math.abs(event.deltaY) > MINIMAL_DELTA_Y_DIFFERENCE) {
        if (event.deltaY > 0) {
          scrollDownWithPause();
        } else {
          scrollUpWithPause();
        }
      }
    },
    [scrollUpWithPause, scrollUpWithPause]
  );

  const onKeyDown = useCallback(
    (event: Event) => {
      if (event instanceof KeyboardEvent) {
        if (event.keyCode === KEY_UP) {
          scrollUp();
        }
        if (event.keyCode === KEY_DOWN) {
          scrollDown();
        }
      }
    },
    [scrollDown, scrollUp]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div
      ref={scrollContainer}
      onTouchMove={touchMove}
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <div
        ref={pageContainer}
        onWheel={onWheel}
        style={{
          height: '100%',
          width: '100%',
          transition: `transform ${DEFAULT_ANIMATION_TIMER}ms ${DEFAULT_ANIMATION}`,
          outline: 'none',
        }}
      >
        {children}
      </div>
    </div>
  );
};
