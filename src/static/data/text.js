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
    EN: {
        header: {
            logoImgSrc: logoImg,
            menuItemNameAbout: "ABOUT",
            menuItemNameContact: "CONTACT",
            menuItemNameLinkedin: "LinkedIn",
            menuItemHrefLinkedin: "https://www.linkedin.com/in/maxim-domentii-4400377a/",
            menuItemNameLanguage: "Language",
            languageOptions: [
                { key: 'EN', text: 'EN', value: 'EN'},
                { key: 'DE', text: 'DE', value: 'DE'}
            ]
        },
        home: {
            profilePhotoTitle: "Hi. I'm Maxim Domentii.",
            profilePhotoSubtitle: "A Software Engineer.",
            shortDescriptionHeader: "MY NAME IS MAXIM DOMENTII AND I'M A SWISS BASED FULL-STACK SOFTWARE ENGINEER",
            shortDescriptionParagraphs: [
                {
                    id: 'p1',
                    text: "I have " + getYearsOfExperience() + " years of experience in different areas like Web  Development, Microservice Architectures, Cloud Computing or DevOps"
                },
                {
                    id: 'p2',
                    text: "I was working as a Lead Developer in different projects of the two, Swiss based, biggest Banks in the World since 2019. I have been part of the teams, as a senior engineer, that designed and developed  projects for software companies since 2017. I started my career in 2015 working initially for a retail company and then in private banking sector"
                },
                {
                    id: 'p3',
                    text: "I have studied Computer Science and Information Technology at the University \"Politehnica\" of Bucharest between 2012 and 2016 where I've got my bachelor degree as a Software Engineer"
                }
            ],
            skillsColumns: 4,
            skills: [
                {
                    id: 'skill1',
                    imgSrc: dataStructureAndAlgImg,
                    title: "Data Structures & Algorithms",
                    description: "Identifying best structures and algorithms and applying suitable design pattern for each particular use case to get best performance and quality"
                },
                {
                    id: 'skill2',
                    imgSrc: webDevImg,
                    title: "Web Development",
                    description: "Extensive expertise with designing and developing scalable and distributed web applications, microservices and APIs"
                },
                {
                    id: 'skill3',
                    imgSrc: cloudComputingImg,
                    title: "Cloud Computing",
                        description: "Designing and developing cloud based architectures with infrastructures as a code following best operational principles"
                },
                {
                    id: 'skill4',
                    imgSrc: devOpsImg,
                    title: "DevOps",
                    description: "Deploying web based or containerized applications on private web servers or on public cloud providers with automated pipelines"
                }
            ],
            familyHeader: "HERE IS MY FAMILY",
            familyParagraphs: [
                {
                    id: 'p1',
                    text: "We love to spend time together, to travel and to keep a healthy lifestyle"
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
            contactDescription: "I'm always eager to collaborate with new people and to work on new interesting projects. If you have something in mind, get in touch and I will be happy to discuss ideas with you.",
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
            contactFormTextareaPlaceholder: "Hi Max, I need a website to promote our business.",
            contactFormTextareaError: "Please tell me how I can help (minimum 40 characters)",
            contactFormButtonLabel: "SUBMIT",
            contactFormAfterSubmitSuccessMessageHeader: "Form sent",
            contactFormAfterSubmitSuccessMessageContent: "I will contact you soon",
            contactFormAfterSubmitErrorMessageHeader: "Service unavailable",
            contactFormAfterSubmitErrorMessageContent: "Please try again later or contact me on LinkedIn",
            contactFormSubmitUrl: "https://hy79ntd3lg.execute-api.eu-central-1.amazonaws.com/v1/contact-us",
            contactFormSubmitToken: "Y29udGFjdC11czo1ZSZ5XlhzcXY1Ml9eZ20k"
        },
        about: {
            aboutImgSrc: profileAboutImg,
            aboutTitle: "ABOUT MAXIM DOMENTII",
            aboutSubtitle: "MY NAME IS MAXIM DOMENTII AND I'M A SWISS BASED FULL-STACK SOFTWARE ENGINEER.",
            aboutDescription: "Over the past " + getYearsOfExperience() + " year I'm workings as a Full-stack Software Engineer with DevOps. My expertise is in Data Structures and Algorithms, Design Patterns, Web Development, Microservices and Cloud Computing. I am aiming to work in a dynamic and challenging environment taking ownership of tasks and using the newest technologies and best practices to provide high valuable software and good performance.",
            aboutJourneyTitle: "MY JOURNEY",
            aboutJourneyItems: [
                {
                    id: "item1",
                    logoImgSrc: creditSuisseImgSrc,
                    companyName: "Credit Suisse",
                    position: "Senior Software Engineer, Since June 2021",
                    location: "Zurich, Switzerland",
                    description: "Credit Suisse is the biggest Global Investments Banks in the world. Here I'm managing UAT and Production activities in a Legal Reporting ETL project. Since I have joined this team all planned releases went smoothly, I have identified some critical database performance improvements,  I have redesign our batch job suite to be more flexible and manageable which lead to a significant decrease of critical incidents and also I have simplified some of the development processes."
                },
                {
                    id: "item2",
                    logoImgSrc: ubsImgSrc,
                    companyName: "UBS",
                    position: "Senior Software Engineer, December 2019 - May 2021",
                    location: "Zurich, Switzerland",
                    description: "UBS is the biggest Wealth Management Bank in the world. There I was leading the development of new features for an Investment Content project. During this experience I have leading development of a new notification service and design and developed an automated batch job scheduler manager. Also I have improved the CI process by setting up a fully automated pipeline. Additionally I was very preoccupied to continuously improve the Agile processes which lead to better performance of the team."
                },
                {
                    id: "item3",
                    logoImgSrc: oneAndOneImgSrc,
                    companyName: "1&1 IONOS",
                    position: "Senior Software Engineer, August 2018 - November 2019",
                    location: "Bucharest, Romania",
                    description: "1&1 IONOS is a web hosting company. There I was involved in two different projects. First one was a platform for providing SSL certificates. One of the biggest contribution in  this project was to design an build the MVP of a new messaging and streaming service. The second project was a Cloud PaaS where I had a big contribution in the migration from Java 7 to Java 8 and to some of the most recent features."
                },
                {
                    id: "item4",
                    logoImgSrc: unicreditImgSrc,
                    companyName: "UniCredit Services",
                    position: "Software Engineer, February 2016 - August 2018",
                    location: "Bucharest, Romania",
                    description: "UniCredit Services is the innovative division of the UniCredit Bank Group. During this experience I was part of a big digitization journey focused on CRM, private banking, mobile and multichannel. Working in the private banking project I have contributed to the migrating the UI from Dojo to ReactJS. Also we were building a backend framework and customized it for each CEE country."
                },
                {
                    id: "item5",
                    logoImgSrc: rbcImgSrc,
                    companyName: "Romanian Business Consult",
                    position: "Junior Software Engineer, August 2014 - June 2015",
                    location: "Bucharest, Romania",
                    description: "Romanian Business Consult is an IT service provider company for Retail companies. During this experience I had the chance for the first time to get in touch with software engineering in real complex projects. I was part of cross-functional teams with very experienced engineers from which I have learned best technical practices and many soft skills."
                },
                {
                    id: "item6",
                    logoImgSrc: upbImgSrc,
                    companyName: "University Politehnica of Bucharest",
                    position: "Bachelor degree in Computer Science, October 2012 - July 2016",
                    location: "Bucharest, Romania",
                    description: "University Politehnica of Bucharest is one of the best technical universities in the eastern Europe. In particular the Computer Science department offer every year many engineers to the most famous software companies in the world. Here I have studies the Information Technology and Computer Science and I got in 2016 my bachelor degree as a Software Engineer."
                }
            ]
        },
        footer: {
            copyRigth: "© " + getCurrentYear() + " maximdomentii.com"
        }
    },
    DE: {
        header: {
            logoImgSrc: logoImg,
            menuItemNameAbout: "ÜBER MICH",
            menuItemNameContact: "KONTAKTIERE",
            menuItemNameLinkedin: "LinkedIn",
            menuItemHrefLinkedin: "https://www.linkedin.com/in/maxim-domentii-4400377a/",
            menuItemNameLanguage: "Language",
            languageOptions: [
                { key: 'EN', text: 'EN', value: 'EN'},
                { key: 'DE', text: 'DE', value: 'DE'}
            ]
        },
        home: {
            profilePhotoTitle: "Hallo. Ich bin Maxim Domentii.",
            profilePhotoSubtitle: "Ein Software-Ingenieur.",
            shortDescriptionHeader: "MEIN NAME IST MAXIM DOMENTII UND ICH BIN EIN IN DER SCHWEIZ SITZENDER FULL-STACK-SOFTWARE-ENTWICKLER",
            shortDescriptionParagraphs: [
                {
                    id: 'p1',
                    text: "Ich habe " + getYearsOfExperience() + " jahrelange Erfahrung in verschiedenen Bereichen wie Webentwicklung, Microservice-Architecture, Cloud Computing oder DevOps"
                },
                {
                    id: 'p2',
                    text: "Seit 2019 arbeite ich als Lead Developer in verschiedenen Projekten der beiden größten Banken der Welt mit Sitz in der Schweiz. Seit 2017 bin ich als Senior Engineer Teil der Teams, die Projekte für Softwareunternehmen konzipiert und entwickelt haben. I begann meine Karriere 2015 zunächst für ein Handelsunternehmen und dann im Private Banking-Bereich"
                },
                {
                    id: 'p3',
                    text: "Ich habe zwischen 2012 und 2016 Informatik und Informationstechnologie an der Universität \"Politehnica\" in Bucharest studiert, wo ich meinen Bachelor-Abschluss als Software-Ingenieur gemacht habe"
                }
            ],
            skillsColumns: 4,
            skills: [
                {
                    id: 'skill1',
                    imgSrc: dataStructureAndAlgImg,
                    title: "Datenstrukturen und Algorithmen",
                    description: "Identifizieren der besten Strukturen und Algorithmen und Anwenden geeigneter Entwurfsmuster für jeden einzelnen Anwendungsfall, um die beste Leistung und Qualität zu erzielen"
                },
                {
                    id: 'skill2',
                    imgSrc: webDevImg,
                    title: "Web Entwicklung",
                    description: "Umfangreiches Know-how beim Design und der Entwicklung skalierbarer und verteilter Webanwendungen, Microservices und APIs"
                },
                {
                    id: 'skill3',
                    imgSrc: cloudComputingImg,
                    title: "Cloud Computing",
                    description: "Entwerfen und Entwickeln von Cloud-basierten Architekturen mit Infrastrukturen als Code nach den besten Antriebsprinzipien"
                },
                {
                    id: 'skill4',
                    imgSrc: devOpsImg,
                    title: "DevOps",
                    description: "Bereitstellung webbasierter oder containerisierter Anwendungen auf privaten Webservern oder öffentlichen Cloud-Anbietern mit automatisierten Pipelines"
                }
            ],
            familyHeader: "HIER IST MEINE FAMILIE",
            familyParagraphs: [
                {
                    id: 'p1',
                    text: "Wir lieben es, Zeit miteinander zu verbringen, zu reisen und einen gesunden Lebensstil zu pflegen"
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
            contactTitle: "KONTAKTIERE",
            contactDescription: "Ich freue mich immer darauf, mit neuen Leuten zusammenzuarbeiten und an neuen interessanten Projekten zu arbeiten. Wenn Sie etwas im Sinn haben, kontaktieren Sie mich und ich werde gerne Ideen mit Ihnen besprechen.",
            contactHrefLinkedin: "https://www.linkedin.com/in/maxim-domentii-4400377a/",
            contactFormNameLabel: "Name",
            contactFormNamePlaceholder: "Name",
            contactFormNameError: "Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen)",
            contactFormEmailLabel: "Email",
            contactFormEmailPlaceholder: "max@mustermann.com",
            contactFormEmailError: "Bitte geben Sie eine gültige Email-Adresse ein",
            contactFormPhoneLabel: "Telefonnummer",
            contactFormPhonePlaceholder: "+41700000000",
            contactFormPhoneError: "Bitte geben Sie eine gültige Telefonnummer ein",
            contactFormTextareaLabel: "Erzählen Sie mir von Ihrem Projekt",
            contactFormTextareaPlaceholder: "Hallo Max, ich brauche eine Website, um unser Geschäft zu fördern.",
            contactFormTextareaError: "Bitte sagen Sie mir, wie ich helfen kann (mindestens 40 Zeichen)",
            contactFormButtonLabel: "EINREICHEN",
            contactFormAfterSubmitSuccessMessageHeader: "Formular gesendet",
            contactFormAfterSubmitSuccessMessageContent: "Ich werde Sie bald kontaktieren",
            contactFormAfterSubmitErrorMessageHeader: "Dienst nicht verfügbar",
            contactFormAfterSubmitErrorMessageContent: "Bitte versuchen Sie es später erneut oder kontaktieren Sie mich auf LinkedIn",
            contactFormSubmitUrl: "https://hy79ntd3lg.execute-api.eu-central-1.amazonaws.com/v1/contact-us",
            contactFormSubmitToken: "Y29udGFjdC11czo1ZSZ5XlhzcXY1Ml9eZ20k"
        },
        about: {
            aboutImgSrc: profileAboutImg,
            aboutTitle: "ÜBER MAXIM DOMENTII",
            aboutSubtitle: "MEIN NAME IST MAXIM DOMENTII UND ICH BIN EIN IN DER SCHWEIZ SITZENDER FULL-STACK-SOFTWARE-ENTWICKLER.",
            aboutDescription: "In den letzten " + getYearsOfExperience() + " Jahren habe ich als Full-Stack Software Engineer mit DevOps gearbeitet. Meine Expertise liegt in Datenstrukturen und Algorithmen, Design Patterns, Webentwicklung, Microservices und Cloud Computing. Mein Ziel ist es, in einem dynamischen und herausfordernden Umfeld zu arbeiten, Aufgaben zu übernehmen und die neuesten Technologien und Best Practices einzusetzen, um hochwertige Software und gute Leistung bereitzustellen.",
            aboutJourneyTitle: "MEINE REISE",
            aboutJourneyItems: [
                {
                    id: "item1",
                    logoImgSrc: creditSuisseImgSrc,
                    companyName: "Credit Suisse",
                    position: "Leitender Softwareingenieur, seit Juni 2021",
                    location: "Zürich, Schweiz",
                    description: "Die Credit Suisse ist die größte globale Investmentbank der Welt. Hier verwalte ich UAT- und Produktionsaktivitäten in einem Legal Reporting ETL-Projekt. Seit ich diesem Team beigetreten bin, verliefen alle geplanten Releases reibungslos, ich habe einige kritische Verbesserungen der Datenbank Leistung identifiziert, ich habe unsere Batch-Job-Suite umgestaltet, um sie flexibler und überschaubarer zu machen, was zu einer deutlichen Verringerung kritischer Vorfälle geführt hat, und ich habe auch einige davon vereinfacht die Entwicklungsprozesse."
                },
                {
                    id: "item2",
                    logoImgSrc: ubsImgSrc,
                    companyName: "UBS",
                    position: "Leitender Softwareingenieur, Dezember 2019 - Mai 2021",
                    location: "Zürich, Schweiz",
                    description: "UBS ist die größte Vermögensverwaltungsbank der Welt. Dort leitete ich die Entwicklung neuer Funktionen für ein Investment-Content-Projekt. Während dieser Erfahrung habe ich die Entwicklung eines neuen Benachrichtigungen Dienstes und -designs geleitet und einen automatisierten Batch-Job-Scheduler-Manager entwickelt. Außerdem habe ich den CI-Prozess verbessert, indem ich eine vollautomatische Pipeline eingerichtet habe. Außerdem war ich sehr damit beschäftigt, die agilen Prozesse kontinuierlich zu verbessern, was zu einer besseren Leistung des Teams führt."
                },
                {
                    id: "item3",
                    logoImgSrc: oneAndOneImgSrc,
                    companyName: "1&1 IONOS",
                    position: "Leitender Softwareingenieur, August 2018 - November 2019",
                    location: "Bukarest, Rumänien",
                    description: "1&1 IONOS ist ein Webhosting-Unternehmen. Dort war ich an zwei verschiedenen Projekten beteiligt. Das erste war eine Plattform zur Bereitstellung von SSL-Zertifikaten. Einer der größten Beiträge in diesem Projekt war der Entwurf und Aufbau des MVP eines neuen Messaging- und Streaming-Dienstes. Das zweite Projekt war ein Cloud-PaaS, bei dem ich einen großen Beitrag zur Migration von Java 7 zu Java 8 und zu einigen der neuesten Funktionen geleistet habe."
                },
                {
                    id: "item4",
                    logoImgSrc: unicreditImgSrc,
                    companyName: "UniCredit Services",
                    position: "Softwareingenieur, Februar 2016 - August 2018",
                    location: "Bukarest, Rumänien",
                    description: "UniCredit Services ist der innovative Geschäftsbereich der UniCredit Bank Gruppe. Während dieser Erfahrung war ich Teil einer großen Digitalisierung Reise mit Fokus auf CRM, Private Banking, Mobile und Multichannel. Bei der Arbeit im Private-Banking-Projekt habe ich an der Migration der Benutzeroberfläche von Dojo zu ReactJS mitgewirkt. Außerdem bauten wir ein Backend-Framework und passen es für jedes CEE-Land an."
                },
                {
                    id: "item5",
                    logoImgSrc: rbcImgSrc,
                    companyName: "Romanian Business Consult",
                    position: "Junior Software Ingenieur, August 2014 - Juni 2015",
                    location: "Bukarest, Rumänien",
                    description: "Romanian Business Consult ist ein IT-Dienstleistungsunternehmen für Einzelhandelsunternehmen. Während dieser Erfahrung hatte ich zum ersten Mal die Chance, mit Software Engineering in wirklich komplexen Projekten in Berührung zu kommen. Ich war Teil eines funktionsübergreifenden Teams mit sehr erfahrenen Ingenieuren, von denen ich die besten technischen Praktiken und viele Soft Skills gelernt habe."
                },
                {
                    id: "item6",
                    logoImgSrc: upbImgSrc,
                    companyName: "University Politehnica of Bucharest",
                    position: "Bachelor in Informatik, Oktober 2012 - Juli 2016",
                    location: "Bukarest, Rumänien",
                    description: "Die Universität Politehnica in Bukarest ist eine der besten technischen Universitäten in Osteuropa. Insbesondere der Fachbereich Informatik bietet jedes Jahr viele Ingenieure den bekanntesten Softwarefirmen der Welt an. Hier habe ich Informatik und Informatik studiert und 2016 meinen Bachelor als Software Engineer gemacht."
                }
            ]
        },
        footer: {
            copyRigth: "© " + getCurrentYear() + " maximdomentii.com"
        }
    }
}