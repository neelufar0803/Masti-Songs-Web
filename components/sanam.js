import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import SanamS from '../videos/sanam.mp4';
import Sanam from '../images/sanam.jpg';
import SanamA from '../audios/sanam.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';


class sanam extends React.Component{
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
                <h2>#πΊππππ π»πππ π²ππππ πΊπππ</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={SanamS} poster={Sanam} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Sanam Teri Kasam Title Song | Official Video | Harshvardhan, Mawra | Himesh Reshammiya, Ankit Tiwari
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
                 <AudioPlayer  src={SanamA} />
             </div><br/>
                  <p>
                      <h2 id="info">π°πππ:</h2><br/>
                      <div className="info1">
                      β« Song: Sanam Teri Kasam<br/>
                      β« Singers: Ankit Tiwari and Palak Muchhal <br/>
                      β« Music: Himesh Reshammiya<br/>
                      β« Lyrics: Sameer Anjaan<br/>
                      β« Mixed and Mastered by: Salman Shaikh at HR Musik Studio<br/>
                      β« Cast: Harshvardhan Rane, Mawra Hocane<br/>
                      β« Produced By: Deepak Mukut<br/>
                      β« Directed By: Radhika Rao and Vinay Sapru<br/>
                      β« Co-Producer: MeenuDakalia<br/>
                      β« Associate Producer: Kaleem Khan / Sunil Kumar<br/>
                      β« Written By: Radhika Rao and Vinay Sapru<br/>
                      </div><br/>
                      <h2 id="info">π³πππππ:</h2><br/>
                      <div class="info1">                   
                      Betahasha dil ne<br/>
Tujhko hi chaaha hai<br/>
Har duaa mein maine<br/>
Tujhko hi maanga hai<br/>
Tera jaana jaise koi baddua<br/>
Tera jaana jaise koi baddua<br/>
Door jaaoge jo tum<br/>
Mar jaayenge hum<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam..<br/>
Tumhe dekhte hi aankhen ho jaati namm<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam..<br/>
Huaa ye kya hashar mera<br/>
Judaa huaa sabar mera<br/>
Main tere bin ek lamha<br/>
Kyun kabhi naa jiya<br/>
Raat bhar ashqo ne tujhko pukara hai<br/>
Har dua main maine tujhko hi maanga hai<br/>
Tera jaana jaise koi baddua<br/>
Door jaaoge jo tum<br/>
Mar jaayenge hum<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam..<br/>
Tumhe dekhte hi aankhen ho jaati nam<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam..<br/>
Nasha tera dil ko lagaa<br/>
Dena nahi mujhko dagaa<br/>
Main teri aadat ka maara<br/>
Hai kya meri khataa<br/>
Tere bin naamumkin<br/>
Apna guzaara hai<br/>
Har duaa mein maine<br/>
Tujhko hi maanga hai<br/>
Tera jaana jaise koi baddua<br/>
Door jaaoge jo tum<br/>
Mar jaayenge hum<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam..<br/>
Tumhe dekhte hi aakhen ho jaati nam<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam o..<br/>
Sanam teri kasam..<br/>

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
export default sanam;