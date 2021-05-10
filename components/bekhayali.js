import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import BekhayaliS from '../videos/bekhayali.mp4';
import Bekhayali from '../images/bekhayali.jpg';
import BekhayaliA from '../audios/Bekhayali.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class bekhayali extends React.Component{
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
                <h2>#𝑩𝒆𝒌𝒉𝒂𝒚𝒂𝒍𝒊 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={BekhayaliS} poster={Bekhayali} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Bekhayali Full Song | Kabir Singh | Shahid K,Kiara A|Sandeep Reddy Vanga | Sachet-Parampara | Irshad
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
                 <AudioPlayer  src={BekhayaliA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song: Bekhayali<br/>
                      ♫ Singer - Sachet Tandon<br/>
                      ♫Music Director - Sachet-Parampara<br/>
                      ♫Lyrics - Irshad Kamil<br/>
                      ♫Music Produced By - Kalyan Baruah and Sachet - Parampara<br/>
                      ♫Additional Music Production - Ramee<br/>
                      ♫Acoustic Guitars - Rhythm Shaw<br/>
                      ♫Electric Guitars - Kalyan Baruah<br/>
                      ♫Additional Guitars : Narendra Varma<br/>
                      ♫Acoustic Guitars recorded at Sound Forest Studios<br/>
                      ♫Mixed and Mastered by Aftab Khan at HeadRoom Studios<br/>
                      ♫Mix Assistant - Vatsal Chevli<br/>
                      ♫Starring–Shahid Kapoor and Kiara Advani<br/>
                      ♫Director – Sandeep Reddy Vanga<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">                   
                      Bekhayali Mein Bhi<br/>
Tera Hi Khayal Aaye<br/>
Kyun Bichadna Hai Jaruri<br/>
Ye Sawal Aaye<br/>

Teri Nazdeekiyo<br/>
Ki Khushi Behisab Thi<br/>
Hisse Mein Fansle<br/>
Bhi Tere Bemisal Aaye<br/>

Main Jo Tumse Door Hu<br/>
Kyun Door Main Rahu<br/>
Tera Gurur Hu Uun<br/>
Aa Tu Fansla Mita<br/>
Tu Khaawb Sa Mila<br/>
Kyun Khaawb Tod Du<br/>

Bekhayali Mein Bhi<br/>
Tera Hi Khayal Aaye<br/>
Kyun Judai De Gaya Tu<br/>
Ye Sawal Aaye<br/>

Thoda Sa Main Kafa Ho Gaya<br/>
Apne Aap Se<br/>
Thoda Sa Tujhpe Bhi<br/>
Bewajah Hi Malaal Aaye<br/>

Hai Ye Tadpan Hai Ye Uljhan<br/>
Kaise Jee Lu Bina Tere<br/>
Mere Ab Sabse Hai Ann-Ban<br/>
Bante Kyun Ye Khuda Mere Ulll<br/>

Ye Jo Log-Baag Hai<br/>
Jungle Ki Aag Hai<br/>
Kyun Aag Mein Jalu<br/>
Ye Nakaam Pyar Mein<br/>
Khush Hain Haar Mein<br/>
Inn Jaisa Kyun Banu<br/>

Raatein Dengi Bata<br/>
Neendo Mein Teri Hi Baat Hai<br/>
Bhoolun Kaise Tujhe<br/>
Tu Toh Khayalo Mein Sath Hai<br/>

Bekhayali Mein Bhi<br/>
Tera Hi Khayal Aaye<br/>
Kyun Bichadna Hai Jaruri<br/>
Ye Sawal Aaye<br/>

Nazar Ke Aage, Har Ek Manjar<br/>
Ret Ki Tarha Bikhar Raha Hai<br/>
Dard Tumhara Badan Mein Mere<br/>
Zehar Ki Tarah Utar Raha Hai<br/>

Nazar Ke Aage, Har Ek Manjar<br/>
Ret Ki Tarha Bikhar Raha Hai<br/>
Dard Tumhara Badan Mein Mere<br/>
Zehar Ki Tarah Utar Raha Hai<br/>

Aa Jamaane Aajma Le Ruthta Nahi<br/>
Faanslo Se Haunsla Ye Tutt’ta Nahi<br/>
Na Hai Wo Bewafa Aur Na Main Hu Bewafa<br/>
Wo Meri Aadaton Ki Tarah Chhutata Nahi<br/>

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
export default bekhayali;