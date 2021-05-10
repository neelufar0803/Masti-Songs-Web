import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import TuhiS from '../videos/tuhiyaar.mp4';
import Tuhi from '../images/tu hi.jpg';
import TuheA from '../audios/tuhi.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class tuheyaar extends React.Component{
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
                <h2>#𝑻𝒖𝒉𝒊 𝒀𝒂𝒂𝒓 𝑴𝒆𝒓𝒂 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={TuhiS} poster={Tuhi} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Tu Hi Yaar Mera | Pati Patni Aur Woh | Kartik A,Bhumi P,Ananya P| Rochak,Arijit S,Neha K
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
                 <AudioPlayer  src={TuheA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song:  Tu Hi Yaar Mera<br/>
                      ♫ Singers: Rochak feat. Arijit Singh and Neha Kakkar<br/>
                      ♫ Music: Rochak Kohli<br/>
                      ♫ Lyrics: Kumaar<br/>
                      ♫ Music produced, Mixed and Mastered by: Aditya Dev<br/>
                      ♫ Music Supervisors: Raj Chanana, Shivam Chanana, Vivin Sachdeva, Sonal Chawala<br/>
                      ♫ Accounts and operations support: Sonu Srivastava<br/>
                      ♫ Arijit Vocals recorded by: Anirban Sinha Chaudhury<br/>
                      ♫ Team Arijit: Ashish Biswas, Subhadeep Chakraborty, Sukanto Singha<br/>
                      ♫ Team Neha: Kushal Sampat<br/>
                      ♫ Music Label - T-Series <br/>

                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">                   
                      Akhiyan meri pooch rahi hain<br/>
Dil ko mere chain nahi hai<br/>
Kithe ladaiyan ve, tu akhiyan kithe ladayiyan ve<br/>
Kaise tujhko mai bataun<br/>
raahen teri takdi jaaun<br/>
Neendan churaiyan ve<br/>
Tu meriyan neendan churaiyan ve<br/>
Dhadkan ye kehti hai<br/>
Dil tere bin dhadke na<br/>
Ik tu hi yaar mera<br/>
Mujhko kya duniya se lena<br/>
Dhadkan ye kehti hai<br/>
Dil tere bin dhadke na<br/>
Ik tu hi yaar mera<br/>
Mujhko kya duniya se lena<br/>
Tujhme raat meri tujhme din mere<br/>
Lamha ik jiyun na mai to bin tere<br/>
Hai tere saath safar<br/>
Jaana mujhe hai kidar<br/>
Ki beet jaaye tujhme ye umar<br/>
Ik pal ki bhi ab to<br/>
Doori na mujhjo dena<br/>
Ik tu hi yaar mera mujhko kya duniya se lena<br/>
Ik tu hi yaar mera mujhko kya duniya se lena<br/>
Hissa hai tu ab to mere<br/>
Dil ke jazbaaton ka<br/>
Tu lafz hai thera hua<br/>
Ab meri baaton ka<br/>
Hissa hai tu ab to mere<br/>
Dil ke jazbaaton ka<br/>
Tu lafz hai thera hua<br/>
Bas meri baaton ka<br/>
Aankhen ye kehti hain<br/>
Tu saamne mere rehna<br/>
Ik tu hi yaar mera<br/>
Mujhko kya duniya se lena<br/>
Ik tu hi yaar mera<br/>
Mujhko kya duniya se lena<br/>
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
export default tuheyaar;