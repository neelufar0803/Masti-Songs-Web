import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import ShayadS from '../videos/shayad.mp4';
import Shayad from '../images/shayad.jpg';
import ShayadA from '../audios/Shayad.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class shayad extends React.Component{
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
                <h2>#πΊπππππ πΊπππ</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={ShayadS} poster={Shayad} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Shayad - Love Aaj Kal | Kartik | Sara | Arushi | Pritam | Arijit Singh
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
                 <AudioPlayer  src={ShayadA} />
             </div><br/>
                  <p>
                      <h2 id="info">π°πππ:</h2><br/>
                      <div className="info1">
                      β«Song name - Shayad<br/>
                      β«Movie - Love Aaj Kal <br/>
                      β«Starring - Kartik Aaryan Sara Ali Khan <br/>
                      β«Composer - Pritam<br/>
                      β«Singer - Arijit Singh<br/>
                      β«Lyricist - Irshad Kamil<br/>
                      β«Sound Design β Sunny M.R., DJ Phukan andAshwin Kulkarni<br/>
                      β«Music Arrangement and Production β Arijit Singh and Sunny M.R.<br/>
                      β«Music Programmers β Somanshu Agarwal, Zafar Iqbal Ansari and Arijit Singh<br/>
                      β«Mix and Master β Eric Pillai at Future Sound Of Bombay<br/>
                      </div><br/>
                      <h2 id="info">π³πππππ:</h2><br/>
                      <div class="info1">                   
                      Shayad Kabhi Na Keh Sakun Main Tumko<br/>
Kahe Bina Samjh Lo Tum Shayad<br/>
Shayad Mere Khayaal Mein Tum Ek Din<br/>
Milo Mujhe Kahi Pe Gum Shayad<br/>

Jo Tum Na Ho Raheinge Hum Nahi<br/>
Jo Tum Na Ho-Ooo Raheinge Hum Nahi<br/>
Na Chahiye Kuchh Tumse Jyaada<br/>
Tumse Kam Nahi<br/>

Jo Tum Na Ho-Ooo Toh Hum Bhi Hum Nahi<br/>
Jo Tum Na Ho-Ooo Toh Hum Bhi Hum Nahi<br/>
Na Chahiye Kuchh Tumse Jyaada<br/>
Tumse Kam Nahi<br/>

Aankhon Ko Khaab Dena Khud Hi Sawaal Karke<br/>
Khud He Jawaab Dena Teri Taraf Se<br/>
Bin Kaam Kaam Karna Jaana Kahi Ho Chahein<br/>
Har Baar Hi Guzarna Teri Taraf Se<br/>

Yeh Kosishein Toh Hongi Kam Nahi<br/>
Yeh Kosishein Toh Hongi Kam Nahi<br/>
Na Chahiye Kuchh Tumse Jyaada<br/>
Tumse Kam Nahi<br/>

Jo Tum Na Ho-Ooo Raheinge Hum Nahi<br/>
Jo Tum Na Ho-Ooo Raheinge Hum Nahi<br/>
Na Chahiye Kuchh Tumse Jyaada<br/>
Tumse Kam Nahi<br/>

Jo Tum Na Ho-Oo<br/>
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
export default shayad;