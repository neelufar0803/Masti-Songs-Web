import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';

import MeriS from '../videos/meriaashiqui.mp4';
import Meri from '../images/meriaashiqui.jpg';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class meriaashiqui extends React.Component{
    render(){
        return(
            <div className="back">
              <div className="a1">
                <nav>
                    <center>
                    <h1>𝔹𝕆𝕃𝕃𝕐𝕎𝕆𝕆𝔻 𝕄𝕌𝕊𝕀ℂ</h1>
                       </center>        
                    </nav>
             </div>
             <div className="divider"></div><br/>
             <div class="top">
                <h2>#𝘔𝘦𝘳𝘪 𝘈𝘢𝘴𝘩𝘪𝘲𝘶𝘪 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={MeriS} poster={Meri} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Meri Aashiqui Song | Rochak Kohli Feat. Jubin Nautiyal | Ihana D | Shree Anwar Sagar | Bhushan Kumar
                 </h2><br/>
                 <div className="icons">
                   <ul>
                       <li><img src={Fb} alt='' /> </li>
                       <li><img src={Whats} alt=''/> </li>
                       <li><img src={Tweet} alt=''/> </li>
                   </ul>
                 </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song:  Meri Aashiqui<br/>
                      ♫ Featuring - Jubin Nautiyal, Ihana Dhillon and Altamash Faraz<br/>
                      ♫ Singer- Jubin Nautiyal<br/>
                      ♫ Music - Rochak Kohli<br/>
                      ♫ Original Lyrics- Shree Anwar Sagar<br/>
                      ♫ Lyrics - Rashmi Virag<br/>
                      ♫ Audio Production, Mixed and Mastered by - Aditya Dev<br/>
                      ♫ Video Director - Ashish Panda<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Tumhein kaise bataun ki papa ne meri shaadi kahin aur tai kar di hai<br/>
Kuchh hi dinon ke liye jaa rahi hoon<br/>
Baarish khatm hone se pehle waapas aa jaungi<br/>
Promise!<br/>

Baarishein aa gayi aur chali bhi gayi<br/>
Koyi dil mein siwa tere aaya nahi<br/>
Jab bhi sajda kiya naam tera liya<br/>
Bhool jaana tujhe humko aaya nahi<br/>

Dil to hai apang jaane kyun<br/>
Dhadka hi nahi hai kab se<br/>
Yeh dua hai meri rab se<br/>

Yeh dua hai meri rab se<br/>
Tujhe aashiqon mein sabse<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>

Yeh dua hai meri rab se<br/>
Tujhe aashiqon mein sabse<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>

Tum hi ab kuchh kaho<br/>
Suljhaun kaise yeh mushkil<br/>
Haan tum hi ab kuchh kaho<br/>
Suljhaun kaise yeh mushkil<br/>
Jhooth bol ke hi<br/>
Rakh lo na tum mera yeh dil<br/>

Chaho to tod dena<br/>
Toota hi nahi yeh kab se<br/>

Yeh dua hai meri rab se<br/>
Tujhe aashiqon mein sabse<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>

Katra katra jee raha hoon<br/>
Lamha lamha mar raha hoon<br/>
Kaise khud ko main sambhalun tu bata<br/>
Tere bin hai soona soona<br/>
Mere dil ka kona kona<br/>
Tu kya jaane kaise itne din jiya<br/>

Kaise dil ko<br/>
Kaise dil ko main manaun<br/>
Naraaz pada hai kab se<br/>

Yeh dua hai meri rab se<br/>
Tujhe aashiqon mein sabse<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>
Meri aashiqui pasand aaye<br/>

                      </div><br/>
                  </p>
             </div>
                 
             <div className="divider"></div>
             <div className="a2">
                <nav>
                    <h1>About us:</h1>        
                    </nav>
             </div>
            </div>
        )
    }
}
export default meriaashiqui;