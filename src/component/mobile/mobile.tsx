import { useEffect, useRef, useState } from "react";
import Arweave from "arweave";
import Header1 from "../../assets/mobile/header1.svg";
import Header2 from "../../assets/mobile/header1.png";
// import Title from "../../assets/mobile/title.svg";
import Mission1 from "../../assets/mobile/mission1.svg";
import Mission2 from "../../assets/mobile/mission2.svg";
import Game1 from "../../assets/mobile/game-img1.svg";
import Game2 from "../../assets/mobile/game-img2.svg";
import game1Img1 from "../../assets/mobile/game1Img1.png";
import game1Img2 from "../../assets/mobile/game1Img2.png";
import game1Img3 from "../../assets/mobile/game1Img3.png";
import GameLine from "../../assets/mobile/game-line.svg";
import game2Img1 from "../../assets/mobile/game2Img1.png";
import game2Img2 from "../../assets/mobile/game2Img2.png";
import game2Img3 from "../../assets/mobile/game2Img3.png";
import Divide1 from "../../assets/mobile/divide1.svg";
import Divide2 from "../../assets/mobile/divide2.svg";
import Plist1 from "../../assets/mobile/plist1.svg";
import Plist4 from "../../assets/mobile/plist4.svg";
import Plist2 from "../../assets/mobile/plist2.svg";
import Plist5 from "../../assets/mobile/plist5.svg";
import Plist3 from "../../assets/mobile/plist3.svg";
import Plist6 from "../../assets/mobile/plist6.svg";
import text1 from "../../assets/mobile/text1.svg";
import text2 from "../../assets/mobile/text2.svg";
import text3 from "../../assets/mobile/text3.svg";
import text4 from "../../assets/mobile/text4.svg";
import Divide3 from "../../assets/mobile/divide3.svg";
import Divide4 from "../../assets/mobile/divide4.svg";
import Team1 from "../../assets/mobile/team1.svg";
import Team2 from "../../assets/mobile/team2.png";
import Team3 from "../../assets/mobile/team3.png";
import Team4 from "../../assets/mobile/team4.png";
import Team5 from "../../assets/mobile/team5.png";
// import Team6 from "../../assets/mobile/team6.png";
import Logo2 from "../../assets/mobile/logo2.svg";
import Rectangle10 from "../../assets/mobile/Rectangle10.svg";
import Logo3 from "../../assets/mobile/logo3.svg";
import Logo4 from "../../assets/mobile/logo4.svg";
import Logo9 from "../../assets/mobile/logo9.png";
import Logo5 from "../../assets/mobile/logo5.svg";
import Logo6 from "../../assets/mobile/logo6.svg";
import Logo7 from "../../assets/mobile/logo7.svg";
import Logo10 from "../../assets/mobile/logo10.png";
import Footer from "../../assets/mobile/footer.svg";
import FooterLogo from "../../assets/mobile/footer.png";
import blogo from '../../assets/mobile/blogo.svg'
import line1 from '../../assets/mobile/line1.svg'
import line2 from '../../assets/mobile/line2.svg'
import sanjiao1 from '../../assets/mobile/sanjiao1.svg'
import sanjiao2 from '../../assets/mobile/sanjiao2.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slider from "react-slick";
import './mobile.scss';

const settings1 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: null,
    prevArrow: null
};
const settings2 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: null,
    prevArrow: null,
    rtl: true
};

