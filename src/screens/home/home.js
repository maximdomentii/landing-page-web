import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {Button, Container, Divider, Grid, Image, Segment} from "semantic-ui-react";
import './home.css';
import {useStore} from "../../store/store";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const navigate = useNavigate();

    const [{textData}] = useStore();

    const homeTextData = textData.home;

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const handleDescriptionMoreClick = () => {
        navigate('/about');
    }

    return (
        <div className='home-container'>
            <Segment basic inverted className='profile-photo-background'>
                <div className='profile-photo-content font-family-bebas-neue'>
                    <p className='profile-photo-title'>{homeTextData.profilePhotoTitle}</p>
                    <p className='profile-photo-subtitle'>{homeTextData.profilePhotoSubtitle}</p>
                </div>
            </Segment>
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
            <Container className='skills-overview-container margin-top-3em font-family-bebas-neue'>
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
            <Container className='text-container margin-top-3em font-family-bebas-neue'>
                <Divider horizontal className='text-container-header'>
                    {homeTextData.familyHeader}
                </Divider>
                {homeTextData.familyParagraphs.map((data, key) => {
                    return (
                        <p key={key} className='text-container-paragraph'>{data.text}</p>
                    );
                })}
            </Container>
            <div className='margin-top-3em'>
                <Gallery photos={homeTextData.familyPhotos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={homeTextData.familyPhotos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    );
};

export default Home;