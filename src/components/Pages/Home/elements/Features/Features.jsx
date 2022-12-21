import { useRef, useEffect, useState } from "react";

import "./Features.scss";

//img
import Figure from "../../../../../assets/img/Features/figure.svg";
import Sphere from "../../../../../assets/img/Features/earth2.gif";
import Arrow from "../../../../../assets/img/Features/arrow.svg";

const data = [
    {
        title: 'Universal Identity',
        text: [
            'Fully compliant W3C DID implementation powered by MPC Technology, eliminating seed phrases — reducing user onboarding friction',
            'Fully compliant with W3C’s DID specification',
            'Meets latest Apple Web3 Guidelines (first of its kind)'
        ],
        icon: Figure
    },{
        title: 'Interoperable Data Models',
        text: [
            'On-Chain definitions based on IPLD Definitions',
            'Works cross-protocol in every environment',
            'NFT Support'
        ],
        icon: Figure
    },{
        title: 'True User Ownership',
        text: [
            'User application data is stored in secure permissioned buckets',
            'Provision and Delegate Access to other peers and Applications',
            'Backed by IPFS, with a Planned FileCoin Bridge'
        ],
        icon: Figure
    },{
        title: 'Realtime Data-Streams',
        text: [
            'Build interconnected realtime experiences',
            'P2P Messaging across sonr accounts, enabled out-of-the-box',
            'Transport Agnostic, runs on BLE, QUIC, UDP, TCP, WebRTC, or whatever available transport'
        ],
        icon: Figure
    },{
        title: 'Robust Light Node',
        text: [
            'All-in-one client interface for identity usage, wallet interactions, and gateway to the Sonr Network.',
            'Designed to be offline and mobile first',
            'Available for iOS, macOS, and Android using our Flutter SDK',
            'Setup Authorization and Configure your first App in >5min'
        ],
        icon: Figure
    },{
        title: 'Cosmos Blockchain',
        text: [
            'IBC Enabled - freely exchange assets and data across sovereign blockchains without traditional bridge vulnerabilities',
            '99% lower carbon footprint from a DPoS consensus mechanism',
            'Fast transactions, only 7 seconds to finality',
            'Low Gas Fees, around $0.01 per Tx'
        ],
        icon: Figure
    },{
        title: 'Rust Smart Contracts',
        text: [
            'Use a mature, safe language with plenty of libraries and IDE support to build contracts',
            'Secure architecture of CosmWasm is designed to avoid all attack vectors present in Ethereum',
            'Robust tooling for developing and testing smart contracts'
        ],
        icon: Figure
    }
]

function Features() {
    const containerRef = useRef(null);
    const [top, setTop] = useState(0);

    const lineOffset = () => {
        if (window.innerWidth <= 768) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const _top = (containerRect.top * -1) / ((containerRect.height) / 100);
        if (_top >= 100) {
            setTop(100);
            return;
        }
        if (_top <= 0) {
            setTop(0);
            return;
        }
        setTop(_top);
    };

    useEffect(() => {
        if (!containerRef.current || window.innerWidth <= 768) return;
        const height = containerRef.current.clientHeight;
        containerRef.current.style.height = `${height + (data.length * 200)}px`;
        window.addEventListener('scroll', lineOffset);
        return () => {
            window.removeEventListener('scroll', lineOffset);
        }
    }, []);

    return (
        <div className="features">
            <div className="features-container" ref={containerRef}>
                <div className="wr">
                    <div className="features-content">
                        <div className="features-left">
                            <div className="features-item" data-aos="fade-left">
                                FEATURES
                            </div>
                            <div className="features-img">
                                <img src={Sphere} alt="#" />
                                <a className="features-link" href="#">
                                    <img src={Arrow} alt="#"/>
                                </a>
                            </div>
                            <div className="features-paragraph">
                                <p className="features-paragraph-text">
                                    A robust, rapid-scaling
                                    <span>platform for interconnected</span>
                                    <span>apps, and total digital</span>
                                    <span>autonomy</span>
                                </p>
                                <p className="features-paragraph-text p-two">
                                    A robust, rapid-
                                    <span>scaling platform</span>
                                    <span>for interconnected</span>
                                    <span>apps, and total</span>
                                    <span>digital autonomy</span>
                                </p>
                            </div>
                        </div>
                        <div className="features-right">
                            <div className="features-line">
                                <div className="features-line-inner" style={{ top: `${top}%` }} />
                            </div>
                            {data.map((item, index) => {
                                const part = 100 / data.length;
                                const rangeTo = part * (index + 1);
                                const rangeFrom = rangeTo - part;
                                return (
                                    <div
                                        className="features-block"
                                        data-aos="fade-up"
                                        key={index}
                                    >
                                        <div className={`features-block-inner ${top >= rangeFrom && top <= rangeTo ? 'active' : ''}`}>
                                            <h2 className="features-title">{item.title}</h2>
                                            <div className="features-text">
                                                {item.text.map((e, i) => (
                                                    <div className="features-text-item" key={i}>{e}</div>
                                                ))}
                                            </div>
                                            {item.icon && (
                                                <div className="features-icon">
                                                    <img src={item.icon} alt="#" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;