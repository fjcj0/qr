"use client";
import './framesoperation.css';
import frame1 from '../../Frames/frame1.svg';
import frame2 from '../../Frames/frame2.svg';
import frame3 from '../../Frames/frame3.svg';
import frame4 from '../../Frames/frame4.svg';
import frame5 from '../../Frames/frame5.svg';
import frame6 from '../../Frames/frame6.svg';
import frame7 from '../../Frames/frame7.svg';
import frame8 from '../../Frames/frame8.svg';
import frame9 from '../../Frames/frame9.svg';
import frame10 from '../../Frames/frame10.svg';
import frame11 from '../../Frames/frame11.svg';
import frame12 from '../../Frames/frame12.svg';
import frame13 from '../../Frames/frame13.svg';
import frame14 from '../../Frames/frame14.svg';
import frame15 from '../../Frames/frame15.svg';
import frame16 from '../../Frames/frame16.svg';
import frame17 from '../../Frames/frame17.svg';
import frame18 from '../../Frames/frame18.svg';
import frame20 from '../../Frames/frame20.svg';
import frame21 from '../../Frames/frame21.svg';
import frame22 from '../../Frames/frame22.svg';
import frame23 from '../../Frames/frame23.svg';
import frame24 from '../../Frames/frame24.svg';
import frame25 from '../../Frames/frame25.svg';
import frame26 from '../../Frames/frame26.svg';
import frame27 from '../../Frames/frame27.svg';
import frame28 from '../../Frames/frame28.svg';
import frame29 from '../../Frames/frame29.svg';
import frame30 from '../../Frames/frame30.svg';
import frame31 from '../../Frames/frame31.svg';
import frame32 from '../../Frames/frame32.svg';
import nothing from '../../../public/nothing.png';
import OperationStyleQr from '../OperationStyleQr/operationstyleqr';
import Image from 'next/image';
import InputTextFrame from '../InputTextFrame/inputtextframe';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18n from 'i18next';
import {useState} from 'react';
export default function FramesOperation(){
    const [selectedFrame, setSelectedFrame] = useState("nothing");
    const frames = [
        { FrameName: "nothing", FrameImg: nothing },
        { FrameName: "frame1", FrameImg: frame1 },
        { FrameName: "frame2", FrameImg: frame2 },
        { FrameName: "frame3", FrameImg: frame3 },
        { FrameName: "frame4", FrameImg: frame4 },
        { FrameName: "frame5", FrameImg: frame5 },
        { FrameName: "frame6", FrameImg: frame6 },
        { FrameName: "frame7", FrameImg: frame7 },
        { FrameName: "frame8", FrameImg: frame8 },
        { FrameName: "frame9", FrameImg: frame9 },
        { FrameName: "frame10", FrameImg: frame10 },
        { FrameName: "frame11", FrameImg: frame11 },
        { FrameName: "frame12", FrameImg: frame12 },
        { FrameName: "frame13", FrameImg: frame13 },
        { FrameName: "frame14", FrameImg: frame14 },
        { FrameName: "frame15", FrameImg: frame15 },
        { FrameName: "frame16", FrameImg: frame16 },
        { FrameName: "frame17", FrameImg: frame17 },
        { FrameName: "frame18", FrameImg: frame18 },
        { FrameName: "frame20", FrameImg: frame20 },
        { FrameName: "frame21", FrameImg: frame21 },
        { FrameName: "frame22", FrameImg: frame22 },
        { FrameName: "frame23", FrameImg: frame23 },
        { FrameName: "frame24", FrameImg: frame24 },
        { FrameName: "frame25", FrameImg: frame25 },
        { FrameName: "frame26", FrameImg: frame26 },
        { FrameName: "frame27", FrameImg: frame27 },
        { FrameName: "frame28", FrameImg: frame28 },
        { FrameName: "frame29", FrameImg: frame29 },
        { FrameName: "frame30", FrameImg: frame30 },
        { FrameName: "frame31", FrameImg: frame31 },
        { FrameName: "frame32", FrameImg: frame32 },
    ];
    const {t,i18n} = useTranslation();
    const FrameBackgroundText = t("QrComponent.FrameBackground");
    const FrameCornerColorText = t("QrComponent.FramesCorner");
    const handleFrameClick = (frameName) => {
        setSelectedFrame(frameName);
    };
    return (
        <div className="frame" id="frame">
            <div className="frame-container" id="frame-container">
                {frames.map((frame, index) => (
                    <button
                        key={index}
                        className={`frame-style ${selectedFrame === frame.FrameName ? 'selected' : ''}`}
                        id='frame-style'
                        type='button'
                        onClick={() => handleFrameClick(frame.FrameName)}
                    >
                        <Image
                            src={frame.FrameImg}
                            className="image-frame"
                            alt={frame.FrameName}
                        />
                    </button>
                ))}
            </div>
            <InputTextFrame />
            <div className="operation-style-frames" id="operation-style-frames">
                <OperationStyleQr key="frames background" stylename={FrameBackgroundText} />
                <OperationStyleQr key="frames corner" stylename={FrameCornerColorText} />
            </div>
        </div>
    );

}