const Mobile = () => {
    const bladeRef = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [posts, setPosts] = useState<any[]>([])
    const setting1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null
    };

    useEffect(() => {
        handleScale()
        getData()

        window.onresize = () => {
            handleScale()
        }

    }, [])

    const getData = async () => {
        const arweave = Arweave.init({
            host: 'arweave.net',
            port: 443,
            protocol: 'https'
        })
        const postArr: unknown[] = []
        await arweave.transactions.getData('iuzAI0eNIrzWnvqcWdzeA8eM1J38omD5xujo4zMPl6w', { decode: true, string: true }).then(data => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            postArr.push({ ...JSON.parse(data), link: 'https://mirror.xyz/0x43fC86aAaaD9984708348031108b6722F87AC244/F5at4EfBuaJpO0nBhMvpz8G7n9h2sYE73eWX6o38CAc' })
            // console.log('data', JSON.parse(data));

        })
        await arweave.transactions.getData('LNqkgkVvtWMZYciS96C6vWDGD6TzXXIvENxKJ7ZVu7w', { decode: true, string: true }).then(data => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            postArr.push({ ...JSON.parse(data), link: 'https://mirror.xyz/0x43fC86aAaaD9984708348031108b6722F87AC244/7o9zW7-s5GRu5ScDOUlKIRvIG7yKJZYy4ovInXZ8iuA' })
            // console.log('data', JSON.parse(data));

        })
        await arweave.transactions.getData('JU_RAEidtTbpADeSW2aUShKmpQPoMG_HBNuP842AE_4', { decode: true, string: true }).then(data => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            postArr.push({ ...JSON.parse(data), link: 'https://mirror.xyz/0x43fC86aAaaD9984708348031108b6722F87AC244/paRa8fwiLoywyPsNnrD3FeD0Tm4FGYhf5J3YKsZ9u7Q' })
            // console.log('data', JSON.parse(data));

        })
        // console.log(postArr);
        setPosts(postArr)

    }

    const handleScale = () => {
        const screen_width = 393

        const scale = document.documentElement.clientWidth / screen_width
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        bladeRef.current.style.zoom = scale;
    }

    return (
        <div className="blade" ref={bladeRef}>
            <div className="blade-header">
                <img src={Header1} alt="" className="blade-header-img1" />
                <img src={Header2} alt="" className="blade-header-img2" style={{ width: '158px', height: '27px' }} />
            </div>
            <img src={line1} alt="" className="blade-line1" />
            <img src={line2} alt="" className="blade-line2" />
            <img src={sanjiao1} alt="" className="blade-sanjiao1" />
            <img src={sanjiao2} alt="" className="blade-sanjiao2" />
            <img src={blogo} alt="" className="blade-blogo" />
            <img src={text1} alt="" className="blade-text1" />
            <img src={text2} alt="" className="blade-text2" />
            <img src={text3} alt="" className="blade-text3" />
            <img src={text4} alt="" className="blade-text4" />
            <img src={Mission1} className="blade-missionImg1"></img>
            <img src={Mission2} className="blade-missionImg2"></img>
            <div className="blade-mission">
                We Push The Boundaries Of Gaming With New Norms To Craft Engaging Gameplay. Retain Player’s Sovereignty Over Their Gaming Experience Through Blockchain Tech.
            </div>
            <div className="blade-title1">
                BLADE GAME
            </div>
            <div className="blade-title2">
                COLLECTION
            </div>
            <div className="blade-game1">
                <img src={Game1} alt="" className="blade-game1-img1" />
                <img src={Game2} alt="" className="blade-game1-img2" />
                <Slider className="blade-game1-list" {...setting1}>
                    <div>
                        <img src={game1Img1} alt="" className="game1img" />
                    </div>
                    <div>
                        <img src={game1Img2} alt="" className="game1img" />
                    </div>
                    <div>
                        <img src={game1Img3} alt="" className="game1img" />
                    </div>
                </Slider>
                <div className="blade-game1-content">
                    <div className="blade-game1-content-container">
                        <img src={GameLine} className="blade-game1-content-line" />
                        <div className="blade-game1-content-title">
                            LOOT ROYALE
                        </div>
                    </div>
                    <div className="blade-game1-content-desc">
                        Loot Royale is a <span>fast-paced battle Royale</span> game with heavy loot NFT references. Users can summon game characters using their loot NFTs through on-chain ML and decentralized storage.
                    </div>
                </div>
            </div>
            <div className="blade-game1" style={{ top: '1527px', left: '40px' }}>
                <img src={Game1} alt="" className="blade-game1-img1" />
                <img src={Game2} alt="" className="blade-game1-img2" />
                <Slider className="blade-game1-list" {...setting1}>
                    <div>
                        <img src={game2Img1} alt="" className="game1img" />
                    </div>
                    <div>
                        <img src={game2Img2} alt="" className="game1img" />
                    </div>
                    <div>
                        <img src={game2Img3} alt="" className="game1img" />
                    </div>
                </Slider>
                <div className="blade-game1-content">
                    <div className="blade-game1-content-container">
                        <img src={GameLine} className="blade-game1-content-line" />
                        <div className="blade-game1-content-title">
                            DUNE FACTORY
                        </div>
                    </div>
                    <div className="blade-game1-content-desc" style={{ width: '338px' }}>
                        DF is a <span>factory + tower defense</span> game with a social twist. Build your factories on an alient planet, automate production, research about advanced resources and work with (or mess around) your friends to build your autonomous world. These virtual AW can be built from scratch and represent the core of the game.
                    </div>
                </div>
            </div>
            <div className="blade-divide1">
                <img src={Divide1} alt="" className="blade-divide1-img1" />
                <img src={Divide2} alt="" className="blade-divide1-img2" />
            </div>
            <div className="blade-subtitle">
                THe latest from blade
            </div>
            <div className="blade-plist">
                {
                    posts.map((item, index) => (
                        <a href={item.link} target='_blank' className={`blade-plist-item ${index % 2 === 0 ? 'card1' : 'card2'}`} key={item?.digest}>
                            <img src={index % 2 === 0 ? Plist1 : Plist4} alt="" className="blade-plist-item-img1" />
                            <img src={index % 2 === 0 ? Plist3 : Plist6} alt="" className="blade-plist-item-img3" />
                            <div className="plist-item-content">
                                <div className="blade-plist-item-title">
                                    {item.wnft.name}
                                </div>
                                <img src={index % 2 === 0 ? Plist2 : Plist5} alt="" className="blade-plist-item-img2" />
                            </div>
                        </a>
                    ))
                }

            </div>
            <div className="blade-divide2">
                <img src={Divide3} alt="" className="blade-divide2-img1" />
                <img src={Divide4} alt="" className="blade-divide2-img1" />
            </div>
            <div className="blade-subtitle" style={{ top: '2648px', left: '78px', width: '300px' }}>
                MEET THE BLADE TEAM
            </div>
            <div className="blade-team">
                <div className="blade-team-item" style={{ marginLeft: '36px' }}>
                    <img src={Team1} alt="" className="blade-team-item-img1" />
                    <img src={Team2} alt="" className="blade-team-item-img2" />
                    <div className="blade-team-item-title">
                        Brawler
                    </div>
                    <div className="blade-team-item-desc">
                        Co-founder of blade games, indie game addict, repeat founder, advisor to crypto game studios. Previously built a crypto media company in 2019-2021 with over 180,000 subscribers.
                    </div>
                </div>
                <div className="blade-team-item">
                    <img src={Team1} alt="" className="blade-team-item-img1" />
                    <img src={Team3} alt="" className="blade-team-item-img2" />
                    <div className="blade-team-item-title">
                        Zee
                    </div>
                    <div className="blade-team-item-desc">
                        Co-founder of blade games, game economics connoisseur, sometimes dev.
                    </div>
                </div>
                <div className="blade-team-item">
                    <img src={Team1} alt="" className="blade-team-item-img1" />
                    <img src={Team4} alt="" className="blade-team-item-img2" />
                    <div className="blade-team-item-title">
                        0xHastume
                    </div>
                    <div className="blade-team-item-desc">
                        Anon dev, ex-data scientist. Loves strategy games, board games.
                    </div>
                </div>
                <div className="blade-team-item">
                    <img src={Team1} alt="" className="blade-team-item-img1" />
                    <img src={Team5} alt="" className="blade-team-item-img2" />
                    <div className="blade-team-item-title">
                        K
                    </div>
                    <div className="blade-team-item-desc">
                    15+ years experience as producer of major MMORPG games at at a leading Gaming Company in Asia. Factory game player.
                    </div>
                </div>
            </div>
            {/* <div className="blade-subtitle" style={{ top: '3508px', left: '46px' }}>
                ADVISORS
            </div>
            <div className="blade-team" style={{ top: '3564px' }}>
                <div className="blade-team-item" style={{ marginLeft: '42px' }}>
                    <img src={Team1} alt="" className="blade-team-item-img1" />
                    <img src={Team6} alt="" className="blade-team-item-img2" />
                    <div className="blade-team-item-title">
                        M
                    </div>
                    <div className="blade-team-item-desc">
                        Founder of Moonveil Studio. Previously GM at Riot Games China. souls-like game enjoyooor.
                    </div>
                </div>
            </div>
            <div className="blade-divide1" style={{ top: '3915px' }}>
                <img src={Divide1} alt="" className="blade-divide1-img1" />
                <img src={Divide2} alt="" className="blade-divide1-img2" />
            </div> */}
            <div className="blade-subtitle" style={{ top: '3508px', left: '46px' }}>
                OUR PARTNERS
            </div>
            <div className="list">
                <Slider className="partners-list1" {...settings1}>
                    <div className="partners-item">
                        <img src={Logo2} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                    <div className="partners-item">
                        <img src={Logo3} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                    <div className="partners-item">
                        <img src={Logo4} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                    <div className="partners-item">
                        <img style={{ width: '277px' }} src={Logo9} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                </Slider>
                <Slider className="partners-list2" {...settings2}>
                    <div className="partners-item">
                        <img src={Logo5} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                    <div className="partners-item">
                        <img src={Logo6} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                    <div className="partners-item">
                        <img src={Logo7} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                    <div className="partners-item">
                        <img src={Logo10} alt="" className="partners-item-img1" />
                        <img src={Rectangle10} alt="" className="partners-item-img2" />
                    </div>
                </Slider>
            </div>
            <div className="blade-footer">
                <img src={Footer} alt="" className="blade-footer-img1" />
                <img src={FooterLogo} alt="" className="blade-footer-logo" style={{ width: '91px', height: '16px' }} />
                <div className="blade-footer-title">
                    Crafting Digital Realities Since Alpha
                </div>
                <div className="blade-footer-links">
                    <a className="blade-footer-links-item" target='_blank' href='https://twitter.com/Blade_DAO'>TWITTER</a>
                    <a className="blade-footer-links-item" target='_blank' href='https://discord.com/invite/bladedao'>DISCORD</a>
                    <a className="blade-footer-links-item" target='_blank' href='https://t.me/bladedao_real'>TELEGRAM</a>
                </div>
            </div>
        </div>
    )
}

export default Mobile;
