const react = 'FaReact'
const mongodb = 'SiMongodb'
const nodejs = 'FaNodeJs'
const vue = 'FaVuejs'
const django = 'SiDjango'
const sqlite = 'SiSqlite'
const express = 'SiExpress'
const js = 'SiJavascript'
const css= 'SiCss3'

export const ProjectsList = [{
    'id':1,
    'period':'2021',
    'name':'Auct-It-Now(Online Auction Management System)',
    'img':'https://img.freepik.com/free-vector/bid-design-background_52683-76080.jpg?w=826&t=st=1679486274~exp=1679486874~hmac=861ec3fc9dec3315c98861dfda610de2d66d5e11c4fdf7aa644b829330613483',
    'description': 'An online auction management system is a software application designed to manage the process of conducting auctions online. The system provides a platform for users to buy and sell goods or services through an online bidding process.',
    'stack':[mongodb,express,react,nodejs]
  },
  {
    'id':2,
    'period':'2020',
    'name':'StayFit(Online Health Organizer)',
    'img':'https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611226.jpg?w=740&t=st=1679489984~exp=1679490584~hmac=6fa06230025208fc294ddfa452a8fcd944ad10f37fd75e9421dbbc40be0be17b',
    'description': 'An online health management system is a web-based software application that provides a platform for patients and healthcare providers to manage their health-related information and activities. The application tracks the weight and provide different exercises to attain the ideal weight.',
    'stack':[mongodb,express,vue,nodejs]
  },
  {
    'id':3,
    'period':'2019',
    'name':'Online Food Ordering System',
    'img':'https://img.freepik.com/free-vector/flat-human-hands-hold-smartphone-with-mobile-app-ordering-fast-food-home-take-away-online-service-order-asian-italian-meals-pizza-burger-wok-box-with-noodles-delivery_88138-804.jpg?w=900&t=st=1679490560~exp=1679491160~hmac=60ec8db5bb35499e71cac2649b59a3b911c7f109d717a9baf29d199e154fe3b8',
    'description': 'An online food ordering system is a web-based software application that allows customers to order food from local restaurants and food outlets via the internet. The system provides a platform for customers to browse menus, place orders, and make payments online. The primary goal of an online food ordering system is to provide a convenient and seamless experience for customers while improving the efficiency and profitability of the food service industry.',
    'stack':[django,sqlite,js,css]
  },
  {
    'id':4,
    'period':'2018',
    'name':'Proctor Management System',
    'img':'https://img.freepik.com/premium-photo/building-bridge-span-gap-little-businessman_254268-623.jpg?w=740',
    'description': 'A proctor management system is a web-based software application that is designed to manage and monitor the activities of exam proctors. The system provides a platform for educational institutions and organizations to manage the scheduling and tracking of exam proctors, ensuring the integrity and security of exams.',
    'stack':[django,sqlite,js,css]
  }]

export const EducationList = [
    
    {
        'id':1.1,
        'period':'2019-2021',
        'university': "AIMS, Bangalore University",
        'course': "Master of Computer Applications (MCA)",
        'remarks': 'Master of Computer Applications (MCA) from Bangalore University, graduating in 2021 with a CGPA of 8.5/10.'
    },
    {
        'id':1.2,
        'period':'2016-2019',
        'university': "Krupanidhi Degree College, Bangalore University",
        'course': "Bachelor of Computer Applications (BCA)",
        'remarks': 'Bachelor of Computer Applications (BCA) from Bangalore University, graduating in 2019 with a CGPA of 8.2/10.'
    }
    ,
    {
        'id':1.3,
        'period':'2014-2016',
        'university': "Vijaya HSS, Wayanad, Kerala",
        'course': "Plus Two",
        'remarks': 'Higher Secondary Education (Plus Two) from Vijaya HSS, graduating in 2016 with a percentage of 88%.'
    },
    {
        'id':1.4,
        'period':'2014',
        'university': "DVHSS Veliyambam, Wayanad, Kerala",
        'course': "SSLC",
        'remarks': 'Secondary School Leaving Certificate (SSLC) from DVHSS, graduating in 2014 with a percentage of 95%.'
    }
    
]

