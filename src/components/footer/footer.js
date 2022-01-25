import {Container, Segment} from "semantic-ui-react";
import {useStore} from "../../store/store";

const Footer = () => {
    const [{textData}] = useStore();

    const footerTextData = textData.footer;

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