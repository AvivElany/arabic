import './Hero.css'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'

/*interface IHeroProps {

}*/

export default function Hero(/*props: IHeroProps*/) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const buttonVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <section className="hero" ref={ref}>
            <motion.div 
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h1 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className='greeting'>סַלָאם עֲלֵיכֻם</span> וברוכים הבאים לפק"ל שיחון ערבית<span className='unit'>ללוחמי גדוד 9311</span>
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                >
                    בעזרת הפק"ל הייעודי נלמד לתקשר בצורה יעילה בשטח עם שיחונים פשוטים, אוצר מילים שימושי למבצעים, ותרגולים פיזיים מותאמים לכל פלוגה.
                </motion.p>
                <motion.a 
                    href="#Importance" 
                    className="hero-button"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    התחל ללמוד עכשיו
                </motion.a>
            </motion.div>
        </section>
    )
}
