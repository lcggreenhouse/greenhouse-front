import React from 'react'
import HomeNavBar from './HomeNavBar'
import placeholderHomeImage from '../assets/placeholderHomeImage.png'
import circle from '../assets/circle.png'
import arrow from '../assets/arrow.png'
import star from '../assets/star.png'
import profilePic from '../assets/profilePic.png'
import '../css/HomePage.css'

function circleContainer(step: string,  showArrow: boolean) {
  return (
    <div>
      <div className='circleContainer'>
        <img src={circle} alt="circle"/>
        {showArrow ? <img src={arrow} alt="arrow" /> : null}
      </div>
      <p className='circleText'>
        {step}
      </p>
    </div>
  )
}

function testimonialResponse() {
  return (
    <div className='testimonialContainer'>
      <div>
        <img className='testimonialImage' src={profilePic} alt="profilePic"/>
      </div>
      <div className='testimonialTextContainer'>
        <p className='testimonialTextContainerp1'>
          Courtnet Henry
        </p>
        <p className='testimonialTextContainerp2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <div className='starsContainer'>
          <img className='starImage' src={star} alt="star"/>
          <img className='starImage' src={star} alt="star"/>
          <img className='starImage' src={star} alt="star"/>
          <img className='starImage' src={star} alt="star"/>
          <img className='starImage' src={star} alt="star"/>
        </div>
      </div>
    </div>
  )
}

function homePageBottomBar(header: string, items: string[]) {
  return (
    <div className='container6div'>
      <p className='container6p1'>{header}</p>
      {items.map((item) => (
        <p className='container6p2'>{item}</p>
      ))}
    </div>
  )
}

function gridInfo(header: string, subHeader: string, paragraph: string) {
  return (
    <div className='gridInfodiv'>
      <h1 className='gridInfoh1'>
        {header}
      </h1>
      <p className='gridInfop1'>
        {subHeader}
      </p>
      <p className='gridInfop2'>
        {paragraph}
      </p>
    </div>
  )
}

function gridInfoExtra(header: string, subHeader: string, p1: string, p2: string, p3: string) {
  return (
    <div className='gridInfodiv'>
      <h1 className='gridInfoh1'>
        {header}
      </h1>
      <p className='gridInfop1'>
        {subHeader}
      </p>
      <p className='gridInfop3'>
        {p1}
      </p>
      <p className='gridInfop3'>
        {p2}
      </p>
      <p className='gridInfop2'>
        {p3}
      </p>
    </div>
  )
}

function HomePage() {
  return (
    <div>
      <HomeNavBar />

      <div className='homePageContainer1'>
        <div className='container1div'>
          <h1 className='container1h1'>
            Get in on the ground floor.
          </h1>
          <button className='container1button1'>
            Invest in your community with Portal
          </button>
          <button className='container1button2'>
            Learn more about how Portal works
          </button>
        </div>
        <img className='placeHolderImage' src={placeholderHomeImage} alt="placeholderHomeImage" />
      </div>

      <h1 className='whyChooseUsh1'>Why Choose Us?</h1>
      <div className='homePageContainer2'>
        <div className='container2gridDiv'>
          {gridInfo('Invest in a company with Regulation Crowdfunding',
                    'Fundrasing open to anyone.',
                    'Also known as "Reg CF", this new allows non-accredited investors (like you!) to invest in new ventures.')}

          {gridInfo('What happens if the business fails?',
                    'Tl;dr: You lose your money.',
                    `In most cases, your security will lose some or all of its value. The SEC requires us, as part of Reg CF, 
                    to restrict how much of their annual income and net worth individuals can invest in our companies. 
                    We strongly recommend our investors apply their own standard as well: only invest money you can afford to lose. 
                    When you invest in a company, you are sharing the risk that the venture will fail.`)}
          
          {gridInfoExtra('How is this different from other crowdfunding platforms?',
                         'The operative word is: Securities.',
                         `On most popular crowdfungin platforms today, you are either donating money purely to support a person or venture, 
                          with no expecations to receive anything personally in return, or you are pre-ordering the product the venture proposes to create.`,
                         `Reg CF fundraising is different- in return for your investment, you receive a security[2]- this may be ownership in the company,
                          an obligation to be paid back in the future, or some other stock, bond, debenture, note, privilege, option, etc.`,
                         `We require all companies on our platform to offer simple, easily understood and valued securities, 
                          but you should make certain you understand what you are purchasing.`)}

          {gridInfo('So why invest?',
                    'If the company succeeds, so do you.',
                    `As the owner of the company's security, your stake can become very valuable if the company succeeds.
                     Unlike other crowdfunding platforms, you can share in the success of the venture. Monetarily.`)}
        </div>
      </div>

      <div className='homePageContainer3'>
        <h1 className='container3h1'>
          Our Process
        </h1>
        <div className='processContainer'>
          {circleContainer('Step 1', true)}
          {circleContainer('Step 2', true)}
          {circleContainer('Step 3', true)}
          {circleContainer('Step 4', false)}
        </div>
      </div>

      <div className='homePageContainer4'>
        <h1 className='container4h1'>Testimonial</h1>
        <div className='container4subContainer'>
          <div className='c4containergrid'>
            {testimonialResponse()}
            {testimonialResponse()}
            {testimonialResponse()}
            {testimonialResponse()}
          </div>
        </div>
      </div>

      <div className='homePageContainer5'>
        <h1 className='container5h1'>
          Learn More
        </h1>
        <div className='container5TextContainer'>
          <p className='container5TextContainerp'>
            Visit our Education Center for more resources on Ref CF and safe, informed investing.
          </p>
          <button className='container5TextContainerButton'>
            Learn more about investing with Portal
          </button>
        </div>
      </div>

      <div className='homePageContainer6'>
        <div className='container6subContainer'>
          {homePageBottomBar('Investors', ['Education Center', 'My Account', 'Other Thing', 'Report a Problem'])}
          {homePageBottomBar('Partners', ['Requirements', 'Approved Law Firms', 'Support'])}
          {homePageBottomBar('About Us', ['About Portal', 'Values', 'Ownership', 'Media'])}
          {homePageBottomBar('Regulatory', ['SEC', 'Accessibility', 'Privacy'])}
        </div>
      </div>
    </div>
  );
}

export default HomePage
