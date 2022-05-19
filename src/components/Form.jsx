import React, { useState } from 'react';
import Button from './Button';
import Loader from './Loader';

import { addDoc, collection } from "firebase/firestore";
import { firestore } from '../App';

const Form = ({ innerRef }) => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (!isValid(email)) {
      setErrorMsg('Email is not valid');
      console.log('Not valid');
      return;
    }

    setSending(true);

    addDoc(collection(firestore, "users"), {
      email: email
    })
      .then(() => {
        setSending(false);
        setSent(true);
      })
      .catch(() => {
        setSending(false);
        setErrorMsg('Something went wrong :(');
      });
  }

  const isValid = (email) => {
    const trimed = email.trim();
    return trimed
      .match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  return (
    <div className='form'>
      {sending
        ? <Loader />
        : sent
          ? <div className="success">
            <p className='form-title'><strong>Thank you!</strong></p>
            <p className='form-subtitle'>We'll notify you as soon as it's ready</p>

          </div>
          : <form ref={innerRef} onSubmit={(e) => e.preventDefault()}>
            <p className='form-title'><strong>Leave your email</strong></p>
            <p className='form-subtitle'>and we’ll notify you as soon as it’s ready</p>
            <p className="errorMsg">{errorMsg}</p>

            <input
              className='email'
              placeholder='email@example.com'
              type='text' onInput={(e) => setEmail(e.target.value)}
              value={email}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }}>
            </input>

            <Button handleClick={handleSubmit} clsName='wide' />
          </form>
      }
    </div>
  )
}

export default Form;
