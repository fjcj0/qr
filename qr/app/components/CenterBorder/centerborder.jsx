"use client";
import './centerborder.css';
import Image from 'next/image';
import ball0 from '../../CenterBorderStyle/ball0.png';
import ball1 from '../../CenterBorderStyle/ball1.png';
import ball2 from '../../CenterBorderStyle/ball2.png';
import ball3 from '../../CenterBorderStyle/ball3.png';
import ball5 from '../../CenterBorderStyle/ball5.png';
import ball6 from '../../CenterBorderStyle/ball6.png';
import ball7 from '../../CenterBorderStyle/ball7.png';
import ball8 from '../../CenterBorderStyle/ball8.png';
import ball10 from '../../CenterBorderStyle/ball10.png';
import ball11 from '../../CenterBorderStyle/ball11.png';
import ball12 from '../../CenterBorderStyle/ball12.png';
import ball13 from '../../CenterBorderStyle/ball13.png';
import ball14 from '../../CenterBorderStyle/ball14.png';
import ball15 from '../../CenterBorderStyle/ball15.png';
import ball16 from '../../CenterBorderStyle/ball16.png';
import ball17 from '../../CenterBorderStyle/ball17.png';
import ball18 from '../../CenterBorderStyle/ball18.png';
import { useState } from 'react';
export default function Centers({ setCenterName }) {
    const [selectedCenter, setSelectedCenter] = useState(null);
    const centers = [
        { CenterName: "ball0", CenterStyle: ball0 },
        { CenterName: "ball1", CenterStyle: ball1 },
        { CenterName: "ball2", CenterStyle: ball2 },
        { CenterName: "ball3", CenterStyle: ball3 },
        { CenterName: "ball5", CenterStyle: ball5 },
        { CenterName: "ball6", CenterStyle: ball6 },
        { CenterName: "ball7", CenterStyle: ball7 },
        { CenterName: "ball8", CenterStyle: ball8 },
        { CenterName: "ball10", CenterStyle: ball10 },
        { CenterName: "ball11", CenterStyle: ball11 },
        { CenterName: "ball12", CenterStyle: ball12 },
        { CenterName: "ball13", CenterStyle: ball13 },
        { CenterName: "ball14", CenterStyle: ball14 },
        { CenterName: "ball15", CenterStyle: ball15 },
        { CenterName: "ball16", CenterStyle: ball16 },
        { CenterName: "ball17", CenterStyle: ball17 },
        { CenterName: "ball18", CenterStyle: ball18 },
    ];
    const handleCenterClick = (centerName) => {
        setSelectedCenter(centerName);
        setCenterName(centerName); 
    };
    return (
        <div className="centers" id="centers">
            <div className="centers-container" id="centers-container">
                {centers.map((item, index) => (
                    <button
                        key={index}
                        className={`center-style ${selectedCenter === item.CenterName ? 'selected' : ''}`}
                        style={selectedCenter === item.CenterName ? {border: "1px solid orange"} : {border: '1px solid #333'}}
                        id={`center-style-${index}`}
                        type='button'
                        onClick={() => handleCenterClick(item.CenterName)}
                    >
                        <Image src={item.CenterStyle} alt={item.CenterName} className='image-center-style' />
                    </button>
                ))}
            </div>
        </div>
    );
}
