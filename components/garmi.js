import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';
import AudioPlayer from 'react-h5-audio-player';
import GarmiS from '../videos/garmi.mp4';
import Garmi from '../images/garmi.jpg';
import GarmiA from '../audios/Garmi.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class garmi extends React.Component{
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
                <h2>#𝑮𝒂𝒓𝒎𝒊 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={GarmiS} poster={Garmi} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Garmi Song | Street Dancer 3D | Varun D, Nora F, Shraddha K, Badshah, Neha K | Remo D | T-Series
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
                 <AudioPlayer  src={GarmiA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song:  Garmi<br/>
♫ Singers: Badshah, Neha Kakkar<br/>
♫ Music: Badshah <br/>
♫ Lyrics: Badshah<br/>
♫ Music Produced, Mixed and Mastered by: Aditya Dev<br/>
♫ Vocals Recorded at Aditya Dev Music Studio<br/>
♫ Choreography : Kruti Mahesh and Rahul Shetty<br/>
♫ Music Label: T-Series  <br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Aree Yaar<br/>
Koi AC Chala Do Yaar<br/>
Sahi hai, Sahi hai<br/>
Baaki Saari Fake Lage<br/>
Dekh ke tujko brake lage<br/>
Door door se theek hai rani<br/>
Paas aao toh sekh lage<br/>
Paara itna high hua ke<br/>
Thermometer tooth gaya<br/>
Saiyaan ji tapak tapak ke<br/>
Haay pasina chhuth gaya<br/>
Kaisi gunda gardi hai<br/>
Bandi tu bedardi hai<br/>
Sardi main bhi kardi hai<br/>
Kardi hai (x2)<br/>
Haaye garmi(x4)<br/>
December main kardi summer<br/>
Tu lambergini main hu hummer<br/>
Waise bhi koi jaldi nahi mujko<br/>
Bachpan se hi hu latecomer<br/>
Million mein tu baby ek<br/>
Hilti kamar jaise snake<br/>
Teri sundarta pe likh doon baby<br/>
Do phut lamba lekh<br/>
Kar doon sau baat ki ek<br/>
Legi mujko tu matha tek<br/>
Garmi kehte hai kisko<br/>
Tu mujko gale laga ke dekh<br/>
Haaye garmi<br/>
Aise na tu dekh pare<br/>
Dil kyu mera brake kare<br/>
Laal dress main rani bilkul<br/>
Red velvet ka cake lage<br/>
Tere jaise jaane kitno ke<br/>
Dil chaknachoor huye<br/>
Mere piche marke aashiq<br/>
Kitne hi mashoor huye<br/>
Kaisi gunda gardi hai<br/>
Sardi main bhi kardi hai<br/>
Kardi hai (x2)<br/>
Haaye garmi(x4)<br/>
Nache jo tu sandal mein<br/>
Karna pao handle main<br/>
Saans sa dekho mera<br/>
Rukhne laga<br/>
Dekha jo haseena ke<br/>
Sinne pe pasina toh<br/>
Toh pasina tera bhi<br/>
Dekho Chutne laga<br/>
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
export default garmi;