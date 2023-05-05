import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ActiveCampaign = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [state, setState] = useState({
        isSubmitted: false,
        isError: false
    });    

    const onSubmit = (data) => {
        const formData = new FormData();

        // Hidden field key/values.
        formData.append("u", "9");
        formData.append("f", "9");
        formData.append("s", "");
        formData.append("c", "0");
        formData.append("m", "0");
        formData.append("act", "sub");
        formData.append("v", "2");
        formData.append("or", "86690ff5a207d76892a31695aefce292");

        // Form field key/values.
        formData.append("fullname", data.fullname);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("field[2]", data.company);
        
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
            props.setShowVid(true);
        })
        .catch(err => {
            // setState({
            //     isSubmitted: true,
            // });
            props.setShowVid(true);

        });
    }

  return (
    <div>
        {!state.isSubmitted ? 
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Watch Now</legend>
                    <div>
                        <div>
                            <div>
                                <label htmlFor="fullname">Name</label>
                                <input id="fullname" name="fullname" placeholder="Type your name" className={errors.fullname ? "c-form__textbox error" : "c-form__textbox"} {...register("fullname", { required: true })} />
                                {errors.fullname && <div className="validation--error"><p>Please enter your name</p></div>}
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
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" name="phone" placeholder="Type your phone" className={errors.phone ? "c-form__textbox error" : "c-form__textbox"} {...register("phone", { required: true })} />
                                {errors.phone && <div className="validation--error"><p>Please enter your phone</p></div>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="company">Company/Organisation</label>
                                <input id="company" name="company" placeholder="Type your company" className={errors.company ? "c-form__textbox error" : "c-form__textbox"} {...register("company", { required: true })} />
                                {errors.company && <div className="validation--error"><p>Please enter your company</p></div>}
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </fieldset>
                {state.isError ? <p>Unfortunately, your submission could not be sent. Please try again later.</p> : null}    
            </form>
            : <p>Thank you for your message. I will be in touch shortly.</p>}
    </div>
  );
}
export default ActiveCampaign;