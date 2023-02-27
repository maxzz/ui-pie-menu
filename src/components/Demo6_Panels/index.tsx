import { HTMLAttributes, useState } from "react";
import { allFlights } from "./data";
import { IconBack, IconSettings } from "./UIIcons";
import './styles.css';

namespace Utils {
    export function AnimDots(props: HTMLAttributes<HTMLDivElement>) {
        return (
            <div className="absolute pl-0 left-4 top-2 w-5 h-2 overflow-hidden" {...props}>
                <div className="absolute w-14 flex [animation:dots-slidein_1s_infinite_linear]">
                    <div className="mr-3 w-1.5 h-2 bg-gray-500 rounded-full" />
                    <div className="mr-3 w-1.5 h-2 bg-gray-500 rounded-full" />
                    <div className="mr-3 w-1.5 h-2 bg-gray-500 rounded-full" />
                </div>
            </div>
        );
    }

    export function InfoLabel({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
        return (
            <div className="text-[10px] font-thin text-gray-500" {...rest}>{children}</div>
        );
    }
}

function Cell_01({ index }: { index: number; }) {
    return (
        <div id="firstDisplay">
            <div className="text-[1.5rem] font-bold text-gray-800 flex-[0.5]">
                <Utils.InfoLabel style={{ fontWeight: "bold", color: allFlights[index].label }}>
                    From
                </Utils.InfoLabel>
                BLR
                <Utils.InfoLabel>Kempegowda International</Utils.InfoLabel>
            </div>

            <div className="text-[1.5rem] font-bold text-gray-800 flex-[0.5]" style={{ marginTop: "15px" }}>
                <Utils.AnimDots />
                <Utils.AnimDots style={{ left: "32px" }} />
                <img style={{ width: "30px" }} src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true" />
            </div>

            <div className="text-[1.5rem] font-bold text-gray-800 flex-[0.5]">
                <Utils.InfoLabel style={{ fontWeight: "bold", color: allFlights[index].label }}>
                    To
                </Utils.InfoLabel>
                DEL
                <Utils.InfoLabel>Indira Gandhi International</Utils.InfoLabel>
            </div>
        </div>
    );
}

function Cell_02({ index }: { index: number; }) {
    return (
        <div id="firstTop">
            <img style={allFlights[index].style} src={allFlights[index].src} />
            <div id="timecontainer">
                <div id="detailDate">
                    Bengaluru
                    <div id="detailTime">6:20</div>
                    June 12
                </div>
                <img
                    style={{
                        width: "30px",
                        height: "26px",
                        marginTop: "22px",
                        marginLeft: "16px",
                        marginRight: "16px"
                    }}
                    src="https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true"
                />
                <div id="detailDate">
                    New Delhi
                    <div id="detailTime">8:45</div>
                    June 12
                </div>
            </div>
        </div>
    );
}

function Cell_03({ index }: { index: number; }) {
    return (
        <div id="firstBehindDisplay">
            <div id="firstBehindRow">
                <div id="detail">
                    6:20 - 8:45
                    <Utils.InfoLabel>Flight Time</Utils.InfoLabel>
                </div>
                <div id="detail">
                    No
                    <Utils.InfoLabel>Transfer</Utils.InfoLabel>
                </div>
            </div>
            <div id="firstBehindRow">
                <div id="detail">
                    2h 25 min
                    <Utils.InfoLabel>Duration</Utils.InfoLabel>
                </div>
                <div id="detail">
                    8<Utils.InfoLabel>Gate</Utils.InfoLabel>
                </div>
            </div>
            <div id="firstBehindRow">
                <div id="detail">
                    5:35
                    <Utils.InfoLabel>Boarding</Utils.InfoLabel>
                </div>
                <div id="detail">
                    20A
                    <Utils.InfoLabel>Seat</Utils.InfoLabel>
                </div>
            </div>
        </div>
    );
}

function Cell_04({ index, active }: { index: number; active: boolean; }) {
    return (
        <div id="second" style={{ transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`, transitionDelay: active ? "0.2s" : "0.2s" }}>
            <div id="secondTop" />
            <div id="secondBehind">
                <div id="secondBehindDisplay">
                    <div id="price">
                        $100
                        <div id="priceLabel">Price</div>
                    </div>
                    <div id="price">
                        Economy
                        <div id="priceLabel">Class</div>
                    </div>
                    <img id="barCode" src="https://github.com/pizza3/asset/blob/master/barcode.png?raw=true" />
                </div>
                <div id="third" style={{ transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`, transitionDelay: active ? "0.4s" : "0s" }}>
                    <div id="thirdTop" />
                    <div id="secondBehindBottom">
                        <button id="button" style={{ color: allFlights[index].label, border: `1px solid ${allFlights[index].label}` }}>
                            Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Cell(props: { index: number; }) {
    const { index } = props;
    const [active, handleActive] = useState(false);

    return (
        <div id="cardContainer" style={{ height: active ? `300px` : `100px`, transition: "0.9s" }} onClick={() => { handleActive(!active); }}>
            <Cell_01 index={index} />

            <div id="first" style={{ transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`, transitionDelay: active ? "0s" : "0.3s" }}>
                <Cell_02 index={index} />

                <div id="firstBehind">
                    <Cell_03 index={index} />
                    <Cell_04 index={index} active={active} />
                </div>
            </div>
        </div >
    );
}

const Header = (
    <div>
        <IconBack />

        <div id="headerText">Select Flight</div>
        <div id="tripDetail">
            Your Trip
            <div id="tripDest">
                BLR - DEL<div id="oneWay">One Way</div>
                <div />
            </div>
            12th June, 2020
        </div>

        <IconSettings />
    </div>
);

const arr = Array(1).fill(0).map(Number.call, Number); //8

export function Demo6_Panels() {
    return (
        <div className="flex justify-center [perspective:700px]">
            <div className="demo6-panels">
                {Header}
                {arr.map((val, idx) => (
                    <Cell index={idx} key={idx} />
                ))}
            </div>
        </div>
    );
}
