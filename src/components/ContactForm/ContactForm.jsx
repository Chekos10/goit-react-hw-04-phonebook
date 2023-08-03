import { useState } from "react";
import css from '../ContactForm/contactForm.module.css'
import PropTypes from 'prop-types';
export const ContactForm = ({createContact}) =>{
    const [name,setName] = useState('');
    const [number, setNumber] = useState('')
    const handleChange = e =>{
        const {name,value} = e.target
        if(name === 'name') setName(value);
        if(name ==='number') setNumber(value)
    }
    const handleSubmit = event =>{
        event.preventDefault()
        createContact(name,number)
        setName('')
        setNumber('')
    }
    
    return (
        <form onSubmit ={handleSubmit} className={css.phonebookForm}>
        <div className={css.nameArea}>
        <label >Name</label>
        <input
            className={css.inputName}
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"            
            required
        />
        </div>
        <div className={css.phoneArea}>
        <label>Phone</label>
        <input
            className={css.inputPhone}
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
        />
        </div>
        <button type="submit" className={css.submitButton}>Add contact</button>
        </form>
    );
}
ContactForm.propTypes = {
    createContact: PropTypes.func.isRequired,
};
