import Fade from 'react-reveal/Fade';
import img_medi from '../../img/meditation.png';
import img_add from '../../img/plus.png';
import img_delete from '../../img/trash.png';
import Slider from 'react-slick';
import React, { useEffect, useRef } from 'react';
import medi from '../../img/airpot.png';


const IntroFn2 = () => {

  let whellEvent = (delta: any) => {
    if (delta.wheelDelta >= 0) {
      console.log('++');
      console.log(delta.wheelDelta);
      ref.current.style.transform = `rotate(${degree}deg)`;
      degree = degree - 0.8;
    }
    else {
      console.log('--');
      console.log(delta.wheelDelta);
      ref.current.style.transform = `rotate(${degree}deg)`;
      degree = degree + 0.8;
    }
  }

  let ref: any = useRef();
  let degree: number = 0;
  useEffect(() => {
    window.addEventListener('mousewheel', whellEvent)
    return ()=>{
      window.removeEventListener('mousewheel', whellEvent)
    }
  }, []);


  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return (
    <div className='intro_Fn2'>
      <Fade delay={400}><div className='intro_body2-1'>
        <Fade delay={700}><div className='intro_describe2'>LISTEN</div> </Fade>
        <Fade delay={1000}><div className='intro_describe2-2'>편하게 들으세요.</div></Fade>
        <div className='sound-list1' ref={ref} >
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
          <SingleSoundCard />
        </div>
      </div>
      </Fade>
      <Fade delay={1200}><div className='intro_body2-2'>
        <Fade delay={1500}><div className='intro_describe1'>SAVE</div></Fade>
        <Fade delay={1800}><div className='intro_describe1-2'>저장하세요.</div> </Fade>
        <div className='fav-icons2'>
          <span className='fav-icons-desc2'>
            Mixtape ,
        </span>
          <span className='fav-icons-add2'>
            <img src={img_add} alt='' />
          </span>
          <span className='fav-icons-delete2'>
            <img src={img_delete} alt='' />
          </span>
        </div>
        <Slider className='fav-cards2' {...settings}>
          <SingleFav />
          <SingleFav />
          <SingleFav />
          <SingleFav />
          <SingleFav />
          <SingleFav />
          <SingleFav />
          <SingleFav />
          <SingleFav />
          <SingleFav />
        </Slider>
      </div>
      </Fade>
    </div>
  )
}

export const SingleFav: React.FC = () => {

  return (
    <div className='fav-single2'>
      <div className='fav-img2'>
        <img src={img_medi} alt='' />
      </div>
      <p className='fav-desc2'>
        Meditation
      </p>
    </div>
  );
}

export const SingleSoundCard: React.FC = () => {

  return (
    <div className='sound-card 1'>
      <img src={medi} alt='' />
      <p className='sound-card-title'>komma</p>
    </div>
  );
}


export default IntroFn2