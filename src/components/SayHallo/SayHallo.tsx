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
    const mainText = 'אַהְלַן וַסַהְלַן';
    
    useEffect(() => {
        if (isInView) {
            // Reset animation when component comes into view
            setDisplayedText('');
            setShowCursor(true);
            
            let index = 0;
            const timer = setInterval(() => {
                if (index <= mainText.length) {
                    setDisplayedText(mainText.slice(0, index));
                    index++;
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
                src="/picture/logo-salam-black.jpg" 
                className="symbol"
            />
            <h1 className={showCursor ? 'typing-animation' : ''}>
                {displayedText}
            </h1>
        </motion.div>
    )
}
