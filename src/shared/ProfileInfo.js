import neuroface from './images/neuroface.jpg';
import imagetoascii from './images/imagetoascii.jpg';
import houseflix from './images/houseflix.png';
import threeDRayTracer from './images/3dRayTracer.png';

export const TagLines = [
    "I am a Computer Engineer",
    "I am a Developer",
    "I am a Coder",
    "I am a Learner",
]
export const aboutMeContent = {
    heading:'Computer Science Engineer by ❤',
    content:[
        'Hello Everyone! My name is Rajiv Nayan Choubey. I am an aspiring Computer Science Engineer and Researcher. The CPU clock cycle ticks me. I am inclined towards Web Development and Artificial Intelligence. I am also developing my interests in the field of Computer Graphics and other core CS areas. Building things from scratch interests me the most.',
        'Favourite Quoute:',
        '"What I cannot create, I cannot understand " - Richard Feynman'
    ]
};

export const skillSets = {
    'Languages':[
        'C/C++',
        'Python',
        'JavaScript',
        'Java'
    ],
    'Framework & Libraries':[
        'Node.js',
        'Django',
        'ReactJs',
        'PyTorch',
        'Tensorflow',
    ],
    'Database':[
        'SQL',
        'MongoDB'
    ],
    'Cloud Service':[
        'Google Cloud Platform',
    ],
    'Operating Systems':[
        'Linux',
        'Windows'
    ]
};

export const EducationData = [
    {
        degree:'B.Tech',
        major:'CSE',
        institute:'International Institute of Information Technology, Naya Raipur',
        time:{
            start:2017,
            end: 'present'
        },
        score: '9.5 CGPA'
    },
    {
        degree:'Intermediate',
        major:'PCM, C++',
        institute:'Glenhill School, Varanasi',
        time:{
            start:2016
        },
        score: '86.2 %'
    },
    {
        degree:'High School',
        institute:'Glenhill School, Varanasi',
        time:{
            start:2014
        },
        score: '10 CGPA'
    }
    
];

export const ExperienceData = [
    {
        role:'Summer Intern (SDE)',
        time:{
            start:{
                month:5,
                year:2020
            },
            end:{
                month:6,
                year:2020
            }
        },
        location: 'Goldman Sachs',
        description:'Worked on PoC of Digitization of documents',
        type:'professional'
    },
    {
        role:'Co-Founder and Technical Head',
        time:{
            start:{
                month:11,
                year:2018
            },
            end:{
                month:1,
                year:2021
            }
        },
        location: 'Campus Adda',
        description:'A small startup by a group of four members of IIIT-NR. We sold hoodies and T-shirts to college students. Our startup was recognized by MorRaipur and Raipur Mayor. Sold hundreds of merchandise of various types. Built website to take merchandise orders. The website was able to take 300-350 orders within the institute.',
        type:'professional'
    },
    {
        role:'Seasonal Intern (SDE)',
        time:{
            start:{
                month:1,
                year:2021
            },
            end:'Present'
        },
        location: 'Goldman Sachs',
        description:'Working on Digitization of documents',
        type:'professional'
    },
    {
        role:'Co-Founder',
        time:{
            start:{
                month:5,
                year:2018
            }
        },
        location: 'The Society of Coders, IIIT-Naya Raipur',
        description:'Co-Founded the first Coding Society of IIIT Naya Raipur. Organized and hosted various events under TSoC.',
        type:'volunteer'
    },
    {
        role:'Student Coordinator',
        time:{
            start:{
                month:2,
                year:2019
            }
        },
        location: 'SciNtfic, IIIT-Naya Raipur',
        description:'Organised two-day technology fest for school students under IIIT Naya Raipur. With the help of team, managed 400 school students from across the cities. Also, we built various technical galleries along with lectures for school students.',
        type:'volunteer'
    },
    {
        role:'Event Coordinator',
        time:{
            start:{
                month:3,
                year:2019
            }
        },
        location: 'Technovate\'19, IIIT-Naya Raipur',
        description:'Planned and Organized Coding+Puzzle Event \'Puzzle Express\' for techfest of the institute.',
        type:'volunteer'
    },
    {
        role:'Web Development Lead',
        time:{
            start:{
                month:10,
                year:2019
            },
            end:{
                month:3,
                year:2020
            }
        },
        location: 'Technovate\'20, IIIT-Naya Raipur',
        description:'Built, hosted, and maintained the website of Technovate\'20 technical festival of IIIT, Naya Raipur with a team of three members. The website was built using Django and was hosted from scratch on Linux Server provided by Institute. The admins were able to add, modify, and delete the contents of the website using CMS portals without developer intervention. Before corona hit, the website was able to serve a multitude of requests from all across India.',
        type:'volunteer'
    },
    

];


