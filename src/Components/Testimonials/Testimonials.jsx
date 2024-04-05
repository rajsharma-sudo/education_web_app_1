import React, { useRef } from 'react';
import './Testimonials.css';
import Next_icon from '../../assets/next-icon.png';
import Back_icon from '../../assets/back-icon.png';
import User_1 from '../../assets/user-1.png'
import User_2 from '../../assets/user-2.png'
import User_3 from '../../assets/user-3.png'
import User_4 from '../../assets/user-4.png'

const Testimonials = () => {

    // logic for slider
    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
       if(tx > -50)
       {
        tx -=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx < 0)
        {
         tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }



  return (

    <div className='testimonials'>
      <img src={Next_icon}  className='next-btn' onClick={slideForward}/>
      <img src={Back_icon}  className='back-btn'  onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_1} alt="" />
                        <div>
                            <h3>William Jackson 1</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best  decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expections.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_2} alt="" />
                        <div>
                            <h3>William Jackson 2</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best  decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expections.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_3} alt="" />
                        <div>
                            <h3>William Jackson 3</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best  decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expections.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={User_4} alt="" />
                        <div>
                            <h3>William Jackson 4</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best  decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic exellence have truly exceeded my expections.</p>
                </div>
            </li>
           
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
