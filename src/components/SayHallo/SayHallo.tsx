import './SayHallo.css'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*interface ISayHalloProps {

}*/

export default function SayHallo(/*props: ISayHalloProps*/) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [showShabab, setShowShabab] = useState(false);
    const mainText = 'אהלן וסהלן ';
    const shababText = 'יא שבאב';
    
    useEffect(() => {
        if (isInView) {
            // Reset animation when component comes into view
            setDisplayedText('');
            setShowCursor(true);
            setShowShabab(false);
            
            let index = 0;
            const timer = setInterval(() => {
                if (index <= mainText.length) {
                    setDisplayedText(mainText.slice(0, index));
                    index++;
                } else {
                    clearInterval(timer);
                    setShowCursor(false);
                    // הצגת "יא שבאב" אחרי השלמת הטקסט הראשי
                    setTimeout(() => {
                        setShowShabab(true);
                    }, 300);
                }
            }, 150); // מהירות הקלדה - 150ms בין כל אות

            return () => clearInterval(timer);
        }
    }, [isInView, mainText]);

    return (
        <motion.div 
            className='SayHallo'
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <img 
                src="/picture/symbol_black.jpg" 
                className="symbol"
            />
            <h1 className={showCursor ? 'typing-animation' : ''}>
                {displayedText}
                {showShabab && (
                    <motion.span 
                        className='shabab'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.8, 
                            ease: "backOut",
                            type: "spring" 
                        }}
                    >
                        {shababText}
                    </motion.span>
                )}
            </h1>
        </motion.div>
    )
}