export const ProjectList = [
    {
        title : '3D Rendering Engine',
        githubLink : "https://github.com/rajivnayanc/3D-rendering-engine-js",
        hostedLink : "https://rajivnayanc.github.io/3D-rendering-engine-js/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'This is a software rendering engine for web browsers. Built Software Ray Tracer from scratch. Planning to implement Software Rasterizer.',
        featured:true,
        image:threeDRayTracer
    }, 
    {
        title : 'HouseFlix',
        githubLink : "https://github.com/rajivnayanc/3D-rendering-engine-js",
        techstack : ['JavaScript', 'React.js', 'Node.js'],
        desc: 'This is a media streaming service to serve videos over a network. Installed this in home network connected with local NAS.',
        featured:true,
        image:houseflix
    },
    {
        title : 'NeuroFace',
        githubLink : "https://github.com/rajivnayanc/Deep_Learning_Projects/tree/master/Facial_Keypoints_Detection",
        reportLink : "https://github.com/rajivnayanc/Deep_Learning_Projects/blob/master/Facial_Keypoints_Detection/NeuroFace__Facial_Keypoints_Detection_using_Deep_Learning.pdf",
        techstack : ['Python 3', 'PyTorch', 'OpenCV'],
        desc: 'NeuroFace is a Deep Learning based Facial Keypoint detection application. It is an OpenCV based desktop application which uses Convolutional Neural Networks to detect 15 Facial keypoints of the face with high accuracy.',
        featured:true,
        image:neuroface
    }, 
    {
        title : 'Image to ASCII Converter',
        githubLink : "https://github.com/rajivnayanc/image_to_ascii_image",
        hostedLink : "https://rajivnayanc.github.io/image_to_ascii_image/",
        techstack : ['JavaScript', 'React.js'],
        desc: 'This Project converts an RGB image to set of ASCII characters. It uses intensity of each pixel of the grayscaled images and convert them to a corresponding ASCII character. This way, whole image can be represented as ASCII characters. Go try them out and use them in your own terminals, or anywhere you want. 😉',
        featured:true,
        image:imagetoascii
    }, 
    {
        title : 'So called Flappy Bird',
        githubLink : "https://github.com/rajivnayanc/So_Called_Flappy_Bird",
        hostedLink : "https://rajivnayanc.github.io/So_Called_Flappy_Bird/",
        techstack : ['JavaScript', 'HTML', 'CSS'],
        desc: 'So called Flappy Bird is Web based basic flappy bird game built on HTML5 Canvas. It also uses basic neural network to decide the next move based on next obstacle. You can also control the birds, which are represented as circles, using space key along with the AI.',
        featured:false,
        image:null
    },
    {
        title : 'GetNotify',
        githubLink : "https://github.com/rajivnayanc/GetNotify",
        techstack : ['Android Studio', 'Java', 'Firebase'],
        desc: 'Sometimes we need to monitor our long running tasks through phone. GetNotify solves this problem. One can send requests to particular Firebases API through long running scripts at a particular intervals, and receive those as notifications on the phone from anywhere.',
        featured:false,
        image:null
    },
    {
        title : 'Resume-Creator: Github Action',
        githubLink : "https://github.com/rajivnayanc/resume-creator-action",
        hostedLink : "https://github.com/marketplace/actions/resume-creator-action",
        reportLink : "https://dev.to/rajivnayanc/json-resume-to-github-pages-3m14",
        techstack : ['JavaScript', 'Github Actions'],
        desc: 'This Action reads the the JSON file having all the data about resume, creates a Resume Page, and host it on Github Pages.',
        featured:false,
        image:null
    },
    {
        title : 'Numpy Based Neural Network',
        githubLink : "https://github.com/rajivnayanc/Numpy_Vectorized_Feed_Forward_Neural_Network",
        techstack : ['Python 3', 'NumPy'],
        desc: 'This project demonstrates the working and implementation of vectorised feed forward neural networks using numpy. One can use the provided FNN class for training small neural networks. It includes several features like batch training, different activation funtions, number of layers, etc. 🔥',
        featured:false,
        image:null
    },
    {
        title : 'Shoot the Balloons',
        githubLink : "https://github.com/rajivnayanc/Shoot_the_Balloons_HTML5_canvas",
        hostedLink : "https://rajivnayanc.github.io/Shoot_the_Balloons_HTML5_canvas/",
        techstack : ['JavaScript', 'HTML', 'CSS'],
        desc: 'Shoot the balloons is a HTML5 Canvas game built using plain JS. It is a simple game where one has to shoot balloons from a fixed canon and score.',
        featured:false,
        image:null
    },
    {
        title : 'License Plate Detection',
        githubLink : "https://github.com/rajivnayanc/LicensePlateDetection-HumAIn-TCS",
        techstack : ['Python 3', 'PyTorch'],
        desc: 'This project is a Deep Learning based License Plate Detection and License Plate Number extraction application. It uses YOLO-like Object detection algorithm to detect the license plate from the image and use PyTessaract for license number extraction from the plate image. It was built for TCS HumAIn Hacakthon.',
        featured:false,
        image:null
    },
    {
        title : 'Startup Management',
        githubLink : "https://github.com/rajivnayanc/Codeutsava",
        techstack : ['HTML', 'CSS', 'JS', 'PHP'],
        desc: 'This webapp can be used to effectively manage startups inside incubation center. This project was built during CodeUtsav, NIT Raipur Hackathon. It also won Honarable Mention award in the hackathon.',
        featured:false,
        image:null
    },
];

export const PublicationData = [
    {
        title:'Internet Traffic Classifier Using Artificial Neural Network and 1D-CNN',
        link:'https://ieeexplore.ieee.org/document/9031882',
        year:2019,
        type:'conference',
        publisher:'IEEE',
        conference:'International Conference on Information Technology (ICIT)' ,
        authors:[
            {
                name:'Rajiv Nayan Choubey',
                profile:'https://www.linkedin.com/in/rajivnayanc/'
            },
            {
                name:'Loveleen Amar',
                profile:'https://www.linkedin.com/in/loveleen-amar/'
            },
            {
                name:'Sanchita Khare',
                profile:'https://www.linkedin.com/in/sanchita-khare/'
            },
            {
                name:'Venkanna U',
                profile:'https://www.linkedin.com/in/venkanna-uduthalapally-1749a6143/'
            },
        ]
    }
];