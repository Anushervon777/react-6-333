import '../../pages/about/about.css'
import section1img from '../../pages/about/section1.svg';
import section2img1 from '../../pages/about/img/section2-img1.svg';
import section2img2 from '../../pages/about/img/section2-img2.svg';
import section2img3 from '../../pages/about/img/section2-img3.svg';
import section5img1 from '../../pages/about/img/section5-img1.svg';
import section5img2 from '../../pages/about/img/section5-img2.svg';
import section5img3 from '../../pages/about/img/section5-img3.svg';
import shar from '../../pages/about/img/shar.svg';
import socila_icon from '../../pages/about/img/socila.svg';
import socila_icon2 from '../../pages/about/img/social2.svg';
export default function About() {
  let objUser = [
    {
      avatar: section5img1 ,
      name: 'Arlyne Stefano',
      title: 'Founder & CEO',
      social: socila_icon
    },
    {
      avatar: section5img2 ,
      name: 'Katy Cristy',
      title: 'Chief Technology Officer',
      social: socila_icon
    },
    {
      avatar: section5img3,
      name: 'Roger Dzawin',
      title: 'Chief Technology Officer',
      social: socila_icon
    }
  ]
  return <>
    <div className="nav">
      <h1>Everything you need to get <br /> the attention of your <br /> audience</h1>
    </div>
    <div className="section1">
      <div className="left">
        <span style={{ marginLeft: '-100px' }}>________</span>
        <p>Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.</p>
      </div>
      <div className="right">
        <img src={section1img} alt="" />
      </div>
    </div>
    <div className="section2">
      <div className="box1">
        <img style={{ width: '100%' }} src={section2img1} alt="" />
      </div>
      <div className="box2">
        <img style={{ width: '100%' }} src={section2img2} alt="" /> <br /><br />
        <h1>What we believe in</h1><br />
        <p style={{ color: 'gray' }}>Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...</p>
        <button>See Details -> </button>
      </div>
      <div className="box3">
        <img style={{ width: '250px' }} src={section2img3} alt="" />
      </div>
    </div>
    <div className="section3">
      <div className="left">
        <h1>Powerful ideas & sales acceleration</h1>
      </div>
      <div className="right">
        <p>We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.</p>
      </div>
    </div>
    <div className="section4">
      <div className="left">
        <h1>Meet our team of creators, designers, and world-class problem solvers</h1><br /><br />
        <p style={{ color: 'grey' }}>To become the company that customers want, it takes <br /> a group of passionate people. Get to know the people who lead</p>
      </div>
      <div className="right">
        <img src={shar} alt="" />
      </div>
    </div>
    <div className="section5">
    {objUser.map((element, index) => {
  return (
    <div className="box" key={index}>
      <img src={element.avatar} alt={element.name} /><br /><br />
      <div style={{ display: 'flex', justifyContent:'space-between'}}>
        <div>
          <h3>{element.name}</h3><br />
          <p>{element.title}</p>
        </div>
        <div>
          <img src={element.social} alt="Social Icon" />
        </div>
      </div>
    </div>
  );
})}

    </div>
    <div className="section6">
      <div className="left">
        <h1>Powerful ideas & sales acceleration</h1>
      </div>
      <div className="right">
        <p style={{color:'gray'}}>We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.</p><br />
        <p>See Open Position -></p>
      </div>
    </div>
    <footer>
      <div className="foot1">
        <div className="left-foot1">
          <h1>Think beyond the wave</h1><br />
          <p style={{color:'gray'}}>Ask about Sans products, pricing, implementation, or anything <br /> else. Our highly trained reps are standing by, ready to help</p>
        </div>
        <div className="right-foot1">
          <button style={{backgroundColor:'white', color:'black'}}>Try for free</button>
        </div>
      </div>
      <div className="foot2">
        <div className="foot2_left">
          <img src={socila_icon2} alt="" />
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Support</p>
        </div>
        <div className="foot2_right">
          <p>© Copyright 2023,t All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </>
}