import { HTMLAttributes, ReactNode, useState } from "react";
import { allFlights } from "./data";
import { IconBack, IconSettings, ImageAirplane, ImageBarcode } from "./UIIcons";
import './styles.css';

function SmallInfoText({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="text-[10px] font-thin text-gray-500" {...rest}>{children}</div>
    );
}

function Card_01_Open({ index }: { index: number; }) {
    const airportColor = allFlights[index].label;
    return (
        <div id="card-01-open">
            <Column>
                <SmallInfoText style={{ fontWeight: "bold", color: airportColor }}>From</SmallInfoText>
                SFO
                <SmallInfoText>San Francisco International</SmallInfoText>
            </Column>

            <Column style={{ position: 'relative', marginTop: "20px" }}>
                <DotsAnimation style={{ left: "2px", width: '32px' }} />
                <DotsAnimation style={{ left: "64px", width: '30px' }} />
                <img className="inline w-8" src={ImageAirplane} />
            </Column>

            <Column>
                <SmallInfoText style={{ fontWeight: "bold", color: allFlights[index].label }}>To</SmallInfoText>
                DEL
                <SmallInfoText>Indira Gandhi International</SmallInfoText>
            </Column>
        </div>
    );

    function Column({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
        return (
            <div className="text-[1.5rem] font-bold text-gray-800 flex-[0.5]" {...rest}>
                {children}
            </div>
        );
    }

    function DotsAnimation(props: HTMLAttributes<HTMLDivElement>) {
        return (
            <div className="absolute pl-0 top-[17px] h-2 overflow-hidden" {...props}>
                <div className="absolute w-14 flex [animation:dots-slidein_1s_infinite_linear]">
                    <div className="mr-3 w-1 h-1 bg-gray-500 rounded-full" />
                    <div className="mr-3 w-1 h-1 bg-gray-500 rounded-full" />
                    <div className="mr-3 w-1 h-1 bg-gray-500 rounded-full" />
                </div>
            </div>
        );
    }
}

function Card_01_closed({ index }: { index: number; }) {
    return (
        <div id="card-01-closed">
            <img src={allFlights[index].src} style={allFlights[index].style} />
            <div className="pr-3 pt-3 flex">
                <Column title1="San Francisco" title2="6:20" title3="June 12" />
                <img className="w-[30px] h-[26px] mx-4 mt-6" src={ImageAirplane} />
                <Column title1="New Delhi" title2="8:45" title3="June 12" />
            </div>
        </div>
    );

    function Column({ title1, title2, title3, ...rest }: HTMLAttributes<HTMLDivElement> & { title1: string; title2: string; title3: string; }) {
        return (
            <div className="pt-3 text-[9px] text-gray-400">
                {title1}
                <div className="text-[20px] font-bold text-gray-800">{title2}</div>
                {title3}
            </div>
        );
    }
}

function Card_02_open({ index }: { index: number; }) {
    return (
        <div id="card-02-open">
            <Column>
                <Row main="6:20 - 8:45" explanation="Flight Time" />
                <Row main="No" explanation="Transfer" />
            </Column>
            <Column>
                <Row main="2h 25 min" explanation="Duration" />
                <Row main="8" explanation="Gate" />
            </Column>
            <Column>
                <Row main="5:35" explanation="Boarding" />
                <Row main="20A" explanation="Seat" />
            </Column>
        </div>
    );

    function Row({ main, explanation }: { main: string; explanation: string; }) {
        return (
            <div className="text-[1rem] font-bold">
                {main}
                <SmallInfoText>{explanation}</SmallInfoText>
            </div>
        );
    }

    function Column({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
        return (
            <div className="mt-2 relative flex flex-col justify-between text-left">
                {children}
            </div>
        );
    }
}

function Card_03_open({ index, active, children }: { index: number; active: boolean; children: ReactNode; }) {
    return (
        <div id="second" style={{ transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`, transitionDelay: active ? "0.2s" : "0.2s" }}>
            <div id="secondTop" />
            <div id="secondBehind">
                <div id="secondBehind__Display">
                    <Detail title="Price">$100</Detail>
                    <Detail title="Class">Economy</Detail>
                    <img className="w-24 h-8" src={ImageBarcode} />
                </div>

                {children}
            </div>
        </div>
    );

    function Detail({ children, title, ...rest }: HTMLAttributes<HTMLDivElement>) {
        return (
            <div className="text-[1rem] font-bold">
                {children}
                <SmallInfoText style={{ textAlign: 'left' }}>{title}</SmallInfoText>
            </div>
        );
    }
}

function Card_04_open({ index, active }: { index: number; active: boolean; }) {
    return (
        <div id="third" style={{ transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`, transitionDelay: active ? "0.4s" : "0s" }}>
            <div id="thirdTop" />
            <div id="secondBehind__Bottom">
                <Detail index={index} />
            </div>
        </div>
    );

    function Detail({ index, ...rest }: HTMLAttributes<HTMLDivElement> & { index: number; }) {
        return (
            <button className="mt-2 px-32 py-1 text-xl font-bold rounded" style={{ color: allFlights[index].label, border: `1px solid ${allFlights[index].label}` }}>
                Pay
            </button>
        );
    }
}

function AllCards({ index }: { index: number; }) {
    const [active, handleActive] = useState(false);
    return (
        <div
            id="cards-container"
            style={{ height: active ? `300px` : `100px`, transition: "0.9s" }} // background animation
            onClick={() => { handleActive(!active); }}
        >
            <Card_01_Open index={index} />

            <div id="first" style={{ transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`, transitionDelay: active ? "0s" : "0.3s" }}>
                <Card_01_closed index={index} />

                <div id="firstBehind">
                    <Card_02_open index={index} />
                    <Card_03_open index={index} active={active}>
                        <Card_04_open index={index} active={active} />
                    </Card_03_open>
                </div>
            </div>
        </div >
    );
}

const Card_00_header = (
    <div className="w-full">
        <div className="mx-8 flex items-center">
            <IconBack className="mt-4 w-6 h-6" />

            <div className="flex-1 mt-8 h-12 text-xl font-bold text-center tracking-wider" style={{ wordSpacing: '2px' }}>
                Select Flight
            </div>
        </div>

        <div className="mx-8 flex items-center justify-between">

            <div className="my-1 text-[10px] flex flex-col text-left tracking-widest">
                Your Trip
                <div className="text-[28px] leading-[28px] font-bold tracking-wide flex items-center">
                    SFO - DEL
                    <div className="relative ml-2 px-1.5 py-1 text-[10px] leading-[10px] font-thin text-white bg-blue-500 border-blue-600 border rounded">
                        One Way
                    </div>
                    <div />
                </div>
                12th June, 2020
            </div>

            <IconSettings className="w-6 h-6" />
        </div>
    </div>
);

const arr = Array(1).fill(0).map(Number.call, Number); //8

export function Demo6_Panels() {
    return (
        <div className="relative [perspective:700px]">
            <div className="flex justify-center">
                <div className="demo6-panels">
                    {Card_00_header}
                    {arr.map((val, idx) => (
                        <AllCards index={idx} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}
