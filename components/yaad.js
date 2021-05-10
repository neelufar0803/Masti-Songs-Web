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
                    <h1>𝔹𝕆𝕃𝕃𝕐𝕎𝕆𝕆𝔻 𝕄𝕌𝕊𝕀ℂ</h1>
                       </center>        
                    </nav>
             </div>
             <div className="divider"></div><br/>
             <div class="top">
                <h2>#𝒀𝒂𝒂𝒅 𝑷𝒊𝒚𝒂 𝑲𝒊 𝑺𝒐𝒏𝒈</h2><br/>
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
                 <h2 id="ap1">𝑨𝒖𝒅𝒊𝒐 𝒔𝒐𝒏𝒈 :</h2>
                 <div className="audio">   
                 <AudioPlayer  src={YaadA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♪ Song: Yaad Piya Ki Aane Lagi <br/>
♪ Singers: Neha Kakkar<br/>
♪ Music - Tanishk Bagchi<br/>
♪ Programmed and Arranged by - Tanishk Bagchi <br/>
♪ Additional Programming - Ganesh Waghela <br/>
♪ Lyrics - Jaani<br/>
♪ Guitars - Shomu Seal<br/>
♪ Special Appearance: Faisu<br/>
♪ Mixed and Mastered: Eric Pillai at Future Sound Of Bombay<br/>
♪ Mix Assistant Engineers - Michael Edwin Pillai <br/>
♪ Dubbing Coordinator - Chayan Rio Ghosh<br/>
♪ Song Recorded: T-Series Studio<br/>
♪ Recorded By: Surajit Ghosh Mazumdar<br/>
♪ Music Label: T-Series <br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
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