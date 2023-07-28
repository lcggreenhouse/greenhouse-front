import React from 'react'
import HomeNavBar from './HomeNavBar'
import placeholderHomeImage from '../assets/placeholderHomeImage.png'
import circle from '../assets/circle.png'
import arrow from '../assets/arrow.png'
import star from '../assets/star.png'
import profilePic from '../assets/profilePic.png'

function App() {
  return (
    <div>
      <HomeNavBar />

      <div className='flex items-center justify-center mt-60'>
        <div className='flex flex-col mr-7'>
          <h1 className='text-42px font-Inter'>
            Get in on the ground floor.
          </h1>
          <button className='text-xl font-Roberto font-semibold rounded-searchBarRadius text-white w-521 h-16 bg-homePageButtonBackground mt-5'>
            Invest in your community with Portal
          </button>
          <button className='text-xl font-Roberto font-semibold w-521 h-16 text-homePageButtonBackground border-2 rounded-searchBarRadius border-homePageButtonBackground mt-5'>
            Learn more about how Portal works
          </button>
        </div>
        <img className='w-477 h-309' src={placeholderHomeImage} alt="placeholderHomeImage" />
      </div>

      <h1 className='mt-64 ml-80 text-5xl font-Roboto font-semibold'>Why Choose Us?</h1>
      <div className='mt-4 flex justify-center'>
        <div className='grid grid-cols-2 gap-16 mt-12'>
          <div className="bg-homePageGridBackground w-625 h-64 p-4">
            <h1 className='font-Roboto text-xl font-semibold'>
              Invest in a company with Regulation Crowdfunding
            </h1>
            <p className='font-Lato text-base font-extrabold mb-4'>
              Fundrasing open to anyone.
            </p>
            <p className='font-Roboto text-xs font-normal'>
              Also known as "Reg CF", this new allows non-accredited investors (like you!) to invest in new ventures.
            </p>
          </div>
          <div className="bg-homePageGridBackground w-625 h-64 p-4">
            <h1 className='font-Roboto text-xl font-semibold'>
              What happens if the business fails?
            </h1>
            <p className='font-Lato text-base font-extrabold mb-4'>
              Tl;dr: You lose your money.
            </p>
            <p className='font-Roboto text-xs font-normal'>
              In most cases, your security will lose some or all of its value. The SEC requires us, as part of Reg CF, 
              to restrict how much of their annual income and net worth individuals can invest in our companies. 
              We strongly recommend our investors apply their own standard as well: only invest money you can afford to lose. 
              When you invest in a company, you are sharing the risk that the venture will fail.
            </p>
          </div>
          <div className="bg-homePageGridBackground w-625 h-64 p-4">
            <h1 className='font-Roboto text-xl font-semibold'>
              How is this different from other crowdfunding platforms?
            </h1>
            <p className='font-Lato text-base font-extrabold mb-4'>
              The operative word is: Securities.
            </p>
            <p className='font-Roboto text-xs font-normal mb-4'>
              On most popular crowdfungin platforms today, you are either donating money purely to support a person or venture, 
              with no expecations to receive anything personally in return, or you are pre-ordering the product the venture proposes to create.
            </p>
            <p className='font-Roboto text-xs font-normal mb-4'>
              Reg CF fundraising is different– in return for your investment, you receive a security[2]- this may be ownership in the company,
              an obligation to be paid back in the future, or some other stock, bond, debenture, note, privilege, option, etc.
            </p>
            <p className='font-Roboto text-xs font-normal'>
              We require all companies on our platform to offer simple, easily understood and valued securities, but you should make certain you understand what you are purchasing.
            </p>
          </div>
          <div className="bg-homePageGridBackground w-625 h-64 p-4">
            <h1 className='font-Roboto text-xl font-semibold'>
              So why invest?
            </h1>
            <p className='font-Lato text-base font-extrabold mb-4'>
              If the company succeeds, so do you.
            </p>
            <p className='font-Roboto text-xs font-normal'>
              As the owner of the company’s security, your stake can become very valuable if the company succeeds.
              Unlike other crowdfunding platforms, you can share in the success of the venture. Monetarily.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-48 bg-homePageProcessBackground h-447'>
        <h1 className='flex justify-center font-Roboto text-6xl font-semibold pt-14'>
          Our Process
        </h1>
        <div className='flex justify-center'>
          <div>
            <div className='flex items-center w-36 h-36 mt-20 mr-28 ml-28 mb-10'>
              <img src={circle} alt="circle"/>
              <img src={arrow} alt="arrow"/>
            </div>
            <p className='font-Roboto text-2xl font-semibold flex justify-center'>
              Step 1
            </p>
          </div>
          <div>
            <div className='flex items-center w-36 h-36 mt-20 mr-28 ml-28 mb-10'>
              <img src={circle} alt="circle"/>
              <img src={arrow} alt="arrow"/>
            </div>
            <p className='font-Roboto text-2xl font-semibold flex justify-center'>
              Step 2
            </p>
          </div>
          <div>
            <div className='flex items-center w-36 h-36 mt-20 mr-28 ml-28 mb-10'>
              <img src={circle} alt="circle"/>
              <img src={arrow} alt="arrow"/>
            </div>
            <p className='font-Roboto text-2xl font-semibold flex justify-center'>
              Step 3
            </p>
          </div>
          <div>
            <div className='flex items-center w-36 h-36 mt-20 mr-28 ml-28 mb-10'>
              <img src={circle} alt="circle"/>
            </div>
            <p className='font-Roboto text-2xl font-semibold flex justify-center'>
              Step 4
            </p>
          </div>
        </div>
      </div>

      <div className='mt-48'>
        <h1 className='flex justify-center font-Roboto text-6xl font-semibold'>Testimonial</h1>
        <div className='flex justify-center'>
          <div className='grid grid-cols-2 gap-16 mt-12'>
            <div className='w-577 h-233 border rounded-testimonialRadius border-testimonialColor flex'>
              <div>
                <img className='w-20 h-20 mt-7 ml-7' src={profilePic} alt="profilePic"/>
              </div>
              <div className='mt-8 ml-4'>
                <p className='font-Poppins text-lg font-bold text-testimonialColor'>
                  Courtnet Henry
                </p>
                <p className='font-Poppins text-sm font-normal text-testimonialTextColor w-96'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <div className='flex mt-4'>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                </div>
              </div>
            </div>
            <div className='w-577 h-233 border rounded-testimonialRadius border-testimonialColor flex'>
              <div>
                <img className='w-20 h-20 mt-7 ml-7' src={profilePic} alt="profilePic"/>
              </div>
              <div className='mt-8 ml-4'>
                <p className='font-Poppins text-lg font-bold text-testimonialColor'>
                  Courtnet Henry
                </p>
                <p className='font-Poppins text-sm font-normal text-testimonialTextColor w-96'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <div className='flex mt-4'>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                </div>
              </div>
            </div>
            <div className='w-577 h-233 border rounded-testimonialRadius border-testimonialColor flex'>
              <div>
                <img className='w-20 h-20 mt-7 ml-7' src={profilePic} alt="profilePic"/>
              </div>
              <div className='mt-8 ml-4'>
                <p className='font-Poppins text-lg font-bold text-testimonialColor'>
                  Courtnet Henry
                </p>
                <p className='font-Poppins text-sm font-normal text-testimonialTextColor w-96'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <div className='flex mt-4'>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                </div>
              </div>
            </div>
            <div className='w-577 h-233 border rounded-testimonialRadius border-testimonialColor flex'>
              <div>
                <img className='w-20 h-20 mt-7 ml-7' src={profilePic} alt="profilePic"/>
              </div>
              <div className='mt-8 ml-4'>
                <p className='font-Poppins text-lg font-bold text-testimonialColor'>
                  Courtnet Henry
                </p>
                <p className='font-Poppins text-sm font-normal text-testimonialTextColor w-96'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <div className='flex mt-4'>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                  <img className='w-4 h-4 mr-1' src={star} alt="star"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-72 ml-72 mr-72 h-96 bg-homePageButtonBackground'>
        <h1 className='flex justify-center pt-7 font-Lato text-5xl font-normal text-white'>
          Learn More
        </h1>
        <div className=' flex flex-col items-center'>
          <p className=' w-496 mt-7 mb-16 flex justify-center font-Lato text-2xl font-extrabold text-white text-center'>
            Visit our Education Center for more resources on Ref CF and safe, informed investing.
          </p>
          <button className='w-521 h-16 font-Roboto text-xl font-semibold text-homePageButtonBackground bg-white rounded-searchBarRadius'>
            Learn more about investing with Portal
          </button>
        </div>
      </div>

      <div className=' flex justify-center items-center h-96 mt-80 bg-homePageBottomBar'>
        <div className='flex items-start'>
          <div className='flex flex-col mr-28'>
            <p className='text-white font-Lato text-2xl font-extrabold mb-8'>Investors</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Education Center</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>My Account</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Other Thing</p>
            <p className='text-white font-Lato text-2xl font-medium cursor-pointer'>Report a Problem</p>
          </div>
          <div className='flex flex-col mr-28'>
            <p className='text-white font-Lato text-2xl font-extrabold mb-8'>Partners</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Requirements</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Approved Law Firms</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Support</p>
          </div>
          <div className='flex flex-col mr-28'>
            <p className='text-white font-Lato text-2xl font-extrabold mb-8'>About Us</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>About Portal</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Values</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Ownership</p>
            <p className='text-white font-Lato text-2xl font-medium cursor-pointer'>Media</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-white font-Lato text-2xl font-extrabold mb-8'>Regulatory</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>SEC</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Accessibility</p>
            <p className='text-white font-Lato text-2xl font-medium mb-3 cursor-pointer'>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
