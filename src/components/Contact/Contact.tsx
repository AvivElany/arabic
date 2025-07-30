import './Contact.css'
import { motion } from "motion/react"
import type { Variants } from "motion/react"
import { useState } from 'react';
import { ImHappy } from "react-icons/im";

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

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setIsSent(false);
        setIsError(false);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xldllrpj', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setIsSent(true);
                form.reset();
                setFormData({ name: '', phone: '', email: '', message: '' });
            } else {
                setIsError(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Contact'>
            <h1 className='Contact-title' id="contact-heading">צור קשר</h1>
            <p className="contact-paragragh">אם יש לכם שאלות, הערות, בקשות או סתם רוצים לדבר על ערבית, אתם מוזמנים לפנות אליי ואחזור בהקדם</p>
            
            {isSent ? (
                <motion.div
                    className='Contact-message' 
                    role="status" 
                    aria-live="polite"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    חִילוּ! <br />
                    ההודעה נשלחה בהצלחה!&ensp;<br />
                    ארְג'ַע עַלֵיכ בִסֻרְעָה <ImHappy />
                </motion.div>
            ) : (
                <form className='Contact-form' onSubmit={handleSubmit} role="form" aria-labelledby="contact-heading">
                    <motion.div
                        variants={fadeLabel}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label htmlFor="name">
                            שם מלא <span aria-label="שדה חובה">*</span>
                        </label>
                        <motion.input
                            variants={fadeInput}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="text"
                            id="name"
                            name="name"
                            required
                            aria-required="true"
                            aria-describedby="name-error"
                            aria-invalid={errors.name ? "true" : "false"}
                            disabled={loading}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="הכנס את שמך המלא"
                        />
                        {errors.name && (
                            <div id="name-error" role="alert" aria-live="polite" className="error-message">
                                {errors.name}
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        variants={fadeLabel}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label htmlFor="phone">
                            טלפון <span aria-label="שדה חובה">*</span>
                        </label>
                        <motion.input
                            variants={fadeInput}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            aria-required="true"
                            aria-describedby="phone-error"
                            aria-invalid={errors.phone ? "true" : "false"}
                            disabled={loading}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="050-1234567"
                        />
                        {errors.phone && (
                            <div id="phone-error" role="alert" aria-live="polite" className="error-message">
                                {errors.phone}
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        variants={fadeLabel}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label htmlFor="email">
                            כתובת מייל <span aria-label="שדה חובה">*</span>
                        </label>
                        <motion.input
                            variants={fadeInput}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="email"
                            id="email"
                            name="email"
                            required
                            aria-required="true"
                            aria-describedby="email-error"
                            aria-invalid={errors.email ? "true" : "false"}
                            disabled={loading}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                        />
                        {errors.email && (
                            <div id="email-error" role="alert" aria-live="polite" className="error-message">
                                {errors.email}
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        variants={fadeLabel}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label htmlFor="message">
                            הודעה <span aria-label="שדה חובה">*</span>
                        </label>
                        <motion.textarea
                            variants={fadeInput}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            id="message"
                            name="message"
                            required
                            aria-required="true"
                            aria-describedby="message-error"
                            aria-invalid={errors.message ? "true" : "false"}
                            disabled={loading}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="כתוב כאן את הודעתך..."
                        />
                        {errors.message && (
                            <div id="message-error" role="alert" aria-live="polite" className="error-message">
                                {errors.message}
                            </div>
                        )}
                    </motion.div>

                    <motion.button
                        variants={fadeSubmit}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        type="submit"
                        aria-describedby="submit-help"
                        disabled={loading}
                    >
                        {loading ? 'שולח...' : 'שלח הודעה'}
                    </motion.button>
                    
                    <div id="submit-help" className="submit-help">
                        ההודעה תישלח תוך 24 שעות
                    </div>

                    {isError && (
                        <div role="alert" aria-live="assertive" className='Contact-message error'>
                            אירעה שגיאה בשליחת ההודעה. אנא נסה שנית.
                        </div>
                    )}
                </form>
            )}
        </div>
    );
}
