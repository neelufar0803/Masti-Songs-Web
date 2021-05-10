import React from 'react';
import './video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import HawaS from '../videos/hawa.mp4';
import Hawa from '../images/hawa.jpg';
import HawaA from '../audios/hawaa.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class hawa extends React.Component{
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
                <h2>#𝑯𝒂𝒘𝒂 𝑩𝒂𝒏𝒌𝒆 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={HawaS} poster={Hawa} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Darshan Raval - Hawa Banke | Official Music Video | Nirmaan | Indie Music Label
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
                 <AudioPlayer  src={HawaA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song:  Garmi<br/>
                      ♫  Singer : Darshan Raval<br/>
                      ♫ Composer and Lyrics : Nirmaan<br/>
                      ♫ Original Lyrics inspired by Hadiqa Kiani song Boohey Bariyan<br/>
                      ♫ Music Producer : Goldboy<br/>
                      ♫ Female Vocals : Simran <br/>
                      ♫ Flute by Paras Nath<br/>
                      ♫ Mixed and Mastered By Sameer Charegaonkar<br/>
                      ♫ Director : Abhishek Sinha<br/>
                      ♫ Cast : Darshan Raval, Aditi B<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">                   
Main zameen tu aasmaan<br/>
Main daag hoon tu chand sa<br/>
Tu baarish hai main ret hoon<br/>
Main dhun koi tu raag sa<br/>
Main zameen tu aasmaan<br/>
Main daag hoon tu chand sa<br/>
Tu baarish hai main ret hoon<br/>
Main dhun koi tu raag sa<br/>
Mainu apna bana le meri heeriye<br/>
Mainu apna bana le meri heeriye<br/>
Main rehna ae tera banke<br/>
Boohey bariyan haaye boohey bariaan<br/>
Boohey bariyan te enna le kanda tap ke<br/>
Tu aaja vi hawa banke...<br/>
Boohey bariyan haaye boohey barian<br/>
Boohey bariyan haaye boohey barian<br/>

Chhu loon tujhe jaise koi<br/>
Chand ko chhuna chaahe<br/>
Chaahun tujhe jaise koi<br/>
Baccha khilona chaahe<br/>

Chhu loon tujhe jaise koi<br/>
Chand ko chhuna chaahe<br/>
Chaahun tujhe jaise koi<br/>
Baccha khilona chaahe<br/>

Fiqar ki raat mein<br/>
Tu sukoon ki neend hai<br/>
Patjhad ke mausam mein tu<br/>
Baarish ki pehli boond hai<br/>

Nirmaan ajj Eid tere vaaste<br/>
Nirmaan ajj Eid tere vaaste<br/>
Aaya hai adaa karke<br/>
Boohey bariyan haaye boohey bariaan<br/>

Boohey bariyan te enna le kanda tap ke<br/>
Avaangi hawa banke...<br/>
Boohey bariyan haaye boohey bariyan<br/>
Boohey bariyan haaye boohey bariyan<br/>

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
export default hawa;