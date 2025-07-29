import './Summary.css'
import { motion } from 'framer-motion'

interface ISummaryProps {
    summary: string;
}

export default function Summary(props: ISummaryProps) {

    return (
        <motion.div 
            className='Summary'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="summary-container">
                <div className="summary-icon">💡</div>
                <p className="summary-text">{props.summary}</p>
            </div>
        </motion.div>
    )
}
