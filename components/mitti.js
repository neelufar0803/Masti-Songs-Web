import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';

import MittiS from '../videos/mitti.mp4';
import Mitti from '../images/mitti.jpg';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class mitti extends React.Component{
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
                <h2>#𝘛𝘦𝘳𝘪 𝘔𝘪𝘵𝘵𝘪 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={MittiS} poster={Mitti} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Teri Mitti - Kesari | Akshay Kumar and Parineeti Chopra | Arko | B Praak | Manoj Muntashir
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
                      ♫ Song:  Teri Mitti<br/>
                      ♫ Singers – B Praak <br/>
                      ♫ Music – Arko<br/>
                      ♫ Lyrics: Manoj Muntashir<br/>
                      ♫ Programmed and Arranged by Aditya Dev<br/>
                      ♫ String Section performed live by Prakash Verma and Team<br/>
                      ♫ Strings conducted by Aditya Dev<br/>
                      ♫ Strings Recorded by Pankaj Kaushik at Taaleem Studios<br/>
                      ♫ Mix and Master: Eric Pillai (Future Sound of Bombay)<br/>
                      ♫ Mix Assistant: Micheal<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Talwaaron pe sar waar diye <br/>
Angaaron me jism jalaya hai..<br/>
Tab jaa ke kahin humne sar pe<br/>
Ye Kesari rang sajaya hai..!!!<br/>

Ae meri zameen, afsos nahin, jo tere liye sau dard sahe..<br/>
Mahfooz rahe, teri aan sadaa, chahe jaan meri ye rahe na rahe..<br/>

Ae meri zameen, mahboob meri, meri nas-nas mein tera Ishq bahe<br/>
Pheeka na pade kabhi rang tera, jismon se nikal ke khoon kahe..<br/>

Teri mitti me mil jaawaan<br/>
Gul ban ke main khil jaawaan<br/>
Itni si, hai dil ki… aarzu..<br/>

Teri nadiyon mein bah jaawaan..<br/>
Teri faslon me lahraawaan.. <br/>
Itni si, hai dil ki… aarzu….!!!<br/>

Sarson se bhare, wo khet mere, jahan jhoom ke bhangdaa paa na saka..  <br/>
Aaabad rahe, wo gaanw mera, jahan laut ke wapas jaa na saka..<br/>

O watna ve, mere watna ve, tera mera pyaar niralaa thaa..<br/>
Qurbaan hua, teri asmat pe, main kitna naseebon wala thaa..<br/>

Teri mitti mein mil jaawaan<br/>
Gul ban ke main khil jaawaan<br/>
Itni si, hai dil ki… aarzu..<br/>

Teri nadiyon mein bah jaawaan..<br/>
Teri Kahiton me lahraawaan.. <br/>
Itni si, hai dil ki… aarzu….!!!<br/>

O heer meri, tu hasti rahe, teri aankh ghadi bhar nam na ho<br/>
Main marta tha, jis mukhde pe, kabhi uska ujala kam na ho..<br/>
O maayi meri, kya fikra tujhe, kyun aankh se dariya bahta hai.. <br/>
Tu kahti thee, tera chaand hoon main, aur chaand humesha rahta hai..<br/>

Teri mitti me mil jaawaan<br/>
Gul ban ke main khil jaawaan<br/>
Itni si, hai dil ki… aarzu..<br/>

Teri nadiyon me bah jaawaan..<br/>
Teri faslon me lahraawaan.. <br/>
Itni si, hai dil ki… aarzu….!!!<br/>
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
export default mitti;