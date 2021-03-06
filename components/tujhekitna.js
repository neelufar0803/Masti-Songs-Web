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
                    <h1>πΉππππππππ» ππππβ</h1>
                       </center>        
                    </nav>
             </div>
             <div className="divider"></div><br/>
             <div class="top">
                <h2>#π»ππππ π²ππππ πͺπππππ π³πππ πΊπππ</h2><br/>
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
                 <h2 id="ap1">π¨ππππ ππππ :</h2>
                 <div className="audio">   
                 <AudioPlayer  src={TujheA} />
             </div><br/>
                  <p>
                      <h2 id="info">π°πππ:</h2><br/>
                      <div className="info1">
                      β« Song: Tujhe Kitna Chahne Lage<br/>
                      β«Singer: Arijit Singh<br/>
                      β«Song Composed and Arranged: Mithoon<br/>
                      β«Lyrics:  Mithoon <br/>
                      β«Music Production: Godswill Mergulhao<br/>
                      β«Drums Programmed:  Bobby Shrivastava<br/>
                      β«Music Assistants: Anugrah, Godswill Mergulhao and Kaushal Gohil<br/>
                      β«Song recorded at LIVINGWATERMUSIC<br/>
                      β«Song Mixed and Mastered: Eric Pillai at Future Sound Of Bombay.<br/>
                      β«Mixing Asst: Michael Edwin Pillai.<br/>
                      </div><br/>
                      <h2 id="info">π³πππππ:</h2><br/>
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