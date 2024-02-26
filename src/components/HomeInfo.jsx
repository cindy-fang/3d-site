import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-x1 text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hello, I'm <span className="font-semibold"> Cindy Fang </span> 👋
            <br/>
            Welcome to my corner of the internet.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Step into the island sanctuary and discover the untold tales of my adventures!"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="Embark on a journey through my digital island of projects. Dive in and explore the wonders!"
            link="/projects"
            btnText="Visit my portfolio"
        />    
    ),
    4: (
        <InfoBox 
            text="Drop anchor and reach out to me on the island! Let's connect and navigate the digital seas together."
            link="/contact"
            btnText="Send a message"
        />    
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;
