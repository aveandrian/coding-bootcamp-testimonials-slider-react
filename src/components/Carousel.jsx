import { useEffect, useState } from 'react'
import '../styles/Carousel.css'

export default function Carousel(props){
    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(()=> {
        setLength(children.length)
    }, [children])

    function next(){
        if(currentIndex < (length - 1))
            setCurrentIndex(prev => prev+1)
    }

    function prev(){
        if(currentIndex > 0 )
            setCurrentIndex(prev => prev-1)
    }

    function changeChild(e){
      if (e.key === "ArrowLeft") {
        prev()
      } else if (e.key === "ArrowRight") {
        next()
      }
    }

      // Set and cleanup the event listener
    useEffect(() => {
      document.addEventListener("keydown", changeChild, true);
    
      return function cleanup() {
        document.removeEventListener("keydown", changeChild, true);
      };
    });

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className='buttons'>
                    <img className='left-arrow' src='/images/icon-prev.svg' onClick={prev} ></img>
                    <img className='right-arrow' src='/images/icon-next.svg' onClick={next}></img>
                </div>
                <div className="carousel-content-wrapper">
                    <div 
                        className="carousel-content"
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}