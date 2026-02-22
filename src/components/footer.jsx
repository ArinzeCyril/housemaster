import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='ft-navs'>
        <div className='ft-expl'>
          <h2>Explore</h2>
          <div>
            <i className='fa-solid fa-chevron-right'></i>
            <p><a href='#explorcty'>Las Vegas</a></p>
          </div>
          <div>
            <i className='fa-solid fa-chevron-right'></i>
            <p><a href='#explorpty'>Lagos</a></p>
          </div>
          <div>
            <i className='fa-solid fa-chevron-right'></i>
            <p><a href='#explorcty'>Dubai</a></p>
          </div>
        </div>
        <div className='ft-cntct'>
          <h2>Contact</h2>
          <div>
            <i className='fa-solid fa-location-dot'></i>
            <p><a href='#contact'>Old School Lane, Akure</a></p>
          </div>
          <div>
            <i className='fa-solid fa-phone'></i>
            <p><a href='#contact'>Call</a></p>
          </div>
          <div>
            <i className='fa-solid fa-envelope'></i>
            <p><a href='#contact'>Email</a></p>
          </div>
        </div>
        <div className='ft-lnk'>
          <h2>Quick Links</h2>
          <div>
            <i className='fa-solid fa-house'></i>
            <p><a href='#properties'>Properties</a></p>
          </div>
          <div>
            <i className='fa-solid fa-users'></i>
            <p><a href='#agent'>Agents</a></p>
          </div>
          <div>
            <i className='fa-solid fa-link'></i>
            <p><a href='#contact'>About us</a></p>
          </div>
        </div>
      </div>
      <hr className='hr-1 hr' />
      <hr className='hr-2 hr' />
      <hr className='hr-3 hr' />
      <hr className='hr-4 hr' />
      <hr className='hr-5 hr' />
      <hr className='hr-6 hr' />
      <div className='dev-ft'>
        <div className='dev'>
          <p>&copy; Designed by Abiodun Dominion</p>
          <p>
            &copy; Developed by{" "}
            <a href='https://arinzecyril.github.io/page'>Arinze Cyril</a>
          </p>
        </div>
        <p>
          <a href='#home'>Housemaster.</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer