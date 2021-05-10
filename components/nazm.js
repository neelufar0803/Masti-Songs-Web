import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';

import NazmS from '../videos/nazm.mp4';
import Nazm from '../images/nazm.jpg';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class nazm extends React.Component{
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
                <h2>#𝘕𝘢𝘻𝘮 𝘕𝘢𝘻𝘮 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={NazmS} poster={Nazm} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Nazm Nazm - Lyrical | Bareilly Ki Barfi | Kriti Sanon, Ayushmann Khurrana & Rajkummar Rao | Arko
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
                      ♫ Song: Nazm Nazm<br/>
                      ♫ Singer: Arko<br/>
                      ♫ Music: Arko<br/>
                      ♫ Lyrics: Arko<br/>

                      ♫ Programming/Music Production/Keys: Aditya Dev <br/>
                      ♫ Guitars: Krishna Pradhan <br/>
                      ♫ Vocals and Guitars recording: Aditya Dev <br/>
                      ♫ Mix: Aditya Dev <br/>
                      ♫ Master: Shadaab Rayeen<br/> 
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Tu nazm nazm sa mere<br/>
Honthon pe thehar ja<br/>
Main khwab khwab sa teri<br/>
Aankhon mein jaagun reTu ishq ishq sa mere<br/>
Rooh mein aake bas ja<br/>
Jis aur teri shehnaai<br/>
Uss ore main bhaagun reNa na...Haath thaam le piya<br/>
Karte hain vaada<br/>
Ab se tu aarzu<br/>
Tu hi hai iraada<br/>
Mera naam le piya<br/>
Main teri rubaai<br/>
Teri hi tto piche piche<br/>
Barsaat aayi, barsaat aayiTu itrr itrr sa mere<br/>
Saanson mein bikhar jaa<br/>
Main faqeer tere qurbat ka<br/>
Tujhse tu maangun reTu ishq ishq sa mere<br/>
Rooh mein aake bas ja<br/>
Jis aur teri shehnaai<br/>
Uss ore main bhaagun reMere dil ke lifaafe mein<br/>
Tera khat hai janiya<br/>
Tera khat hai janiya<br/>
Nacheez ne kaise paa li<br/>
Kismat yeh janiya ve<br/>
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
export default nazm;