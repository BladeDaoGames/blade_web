import './web.scss'
import Logo from '../../assets/web/logo.svg'
import Logo2 from '../../assets/web/logo2.svg'
import Logo3 from '../../assets/web/logo3.svg'
import Logo4 from '../../assets/web/logo4.svg'
import Logo5 from '../../assets/web/logo5.svg'
import Logo6 from '../../assets/web/logo6.svg'
import Logo7 from '../../assets/web/logo7.svg'
import Logo8 from '../../assets/web/logo8.svg'
import Logo9 from '../../assets/web/logo9.png'
import Logo10 from '../../assets/web/logo10.png'
import Line from '../../assets/web/line.svg'
import Line2 from '../../assets/web/line2.svg'
import Line3 from '../../assets/web/line3.svg'
import Line4 from '../../assets/web/line4.svg'
import Line5 from '../../assets/web/line5.svg'
import Line6 from '../../assets/web/line6.svg'
// import Line7 from '../../assets/web/line7.svg'
// import Line8 from '../../assets/web/line8.svg'
import Line9 from '../../assets/web/line9.svg'
import Header from '../../assets/web/header.svg'
import Slash from '../../assets/web/slash.svg'
import Triangle from '../../assets/web/triangle.svg'
// import Triangle2 from '../../assets/web/triangle2.svg'
import Triangle3 from '../../assets/web/triangle3.svg'
import Triangle4 from '../../assets/web/triangle4.svg'
// import Triangle5 from '../../assets/web/triangle5.svg'
import Cra from '../../assets/web/cra.svg'
import Ting from '../../assets/web/ting.svg'
import Digital from '../../assets/web/digital.svg'
import Realities from '../../assets/web/realities.svg'
import SinceAlpha from '../../assets/web/since-alpha.svg'
// import LADE from '../../assets/web/lade.svg'
// import Rectangle from '../../assets/web/rectangle.svg'
// import Rectangle2 from '../../assets/web/rectangle2.svg'
import Rectangle3 from '../../assets/web/rectangle3.svg'
import Rectangle4 from '../../assets/web/rectangle4.svg'
import Rectangle5 from '../../assets/web/rectangle5.svg'
import Rectangle6 from '../../assets/web/rectangle6.svg'
import Rectangle7 from '../../assets/web/rectangle7.svg'
import Rectangle8 from '../../assets/web/rectangle8.svg'
// import Rectangle9 from '../../assets/web/rectangle9.svg'
import Rectangle11 from '../../assets/web/rectangle11.svg'
import Rectangle10 from '../../assets/web/rectangle10.svg'
import Img1 from '../../assets/web/img1.png'
import Img2 from '../../assets/web/img2.png'
import Text1 from '../../assets/web/text1.svg'
import Text2 from '../../assets/web/text2.svg'
import Arrow from '../../assets/web/arrow.svg'
import Arrow2 from '../../assets/web/arrow2.svg'
import Avater1 from '../../assets/web/avater1.png'
import Avater2 from '../../assets/web/avater2.png'
import Avater3 from '../../assets/web/avater3.png'
import Avater5 from '../../assets/web/avater5.jpg'
// import Avater6 from '../../assets/web/avater6.png'
import diaImg1 from '../../assets/web/diaImg1.png'
import diaImg2 from '../../assets/web/diaImg2.png'
import diaImg3 from '../../assets/web/diaImg3.png'
import diaImg4 from '../../assets/web/diaImg4.png'
import diaImg5 from '../../assets/web/diaImg5.png'
import diaImg6 from '../../assets/web/diaImg6.png'
import diaImg7 from '../../assets/web/diaImg7.png'
import diaImg8 from '../../assets/web/diaImg8.png'
import redbox1 from '../../assets/web/redbox1.png'
import redbox2 from '../../assets/web/redbox2.png'
import close from '../../assets/web/close.svg'
import { useLottie, useLottieInteractivity } from 'lottie-react'
import LottieB from '../../assets/web/lottie.json'
import { motion, inView } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useRef, useState } from 'react'
import Arweave from 'arweave'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slider from 'react-slick'

