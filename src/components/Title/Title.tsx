import './Title.css'
import { motion } from 'framer-motion'

interface ITitleProps {
    title: string;
}

export default function Title(props: ITitleProps) {

    return (
        <motion.div 
            className='Title'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="title-container">
                <div className="title-accent"></div>
                <h1 className="title-text">{props.title}</h1>
                <div className="title-underline"></div>
            </div>
        </motion.div>
    )
}
