import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ActiveCampaignHowthrive = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [state, setState] = useState({
        isSubmitted: false,
        isError: false
    });    

    const onSubmit = (data) => {
        const formData = new FormData();

        // Hidden field key/values.
        formData.append("u", "13");
        formData.append("f", "13");
        formData.append("s", "");
        formData.append("c", "0");
        formData.append("m", "0");
        formData.append("act", "sub");
        formData.append("v", "2");
        formData.append("or", "b8ef93dd583fc85ec3b88d81ae027f45");

        // Form field key/values.
        formData.append("firstname", data.firstname);
        formData.append("email", data.email);
        formData.append("field[5]", data.surname);
        formData.append("field[6]", data.checkbox);
        
        // Pass FormData values into a POST request to ActiveCampaign.
        // Mark form submission successful, otherwise return error state. 
        fetch('https://mackaygoodwin69587.activehosted.com/proc.php', {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
        })
        .then(response => {
            // setState({
            //     isSubmitted: true,
            // });
            var element = document.createElement('a');
              element.setAttribute('href', "/How-to-Thrive-The-3-Step-Business-Recovery-Process.pdf");
              element.setAttribute('download', "How to Thrive");

              // Above code is equivalent to
              // <a href="path of file" download="file name">

              document.body.appendChild(element);

              //onClick property
              element.click();

              document.body.removeChild(element);
            props.setForm(false);
        })
        .catch(err => {
            // setState({
            //     isSubmitted: true,
            // });
            props.setForm(false);
            var element = document.createElement('a');
      element.setAttribute('href', "/How-to-Thrive-The-3-Step-Business-Recovery-Process.pdf");
      element.setAttribute('download', "How to Thrive");

      // Above code is equivalent to
      // <a href="path of file" download="file name">

      document.body.appendChild(element);

      //onClick property
      element.click();

      document.body.removeChild(element);
        });
    }

  return (
    <div>
        {!state.isSubmitted ? 
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Download e-guide</legend>
                    <h3>Download your free copy today and get on the path to recovery</h3>
                    <div>
                        <div>
                            <div>
                                <label htmlFor="firstname">First Name</label>
                                <input id="firstname" name="firstname" placeholder="Type your name" className={errors.firstname ? "c-form__textbox error" : "c-form__textbox"} {...register("firstname", { required: true })} />
                                {errors.firstname && <div className="validation--error"><p>Please enter your name</p></div>}
                            </div>
                        </div>                        
                        <div>
                            <div>
                                <label htmlFor="surname">Surname</label>
                                <input id="surname" name="surname" placeholder="Type your surname" className={errors.surname ? "c-form__textbox error" : "c-form__textbox"} {...register("surname", { required: true })} />
                                {errors.surname && <div className="validation--error"><p>Please enter your surname</p></div>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" placeholder="Email" className={errors.contactemail ? "c-form__textbox error" : "c-form__textbox"} {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                                {errors.email && <div className="validation--error"><p>Please enter a valid email</p></div>}
                            </div>
                        </div> 
                        <div>
                         
                         <span>
                         <input type="checkbox" id="checkbox" name="checkbox" className={errors.checkbox ? "c-form__textbox error" : "c-form__checkbox"} {...register("checkbox", { required: true })} />
                        <label for="field_6Please contact me to set up a free consultation.">
                          Please contact me to set up a free consultation.
                        </label>
                      </span>
                        </div>
                        <div>
                            <input type="submit" value="Download e-guide" />
                        </div>
                    </div>
                </fieldset>
                {state.isError ? <p>Unfortunately, your submission could not be sent. Please try again later.</p> : null}    
            </form>
            : <p>Thank you for your message. I will be in touch shortly.</p>}
    </div>
  );
}
export default ActiveCampaignHowthrive;