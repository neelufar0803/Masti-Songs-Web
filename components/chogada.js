import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import ChogadaS from '../videos/chogada.mp4';
import Chogada from '../images/chogada.jpg';
import ChogadaA from '../audios/Chogada.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class chogada extends React.Component{
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
                <h2>#𝑪𝒉𝒐𝒈𝒂𝒅𝒂 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={ChogadaS} poster={Chogada} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Chogada Full Video Song | Loveyatri | Aayush Sharma | Warina Hussain | Darshan Raval, Lijo-DJ Chetas
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
                 <AudioPlayer  src={ChogadaA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song - Chogada <br/>
                      ♫Singer - Darshan Raval, Asees Kaur<br/>
                      ♫Lyrics - Darshan Raval<br/>
                      ♫Additional Lyrics - Shabbir Ahmed<br/>
                      ♫Music  - Lijo George - Dj Chetas<br/>
                      ♫Music Supervisor - Azeem Dayani<br/>
                      ♫Song Mixed And Mastered By Eric Pillai@Future Sound Of Bombay<br/>
                      ♫Mix Assistant Engineer - Michael Edwin Pillai<br/>
                      ♫Music Label: T-Series<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">                   
Ho...<br/>
Ho aavigayiraat<br/>
Mann bhulobhadibaat<br/>
Premniyamausamchhe<br/>
Abaao mere paas<br/>
Rehjaao mere saath<br/>
Premniyamausamchhe (x2)<br/>
Mill jaayemujhko agar saathtera<br/>
Tohbhoolun main saarajahaan<br/>
Chogadatara<br/>
Chabeelatara<br/>
Rangeelatara<br/>
Rangbherujuetarivaat re, Haah!<br/>
Chhogadatara<br/>
Orechhabilatara<br/>
Ore rangeelatara<br/>
Rangbherujuetarivaat re, Haah! (x2)<br/>
Chupchupketumhe<br/>
Dekha main karun<br/>
Saarisaariraat<br/>
Saarisaariraat<br/>
Chupchupkemujhe<br/>
Dekhatukare<br/>
Saarisaariraat<br/>
Saarisaariraat<br/>
Mill jaayemujhko agar saathtera<br/>
Tohbhoolun main saarajahaan...<br/>
Chhogadatara<br/>
Chabeelatara<br/>
Rangeelatara<br/>
Rangbherujuetarivaat re, Haah!<br/>
Chhogadatara<br/>
Orechhabilatara<br/>
Ore rangeelatara<br/>
Rangbherujuetarivaat re, Haah! (x2)<br/>
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
export default chogada;