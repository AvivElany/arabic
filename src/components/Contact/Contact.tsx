import { motion } from "motion/react"
import type { Variants } from "motion/react"

import './Contact.css'
import { useState } from 'react';

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
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

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
            const response = await fetch('https://formspree.io/f/xwpoeovv', {
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
            <div className="contact-tabs">
                <div className='Contact-image'>
            </div>
                {isSent ?
                    <motion.div
                        className='Contact-message'>
                        {loading && <div className='Contact-message'>שולח...</div>}
                        ההודעה נשלחה בהצלחה</motion.div>
                    :
                    <form className='Contact-form' onSubmit={handleSubmit}>
                        <motion.label
                            variants={fadeLabel}
                            className="about-paragraph"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            htmlFor="name">
                            שם מלא:
                        </motion.label>
                        <motion.input
                            variants={fadeInput}
                            className="about-paragraph"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange} /><br />
                        <motion.label
                            variants={fadeLabel}
                            className="about-paragraph"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            htmlFor="phone">
                            טלפון:
                        </motion.label>
                        <motion.input
                            variants={fadeInput}
                            className="about-paragraph"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange} /><br />
                        <motion.label
                            variants={fadeLabel}
                            className="about-paragraph"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            htmlFor="email">
                            מייל:
                        </motion.label>
                        <motion.input
                            variants={fadeInput}
                            className="about-paragraph"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange} />
                        <motion.label
                            variants={fadeLabel}
                            className="about-paragraph message-label"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }} htmlFor="message">
                            הודעה:
                        </motion.label>
                        <motion.textarea
                            variants={fadeInput}
                            className="about-paragraph"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            id="message"
                            name="message" required
                            value={formData.message}
                            onChange={handleChange} ></motion.textarea>
                        <motion.button
                            variants={fadeSubmit}
                            className="about-paragraph-btn"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="submit">
                            שלח
                        </motion.button>
                        {isError && <div className='Contact-message'>שגיאה בשליחת ההודעה</div>}
                    </form>}
            </div>
        </div>
    )
}
