import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import TumheaanaS from '../videos/tumheaana.mp4';
import Tumhe from '../images/tum he aana.jpg';
import TumheA from '../audios/tumheaana.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class tumheaana extends React.Component{
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
                <h2>#𝑻𝒖𝒎 𝑯𝒊 𝑨𝒂𝒏𝒂 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={TumheaanaS} poster={Tumhe} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Tum Hi Aana Full Video | Marjaavaan | Riteish D, Sidharth M, Tara S | Jubin N | Payal Dev Kunaal V
               <br/> The film is starring Riteish Deshmukh, Sidharth Malhotra, Tara Sutaria and Rakul Preet Singh.
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
                 <AudioPlayer  src={TumheA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      Song - Tum Hi Aana <br/>
                      Singer - Jubin Nautiyal <br/>
                      Music - Payal Dev<br/>
                      Lyric - Kunaal Vermaa<br/>
                      Music Producer - Aditya Dev<br/>
                      Mixed and Mastered by - Aditya Dev<br/>
                      Guitars - Krishna Pradhan<br/>
                      Flute - Tejas Vinchurkar<br/>
                      Sarangi - Dilshad Khan<br/>
                      Pianica - Aditya Dev<br/>
                      All Instruments Recorded at AMV studio by Rahul Sharma<br/>
                      Vocals Recorded at Aditya Dev’s Studio<br/>
                      Recording assistant - Sameer<br/>
                      Aditya Dev’s Assitant - Gaurav Singh<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Iska matlab mohabbat<br/>
                      Matlab zindagi Zoya!<br/>
                      Tere jaane ka gham<br/>
                      Aur na aane ka gham<br/>
                      Phir zamaane ka gham kya karein<br/>
                      Raah dekhe nazar<br/>
                      Raat bhar jaag kar<br/>
                      Par teri toh khabar na mile<br/>
                      Bohat aayi gayi yaadein<br/>
                      Magar is baar tum hi aana<br/>
                      Irade phir se jaane ke<br/>
                      N ahi lana, tum hi aana<br/>
                      Koyi to raah wo hogi<br/>
                      Jo mere ghar ko aati hai<br/>
                      Karo peecha sadaon ka<br/>
                      Suno kya kehna chaahti hai<br/>
                      Tum aaoge mujhe milne<br/>
                      Khabar yeh bhi tumhi lana<br/>
                      Bohat aayi gayi yaadein<br/>
                      Magar is baar tum hi aana<br/>
                      Marjaavaan, marjaavaan<br/>
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
export default tumheaana;