import {Container, Segment} from "semantic-ui-react";
import { text } from "../../static/data/text";

const Footer = () => {

    const footerTextData = text.en.footer;

    return (
        <Segment basic padded inverted style={
            {
                margin: 0
            }}>
            <Container textAlign='center'>
                <p>{footerTextData.copyRigth}</p>
            </Container>
        </Segment>
    )
};

export default Footer;