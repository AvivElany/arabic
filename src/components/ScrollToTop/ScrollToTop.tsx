import React from 'react';
import './ScrollToTop.css';

interface ScrollToTopButtonProps {
    showBelow?: number;
}

export default function ScrollToTopButton({ showBelow = 300 }: ScrollToTopButtonProps) {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, [show, showBelow]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!show) {
        return null;
    }

    return (
        <button
            className="scroll-to-top-btn"
            onClick={handleClick}
            aria-label="Scroll to top"
        >
        ↑
        </button>
    );
}
