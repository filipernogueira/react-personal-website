import { useState, useEffect, useRef } from "react";

const useInView = (options) => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(ref.current); // Stop observing once it's in view
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
