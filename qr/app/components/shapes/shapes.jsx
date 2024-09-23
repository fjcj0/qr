"use client";
import './shapes.css';
import Image from 'next/image';
import circle_zepra_vertical from '../../bodyIcons/circle-zebra-vertical.png';
import circle_zepra from '../../bodyIcons/circle-zebra.png';
import circle from '../../bodyIcons/circle.png';
import circular from '../../bodyIcons/circular.png';
import diamond from '../../bodyIcons/diamond.png';
import dot from '../../bodyIcons/dot.png';
import edge_cut_smooth from '../../bodyIcons/edge-cut-smooth.png';
import edge_cut from '../../bodyIcons/edge-cut.png';
import japanese from '../../bodyIcons/japnese.png';
import leaf from '../../bodyIcons/leaf.png';
import mosaic from '../../bodyIcons/mosaic.png';
import pointed_edge_cut from '../../bodyIcons/pointed-edge-cut.png';
import pointed_in_smooth from '../../bodyIcons/pointed-in-smooth.png';
import pointed_in from '../../bodyIcons/pointed-in.png';
import pointed_smooth from '../../bodyIcons/pointed-smooth.png';
import pointed from '../../bodyIcons/pointed.png';
import round from '../../bodyIcons/round.png';
import rounded_in_smooth from '../../bodyIcons/rounded-in-smooth.png';
import rounded_in from '../../bodyIcons/rounded-in.png';
import rounded_pointed from '../../bodyIcons/rounded-pointed.png';
import square from '../../bodyIcons/square.png';
import star from '../../bodyIcons/star.png';
import nothing from '../../../public/nothing.png';
export default function Shapes({ bodyName, setBodyName }) {
    const bodyStyle = [
        { BodyName: "nothing", BodyShape: nothing },
        { BodyName: "circle-zebra-vertical", BodyShape: circle_zepra_vertical },
        { BodyName: "circle-zebra", BodyShape: circle_zepra },
        { BodyName: "circle", BodyShape: circle },
        { BodyName: "circular", BodyShape: circular },
        { BodyName: "diamond", BodyShape: diamond },
        { BodyName: "dot", BodyShape: dot },
        { BodyName: "edge-cut-smooth", BodyShape: edge_cut_smooth },
        { BodyName: "edge-cut", BodyShape: edge_cut },
        { BodyName: "japanese", BodyShape: japanese },
        { BodyName: "leaf", BodyShape: leaf },
        { BodyName: "mosaic", BodyShape: mosaic },
        { BodyName: "pointed-edge-cut", BodyShape: pointed_edge_cut },
        { BodyName: "pointed-in-smooth", BodyShape: pointed_in_smooth },
        { BodyName: "pointed-in", BodyShape: pointed_in },
        { BodyName: "pointed-smooth", BodyShape: pointed_smooth },
        { BodyName: "pointed", BodyShape: pointed },
        { BodyName: "round", BodyShape: round },
        { BodyName: "rounded-in-smooth", BodyShape: rounded_in_smooth },
        { BodyName: "rounded-in", BodyShape: rounded_in },
        { BodyName: "rounded-pointed", BodyShape: rounded_pointed },
        { BodyName: "square", BodyShape: square },
        { BodyName: "star", BodyShape: star },
    ];

    const handleShapeClick = (name) => {
        setBodyName(name); // Correctly set the selected shape
    };
    

    return (
        <div className="shapes-body" id="shapes-body">
            {bodyStyle.map((item, index) => (
                <button
                    key={index}
                    className={`shape-body ${bodyName === item.BodyName ? 'selected' : ''}`}
                    style={bodyName === item.BodyName ? {border: "1px solid orange"} : {border: '1px solid #333'} }
                    id={`shape-body-${index}`}
                    type='button'
                    onClick={() => handleShapeClick(item.BodyName)}
                >
                    <Image src={item.BodyShape} alt={item.BodyName} className='image-shape-body' />
                </button>
            ))}
        </div>
    );
}
