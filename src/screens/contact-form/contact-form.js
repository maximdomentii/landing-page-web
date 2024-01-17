import { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Icon, Image, Input, Message, TextArea } from "semantic-ui-react";
import './contact-form.css';
import {useStore} from "../../store/store";
import GoogleCaptchaV2 from "./contact-form-captcha";

const ContactForm = () => {

    const [{textData}] = useStore();

    const contactDataText = textData.contact;

    const [emailFieldError, setEmailFieldError] = useState(false);
    const [nameFieldError, setNameFieldError] = useState(false);
    const [phoneFieldError, setPhoneFieldError] = useState(false);
    const [textFieldError, setTextFieldError] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);
    const [successMessageHidden, setSuccessMessageHidden] = useState(true);
    const [failureMessageHidden, setFailureMessageHidden] = useState(true);
    const [isCaptchaInvalid, setIsCaptchaInvalid] = useState(true);
    const captchaRef = useRef(null);

    const valueFieldSetters = {
        name: setNameValue,
        email: setEmailValue,
        phone: setPhoneValue,
        text: setTextValue
    }

    const setValue = (id, value) => {
        valueFieldSetters[id](value);
        setSuccessMessageHidden(true);
        setFailureMessageHidden(true);
    }

    const validateName = () => {
        const pattern = /[A-Za-z]{1}[A-Za-z]/;
        if (nameValue && !pattern.test(nameValue)){
            setNameFieldError({
                content: contactDataText.contactFormNameError,
                pointing: 'above'
            });
            setCanSubmit(false);
        } else {
            setNameFieldError(false);
            setCanSubmit(true);
        }
    }

    const validateEmail = () => {
        const pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (emailValue && !pattern.test(emailValue)){
            setEmailFieldError({
                content: contactDataText.contactFormEmailError,
                pointing: 'above'
            });
            setCanSubmit(false);
        } else {
            setEmailFieldError(false);
            setCanSubmit(true);
        }
    }

    const validatePhone = () => {
        const pattern = /[0-9]{10}/;
        if (phoneValue && !pattern.test(phoneValue)){
            setPhoneFieldError({
                content: contactDataText.contactFormPhoneError,
                pointing: 'above'
            });
            setCanSubmit(false);
        } else {
            setPhoneFieldError(false);
            setCanSubmit(true);
        }
    }

    const validateText = () => {
        if (textValue && textValue.length < 40){
            setTextFieldError({
                content: contactDataText.contactFormTextareaError,
                pointing: 'above'
            });
            setCanSubmit(false);
        } else {
            setTextFieldError(false);
            setCanSubmit(true);
        }
    }

    useEffect(() => {
        validateName();
    }, [nameValue]);
    useEffect(() => {
        validateEmail();
    }, [emailValue]);
    useEffect(() => {
        validatePhone();
    }, [phoneValue]);
    useEffect(() => {
        validateText();
    }, [textValue]);

    const onSubmit = (event) => {
        event.preventDefault();

        if (canSubmit && nameValue && emailValue && textValue && captchaRef?.current?.getValue()) {
            const token = captchaRef.current.getValue();
            submit(token);

            setNameValue("");
            setEmailValue("");
            setPhoneValue("");
            setTextValue("");
        }
    }

    const submit = (token) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameValue,
                email: emailValue,
                phone: phoneValue,
                text: textValue,
                token: token
            })
        };
        fetch(contactDataText.contactFormSubmitUrl, requestOptions)
            .then(response => {
                console.log(response.json());
                if (response.status === 200) {
                    setSuccessMessageHidden(false);
                } else {
                    setFailureMessageHidden(false);
                }
            })
            .catch(err => {
                console.error(err);
                setFailureMessageHidden(false);
            });
    }

    return (
        <div className='contact-container'>
            <Container text className='font-family-bebas-neue'>
                <div className='text-align-center'>
                    <p className='contact-title margin-top-1em'>{contactDataText.contactTitle}</p>
                    <Image src={contactDataText.contactImgSrc} size='huge' centered/>
                    <p className='contact-description margin-top-1em'>{contactDataText.contactDescription}</p>
                    <a href={contactDataText.contactHrefLinkedin} target='_blank' className='contact-icon-color-black'>
                        <Icon name='linkedin' size='big'/>
                    </a>
                </div>
                <Form className='margin-top-1em font-family-bebas-neue contact-form'
                      onSubmit={onSubmit}
                      noValidate
                      success
                >
                    <Form.Field
                        id='name'
                        required
                        control={Input}
                        label={contactDataText.contactFormNameLabel}
                        placeholder={contactDataText.contactFormNamePlaceholder}
                        error={nameFieldError}
                        value={nameValue}
                        onChange={event => setValue(event.target.id, event.target.value)}
                    />
                    <Form.Field
                        id='email'
                        required
                        control={Input}
                        label={contactDataText.contactFormEmailLabel}
                        placeholder={contactDataText.contactFormEmailPlaceholder}
                        error={emailFieldError}
                        value={emailValue}
                        onChange={event => setValue(event.target.id, event.target.value)}
                    />
                    <Form.Field
                        id='phone'
                        control={Input}
                        label={contactDataText.contactFormPhoneLabel}
                        placeholder={contactDataText.contactFormPhonePlaceholder}
                        error={phoneFieldError}
                        value={phoneValue}
                        onChange={event => setValue(event.target.id, event.target.value)}
                    />
                    <Form.Field
                        id='text'
                        required
                        control={TextArea}
                        label={contactDataText.contactFormTextareaLabel}
                        placeholder={contactDataText.contactFormTextareaPlaceholder}
                        error={textFieldError}
                        value={textValue}
                        onChange={event => setValue(event.target.id, event.target.value)}
                    />
                    <GoogleCaptchaV2
                        captchaRef={captchaRef}
                        isCaptchaInvalid={isCaptchaInvalid}
                        setIsCaptchaInvalid={setIsCaptchaInvalid}/>
                    <Button className='form-button margin-top-1em' basic color='black' disabled={isCaptchaInvalid}>
                        {contactDataText.contactFormButtonLabel}
                    </Button>
                    <Message
                        hidden={successMessageHidden}
                        success
                        header={contactDataText.contactFormAfterSubmitSuccessMessageHeader}
                        content={contactDataText.contactFormAfterSubmitSuccessMessageContent}
                    />
                    <Message
                        hidden={failureMessageHidden}
                        negative
                        header={contactDataText.contactFormAfterSubmitErrorMessageHeader}
                        content={contactDataText.contactFormAfterSubmitErrorMessageContent}
                    />
                </Form>
                <div className='margin-top-1em'></div>
            </Container>
        </div>
    );
};

export default ContactForm;