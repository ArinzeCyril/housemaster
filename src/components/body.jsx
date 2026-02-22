import Properties from './properties'
import Explore from './explore'
import WhyUs from './whyUs'
import Testimonial from './testimonial'
import Agents from './agents'
import NewsLetter from './newsLetter'

import Expl1 from '../img/expl/expl1.png'
import Expl2 from '../img/expl/expl2.png'
import Expl3 from '../img/expl/expl3.png'
import Expl4 from '../img/expl/expl4.png'
import Expl5 from '../img/expl/expl5.png'
import Expl6 from '../img/expl/expl6.png'
import Expl7 from '../img/expl/expl7.png'
import Expl8 from '../img/expl/expl8.png'
import Expl9 from '../img/expl/expl9.png'
import Expl10 from '../img/expl/expl10.png'
import Expl11 from '../img/expl/expl11.png'
import Expl12 from '../img/expl/expl12.png'
import Tsmny1 from '../img/tsmny/tsmny1.png';
import Tsmny2 from '../img/tsmny/tsmny2.png';
import Tsmny3 from '../img/tsmny/tsmny3.png';
import Agnt1 from '../img/agnt/agnt1.png';
import Agnt2 from "../img/agnt/agnt2.png"
import Agnt3 from "../img/agnt/agnt3.jpg"

const Body = ({ properties }) => {
  return (
    <div className='body'>
      <Properties properties={properties} />
      <Explore
        Expl1={Expl1}
        Expl2={Expl2}
        Expl3={Expl3}
        Expl4={Expl4}
        Expl5={Expl5}
        Expl6={Expl6}
        Expl7={Expl7}
        Expl8={Expl8}
        Expl9={Expl9}
        Expl10={Expl10}
        Expl11={Expl11}
        Expl12={Expl12}
      />
      <WhyUs />
      <Testimonial Tsmny1={Tsmny1} Tsmny2={Tsmny2} Tsmny3={Tsmny3} />
      <Agents Agnt1={Agnt1} Agnt2={Agnt2} Agnt3={Agnt3} />
      <NewsLetter />
    </div>
  )
}

export default Body