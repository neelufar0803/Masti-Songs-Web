import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import DilS from '../videos/dil.mp4';
import Dil from '../images/dil.jpg';
import DilA from '../audios/dilA.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class dil extends React.Component{
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
                <h2>#𝐃𝐢𝐥 𝐁𝐞𝐜𝐡𝐚𝐫𝐚 𝐓𝐢𝐭𝐥𝐞 𝐓𝐫𝐚𝐜𝐤</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={DilS} poster={Dil} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Dil Bechara – Title Track | Sushant Singh Rajput | Sanjana Sanghi | A.R. Rahman | Mukesh Chhabra
               <br/> Dil Bechara the movie is an adaptation of John Green’s popular novel, The Fault In Our Stars.

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
                 <AudioPlayer  src={DilA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      Song : Dil Bechara <br/>
                      Movie : Dil Bechara 
                      Director : Mukesh Chhabra<br/>
                      Actors : Sushant Singh Rajput, Sanjana Sanghi<br/>
                      Choreographer : Farah Khan <br/>
                      Song Composed, Produced and Arranged : A R Rahman <br/>
                      Singer : A R Rahman <br/>
                      Lyrics : Amitabh Bhattacharya<br/>  
                      Music Supervisor : Hriday Gattani,  Hiral Viradia<br/> 
                      Additional Vocals : Poorvi Koutish, Hriday Gattani<br/> 
                      Guitars : Keba Jeremiah <br/>
                      A Fox Star Studios Production
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                        Dil Bechara, Friendzone Ka Maara<br/>
                        Dil Bechara, Friendzone Ka Maara<br/>
                        Friendzone Ka Maara<br/>
                        Koi Toh Bata De Kya Karoon<br/>
                        Koi Bata De Kya Karoon<br/>
                        Dil Bechara, Friendzone Ka Maara<br/>
                        L Mein Joda O V E<br/>
                        Maine Toh Love Love Love Hi Kiya<br/>
                        Usne Joda I K E<br/>
                        Mere Ko Like Like Like Hi Kiya<br/>
                        Dil Bechara, Friendzone Ka Maara<br/>
                        O Baby, Yaad Hain Mujhe<br/>
                        Tera Birthday Day Day<br/>
                        Tera Birthday Day Day Day Day<br/>
                        Tu Har Saal Mera Birthday Bhool Bhool Bhool Jaaye<br/>
                        Roz Tere Call Ki Main Raah Dekhu<br/>
                        Tu SMS Bhi Na Kare<br/>
                        Tu Mujhe Miss Bhi Na KAre<br/>
                        Kyun Mujhe Miss Bhi Na KAre<br/>
                        Kyun…<br/>
                        Dil Bechara, Friendzone Ka Maara<br/>
                        Dil Bechara, Friendzone Ka Maara<br/>
                      </div>
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
export default dil;