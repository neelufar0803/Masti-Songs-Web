import React from 'react';
import '../components/video.css';
import VideoPlayer from 'react-video-js-player';

import FilhallS from '../videos/filhall.mp4';
import Filhall from '../images/filhall.jpg';
import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';

class filhall extends React.Component{
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
                <h2>#𝘍𝘪𝘭𝘩𝘢𝘭𝘭 𝑺𝒐𝒏𝒈</h2><br/>
             </div>  
             <div class="video">
             <VideoPlayer class="song" src={FilhallS} poster={Filhall} width="720" height="320" playbackRates={[0.5,1,1.5,2]}/>
             </div>
             <div class="information">
                <h2 className="h2">FILHALL | Akshay Kumar Ft Nupur Sanon | BPraak | Jaani | Arvindr Khaira | Ammy Virk | Official Video
                 </h2><br/>
                 <div className="icons">
                   <ul>
                       <li><img src={Fb} alt='' /> </li>
                       <li><img src={Whats} alt=''/> </li>
                       <li><img src={Tweet} alt=''/> </li>
                   </ul>
                 </div><br/>
                  <p>
                      <h2 id="info">𝑰𝒏𝒇𝒐:</h2><br/>
                      <div className="info1">
                      ♫ Song:  Filhall<br/>
                      ♫ Singers – B Praak<br/>
                      ♫ Musicians – B Praak, Jaani<br/>
                      ♫ Lyricists – Jaani<br/>
                      ♫ Lebal - SP Music<br/>

                      </div><br/>
                      <h2 id="info">𝑳𝒚𝒓𝒊𝒄𝒔:</h2><br/>
                      <div class="info1">
                      Oh Kuch Aisa Kar Kamaal<br/> 
                      Ke Tera Ho Jaaun<br/> 
                      Ho Kuch Aisa Kar Kamaal<br/> 
                      Ke Tera Ho Jaun<br/>
                       Main Kisi Aur Ka Hoon Filhaal<br/> 
                     Main Kisi Aur Ka Hoon Filhal<br/>
                      Ke Tera Ho Jaaun<br/>
                      Main Kisi Aur Ka Hoon Filhall<br/>
                       Ke Tera Ho Jaun<br/>
                        Eh Gall Te Galat Ae<br/>
                         Jo Vi Kar Reya Jaani<br/>
                          Par Ehvi Dekh Tere Bin<br/>
                           Kinjh Mar Reya Jaani<br/>
                            O Mar Jaange Lai Sambhal<br/>
                             O Mar Jange Lai Sambhaal<br/>
                              Ke Tera Ho Jaoon<br/>
                               Mai Kisi Aur Ka Hu Filhal<br/>
                                Ke Tera Ho Jaoon<br/>
                                 Mainu Pata Ke Duniya Nu<br/>
                                  Eh Gawara Nai Ho Sakda<br/>
                                   Par Jhooth Kehnde Ne Sare<br/>
                                    Ke Pyar Dubara Nai Ho Sakda<br/>
                                    Par Jhooth Kende Ne Sare<br/>
                                     Ke Pyaar Dubara Nai Ho Sakda<br/>
                                      Tu Mainu Puch Na Koi Sawaal<br/>
                                       Chal Door Kite Mere Naal<br/>
                                        Ke Tera Ho Jaaun<br/>
                                         Main Kisee Aur Ka Hoon Filhaal<br/> 
                                         Ke Teraa Ho Jaaun (X2)<br/>
                                          Oh Kisi Aur Ka Hoon Filhaal<br/>
                                           Ke Tera Ho Jaaun, Hun Rona Main Pachtauna Main<br/>
                                     Ke Chann Nai Hoya Chakor Da<br/>
                                     Hun Tuvi Ae Kise Hor Di<br/>
                                      Main Vi Aan Kise Hor Da<br/>
                                       Hun Rona Main Pachtaona Main<br/>
                                        Ke Chann Nai Hoya Chakor Da<br/>
                                         Hun Tuvi Ae Kisay Hor Di<br/>
                                          Main Vi Aan Kisay Hor Da<br/>
                                           Mera Dil Karda Ae Sawal<br/>
                                            Teri Mohabbat Da Ki Haal<br/>
                                             Ke Tera Ho Jaun<br/>
                                              Main Kisi Aur Ka Hu<br/>
                                               Main Kisi Aur Ka Hu Filhal<br/>
                                                


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
export default filhall;