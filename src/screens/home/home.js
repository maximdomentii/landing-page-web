import { Button, Container, Divider, Grid, GridRow, Image, Segment } from "semantic-ui-react";
import './home.css';
import {useStore} from "../../store/store";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [{textData}] = useStore();

    const homeTextData = textData.home;

    const handleDescriptionMoreClick = () => {
        navigate('/about');
    }

    const handleTestimonialsClick = () => {
        window.open('https://www.linkedin.com/in/maxim-domentii-4400377a/details/recommendations','_blank')
    }

    return (
        <div className='home-container'>
            <Container>
                <Image src={homeTextData.homeImgSrc} size='massive' centered/>
            </Container>
            <Container className='text-container margin-top-3em font-family-bebas-neue'>
                <p className='text-container-header'>{homeTextData.shortDescriptionHeader}</p>
                {homeTextData.shortDescriptionParagraphs.map((data, key) => {
                    return (
                        <p key={key} className='text-container-paragraph'>{data.text}</p>
                    );
                })}
                <Button className='form-button' basic color='black' onClick={handleDescriptionMoreClick}>
                    {homeTextData.shortDescriptionMoreButtonLabel}
                </Button>
            </Container>
            <Container className='skills-overview-container margin-top-3em margin-bottom-3em font-family-bebas-neue'>
                <Divider horizontal className='text-container-header'>
                    {homeTextData.skillsHeader}
                </Divider>
                <Grid stackable doubling columns={homeTextData.skillsColumns}>
                    {homeTextData.skills.map((data, key) => {
                        return (
                            <Grid.Column key={key}>
                                <Image src={data.imgSrc} size='small' centered/>
                                <p className='skills-item-title'>{data.title}</p>
                                <p className='skills-item-description'>{data.description}</p>
                            </Grid.Column>
                        )
                    })}
                </Grid>
            </Container>
            <Container className='testimonials-container margin-top-3em margin-bottom-3em font-family-bebas-neue'>
                <Divider horizontal className='text-container-header'>
                    {homeTextData.testimonialsHeader}
                </Divider>
                <Grid stackable doubling columns={2} className="margin-top-3em">
                    {homeTextData.testimonials.map((data, key) => {
                        return (
                            <Grid.Row key={key} onClick={handleTestimonialsClick}>
                                <Grid.Column className={key % 3 === 0 ? "testimonials-item"
                                    : (key % 3 === 1 ? "testimonials-item testimonials-item-right"
                                        : "testimonials-item testimonials-item-center")}>
                                    <p className='testimonials-item-text'>{data.text}</p>
                                    <p className='testimonials-item-from'>{data.from}</p>
                                </Grid.Column>
                            </Grid.Row>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;