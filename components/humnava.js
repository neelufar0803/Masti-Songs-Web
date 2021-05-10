import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import HumnavaS from '../videos/humnava.mp4';
import Humnava from '../images/humnava.jpg';
import HumnavaA from '../audios/Humnava.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class humnava extends React.Component{
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
                <h2>#𝑯𝒖𝒎𝒏𝒂𝒗𝒂 𝑴𝒆𝒓𝒆 𝐒𝐨𝐧𝐠</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={HumnavaS} poster={Humnava} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Humnava Mere Song | Jubin Nautiyal | Manoj Muntashir | Rocky - Shiv | Bhushan Kumar
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
                 <AudioPlayer  src={HumnavaA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♪Song: Humnava Mere<br/>
                      ♪Singer  Jubin Nautiyal<br/>
                      ♪Music: Rocky - Shiv<br/>
                      ♪Lyrics: Manoj Muntashir<br/>
                      ♪Music Label: T-Series<br/>
                      ♪Song Producer: Aditya Dev <br/>
                      ♪Electric Guitar and Banjo: Appai Prachotosh Bhowmick<br/>
                      ♪Flute: TejasFlute: Tejas<br/>
                      ♪Recorded at Songbird Studios by Anish Gohil <br/>
                      ♪Mixed and Mastered: Eric Pillai<br/>
                      ♪Video Directed By: Ashish Panda<br/>
                      ♪Director of Photography: Sunita Radia<br/>
                      ♪Editor: Bunty Nagi<br/>
                      ♪Story Ideation: Ashish Panda and Rajesh Patel<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">             
Kal Raaste Me, Gham Mil Gaya Tha<br/>
Lag Ke Gale Main... Ro Diya...<br/>
Jo Sirf Mera, Thaa Sirf Meraa<br/>
Maine Usse Kyun Kho Diya...<br/>
Haan Wo Aankehin Jinhein Main, Choomta Tha Bewajah...<br/>
Pyaar Mere Liye Kyun, Unme Baaki Na Rahaa..<br/>
Humnawa Mere, Tu Hai Toh Meri Saansein Chalein,<br/>
Bata De Kaise Main Jiyunga Tere Bina,<br/>
Har Waqt Dil Ko Jo, Sataye, Aisi Kami Hai Tu...<br/>
Main Bhi Na Jaanoon Ye, Ki Itna, Kyun Laazimi Hai Tu...<br/>
Neendein Jaa Ke Na Lauti, Kitni Raatein Dhal Gayin<br/>
Itne Taare Gine Ki Ungliyaan Bhi Jal Gayin...<br/>
Humnawa Mere, Tu Hai Toh Meri Saansein Chalein,<br/>
Bata De Kaise Main Jiyunga Tere Bina,<br/>
Humnawa Mere, Tu Hai Toh Meri Saansein Chalein,<br/>
Bata De Kaise Main Jiyunga Tere Bina,<br/>
Tu Akhiri Aasnoo....O Yaara... Hai Akhiri Tu Gham...<br/>
Dil Ab Kahan Hai Jo.. Dobara.. De Dein Kisi Ko Hum...<br/>
Apni Shaamon Me Hissa, Phir Kisi Ko Na Diya...<br/>
Ishq Tere Bina Bhi Maine Tujh Se Hi Kiya....<br/>
Humnawa Mere, Tu Hai Toh Meri Saansein Chalein,<br/>
Bata De Kaise Main Jiyunga Tere Bina,<br/>
Faasle Na De, Ki Main Hoo Aasre Tere,<br/>
Bata De Kaise Main Jiyunga Tere Bina....!!!<br/>
Aazma Raha Mujhe Kyun, Aa Bhi Jaa Kahin Se Ab Tu Kaise Main Jiyunga Tere Bina...<br/>
Seene Me Jo Dhadkanein Hain, Tere Naam Pe Chale Hain, Kaise Main Jiyunga Tere Bina<br/>
Humnawa Mere, Tu Hai Toh Meri Saansein Chalein,<br/>
Bata De Kaise Main Jiyunga Tere Bina<br/>
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
export default humnava;