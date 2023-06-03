import './App.css'
import Carousel from './components/Carousel'

function App() {
  return (
    <>
    <main>
      <Carousel >
      <div className='card'>
        <div className='card-content'>
          <p>
            “ I've been interested in coding for a while but never taken the jump, until now. 
            I couldn't recommend this course enough. I'm now in the job of my dreams and so 
            excited about the future. ”
            </p>
          <div className='card-creds'>
            <p className='card-name'>Tanya Sinclair</p>
            <p className='card-job'>UX Engineer</p>
          </div>
        </div>
        <div className='card-image-container'>
          <img src='/images/image-tanya.jpg' className='card-image' alt='Avatar'></img>
        </div>
      </div>

      <div className='card'>
        <div className='card-content'>
          <p>
              “ If you want to lay the best foundation possible I'd recommend taking this course. 
              The depth the instructors go into is incredible. I now feel so confident about 
              starting up as a professional developer. ”
          </p>
          <div className='card-creds'>
            <p className='card-name'>John Tarkpor</p>
            <p className='card-job'>Junior Front-end Developer</p>
          </div>
        </div>
        <div className='card-image-container'>
          <img src='/images/image-john.jpg' className='card-image' alt='Avatar'></img>
        </div>
      </div>
      </Carousel>
    </main>
    <footer className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
    </footer>
  </>
  )
}

export default App
