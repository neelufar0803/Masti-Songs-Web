import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import PachtaogeS from '../videos/pachtaoge.mp4';
import Pachtaoge from '../images/pachtaoge.jpg';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import PachtaogeA from '../audios/Pachtaoge.mp3'
import Tweet from '../images/tweet.jpg';


class tumheaana extends React.Component{
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
                <h2>#𝑷𝒂𝒄𝒉𝒕𝒂𝒐𝒈𝒆 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={PachtaogeS} poster={Pachtaoge} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Arijit Singh: Pachtaoge | Vicky Kaushal, Nora Fatehi |Jaani, B Praak, Arvindr Khaira | Bhushan Kumar
                 </h2><br/>
                 <div className="icons">
                   <ul>
                       <li><img src={Fb} alt='' /> </li>
                       <li><img src={Whats} alt=''/> </li>
                       <li><img src={Tweet} alt=''/> </li>
                   </ul>
                 </div><br/>
                 <h2 id="ap1">𝑨𝒖𝒅𝒊𝒐 𝒔𝒐𝒏𝒈 :</h2>
                 <div className="audio">   
                 <AudioPlayer  src={PachtaogeA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song -PACHTAOGE<br/>
♫Album - Jaani Ve<br/>
♫Starring: Vicky Kaushal and Nora Fatehi<br/>
♫Featuring: Prabh Uppal<br/>
♫Singer: Arijit Singh<br/>
♫Lyrics and Composer: Jaani<br/>
♫Music: B Praak<br/>
♫Mix Master: Gurinder Guri<br/>
♫Recording: Akaash Bambar<br/>
♫Music Label: T-Series<br/>
♫Guitars by Shomu Seal<br/>
♫ Flute By Paras Nath<br/>
♫Video Director: Arvindr Khaira <br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Ho mujhe chhod kar jo tum jaaoge<br/>
Jo tum jaaoge, Jo tum jaaoge<br/>

Ho mujhe chhod kar jo tum jaaoge<br/>
Bada pachtaoge, bada pachtaoge<br/>
Bada pachtaoge, bada pachtaoge<br/>

Sunniya sunniya galliyan de vich rol na deyin<br/>
Boohe kise hor li tu khol na deyin<br/>
Sunniya sunniya galliyan de vich rol na deyin<br/>
Boohe kise hor li tu khol na deyin<br/>

Ho shayar Jaani nu je rulaaoge<br/>
Bada pachtaoge, bada pachtaoge<br/>

Tere bina zindagi guzarage kivein<br/>
Jaan jaan kihnu pukarange kivein<br/>
Tere bina zindagi guzarage kivein<br/>
Jaan jaan kihnu pukarange kivein<br/>

Karoge je karoge je daga karoge<br/>
Sadde waali maut tussi vi te maroge<br/>
O Allah vekhda, zulm kamaoge<br/>
Bada pachtaoge, bada pachtaoge<br/>

Ho mujhe chhod kar jo tum jaaoge<br/>
Bada pachtaoge, bada pachtaoge<br/>

Mujhse jo nazrein churane lage ho<br/>
Lagta hai koi aur gali jaane lage ho<br/>
Khwab jo dekhe hum dono ne milke<br/>
Dheere dheere kyun dafnaane lage ho<br/>

Kar na tu hor barbaad chhad de<br/>
Rohndeya da lena swaad chhad de<br/>
Je saanu pyaar layi ehna tarsaaoge<br/>
Bada Pachtaoge, Bada Pachtaoge<br/>
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
export default tumheaana;