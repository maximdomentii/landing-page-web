import dataStructureAndAlgImg from '../images/data_structure_and_alg.png';
import logoImg from "../images/logo.jpg";
import webDevImg from '../images/web_dev.png';
import cloudComputingImg from '../images/cloud_computin.png';
import devOpsImg from '../images/dev_ops.png';
import family0Img from "../images/family-0.jpg";
import family1Img from "../images/family-1.jpg";
import family2Img from "../images/family-2.jpg";
import family3Img from "../images/family-3.jpg";
import family4Img from "../images/family-4.jpg";
import family5Img from "../images/family-5.jpg";
import family6Img from "../images/family-6.jpg";
import family7Img from "../images/family-7.jpg";
import family8Img from "../images/family-8.jpg";
import family9Img from "../images/family-9.jpg";
import family10Img from "../images/family-10.jpg";
import profileAboutImg from "../images/profile_about.jpg";
import creditSuisseImgSrc from "../images/credit-suisse-logo.png";
import ubsImgSrc from "../images/ubs-logo.png";
import oneAndOneImgSrc from "../images/1and1-ionos-logo.png";
import unicreditImgSrc from "../images/unicredit-logo.png";
import rbcImgSrc from "../images/rbc_logo.jpeg";
import upbImgSrc from "../images/upb-logo.png";

const startCareerDate = 'February 1, 2015';

const getCurrentYear = () => {
    return new Date().getFullYear();
}

const getYearsOfExperience = () => {
    const startDateYear = new Date(startCareerDate).getFullYear();

    return getCurrentYear() - startDateYear;
}

