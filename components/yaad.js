import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import YaadS from '../videos/yaad.mp4';
import Yaad from '../images/yaad piya.jpg';
import YaadA from '../audios/yaad.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class yaad extends React.Component{
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
                <h2>#ππππ π·πππ π²π πΊπππ</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={YaadS} poster={Yaad} width="1220" height="420" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Yaad Piya Ki Aane Lagi | Divya Khosla Kumar |Neha K,Tanishk B,Jaani, Faisu, Radhika and Vinay |Bhushan K
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
                 <AudioPlayer  src={YaadA} />
             </div><br/>
                  <p>
                      <h2 id="info">π°πππ:</h2><br/>
                      <div className="info1">
                      βͺ Song: Yaad Piya Ki Aane Lagi <br/>
βͺ Singers: Neha Kakkar<br/>
βͺ Music - Tanishk Bagchi<br/>
βͺ Programmed and Arranged by - Tanishk Bagchi <br/>
βͺ Additional Programming - Ganesh Waghela <br/>
βͺ Lyrics - Jaani<br/>
βͺ Guitars - Shomu Seal<br/>
βͺ Special Appearance: Faisu<br/>
βͺ Mixed and Mastered: Eric Pillai at Future Sound Of Bombay<br/>
βͺ Mix Assistant Engineers - Michael Edwin Pillai <br/>
βͺ Dubbing Coordinator - Chayan Rio Ghosh<br/>
βͺ Song Recorded: T-Series Studio<br/>
βͺ Recorded By: Surajit Ghosh Mazumdar<br/>
βͺ Music Label: T-Series <br/>
                      </div><br/>
                      <h2 id="info">π³πππππ:</h2><br/>
                      <div class="info1">                   
                      Aasmaan mein jaise baadal ho rahe hai<br/>
Hum dheere dheere dheere paagal ho rahe hai<br/>

Aasmaan mein jaise baadal ho rahe hai<br/>
Hum dheere dheere dheere paagal ho rahe hai<br/>
Main to mar jaana haye wo na jo milne aaye<br/>
Main to mar jaana haye wo na jo milne aaye<br/>
Saansein meri hai unke hathon mein<br/>

Yaad piya ki, mere piya ki aane lagi<br/>
Haye bheegi bheegi raato mein<br/>

Ho yaad piya ki aane lagi<br/>
Haye bheegi bheegi raato mein<br/>

Tere bina kya haal hai apna<br/>
Kya tumko batlaye re<br/>
Choodiyan meri roye<br/>
Meri chunri royi jaye re<br/>

Ho o tere bina kya haal hai apna<br/>
Kya tumko batlaye re<br/>
Chudiyan meri roye<br/>
Meri chunri royi jaye re<br/>

Bin tere sab saza hain<br/>
Bin tere kahan maza hai<br/>
Bin tere sab saza hain<br/>
Bin tere kahan maza hai<br/>
Bin tere kahan maza hai chahaton mein<br/>

Yaad piya ki, ha-haan mere piya ki<br/>
Haye piya ki aane lagi<br/>
Haye bheegi bheegi<br/>

Yaad piya ki aane lagi<br/>
Haye bheegi bheegi raato mein<br/>

Kab wo din aayega<br/>
Jab hum bhi mehndi lagwayenge<br/>
Na jaane kab aayenge<br/>
Aur doli mein le jayenge<br/>

Ho kab wo din aayega<br/>
Jab hum bhi mehndi lagwayenge<br/>
Na jaane kab aayenge<br/>
Aur doli mein le jayenge<br/>

Baari na aaye humari<br/>
Baarate dekhi saari<br/>
Baari na aaye humari<br/>
Baarate dekhi saari<br/>
Nache hum sabki baraato mein<br/>

Yaad piya ki, mere piya ki aane lagi<br/>
Haye bheegi bheegi raaton mein<br/>
Ho yaad piya ki aane lagi<br/>
Haye bheegi bheegi bheegi raato mein<br/>

Yaad piya ki aane lagi<br/>
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
export default yaad;