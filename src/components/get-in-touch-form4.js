import * as React from "react"
import { useState } from "react"


const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const GetInTouchForm = (props) => {
  const [fName, setfName] = useState('');
  const [showfName, setShowfName] = useState('d-none');
  const [lName, setlName] = useState('');
  const [showlName, setShowlName] = useState('d-none');
  const [phone, setPhone] = useState('');
  const [showPhone, setShowPhone] = useState('d-none');
  const [email, setEmail] = useState('');
  const [showeMail, setShoweMail] = useState('d-none');
  const [stateName, setStateName] = useState('');
  const [areaHelp, setareaHelp] = useState('');
  const [about, setAbout] = useState('');
  const [showSuccess, setShowSuccess] = useState('d-none');
  const [showBtn, setShowBtn] = useState('d-block');
  let ch = 0;
  const sendemail = (e) => {
    e.preventDefault();
    if (fName.trim() !== "" && lName.trim() !== "" && re.test(email) && phoneno.test(phone) && ch === 0) {
      ch = 1;
      const recipeUrl = 'https://growingcolossus.com/mackaygoodwin/wp-json/mackey/v1/contact-sendemail ';
      const postBody = {
        "first-name": fName,
        "surname": lName,
        "email": email,
        "mobile": phone,
        "state": stateName,
        "area-help": areaHelp,
        "about-situation": about
      };

      const requestMetadata = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
      };

      fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(recipes => {
          ch = 0;
          setShowSuccess('d-block');
          setShowBtn('d-none');
        });
    }
  }

  React.useEffect(() => {
    //hubspot
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", '//js.hsforms.net/forms/embed/v2.js');
    scriptEle.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
      if ('hbspt' in window) {
          window.hbspt.forms.create({
           region: "na1",
           portalId: "40112486",
           formId: "f1eb5ebb-c2ea-41d3-8bcd-31e9f68a21bf",
          target: "#loctopbnrform"
        });
      }
    });

    return () => {
    }
   }, [])

  return (
    <div id={props.formid}></div>
  )
}
export default GetInTouchForm
