import React from 'react'
import './index.css'
import shopping from '../../assets/shopping.png'

function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='header'>
        <h1 id='main-title'>Welcome to ECommerce App</h1>
        <img src={shopping} alt='shopping' />
        <p>Happy buying :)</p>
      </div>
      <div className='main'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo porro rerum error, molestiae, laborum vel incidunt accusantium iste quidem hic ipsa doloribus officiis quae similique inventore delectus fugit nobis optio at. Velit eveniet, sed fugiat illum quas numquam reprehenderit cumque nihil ullam accusantium tempora laboriosam nostrum minima possimus quibusdam!</p>
        <div className='section-2'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo porro rerum error, molestiae, laborum vel incidunt accusantium iste quidem hic ipsa doloribus officiis quae similique inventore delectus fugit nobis optio at.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo porro rerum error, molestiae, laborum vel incidunt accusantium iste quidem hic ipsa doloribus officiis quae similique inventore delectus fugit nobis optio at.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage