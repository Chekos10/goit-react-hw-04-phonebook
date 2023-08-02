import { useState } from "react";
import css from '../ContactForm/contactForm.module.css'
import PropTypes from 'prop-types';
export const ContactForm = ({createContact}) =>{
    const [state , setState] = useState({
        name: '',
        number: '',
    })
    const {name, number} = state
    const handleChange = e =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = event =>{
        event.preventDefault()
        createContact(name,number)
        setState({
            name:'',
            number:'',
        })
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
