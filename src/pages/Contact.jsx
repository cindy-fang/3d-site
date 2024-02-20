import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleFocus = () => {};

    const handleBlur = () => {};

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Cindy",
                from_email: form.email,
                to_email: 'cindyfang2001@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            //TODO show success message
            // and hide an alert

            setForm({name: '', email: '', message: ''});
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
            //show error message
        })
    };
    
    return (
    <section className="relative flex lg:flex-row flex-col max-container">
        <div className="flex-1 min-w-[50%] flex flex-col">
            <h1 className="head-text">Get in Touch</h1>

            <form 
                className="w-full flex flex-col gap-7 mt-14"
                onSubmit={handleSubmit}
            >
                <label className="text-black-500 font-semibold">
                    Name
                    <input 
                    type="text" 
                    name="name" 
                    className="input"
                    placeholder="San"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <label className="text-black-500 font-semibold">
                    Email
                    <input 
                    type="email" 
                    name="email" 
                    className="input"
                    placeholder="8m1t@gmail.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <label className="text-black-500 font-semibold">
                    Your Message
                    <textarea 
                    name="message" 
                    rows={4}
                    className="textarea"
                    placeholder="8 makes 1 team"
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <button 
                type="submit"
                className="btn"
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                >
                    {isLoading ? 'Sending...' :'Send Message' }
                </button>
            </form>
        </div>
    </section>
    );
};

export default Contacts;
