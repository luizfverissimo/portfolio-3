import { useEffect, useState } from 'react';
import { Send } from 'react-feather';
import ReCAPTCHA from 'react-google-recaptcha';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import toast from 'react-hot-toast';

import ButtonSecondary from '../ButtonSecondary';
import styles from './styles.module.scss';

import validateContact from '../../utils/validation';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    init(`${process.env.NEXT_PUBLIC_EMAILJS_USER}`);
  }, []);

  const recaptchaVerify = () => {
    setIsVerified(true);
    return;
  };

  const handleSubmitContactForm = async (event) => {
    event.preventDefault();

    const res = validateContact(name, email, message);

    if (!res.status) {
      toast.error(res.message);
      return;
    }

    if (!isVerified) {
      toast.error('Verify reCaptcha field.');
      return;
    }

    const toastLoading = toast.loading('Sending the message');
    try {
      await emailjs.send('service_bsg0df3', 'template_xwi0imb', {
        from_name: name,
        from_email: email,
        message: message
      });
      toast.dismiss(toastLoading);
      toast.success('The message was sent, I will reply you soon!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      toast.dismiss(toastLoading);
      toast.error('An Error occurred, please resubmit.');
      console.log(err);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='email'>E-mail</label>
      <input
        id='email'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='message'>Message</label>
      <textarea
        i='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className={styles.contactButtonContainer}>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          onChange={recaptchaVerify}
          theme='light'
          hl='en'
        />
        <ButtonSecondary onClick={handleSubmitContactForm}>
          Send message <Send size={18} />
        </ButtonSecondary>
      </div>
    </div>
  );
}

export default ContactForm;
