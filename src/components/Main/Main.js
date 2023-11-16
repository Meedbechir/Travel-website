import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck} from 'react-icons/hi';
import image1 from '../../assets/image1.png' 
import Aos from 'aos';
import 'aos/dist/aos.css';


const Main = () => {
  const Data = [
    {
      id: 1,
      imgSrc: image1,
      desTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 2,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 3,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 4,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 5,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 6,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 7,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 8,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },
     {
       id: 9,
       imgSrc: image1,
       desTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
     },

  ]

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='main container section'>

        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">
            {Data.map(({id, imgSrc, desTitle, location, grade, fees, description}) => {
              return (
                <div className="singleDestination" key={id} data-aos="fade-up">
                  <div className="imgDiv">
                    <img src={imgSrc} alt={desTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="desTitle">{desTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck  className='icon'/>
                    </button>
                  </div>
                </div>
              )
            })
            }
        </div>
    </section>
  )
}

export default Main