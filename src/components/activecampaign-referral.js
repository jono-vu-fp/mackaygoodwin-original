import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ActiveCampaignRefferal = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [state, setState] = useState({
        isSubmitted: false,
        isError: false
    });    

    const onSubmit = (data) => {
        const formData = new FormData();

        // Hidden field key/values.
        formData.append("u", "15");
        formData.append("f", "15");
        formData.append("s", "");
        formData.append("c", "0");
        formData.append("m", "0");
        formData.append("act", "sub");
        formData.append("v", "2");
        formData.append("or", "5a9398f40bae3ea0c7b2cfa1bf5f8e0c");

        // Form field key/values.
        formData.append("firstname", data.firstname);
        formData.append("lastname", data.lastname);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("field[2]", data.company);
        formData.append("field[8]", data.aresof);
        
        // Pass FormData values into a POST request to ActiveCampaign.
        // Mark form submission successful, otherwise return error state. 
        fetch('https://mackaygoodwin69587.activehosted.com/proc.php', {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
        })
        .then(response => {
            setState({
                isSubmitted: true,
            });
            document.getElementById('banner-section').classList.add('tank-sec');

        })
        .catch(err => {
            setState({
                isSubmitted: true,
            });
            document.getElementById('banner-section').classList.add('tank-sec');
        });
    }

  return (
    <div >
        {!state.isSubmitted ? 
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                     
                    <div className="ref-form">
                        <div>
                           
                                <label htmlFor="firstname">First Name</label>
                                <input id="firstname" name="firstname" placeholder="" className={errors.firstname ? "c-form__textbox error" : "c-form__textbox"} {...register("firstname", { required: true })} />
                                {errors.firstname && <div className="validation--error"><p>Please enter your name</p></div>}
                            </div>
                                               
                        <div>
                           
                                <label htmlFor="surname">Last Name</label>
                                <input id="surname" name="lastname" placeholder="" className={errors.lastname ? "c-form__textbox error" : "c-form__textbox"} {...register("lastname", { required: true })} />
                                {errors.lastname && <div className="validation--error"><p>Please enter your lastname</p></div>}
                            </div>
                        
                        <div>
                          
                                <label htmlFor="email">Email Address</label>
                                <input id="email" name="email" placeholder="" className={errors.contactemail ? "c-form__textbox error" : "c-form__textbox"} {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                                {errors.email && <div className="validation--error"><p>Please enter a valid email</p></div>}
                         
                        </div> 

                        <div>
                           
                                <label htmlFor="phone">Phone Number</label>
                                <input id="phone" name="phone" placeholder="" className={errors.phone ? "c-form__textbox error" : "c-form__textbox"} {...register("phone", { required: true })} />
                                {errors.phone && <div className="validation--error"><p>Please enter your phone</p></div>}
                           
                        </div>
                         <div>
                            
                                <label htmlFor="company">Company</label>
                                <input id="company" name="company" placeholder="" className={errors.company ? "c-form__textbox error" : "c-form__textbox"} {...register("company", { required: true })} />
                                {errors.company && <div className="validation--error"><p>Please enter your company</p></div>}
                           
                        </div>

                         <div>
                            
                                <label htmlFor="aresof">Areas of expertise</label>

                                 <select name="aresof" id="aresof" >
                                      <option selected>
                                      </option>
                                      <option value="Accountant" >
                                        Accountant
                                      </option>
                                      <option value="Lawyer" >
                                        Lawyer
                                      </option>
                                      <option value="Other" >
                                        Other
                                      </option>
                                    </select>
                                  
                                  {errors.aresof && <div className="validation--error"><p>Please enter your areas of expertise</p></div>}
                           
                        </div>
                         
                         
                        <div>
                            <input type="submit" className="sub-btn" value="Sign Up" />
                        </div>
                    </div>
                </fieldset>
                {state.isError ? <p>Unfortunately, your submission could not be sent. Please try again later.</p> : null}  
            </form>
            : <p className="thank">Thank you for your message. I will be in touch shortly.</p>}
    </div>
  );
}
export default ActiveCampaignRefferal;