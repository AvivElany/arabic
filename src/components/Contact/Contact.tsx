import { motion } from "motion/react"
import type { Variants } from "motion/react"

import './Contact.css'
import { useState } from 'react';
import { ImHappy } from "react-icons/im";

/*interface I.ContactProps {

}*/

// https://portfolio-server-witz.onrender.com/contact

const fadeLabel: Variants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 },
    }
};

const fadeSubmit: Variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
    }
};

const fadeInput: Variants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
    }
};

export default function Contact(/*props: I.ContactProps*/) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [isSent, setIsSent] = useState(false)
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setIsSent(false)
        setIsError(false)

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch('https://formspree.io/f/xldllrpj', {
                method: 'POST',
                body: formData,
                headers: {
                Accept: 'application/json',
            },
        })

            if (response.ok) {
                setIsSent(true)
                form.reset()
            } else {
                setIsError(true)
            }
            } catch (error) {
                console.error('Error:', error)
                setIsError(true)
            } finally {
                setLoading(false)
            }
    }


    return (
        <div className='Contact'>
            <h1 className='Contact-title'>צור קשר</h1>
            <p className="contact-paragragh">אם יש לכם שאלות, הערות, בקשות או סתם רוצים לדבר על ערבית, אתם מוזמנים לפנות אליי ואחזור בהקדם</p>
                {isSent ?
                    <motion.div
                        className='Contact-message'>
                            
                    חִילוּ! <br />
                    ההודעה נשלחה בהצלחה!&ensp;<br />

                    ארְג'ַע עַלֵיכ בִסֻרְעָה <ImHappy />
                    </motion.div>
                    :
                    <form className='Contact-form' onSubmit={handleSubmit}>
                        <motion.div
                            variants={fadeLabel}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <label htmlFor="name">שם מלא:</label>
                            <motion.input
                                variants={fadeInput}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                type="text"
                                id="name"
                                name="name"
                                required
                                disabled={loading}
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="הכנס את שמך המלא"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeLabel}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <label htmlFor="phone">טלפון:</label>
                            <motion.input
                                variants={fadeInput}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                disabled={loading}
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="050-1234567"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeLabel}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <label htmlFor="email">כתובת מייל:</label>
                            <motion.input
                                variants={fadeInput}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                type="email"
                                id="email"
                                name="email"
                                required
                                disabled={loading}
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeLabel}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                            <label htmlFor="message">הודעה:</label>
                            <motion.textarea
                                variants={fadeInput}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                id="message"
                                name="message"
                                required
                                disabled={loading}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="כתוב כאן את הודעתך..."
                            />
                        </motion.div>

                        <motion.button
                            variants={fadeSubmit}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="submit"
                            disabled={loading}>
                            {loading ? 'שולח...' : 'שלח הודעה'}
                        </motion.button>

                        {isError && (
                            <div className='Contact-message error'>
                                אירעה שגיאה בשליחת ההודעה. אנא נסה שנית.
                            </div>
                        )}
                    </form>}
            </div>
    )
}