export const WorkExperience = [
    {
        'id':2.1,
        'period':'2022-Present',
        'employer': "Keleno Labs, Kochi",
        'title': "Software Engineer",
        'remarks': 'Developed multi-tenant web application which includes functionalities like Vaccine appointment, Grievance, Complaint and Behavior reporting, Staff planning, Vaccine and testing tracking, Outreach app. Worked in Azure app services, FHIR database, Liquid templates, Logic apps, API management. Azure devops CI/CD pipeline creation. Used KNIME analytic tool for data analysis and report creation.'
    },
    {
        'id':2.2,
        'period':'2021',
        'employer': "NuVeda Learning, Bangalore",
        'title': "Intern",
        'remarks': 'Worked as an intern for one month. Integral part to add multi-lingual functionality to an existing system.'
    }
    
]

export const Skills = [
    {
        'id':3.1,
        'name': 'Python',
        'img': '',
        'pro': 5,
        'remarks': ''
    },
    {
        'id':3.2,
        'name': 'React',
        'img': '',
        'pro': 5,
        'remarks': ''
    },
    {
        'id':3.3,
        'name': 'Design and Development',
        'img': '',
        'pro': 4.5,
        'remarks': ''
    },
    {
        'id':3.4,
        'name': 'Knowledge of Azure, AWS and Azure Devops',
        'img': '',
        'pro': 3.5,
        'remarks': ''
    },
    {
        'id':4.5,
        'name': 'Java',
        'img': '',
        'pro': 3.5,
        'remarks': ''
    },
    {
        'id':3.6,
        'name': 'C and C++',
        'img': '',
        'pro': 4,
        'remarks': ''
    },
    {
        'id':3.7,
        'name': 'Project Documentation',
        'img': '',
        'pro': 3.5,
        'remarks': ''
    },
    {
        'id':3.8,
        'name': 'Linux and UNIX',
        'img': '',
        'pro': 3.5,
        'remarks': ''
    },
    {
        'id':3.9,
        'name': 'MySQL, MSSQL and PostgreSQL',
        'img': '',
        'pro': 4.5,
        'remarks': ''
    },
    {
        'id':3.10,
        'name': 'MongoDB',
        'img': '',
        'pro': 4,
        'remarks': ''
    },
    {
        'id':3.11,
        'name': 'KNIME Analytical Tool',
        'img': '',
        'pro': 3.5,
        'remarks': ''
    },
    {
        'id':3.12,
        'name': 'Power BI',
        'img': '',
        'pro': 4,
        'remarks': ''
    },
    {
        'id':3.13,
        'name': 'FHIR',
        'img': '',
        'pro': 4.5,
        'remarks': ''
    },
    {
        'id':3.14,
        'name': 'Django',
        'img': '',
        'pro': 5,
        'remarks': ''
    },
    {
        'id':3.15,
        'name': 'Node.JS',
        'img': '',
        'pro': 4.5,
        'remarks': ''
    },
    {
        'id':3.16,
        'name': 'Vue.JS',
        'img': '',
        'pro': 4,
        'remarks': ''
    }

]

export const Certifications = [
    {
        'id':4.1,
        'period':'2021',
        'university': "HashResearch",
        'course': "MERN30: Fullstack Development",
        'remarks': ''
    },
    {
        'id':4.2,
        'period':'2020',
        'university': "Udemy",
        'course': "Scrum fundamentals for scrum master and agile projects-2021",
        'remarks': ''
    },
    {
        'id':4.3,
        'period':'2020',
        'university': "Coursera",
        'course': "Cyber security roles, processes and operating system security.",
        'remarks': ''
    },
    {
        'id':4.4,
        'period':'2020',
        'university': "Coursera",
        'course': "The complete ReactJs course. Basics to Advanced.",
        'remarks': ''
    }
]