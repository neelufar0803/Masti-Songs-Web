import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';

import ShukarS from '../videos/shukar.mp4';
import Shukar from '../images/shukar.jpg';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class maitumhara extends React.Component{
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
                <h2>#𝘚𝘩𝘶𝘬𝘢𝘳 𝘬𝘢𝘳 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={ShukarS} poster={Shukar} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2"> “Shukar kar bandeya” song is picturised on Sonu Sood, Bharti Singh, Harsh Limbachiyaa, Prince Narula, Yuvika Chaudhary, Suyyash Rai, Kishwer Merchant Rai and Yuzvendra Chahal and sung by Suyyash Rai, Deepti Tuli and Oye Kunaal. Lyrics of “Shukar Kar” are penned by Mani Singh Ghuria and music is composed by Oye Kunaal.


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
                      ♫ Song:  Shukar kar<br/>
                      ♫ Vocals : Suyyash Rai, Deepti Tuli, Oye Kunaal <br/>
                      ♫ Lyrics : Mani Singh Ghurial <br/>
                      ♫ Music Composer : Oye Kunaal <br/>
                      ♫ Flute : Veval Sharma<br/>
                      ♫ Label : Realise Music <br/>
                      ♫ Produced and Conceived By : Ballraaj<br/> 
                      ♫ Featuring : Sonu Sood, Bharti Singh and Harsh Limbachiyaa<br/> 
                      ♫ Prince Narula and Yuvika Chaudhary, Suyyash Rai and Kishwer Merchant Rai, Yuzvendra Chahal <br/>
                      ♫ Editor : Baljinder Muhar <br/>
                      ♫ Video By : Realise Music<br/>
                      ♫ Special Thanks : Sadhu Baijnath<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Shukar kar bandeya tenu roti a mili<br/>
Shukar kar bandeya chatt son nu mili<br/>
Dekh wasde ne oh vi jede bhukhe so gye<br/>
Haal soch unka jo juda ho gaye<br/>

Shukar kar ……<br/>

Tu kahe tere waqt guzre na ghar pe<br/>
Guzar gaye raahon me hi jo<br/>
Door the apne ghar se<br/>

Kar shukrana kar shukrana<br/>
Bachhi teri jaan hai<br/>
Jinpe beeti vo hi jaane<br/>
Dekh unke haal le<br/>
Kar shukrana kar shukrana<br/>
Khuda tere saath hai<br/>
Ye pal bhi to beet jayega<br/>
Kuch palon ki to baat hai<br/>

Shukar kar bandeya …..<br/>
Bandeya tera dekh zamanaa<br/>
Kya se kya ho gya<br/>
Dekh ke tera haal khuda bhi<br/>
Zakhmi sa ho gaya<br/>

Kadar kare na roti di tu<br/>
Kaisa tera haal hai<br/>

Chain se soya hai tu fir bhi<br/>
Aaye tujhe chain nahi<br/>
Sadko pe jo kahde huye hai<br/>
Unka bhi soch kabhi<br/>

Kadar kare na roti di tu<br/>
Kaisa tera haal hai<br/>
Kadam kadam pe tadap rahe jo<br/> 
Vo bhi maa ke laal hai<br/>

Kadar kr bandeya pairi<br/>
Jutti e mili<br/>
Shukar kar bandeya tenu<br/>
Roti a mili<br/>
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
export default maitumhara;