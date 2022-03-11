import React, {useEffect, useState} from 'react';
import '../styles.css'; 

function CustomForm ({ status, message, onValidated }) {

    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: ""
    }); 

    // const {modalOpen, setModalOpen} = (false); 

    useEffect(() => {
        if(status === "success") clearFields(); 
    }); 
        
    //     if(modalOpen && status === "success") clearFields(); 
    // }, [status, modalOpen])

    function clearFields() {
        setContact(""); 
    }

    function refreshPage() {
        window.location.reload(false);  
    }

    function handleChange(event) {
        const { name, value } = event.target; 
        
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }; 
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        contact.email &&
        contact.firstName &&
        contact.lastName &&
        contact.email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: contact.email,
            MERGE1: contact.firstName,
            MERGE2: contact.lastName,
        }); 
    }

    return (
        <form 
        className="mailchimpForm"
        onSubmit={(event) => handleSubmit(event)}
        >
            <h3 className="mailchimpTitle">
            {status === "success" ? "Success!" : 
            "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div 
                    className="mailchimpAlertSending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div 
                className="mailchimpAlertError"
                dangerouslySetInnerHTML={{ __html: message }}
                >
                </div>
            )}
            {status === "success" && (
                <div
                    className="mailchimpAlertSuccess"
                    dangerouslySetInnerHTML={{ __html: message }}>
                    </div>
            )}

            {status !== "success" ? (

            <div className="mailchimpFieldContainer">
                <input
                    label= "First Name"
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    value={contact.firstName}
                    placeholder="John"
                    isrequired="true"
                />

                <input
                    label="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    value={contact.lastName}
                    placeholder="Doe"
                    isrequired="true"
                />

                <input
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={contact.email}
                    placeholder="your@email.com"
                    isrequired="true"
                />
            </div>
            ) : null}

                {status === "success" ? <button
                    onClick={refreshPage}
                    label="close"
                    size="big"
                    className="closeButton">Close</button> : 
                <input
                    label="subscribe"
                    type="submit"
                    formvalues={[contact.email, contact.firstName, contact.lastName]}
                />
                }
        </form>
    );  
};  



export default CustomForm; 