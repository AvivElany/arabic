import { FaCarSide, FaClipboardList, FaMapMarkedAlt, FaShieldAlt, FaWalking } from 'react-icons/fa'
import './Meets.css'
import { FaHandcuffs } from 'react-icons/fa6'
import { Link } from 'react-router'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef } from 'react'

/*interface IMeetsProps {

}*/

export default function Meets(/*props: IMeetsProps*/) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { 
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const alternateItemVariants: Variants = {
        hidden: { 
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='Meets' ref={ref}>
            <motion.h1 
                dir='rtl'
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
            >
                איפה השפה הערבית פוגשת אותנו?
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                כאן תוכל למצוא מידע על מפגשים שונים.
            </motion.p>
            <motion.div 
                className="theMeets"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div 
                    className='meet-item' 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="meet-icon">
                        <FaCarSide />
                    </div>
                    <div className="meet-info">
                        סיורים
                    </div>
                </motion.div>
                <motion.div 
                    className='meet-item' 
                    variants={alternateItemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="meet-icon">
                        <FaHandcuffs />
                    </div>
                    <div className="meet-info">
                        <Link to="/arrest" className="nav-link">
                            מעצרים
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                    className='meet-item' 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="meet-icon">
                        <FaMapMarkedAlt />
                    </div>
                    <div className="meet-info">
                        מיפויים
                    </div>
                </motion.div>
                <motion.div 
                    className='meet-item' 
                    variants={alternateItemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="meet-icon">
                        <FaShieldAlt />
                    </div>
                    <div className="meet-info">
                        אבטחת צמתים
                    </div>
                </motion.div>
                <motion.div 
                    className='meet-item' 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="meet-icon">
                        <FaClipboardList />
                    </div>
                    <div className="meet-info">
                        <Link to="/checkpost" className="nav-link">
                            צ'קפוסט
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                    className='meet-item' 
                    variants={alternateItemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="meet-icon">
                        <FaWalking />
                    </div>
                    <div className="meet-info">
                        פטרול בכפרים
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
