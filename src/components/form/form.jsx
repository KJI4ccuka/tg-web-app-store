import React, {useEffect, useState} from 'react';
import cl from './form.module.scss'
import {useTelegram} from "../../hooks/useTelegram.js";

const Form = () => {
    const [country, setCountry] = useState()
    const [street, setStreet] = useState()
    const [subject, setSubject] = useState()

    const { tg } = useTelegram()

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send form'
        })
    }, []);

    useEffect(() => {

        if (!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()

        }

    }, [country, street]);



    return (
        <div className={cl.form}>
            <h3>Введите ваши данные</h3>
            <input
                className={cl.input}
                type="text"
                placeholder={'Country'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={cl.input}
                type="text"
                placeholder={'Street'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={cl.select}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;