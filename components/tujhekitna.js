import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import TujheS from '../videos/tujhe.mp4';
import Tujhe from '../images/tujhe.jpg';
import TujheA from '../audios/tujhe.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class tujhekitna extends React.Component{
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
                <h2>#𝑻𝒖𝒋𝒉𝒆 𝑲𝒊𝒕𝒏𝒂 𝑪𝒉𝒂𝒉𝒏𝒆 𝑳𝒂𝒈𝒆 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={TujheS} poster={Tujhe} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Tujhe Kitna Chahne Lage | Kabir Singh | Mithoon Feat. Arijit Singh | Shahid K, Kiara A
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
                 <AudioPlayer  src={TujheA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song: Tujhe Kitna Chahne Lage<br/>
                      ♫Singer: Arijit Singh<br/>
                      ♫Song Composed and Arranged: Mithoon<br/>
                      ♫Lyrics:  Mithoon <br/>
                      ♫Music Production: Godswill Mergulhao<br/>
                      ♫Drums Programmed:  Bobby Shrivastava<br/>
                      ♫Music Assistants: Anugrah, Godswill Mergulhao and Kaushal Gohil<br/>
                      ♫Song recorded at LIVINGWATERMUSIC<br/>
                      ♫Song Mixed and Mastered: Eric Pillai at Future Sound Of Bombay.<br/>
                      ♫Mixing Asst: Michael Edwin Pillai.<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">                   
                      Dil Ka Dariya Bah Hi Gaya<br/>
Ishq Ibadat Bann Hi Gaya<br/>
Khudko Mujhe Tu Saup De<br/>
Meri Jarurat Tu Bann Gaya<br/>

Baat Dil Ki Nazro Ne Ki<br/>
Sach Keh Raha Teri Kasam<br/>
Tere Bin Ab Na Lenge Ek Bhi Dum<br/>
Tujhe Kitna Chahne Lage Ham<br/>

Tere Bin Ab Na Lenge Ek Bhi Dum<br/>
Tujhe Kitna Chahne Lage Ham<br/>
Tere Sath Ho Jayenge Khatam<br/>
Tujhe Kitna Chaahne Lage Hum<br/>

Baat Dil Ki Nazron Ne Ki<br/>
Sach Keh Raha Teri Qasam<br/>
Tere Bin Ab Na Lenge Ek Bhi Dum<br/>
Tujhe Kitna Chahne Lage Hum<br/>

Tere Sath Ho Jayenge Khatam<br/>
Tujhe Kitna Chaahne Lage Hum<br/>
Tujhe Kitna Chaahne Lage Hum<br/>

Iss Jagah Aa Gaye Chahtein Ab Meri<br/>
Chheen Lunga Tumhe Saari Duniya Se Hi<br/>
Tere Ishq Pe Haan Haq Mera Hi To Hai<br/>
Keh Diya Hai Ye Maine Mere Rab Se Bhi<br/>
Jis Rashte Tu Na Mile<br/>
Uspe Na Ho Mere Kadam<br/>

Tere Bin Ab Na Lenge Ek Bhi Dum<br/>
Tujhe Kitna Chaahne Lage Ham<br/>
Tere Sath Ho Jayenge Khatam<br/>
Tujhe Kitna Chaahne Lage Hum<br/>
Tujhe Kitna Chahne Lage Hum<br/>

Oh Ho O, Oh Ho O<br/>
Ho Ho<br/>

Tujhe Kitna Chaahne Lage Hum<br/>
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
export default tujhekitna;