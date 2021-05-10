import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';

import TaareS from '../videos/taregin.mp4';
import Taare from '../images/taare.jpg';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class taregin extends React.Component{
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
                <h2>#𝘛aa𝘳𝘦 𝘎𝘪𝘯 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={TaareS} poster={Taare} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Taare Gin – Dil Bechara | Official Video | Sushant, Sanjana |A.R. Rahman|Jonita, Hriday|Amitabh B
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
                      ♫ Song:  Taare Gin<br/>
                      ♫ Song Composed, Produced and Arranged : A R Rahman <br/>
                      ♫ Singer : Mohit Chauhan, Shreya Ghoshal <br/>
                      ♫ Lyrics : Amitabh Bhattacharya  <br/>
                      ♫ Music Supervisor : Hriday Gattani,  Hiral Viradia <br/>
Musicians :<br/>
♫ Solo Violin : Suresh Lalwani <br/>
♫ Charango : Achyuth Jaigopal <br/>
♫ Flute : Rasika Shekhar <br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Jabse Hua Hain Yeh Accha Sa Lagta Hain (Female)<br/>
Dil Ho Gaya Phir Se Baccha Sa Lagta Hain<br/>
Ishq Ragon Mein Jo Behta Rahe (Male)<br/>
Jaake Kaanon Mein Chupke Se Kehta Rahe<br/>
Taare Gin (Female)<br/>
Taare Gin<br/>
Soye Bin<br/>
Saare Gin<br/>
Ik Haseen Mazaa Hai Yeh<br/>
Mazaahiya Saza Hai Yeh<br/>
Antara<br/>
Roko Issey Jitna (Male)<br/>
Mehsoos Ho Woh Itna<br/>
Dard Zara Sa Hain<br/>
Thoda Dava Sa Hai<br/>
(Female Counter Melody)<br/>
Isme Hain Jo Taira Koi Nahi, Aisa Kahi Kisse yeh Na hua<br/>
Ho<br/>
Vo Hi Toh Dooba Hain Sapnon Ke Raste Se Aake Isne na Jisse<br/>
Chua Ho<br/>
Dhokha Zara Sa Hain Hmmmm… Pal Bhar mein Sadiyon Tak<br/>
Thoda Vafaa Sa Hain Sand Rehna Hain, Kar Baitha<br/>
Yeh Vaada Hain (Both Sing) <br/>
Ya Iraada Hain<br/>
(Female Sings)<br/>
Kabhi Yeh Zyaada Hain Jabse Hua Hain Yeh Accha Sa Lagta<br/>
Hain<br/>
Kabhi Yeh Aadha Hain Dil Hogaya Phir Se Baccha Sa Lagta<br/>
Hain<br/>
Taare Gin (Male)<br/>
Taare Gin<br/>
Soye Bin<br/>
Saare Gin<br/>
Ik Haseen Mazaa Hai Yeh<br/>
Mazaahiya Saza Hai Yeh<br/>
Hmmmm<br/>

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
export default taregin;