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
                    <h1>πΉππππππππ» ππππβ</h1>
                       </center>        
                    </nav>
             </div>
             <div className="divider"></div><br/>
             <div class="top">
                <h2>#π»πππ ππππ π΄πππ πΊπππ</h2><br/>
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
                 <h2 id="ap1">π¨ππππ ππππ :</h2>
                 <div className="audio">   
                 <AudioPlayer  src={TuheA} />
             </div><br/>
                  <p>
                      <h2 id="info">π°πππ:</h2><br/>
                      <div className="info1">
                      β« Song:  Tu Hi Yaar Mera<br/>
                      β« Singers: Rochak feat. Arijit Singh and Neha Kakkar<br/>
                      β« Music: Rochak Kohli<br/>
                      β« Lyrics: Kumaar<br/>
                      β« Music produced, Mixed and Mastered by: Aditya Dev<br/>
                      β« Music Supervisors: Raj Chanana, Shivam Chanana, Vivin Sachdeva, Sonal Chawala<br/>
                      β« Accounts and operations support: Sonu Srivastava<br/>
                      β« Arijit Vocals recorded by: Anirban Sinha Chaudhury<br/>
                      β« Team Arijit: Ashish Biswas, Subhadeep Chakraborty, Sukanto Singha<br/>
                      β« Team Neha: Kushal Sampat<br/>
                      β« Music Label - T-Series <br/>

                      </div><br/>
                      <h2 id="info">π³πππππ:</h2><br/>
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