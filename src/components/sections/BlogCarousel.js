import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "reactstrap";

const BlogCarousel = () => {
  return (
    <Carousel style={{ backgroundColor: '#000', interval: 10000, }}>
      <Carousel.Item>
        <img className='carousel'
          src="https://res.cloudinary.com/djhte2ard/image/upload/v1605143228/todoList_vq6siy.png"
          alt="First slide"
          style={{ width: '100%', maxWidth: '500px', padding: 10, display: 'grid', margin: ' 5px auto', filter: 'grayscale(50%)' }}
        />
        <Carousel.Caption style={{ position: 'static' }}>
          <h3 style={{ paddingTop: 10 }}>TODO LIST</h3>
          <p>ReactJS, MongoDB, Express, HTML, CSS, Javascript, Netlify</p>
          <p> The app allows users to create their favorite ingredient lists to make a delicious burger.</p>
          <Button className='button' size="lg" style={{ width: '30%', backgroundColor: '#4684b8', color: 'black', fontWeight: 'bold', display: 'grid', margin: '0 auto 20px' }}> <a className='projectButton' href='https://list-todo-app.netlify.app/' target="_blank" rel="noopener noreferrer">Visit Site </a></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel'
          src="https://res.cloudinary.com/djhte2ard/image/upload/v1603386058/burger-stack2_jsavpv.png"
          alt="First slide"
          style={{ width: '100%', maxWidth: '500px', padding: 10, display: 'grid', margin: ' 5px auto', filter: 'grayscale(50%)' }}
        />
        <Carousel.Caption style={{ position: 'static' }}>
          <h3 style={{ paddingTop: 10 }}>BURGER STACK</h3>
          <p>ReactJS, HTML, CSS, Javascript, Heroku</p>
          <p> The app allows users to create their favorite ingredient lists to make a delicious burger.</p>
          <Button className='button' size="lg" style={{ width: '30%', backgroundColor: '#4684b8', color: 'black', fontWeight: 'bold', display: 'grid', margin: '0 auto 20px' }}> <a className='projectButton' href='https://react-burger-stacker.vercel.app/' target="_blank" rel="noopener noreferrer">Visit Site </a></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel'
          src="https://res.cloudinary.com/djhte2ard/image/upload/v1603390232/pet-votting1_u9wzgw.png"
          alt="First slide"
          style={{ width: '100%', maxWidth: '500px', padding: 10, display: 'grid', margin: ' 5px auto', filter: 'grayscale(50%)' }}
        />
        <Carousel.Caption style={{ position: 'static' }}>
          <h3 style={{ paddingTop: 10 }}>PET VOTING</h3>
          <p> React, Ruby on Rails, ReactStrap, PostgreSQL, AJAX, JavaScript</p>
          <p> This app is all about your lovely pet. Search for common names, vote for your favorite pets.</p>
          <Button className='button' size="lg" style={{ width: '30%', backgroundColor: '#4684b8', color: 'black', fontWeight: 'bold', display: 'grid', margin: '0 auto 20px' }}><a className='projectButton' href='https://pet-votting.netlify.app/' target="_blank" rel="noopener noreferrer">Visit Site </a></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel'
          src="https://res.cloudinary.com/djhte2ard/image/upload/v1603403918/film-faves1_r6iggw.png"
          alt="First slide"
          style={{ width: '100%', maxWidth: '500px', padding: 10, display: 'grid', margin: ' 5px auto', filter: 'grayscale(50%)' }}
        />
        <Carousel.Caption style={{ position: 'static' }}>
          <h3 style={{ paddingTop: 10 }}>FILM FAVES</h3>
          <p> ReactJS, MongoDB, Express, HTML, CSS, Javascript, Netlify</p>
          <p> This app is all about your favorite movie. Selecting your favorite films.</p>
          <Button className='button' size="lg" style={{ width: '30%', backgroundColor: '#4684b8', color: 'black', fontWeight: 'bold', display: 'grid', margin: '0 auto 20px' }}><a className='projectButton' href='https://film-faves.netlify.app/' target="_blank" rel="noopener noreferrer">Visit Site </a></Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default BlogCarousel;
