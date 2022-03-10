import React from 'react'; 
import '../styles.css'; 
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';

const MailchimpForm = props => {

    const postUrl = "https://versusgaming.us20.list-manage.com/subscribe/post?u=25c3a88a37840f42d26e48c3f&id=43b23f582f"; 

    return (
        <div className="mailchimpFormContainer">
            <MailchimpSubscribe 
                url={postUrl}
                render={(props) => (
                    <CustomForm
                        status={props.status}
                        message={props.message}
                        onValidated={formData => props.subscribe(formData)}
                    />
                )}
            />
        </div>
     ); 
}; 

export default MailchimpForm; 