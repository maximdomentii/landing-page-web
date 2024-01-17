import './contact-form-captcha.css'
import Recaptcha from "react-google-recaptcha";

const GoogleCaptchaV2 = ({ captchaRef, isCaptchaInvalid, setIsCaptchaInvalid }) => {
    const handleCaptchaChange = () => {
        setIsCaptchaInvalid(false);
    };

    const handleCaptchaExpire = () => {
        captchaRef.current?.reset();
        setIsCaptchaInvalid(true)
    }

    return (
        <div className="recaptcha-parent pb-3" style={{ display: isCaptchaInvalid ? 'block' : 'none' }}>
            <Recaptcha
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
                onChange={handleCaptchaChange}
                onExpired={handleCaptchaExpire}
            />
        </div>
    )
}

export default GoogleCaptchaV2;