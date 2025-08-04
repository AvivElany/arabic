import './Contact.css'
import { motion } from "motion/react"
import type { Variants } from "motion/react"
import { useState } from 'react';
import { ImHappy } from "react-icons/im";
import Title from '../Title/Title';

const fadeLabel: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1 
        },
    }
};

const fadeSubmit: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { 
            duration: 0.7, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4 
        },
    }
};

const fadeInput: Variants = {
    hidden: { opacity: 0, x: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2 
        },
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
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
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
        <motion.div 
            className='Contact'
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94] 
            }}
        >
            <Title title="צור קשר" />
            
            <motion.p 
                className="contact-paragragh"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.7, 
                    ease: [0.25, 0.46, 0.45, 0.94], 
                    delay: 0.5 
                }}
            >
                אם יש לכם שאלות, הערות, בקשות או סתם רוצים לדבר על ערבית, אתם מוזמנים לפנות אליי ואחזור בהקדם
            </motion.p>
            
            {isSent ? (
                <motion.div
                    className='Contact-message' 
                    role="status" 
                    aria-live="polite"
                    initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotateX: 0,
                    }}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.175, 0.885, 0.32, 1.275],
                        type: "spring",
                        stiffness: 120,
                        damping: 10
                    }}
                    whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 12px 40px rgba(26, 35, 126, 0.2)"
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        חִילוּ! <br />
                        ההודעה נשלחה בהצלחה!
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        style={{ marginTop: '0.5rem' }}
                    >
                        ארְג'ַע עַלֵיכ בִסֻרְעָה <ImHappy />
                    </motion.div>
                </motion.div>
            ) : (
                <motion.form 
                    className='Contact-form' 
                    onSubmit={handleSubmit} 
                    role="form" 
                    aria-labelledby="contact-heading"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.25, 0.46, 0.45, 0.94], 
                        delay: 0.6 
                    }}
                >
                    <motion.div
                        variants={fadeLabel}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label htmlFor="name">
                            שם מלא 
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
                            טלפון 
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
                            כתובת מייל 
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
                            הודעה 
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

                    {isError && (
                        <motion.div 
                            role="alert" 
                            aria-live="assertive" 
                            className='Contact-message error'
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                ease: [0.25, 0.46, 0.45, 0.94] 
                            }}
                            exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        >
                            אירעה שגיאה בשליחת ההודעה. אנא נסה שנית.
                        </motion.div>
                    )}
                </motion.form>
            )}
        </motion.div>
    );
}
