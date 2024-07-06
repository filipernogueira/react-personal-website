import { useState, useEffect, useRef } from "react";

interface IntersectionOptions {
    threshold?: number | number[];
    rootMargin?: string;
    root?: Element | null;
}

const useInView = (options: IntersectionOptions) => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const ref = useRef<Element | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target); // Stop observing once it's in view
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isInView];
};

export default useInView;
