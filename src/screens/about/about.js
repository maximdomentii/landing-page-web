import {Container, Divider, Grid, Icon, Image} from "semantic-ui-react";
import './about.css'
import {useStore} from "../../store/store";

const About = () => {

    const [{textData}] = useStore();

    const aboutTextData = textData.about;

    return (
        <div className='about-container'>
            <Container className='font-family-bebas-neue'>
                <Image src={aboutTextData.aboutImgSrc} size='huge' centered/>
                <p className='about-title margin-top-1em'>{aboutTextData.aboutTitle}</p>
                <p className='about-subtitle'>{aboutTextData.aboutSubtitle}</p>
                <p className='about-description'>{aboutTextData.aboutDescription}</p>
                <Divider horizontal className='margin-top-1em about-journey-title'>
                    {aboutTextData.aboutJourneyTitle}
                </Divider>
                <Grid>
                    {aboutTextData.aboutJourneyItems.map((data, key) => {
                        return (
                            <Grid.Row key={key}>
                                <Grid.Column width={3}>
                                    <Image src={data.logoImgSrc} size='small' floated='right'/>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <p className='font-family-bebas-neue journey-item-company maring-0'>{data.companyName}</p>
                                    <p className='font-family-bebas-neue journey-item-position maring-0'>{data.position}</p>
                                    <p className='font-family-bebas-neue journey-item-location'>
                                        <Icon name='location arrow' size='tiny'/>
                                        {data.location}</p>
                                    <p className='font-family-bebas-neue journey-item-description maring-0'>{data.description}</p>
                                </Grid.Column>
                            </Grid.Row>
                        )
                    })}
                </Grid>
                <div className='margin-top-1em'></div>
            </Container>
        </div>
    );
};

export default About;