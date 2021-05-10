import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import PalS from '../videos/pal.mp4';
import Pal from '../images/paas.jpg';
import PalA from '../audios/palpal.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';


class pal extends React.Component{
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
                <h2>#𝑷𝒂𝒍 𝑷𝒂𝒍 𝑫𝒊𝒍 𝑲𝒆 𝒑𝒂𝒂𝒔 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={PalS} poster={Pal} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Pal Pal Dil Ke Paas –Title | Arijit Singh | Karan Deol, Sahher | Parampara, Sachet, Rishi Rich
               <br/> 
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
                 <AudioPlayer  src={PalA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song:Pal Pal Dil Ke Paas Title Track Video Pal Pal Dil Ke Paas<br/>
                      ♫ Singers: Arijit Singh and Parampara Thakur<br/>
                      ♫ Song Composed: Sachet Parampara<br/>
                      ♫ Song Produced: Rishi Rich<br/>
                      ♫  Lyrics by Siddharth Garima<br/>
                      ♫ Mixed and mastered by Eric Pillai ( future sound of Bombay ) <br/>
                      ♫ Asst mix engineer- Michael Edwin pillai
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Rehna tu pal pal dil ke paas<br/>    
                      Judi rahe tujhse har ik saans...<br/>
                      Khud pe pehle na itna yaqeen mujhko ho paya<br/>
                      Mushqil si ghadiyan asaan huyi ab jo tu aaya<br/>
                      Ik baat kahun tujhse<br/>
                      Tu paas hai jo mere<br/>
                      Seene se tere sar ko laga ke<br/>
                      Sunti main rahun naam apna<br/>
                      Seene se tere sar ko laga ke<br/>
                      Sunti main rahun naam apna<br/>
                      Oh likh di tere naa' jindadi zaaniye<br/>
                      Bas rehna tere naal ve zuriye<br/>
                      Rehna tu pal pal dil ke paas<br/>
                      Judi rahe tujhse har ik saans<br/>
                      Seene se tere sar ko laga ke<br/>
                      Sunta main rahun naam apna<br/>
                      Ho naam apna<br/>
                      Naal tere ik ghar main sochaan<br/>
                      Baari kholaan te chann dikh jaave<br/>
                      Akkhaan'ch beetan raatan saariyan<br/>
                      Je mann laage te akh na laage<br/>
                      Pyaar hi odhein te pyaar hi khaana<br/>
                      Vich koi aave te pyaar hi aana<br/>
                      Duniya de vich assi duniya ton door<br/>
                      Hunn naal tere mera har sapna<br/>
                      Seene se tere sar ko lagaa ke<br/>
                      Sunta main rahun naam apna o...<br/>
                      Teri ungliyon se aasmaan pe kheechun ek lambi laqeer<br/>
                      Aadha tera aadha mera iss jahaan mein hum do ameer<br/>
                      Koi nazar na aaye mainu<br/>
                      Tu duniya ton wakhri ho gayi<br/>
                      Uthaan tainu takkda jaawan<br/>
                      Tu hi meri naukri ho gayi (x2)<br/>
                      Dooriyan ek pal bhi na gawaara ho<br/>
                      Chal ghoome duniya phir sang awaara ho<br/>
                      Seene se tere sar ko laga ke<br/>
                      Sunti main rahun naam apna<br/>
                      Seene se tere sar ko laga ke<br/>
                      Sunti main rahun naam apna<br/>
                      Rehna tu pal pal dil ke paas<br/>
                      Judi rahe tujhse har ek saans<br/>
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
export default pal;