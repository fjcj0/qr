"use client";
import './corner.css';
import Image from 'next/image';
import nothing from '../../../public/nothing.png';
import frame0 from '../../BorderStyles/frame0.png';
import frame1 from '../../BorderStyles/frame1.png';
import frame2 from '../../BorderStyles/frame2.png';
import frame3 from '../../BorderStyles/frame3.png';
import frame4 from '../../BorderStyles/frame4.png';
import frame5 from '../../BorderStyles/frame5.png';
import frame6 from '../../BorderStyles/frame6.png';
import frame7 from '../../BorderStyles/frame7.png';
import frame8 from '../../BorderStyles/frame8.png';
import frame10 from '../../BorderStyles/frame10.png';
import frame11 from '../../BorderStyles/frame11.png';
import frame12 from '../../BorderStyles/frame12.png';
import frame13 from '../../BorderStyles/frame13.png';
import frame14 from '../../BorderStyles/frame14.png';
import frame16 from '../../BorderStyles/frame16.png';
import { useState } from 'react';

export default function Corners({setCorner}) {
    const [selectedCorner, setSelectedCorner] = useState("nothing");

    const handleCornerClick = (cornerName) => {
        setSelectedCorner(cornerName);
        setCorner(cornerName); // Update the parent component with the selected corner style
    };

    const corners = [
        { framename: "nothing", framestyle: nothing },
        { framename: "frame0", framestyle: frame0 },
        { framename: "frame1", framestyle: frame1 },
        { framename: "frame2", framestyle: frame2 },
        { framename: "frame3", framestyle: frame3 },
        { framename: "frame4", framestyle: frame4 },
        { framename: "frame5", framestyle: frame5 },
        { framename: "frame6", framestyle: frame6 },
        { framename: "frame7", framestyle: frame7 },
        { framename: "frame8", framestyle: frame8 },
        { framename: "frame10", framestyle: frame10 },
        { framename: "frame11", framestyle: frame11 },
        { framename: "frame12", framestyle: frame12 },
        { framename: "frame13", framestyle: frame13 },
        { framename: "frame14", framestyle: frame14 },
        { framename: "frame16", framestyle: frame16 },
    ];
    return (
        <div className="corner-container" id="corner-container">
            {corners.map((corner, index) => (
                <button
                    key={index}
                    className={`corner-style ${selectedCorner === corner.framename ? 'selected' : ''}`}
                    style={selectedCorner === corner.framename ? { border: "1px solid orange" } : { border: '1px solid #333' }}
                    id={`corner-style-${index}`}
                    type='button'
                    onClick={() => handleCornerClick(corner.framename)}
                >
                    <Image 
                        src={corner.framestyle} 
                        className="image-corner" 
                        alt={corner.framename} 
                    />
                </button>
            ))}
        </div>
    );
}
