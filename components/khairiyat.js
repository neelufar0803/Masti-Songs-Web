import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import KhairiyatS from '../videos/khairiyat.mp4';
import Khairiyat from '../images/khairiyat.jpg';
import KhairiyatA from '../audios/Khairiyat.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';


class khairiyat extends React.Component{
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
                <h2>#π²ππππππππ πΊπππ</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={KhairiyatS} poster={Khairiyat} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Khairiyat | Chhichhore | Nitesh Tiwari | Arijit Singh | Sushant, Shraddha | Pritam
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
                 <AudioPlayer  src={KhairiyatA} />
             </div><br/>
                  <p>
                      <h2 id="info">π°πππ:</h2><br/>
                      <div className="info1">
                      β«  Song - KHAIRIYAT <br/>
                      β« Singer β Arijit Singh<br/>
                      β« Music: Pritam<br/>
                      β« Lyrics - Amitabh Bhattacharya<br/>
                      β« Music Production and Sound Design - DJ Phukan and Sunny M.R.<br/>
                      β« Music Programmed and Arranged β Meghdeep Bose and Sunny M.R.<br/>
                      β« Mix and Master - ShadabRayeen <br/>
                      β« Violin, Viola, Clarinets and Flutes β Shirish Malhotra<br/>
                      </div><br/>
                      <h2 id="info">π³πππππ:</h2><br/>
                      <div class="info1">                   
                      Khairiyat pucho, kabhi to kaifiyat pucho<br/>
Tumhare bin deewane ka kya haal hai<br/>
Dil mera dekho, na meri haisiyat pucho<br/>
Tere bin ek din jaise sau saal hai<br/>
Anjaam hai tay mera Hona tumhe hai mera<br/>
Jitni bhi hon dooriyan filhaal hain<br/>
Yeh dooriyaan filhaal hain Ho...<br/>
Khairiyat pucho, kabhi to kaifiyat pucho<br/>
Tumhare bin deewane ka kya haal hai<br/>
Dil mera dekho, na meri haisiyat pucho<br/>
Tere bin ek din jaise sau saal hai<br/>
Tumhari tasveer ke sahaare mausam kayi guzaare<br/>
Mausami na samjho par ishq ko humaare<br/>
Nazron ke saamne main aata nahi tumhare<br/>
Magar rehte ho har pal manzar me tum humare<br/>
Agar ishq se hai mila Phir dard se kya gila<br/>
Iss dard mein zindagi khush haal hai<br/>
Yeh dooriyaan filhaal hain O...<br/>
Khairiyat pucho kabhi to kaifiyat pucho<br/>
Tumhare bin deewane ka kya haal hai<br/>
Dil mera dekho, na meri haisiyat pucho<br/>
Tere bin ek din jaise sau saal hai<br/>
Anjaam hai tay mera Hona tumhe hai mera<br/>
Jitni bhi hon dooriyan filhaal hain<br/>
Yeh dooriyaan filhaal hain.<br/>
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
export default khairiyat;