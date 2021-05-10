import React from 'react';
import '../components/video.css';
import AudioPlayer from 'react-h5-audio-player';
import VideoPlayer from 'react-video-js-player';
import DuniyaS from '../videos/duniya.mp4';
import Duniya from '../images/duniya.jpg';
import DuniyaA from '../audios/Duniya.mp3';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class duniya extends React.Component{
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
                <h2>#𝑫𝒖𝒏𝒊𝒚𝒂 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={DuniyaS} poster={Duniya} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">Luka Chuppi: Duniyaa Video Song | Kartik Aaryan Kriti Sanon | Akhil | Dhvani B | Abhijit V Kunaal V
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
                 <AudioPlayer  src={DuniyaA} />
             </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song :  Duniyaa <br/>
                      ♫Vocals : Akhil and Dhvani Bhanushali<br/>
                      ♫Additional Vocals : Bhrigu Parashar<br/>
                      ♫Lyrics : Kunaal Vermaa <br/>
                      ♫Music Composed and Produced By : Abhijit Vaghani <br/>
                      ♫Co-Produced By : Harshit Jain <br/>
                      ♫Mix And Mastered By : Aftab Khan (Headroom Studio) <br/>
                      ♫Mix Assistant : Vatsal Chevli<br/>
                      ♫vSong Recorded At Tseries Recording Studio By Surajit Ghosh Majumdar<br/>
                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">                   
                      Bulaave Tujhe Yaar Aaj Meri Galiyaan<br/>
Basau Tere Sang Main Alag Duniya<br/>

Bulaave Tujhe Yaar Aaj Meri Galiyaan<br/>
Basau Tere Sang Main Alag Duniyaa<br/>
Na Aaye Kabhi Dono Mein Jara Bhi Faasle<br/>
Bas Ek Tu Ho, Ek Main Hu Aur Koi Na<br/>

Hai Mera Sab Kuch Tera Tu Samajh Le<br/>
Tu Chahe Mere Haq Ki Zameen Rakh Le<br/>
Tu Saason Pe Bhi Naam Tera Likh De<br/>
Main Jiyu Jab Jab Tera Dil Dhadke<br/>

Tujhse Mera Ye Jee Nahi Bharta<br/>
Kuch Bhi Nahi Asar Ab Karta<br/>
Meri Raah Tujhi Se Meri Chaah Tujhi Se<br/>
Mujhe Bas Yahi Reh Jana<br/>
Lagi Hai Teri Aadatein Mujhe Jab Se<br/>
Hai Tere Bin Pal Vi Baras Lagte<br/>
Bulawe Tujhe Yaar Aaj Meri Galiyaan<br/>
Basau Tere Sang Main Alag Duniya<br/>
Jo Hove Tu Udas Mujhe Dekh Hasde<br/>
Tu Chahe Mere Haq Ki Zameen Rakh Le<br/>
Tu Saason Pe Bhi Naam Tera Likh De<br/>
Main Jiyu Jab Jab Tera Dil Dhadke<br/>
Tujhse Mili To Shikha Maine Hasna<br/>
Aaya Mujhe Safar Mein Thaharna<br/>
Main To Bhool Gayi Duniya Ka Pata<br/>
Yaara Jab Se Tujhe Hai Jaana<br/>

Hai Tu Hi Dil Jaan Hai Meri Ab Se<br/>
Ve Zikar Tera Na Jaye Mere Lab Se<br/>
Bulawe Tujhe Yaar Aaj Meri Galiyaan<br/>
Basau Tere Sang Main Alag Duniyaa<br/>
Jo Howe Tu Udas Mujhe Dekh Hasde<br/>
Tu Chahe Mere Haq Ki Zameen Rakh Le<br/>
Tu Sanso Pe Bhi Nam Tera Likh De<br/>
Main Jiyu Jab Jab Tera Dil Dhadke<br/>
Pyar Di Raawa Utte Yaar Tu Le Aya<br/>
Mainu Jeene Da Matlab Aaj Samajh Aaya<br/>
Paraya Mainu Kar Naa Na Tu Sohniya<br/>
Channa Main To Turr Jana<br/>
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
export default duniya;