export const text = {
    en: {
        header: {
            logoImgSrc: logoImg,
            menuItemNameAbout: "ABOUT",
            menuItemNameContact: "CONTACT",
            menuItemNameLinkedin: "LinkedIn",
            menuItemHrefLinkedin: "https://www.linkedin.com/in/maxim-domentii-4400377a/"
        },
        home: {
            profilePhotoTitle: "Hi. I'm Maxim Domentii.",
            profilePhotoSubtitle: "A Software Engineer.",
            shortDescriptionHeader: "MY NAME IS MAXIM DOMENTII AND I'M A SWISS BASED FULL-STACK SOFTWARE ENGINEER",
            shortDescriptionParagraphs: [
                {
                    id: 'p1',
                    text: "I have " + getYearsOfExperience() + " years of experience in different areas like Web " +
                        "Development, Microservice Architectures, Cloud Computing or DevOps"
                },
                {
                    id: 'p2',
                    text: "I was working as a Lead Developer in different projects of the two, Swiss based, biggest Banks in the " +
                        "World since 2019. I have been part of the teams, as a senior engineer, that designed and developed " +
                        "projects for software companies since 2017. I started my career in 2015 working initially for a retail " +
                        "company and then in private banking sector"
                },
                {
                    id: 'p3',
                    text: "I have studied Computer Science and Information Technology at the University \"Politehnica\" of " +
                        "Bucharest between 2012 and 2016 where I've got my bachelor degree as a Software Engineer"
                }
            ],
            skillsColumns: 4,
            skills: [
                {
                    id: 'skill1',
                    imgSrc: dataStructureAndAlgImg,
                    title: "Data Structures & Algorithms",
                    description: "Identifying best structures and algorithms and applying suitable design pattern for " +
                        "each particular use case to get best performance and quality"
                },
                {
                    id: 'skill2',
                    imgSrc: webDevImg,
                    title: "Web Development",
                    description: "Extensive expertise with designing and developing scalable and distributed web " +
                        "applications, microservices and APIs"
                },
                {
                    id: 'skill3',
                    imgSrc: cloudComputingImg,
                    title: "Cloud Computing",
                    description: "Designing and developing cloud based architectures with infrastructures as a code " +
                        "following best operational principles"
                },
                {
                    id: 'skill4',
                    imgSrc: devOpsImg,
                    title: "DevOps",
                    description: "Deploying web based or containerized applications on private web servers or on public" +
                        " cloud providers with automated pipelines"
                }
            ],
            familyHeader: "HERE IS MY FAMILY",
            familyParagraphs: [
                {
                    id: 'p1',
                    text: "We love to spend time together, to travel and to keep a healthy life style"
                }
            ],
            familyPhotos: [
                {
                    src: family0Img,
                    width: 4,
                    height: 3
                },
                {
                    src: family1Img,
                    width: 3,
                    height: 4
                },
                {
                    src: family2Img,
                    width: 3,
                    height: 4
                },
                {
                    src: family3Img,
                    width: 4,
                    height: 4
                },
                {
                    src: family4Img,
                    width: 4,
                    height: 3
                },
                {
                    src: family5Img,
                    width: 3,
                    height: 4
                },
                {
                    src: family6Img,
                    width: 3,
                    height: 4
                },
                {
                    src: family7Img,
                    width: 4,
                    height: 4
                },
                {
                    src: family8Img,
                    width: 4,
                    height: 4
                },
                {
                    src: family9Img,
                    width: 3,
                    height: 4
                },
                {
                    src: family10Img,
                    width: 4,
                    height: 3
                }
            ]
        },
        contact: {
            contactTitle: "CONTACT",
            contactDescription: "I'm always eager to collaborate with new people and to work on new interesting projects. " +
                "If you have something in mind, get in touch and I will be happy to discuss ideas with you.",
            contactHrefLinkedin: "https://www.linkedin.com/in/maxim-domentii-4400377a/",
            contactFormNameLabel: "Name",
            contactFormNamePlaceholder: "Name",
            contactFormNameError: "Please enter your name (minimum 2 characters)",
            contactFormEmailLabel: "Email",
            contactFormEmailPlaceholder: "joe@schmoe.com",
            contactFormEmailError: "Please enter a valid email",
            contactFormPhoneLabel: "Phone number",
            contactFormPhonePlaceholder: "+41700000000",
            contactFormPhoneError: "Please enter a valid phone number",
            contactFormTextareaLabel: "Tell me about your project",
            contactFormTextareaPlaceholder: "Hi Max, I need a web site to promote our business.",
            contactFormTextareaError: "Please tell me how I can help (minimum 40 characters)",
            contactFormButtonLabel: "SUBMIT",
            contactFormAfterSubmitSuccessMessageHeader: "Form sent",
            contactFormAfterSubmitSuccessMessageContent: "I will contact you soon",
            contactFormAfterSubmitErrorMessageHeader: "Service unavailable",
            contactFormAfterSubmitErrorMessageContent: "Please try again later or contact me on LinkedIn",
            contactFormSubmitUrl: "https://u28twmfddh.execute-api.eu-central-1.amazonaws.com/v1/contact-us",
            contactFormSubmitToken: "Y29udGFjdC11czo1ZSZ5XlhzcXY1Ml9eZ20k"
        },
        about: {
            aboutImgSrc: profileAboutImg,
            aboutTitle: "ABOUT MAXIM DOMENTII",
            aboutSubtitle: "MY NAME IS MAXIM DOMENTII AND I'M A SWISS BASED FULL-STACK SOFTWARE ENGINEER.",
            aboutDescription: "Over the past 7 year I'm workings as a Full-stack Software Engineer with DevOps. " +
                "My expertise is in Data Structures and Algorithms, Design Patterns, Web Development, Microservices " +
                "and Cloud Computing. I am aiming to work in a dynamic and challenging environment taking ownership of " +
                "tasks and using the newest technologies and best practices to provide high valuable software and good " +
                "performance.",
            aboutJourneyTitle: "MY JOURNEY",
            aboutJourneyItems: [
                {
                    id: "item1",
                    logoImgSrc: creditSuisseImgSrc,
                    companyName: "Credit Suisse",
                    position: "Senior Software Engineer, Since June 2021",
                    location: "Zurich, Switzerland",
                    description: "Credit Suisse is the biggest Global Investments Banks in the world. Here I'm managing " +
                        "UAT and Production activities in a Legal Reporting ETL project. Since I have joined this team all planned " +
                        "releases went smoothly, I have identified some critical database performance improvements, " +
                        "I have redesign our batch job suite to be more flexible and manageable which lead to a significant decrease " +
                        "of critical incidents and also I have simplified some of the development processes."
                },
                {
                    id: "item2",
                    logoImgSrc: ubsImgSrc,
                    companyName: "UBS",
                    position: "Senior Software Engineer, December 2019 - May 2021",
                    location: "Zurich, Switzerland",
                    description: "UBS is the biggest Wealth Management Bank in the world. There I was leading the " +
                        "development of new features for an Investment Content project. During this experience I have leading " +
                        "development of a new notification service and design and developed an automated batch job scheduler manager. " +
                        "Also I have improved the CI process by setting up a fully automated pipeline. Additionally I " +
                        "was very preoccupied to continuously improve the Agile processes which lead to better performance of the team."
                },
                {
                    id: "item3",
                    logoImgSrc: oneAndOneImgSrc,
                    companyName: "1&1 IONOS",
                    position: "Senior Software Engineer, August 2018 - November 2019 ",
                    location: "Bucharest, Romania",
                    description: "1&1 IONOS is a web hosting company. There I was involved in two different projects. " +
                        "First one was a platform for providing SSL certificates. One of the biggest contribution in " +
                        "this project was to design an build the MVP of a new messaging and streaming service. The second " +
                        "project was a Cloud PaaS where I had a big contribution in the migration from Java7 to Java8 and " +
                        "to some of the most recent features."
                },
                {
                    id: "item4",
                    logoImgSrc: unicreditImgSrc,
                    companyName: "UniCredit Services",
                    position: "Software Engineer, February 2016 - August 2018",
                    location: "Bucharest, Romania",
                    description: "UniCredit Services is the innovative division of the UniCredit Bank Group. During " +
                        "this experience I was part of a big digitization journey focused on CRM, private banking, " +
                        "mobile and multichannel. Working in the private banking project I have contributed to the " +
                        "migrating the UI from Dojo to ReactJS. Also we where building a backend framework and customized " +
                        "it for each CEE country."
                },
                {
                    id: "item5",
                    logoImgSrc: rbcImgSrc,
                    companyName: "Romanian Business Consult",
                    position: "Junior Software Engineer, August 2014 - June 2015",
                    location: "Bucharest, Romania",
                    description: "Romanian Business Consult is an IT service provider company for Retail companies. " +
                        "During this experience I had the chance for the first time to get in touch with " +
                        "software engineering in real complex projects. I was part of cross-functional teams " +
                        "with very experienced engineers from which I have learned best technical practices and many soft skills."
                },
                {
                    id: "item6",
                    logoImgSrc: upbImgSrc,
                    companyName: "University Politehnica of Bucharest",
                    position: "Bachelor degree in Computer Science, October 2012 - July 2016",
                    location: "Bucharest, Romania",
                    description: "University Politehnica of Bucharest is one of the best technical universities in the " +
                        "eastern Europe. In particular the Computer Science department offer every year many engineers " +
                        "to the most famous software companies in the world. Here I have studies the Information Technology" +
                        " and Computer Science and I got in 2016 my bachelor degree as a Software Engineer."
                }
            ]
        },
        footer: {
            copyRigth: "© " + getCurrentYear() + " maximdomentii.com"
        }
    }
}