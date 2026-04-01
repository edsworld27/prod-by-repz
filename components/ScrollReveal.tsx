"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'scale' | 'slide-right' | 'slide-left';
  delay?: number;
  threshold?: number;
  className?: string;
  offset?: string;
}

export default function ScrollReveal({
  children,
  animation = 'slide-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  offset = '20px',
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: `0px 0px -${offset} 0px`
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, offset]);

  // Initial Styles
  const getInitialStyles = () => {
    switch (animation) {
      case 'fade':
        return { opacity: 0 };
      case 'slide-up':
        return { opacity: 0, transform: 'translateY(30px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.95)' };
      case 'slide-right':
        return { opacity: 0, transform: 'translateX(-30px)' };
      case 'slide-left':
        return { opacity: 0, transform: 'translateX(30px)' };
      default:
        return { opacity: 0 };
    }
  };

  // Visible Styles
  const getVisibleStyles = () => {
    return {
      opacity: 1,
      transform: 'translate(0, 0) scale(1)',
      transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`
    };
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
      {...props}
    >
      {children}
    </div>
  );
}
