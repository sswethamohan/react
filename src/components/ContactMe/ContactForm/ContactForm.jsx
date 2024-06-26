// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import './ContactForm.css'
const ContactForm=()=>{
    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm('service_ifs8w6f', 'template_h0eml1k', form.current, {
    //       publicKey: 'YOUR_PUBLIC_KEY',
    //     })
    //     .then(
    //       (result) => {
    //         console.log('SUCCESS!',result.text);
    //       },
    //       (error) => {
    //         console.log('FAILED...', error.text);
    //       },
    //     );
    // };
    return(
        <div className="contact-form-content">
            {/* <p style={{fontSize:"40px"}}> Just Say Hello,</p> */}
            <form>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                <input type="text" name="email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Message" rows={3}/>
                <button>SEND</button> 
             </form>
            {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

        </div>
    )
}

export default ContactForm