function App() {

  const settings1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: null,
    prevArrow: null
  };
  const settings2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: null,
    prevArrow: null,
    rtl: true
  };

  useEffect(() => {
    setScale()
    getData()

    window.onresize = () => {
      setScale()

    }
  }, [])
  const [scaleValue, setScaleValue] = useState(1)
  const elm = useRef(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([])
  const [showTitle, setShowTitle] = useState(false)
  const title = useRef(null)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  inView(title.current, () => {
    setShowTitle(true)
  })

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

  function setScale() {
    const designWidth = 1440;//设计稿的宽度，根据实际项目调整

    const scale = document.documentElement.clientWidth / designWidth
    // setScaleValue(scale * 0.6 - 0.1)
    setScaleValue(0.65)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    elm.current.style.zoom = scale;

  }

  const options = {
    animationData: LottieB
  }
  const style = {
    position: 'absolute',
    // height:'1695px',
    width: '1440px',
    top: '68.5px',
    left: '0px',
  }

  const B = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const lottieObj = useLottie(options, style)
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
          visibility: [0.25, 1],
          type: "seek",
          frames: [0, 150],
        },
      ],
    });
    return Animation
  }

  const linkToView = (link: string) => {
    document.getElementsByClassName(link)[0]?.scrollIntoView(true)
  }

  return (
    <div className="container" ref={elm}>
      <B />
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="link-group">
          <img src={Header} alt="" className="headerImg" />
          <div className="link" onClick={() => linkToView('mission')}>MISSION</div>
          <img src={Line} alt="" />
          <div className="link" onClick={() => linkToView('img1')}>GAMES</div>
          <img src={Line} alt="" />
          <div className="link" onClick={() => linkToView('latest')}>BLOG</div>
          <img src={Line} alt="" />
          <div className="link" onClick={() => linkToView('team-title')} style={{ marginRight: '80px' }}>ABOUT</div>
        </div>
        <img className='line2' src={Line2} alt="" />
        <img className='triangle' src={Triangle} alt="" />
        <img className='cra' src={Cra} alt="" />
        <img className='ting' src={Ting} alt="" />
        <img className='digital' src={Digital} alt="" />
        <img className='line3' src={Line3} alt="" />
        <img className='realities' src={Realities} alt="" />
        <img className='since-alpha' src={SinceAlpha} alt="" />
        <motion.div
          className="mission"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: 100 }}
          transition={{ delay: 0.3 }}
        >
          We Push The Boundries Of Gaming With New Norms To Craft Engaging Gameplay. Retain Player’s Sovereignty Over Their Gaming Experience Through Blockchain Tech.
        </motion.div>
        {/* <div className="title">
          BLADE GAMES
        </div> */}
        {/* <img className='lade' src={LADE} alt="" /> */}
        {/* <img className='rectangle' src={Rectangle} alt="" /> */}
        {/* <img className='rectangle2' src={Rectangle2} alt="" /> */}
        {/* <img className='triangle2' src={Triangle2} alt="" /> */}
        <motion.div
          className="mission2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: 100 }}
          transition={{ delay: 0.3 }}
        >
          a fully on-chain gaming studio dedicated to blurring the lines between digital realities and real world.
        </motion.div>
        <div className="collection">
          <div className="game1">
            <img className='img1' src={Rectangle3} alt="" />
            <img className='img2' src={Rectangle4} alt="" />
            <img className='img4' src={Img1} alt="" />
            <img className='img5' src={Slash} alt="" />
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <div className='img3'>
                  <img src={Rectangle5} alt="" />
                  <div className="details">DETAILS</div>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent" style={{ zoom: scaleValue }}>
                  <img src={redbox1} alt="" className="redbox1" />
                  <img src={redbox2} alt="" className="redbox2" />
                  <img className='diaImg1' src={diaImg1} alt="" />
                  <img className='diaImg2' src={diaImg2} alt="" />
                  <img className='diaImg3' src={diaImg3} alt="" />
                  <img className='diaImg4' src={diaImg4} alt="" />
                  <div className="diaTitle1">LOOT</div>
                  <div className="diaTitle2">ROYALE</div>
                  {/* <img src={titleImg1} alt="" className="titleImg1" /> */}
                  <div className="textbox">
                    <div className="coming">coming soon</div>
                    <div className="des">
                      Loot royale is a fast-paced battle royale game with heavy loot NFT references. Users can summon game characters using their loot NFTs through on-chain ML and decentralized storage.
                    </div>
                  </div>
                  <Dialog.Close asChild>
                    <img src={close} alt="" className="close" />
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <div className="title2 loot">
              LOOT ROYALE
            </div>
            <div className="content" style={{ marginRight: '10px' }}>
              Loot royale is a <span style={{ fontFamily: 'HK Grotesk bold', textTransform: 'uppercase' }}>fast-paced battle royale</span> game with heavy loot NFT references. Users can summon game characters using their loot NFTs through on-chain ML and decentralized storage.
            </div>
          </div>
          <div className="main">
            <img className='img1' src={Rectangle6} alt="" />
            <img className='img2' src={Rectangle6} alt="" />
            <img ref={title} className={`title1 animate__animated ${showTitle ? 'animate__slideInLeft' : ''}`} src={Text1} />
            <img className={`title2 animate__animated ${showTitle ? 'animate__slideInRight' : ''}`} src={Text2} />
          </div>
          <div className="game2">
            <img className='img1' src={Rectangle3} alt="" />
            <img className='img2' src={Rectangle4} alt="" />
            <img className='img4' src={Img2} alt="" />
            <img className='img5' src={Slash} alt="" />
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <div className="img3">
                  <img src={Rectangle5} alt="" />
                  <div className="details">DETAILS</div>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content style={{ zoom: scaleValue }} className="DialogContent">
                  <img src={redbox1} alt="" className="redbox1" />
                  <img src={redbox2} alt="" className="redbox2" />
                  <img className='diaImg1' src={diaImg5} alt="" />
                  <img className='diaImg2' src={diaImg6} alt="" />
                  <img className='diaImg3' src={diaImg7} alt="" />
                  <img className='diaImg4' src={diaImg8} alt="" />
                  <div className="diaTitle1">DUNE</div>
                  <div className="diaTitle2">FACTORY</div>
                  {/* <img src={titleImg2} alt="" className="titleImg1" /> */}
                  <div className="textbox">
                    <div className="coming">coming soon</div>
                    <div className="des">
                      DF is a factory + tower defense game with a social twist. Build your factories on an alient planet, automate production, research about advanced resources and work with (or mess around) your friends to build your autonomous world. These virtual AW can be built from scratch and represent the core of the game.
                    </div>
                  </div>
                  <Dialog.Close asChild>
                    <img src={close} alt="" className="close" />
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <div className="title2 dune">
              Dune Factory
            </div>
            <div className="content">
              DF is a <span style={{ fontFamily: 'HK Grotesk bold', textTransform: 'uppercase' }}>factory + tower defense</span> game with a social twist. Build your factories on an alient planet, automate production, research about advanced resources and work with (or mess around) your friends to build your autonomous world. These virtual AW can be built from scratch and represent the core of the game.
            </div>
          </div>
          <img src={Line4} alt="" className="line1" />
          <img src={Triangle3} alt="" className="tri1" />
        </div>
        <div className="latest">
          <div className="title3">THE LATEST FROM BLADE</div>
          <div className="card-list">
            {
              posts.map((item, index) => <a href={item.link} target='_blank' className={`card ${index % 2 === 0 ? 'card1' : 'card2'}`} style={{ marginLeft: index === 0 ? '220px' : '' }} key={item?.digest
              }>
                <div className="title4">
                  {item.wnft.name}
                </div>
                <img className='line5' src={index % 2 === 0 ? Line5 : Line9} alt="" />
                <div className="content1">
                  {item.wnft.description}
                </div>
                <div>
                  <img src={index % 2 === 0 ? Arrow : Arrow2} alt="" className="arrow" />
                </div>
              </a>)
            }
          </div>
        </div>
        <div className="team">
          <img src={Triangle4} alt="" className="team-tri" />
          <img src={Line6} alt="" className="team-line" />
          <img src={Rectangle7} alt="" className="team-fk" />
          <div className="team-title">MEET THE BLADE TEAM</div>
          <div className="team-content">
          Blade games is a fully on-chain game studio with a diverse team from backgrounds like game economist, defi degen, smart contract dev, crypto media and zkp research. The team has a strong belief in crafting digital realities and autonomous worlds.
            <div style={{ marginTop: '30px' }} />
            The co-founders are Brawler and Zee, with 0xhatsume as the CTO.
          </div>
          <div className="team-list">
            <div className="team-list-item" style={{ marginLeft: '202px' }}>
              <img src={Avater1} alt="" className="team-list-item-avater" />
              <img src={Rectangle8} alt="" className="team-list-item-img1" />
              <div className="team-list-item-title">
                Brawler
              </div>
              <div className="team-list-item-content">
                Co-founder of blade games, indie game addict, repeat founder, advisor to crypto game studios. Previously built a crypto media company in 2019-2021 with over 180,000 subscribers.
              </div>
            </div>
            <div className="team-list-item">
              <img src={Avater2} alt="" className="team-list-item-avater" />
              <img src={Rectangle8} alt="" className="team-list-item-img1" />
              <div className="team-list-item-title">
                Zee
              </div>
              <div className="team-list-item-content">
                Co-founder of blade games, game economics connoisseur, sometimes dev.
              </div>
            </div>
            <div className="team-list-item">
              <img src={Avater3} alt="" className="team-list-item-avater" />
              <img src={Rectangle8} alt="" className="team-list-item-img1" />
              <div className="team-list-item-title">
                0xHastume
              </div>
              <div className="team-list-item-content">
                Anon dev, ex-data scientist. Loves strategy games, board games.
              </div>
            </div>
            <div className="team-list-item">
              <img src={Avater5} alt="" className="team-list-item-avater" />
              <img src={Rectangle8} alt="" className="team-list-item-img1" />
              <div className="team-list-item-title">
                K
              </div>
              <div className="team-list-item-content">
              15+ years experience as producer of major MMORPG games at at a leading Gaming Company in Asia. Factory game player.
              </div>
            </div>
          </div>
          {/* <img className='line7' src={Line7} alt="" /> */}
        </div>
        {/* <div className="advisors">
          <div className="advisors-title">
            ADVISORS
          </div>
          <div className="advisors-list">
            <div className="advisors-item">
              <img src={Avater6} alt="" className="advisors-item-avater" />
              <img src={Rectangle9} alt="" className="advisors-item-img" />
              <div className="advisors-item-title">
                M
              </div>
              <div className="advisors-item-content">
                Founder of Moonveil Studio. Previously Co-GM at Riot Games China. ARPG, souls-like game enjoyooor.
              </div>
            </div>
          </div>
          <img src={Line8} alt="" className="advisors-line" />
          <img src={Triangle5} alt="" className="advisors-tri" />
        </div> */}
        <div className="partners">
          <div className="partners-title">
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
        </div>
        <div className="footer">
          <img src={Rectangle11} alt="" className="footer-img" />
          <img src={Logo8} alt="" className="footer-logo" />
          <div className="footer-links">
            <a className="footer-link" target='_blank' href='https://twitter.com/Blade_DAO'>TWITTER</a>
            <a className="footer-link" target='_blank' href='https://discord.com/invite/bladedao'>DISCORD</a>
            <a className="footer-link" target='_blank' href='https://t.me/bladedao_real'>TELEGRAM</a>
          </div>
          <div className="footer-main">
            <div className="main-container">
              <div className="main-title">
                Crafting Digital Realities
                Since Alpha
              </div>
              <div className="main-sub">
                BladeDAO is a fully onchain game studio dedicated to blurring the lines between digital realities and real world.
              </div>
            </div>
            <div className="main-footer">
              <div className="main-footer-sec">
                <div className="sec-title">
                  MISSION
                </div>
                <div onClick={() => { linkToView('mission') }} className="sec-text">
                  OUR MISSION
                </div>
              </div>
              <div className="main-footer-sec">
                <div className="sec-title">
                  GAMES
                </div>
                <div className="sec-text" onClick={() => { linkToView('loot') }}>
                  LOOT ROYAL
                </div>
                <div className="sec-text" onClick={() => { linkToView('dune') }}>
                  DUNE FACTORY
                </div>
              </div>
              <div className="main-footer-sec">
                <div className="sec-title">
                  BLOG
                </div>
                <div className="sec-text" onClick={() => { linkToView('latest') }}>
                  OUR POSTS
                </div>
              </div>
              <div className="main-footer-sec">
                <div className="sec-title">
                  ABOUT
                </div>
                <div className="sec-text" onClick={() => { linkToView('team-title') }}>
                  TEAM
                </div>
                <div className="sec-text" onClick={() => { linkToView('advisors-title') }}>
                  ADVISORS
                </div>
              </div>
              <div className="main-footer-sec">
                <div className="sec-title">
                  PARTNERS
                </div>
                <div className="sec-text" onClick={() => { linkToView('partners') }}>
                  OUR PARTNERS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
