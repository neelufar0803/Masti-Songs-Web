import React from 'react';
import Dil from '../images/dil.jpg';
import Tu from '../images/tu hi.jpg';
import Khairiyat from '../images/khairiyat.jpg';
import Yaad  from '../images/yaad piya.jpg';
import Illegal from '../images/illegal.jpg';
import Pal from '../images/pal pal.jpg';
import Paas from '../images/paas.jpg';
import Garmi from '../images/garmi.jpg';
import Tum from '../images/tum he aana.jpg';
import Pachtaoge from '../images/pachtaoge.jpg';
import Bekhyali from '../images/bekhayali.jpg';
import Sanam from '../images/sanam.jpg';
import Tujhe from '../images/tujhe.jpg';
import Hawa from '../images/hawa.jpg';
import Shayad from '../images/shayad.jpg';
import Duniya from '../images/duniya.jpg';
import Chogada from '../images/chogada.jpg';
import Dil1 from '../images/dil1.jpg';
import Humnava from '../images/humnava.jpg';
import Khairiyat1 from '../images/khairiyat1.jpg';
import Tu1 from '../images/tu hi1.jpg';
import Yaad1 from '../images/yaad piya1.jpg';


import Shukar from '../images/shukar.jpg';
import Taregin from '../images/taare.jpg';
import Nazm from '../images/nazm.jpg';
import Meriaashiqui from '../images/meriaashiqui.jpg';
import Filhall from '../images/filhall.jpg';
import Mitti from '../images/mitti.jpg';

import Fb from '../images/fb.jpg';
import Whats from '../images/whatsapp.jpg';
import Tweet from '../images/tweet.jpg';
import Arijit from '../images/arijit.jpg';
import Atif from '../images/atif.jpg';
import Darshan from '../images/darshan.jpg';
import Jubin from '../images/jubin.jpg';
import Shreya from '../images/shreya.jpg';
import './bollywood.css';
// import {Router} from 'react-router-dom';
// import {BrowserRouter , Route, Switch} from 'react-router-dom';
import {Link,withRouter} from 'react-router-dom';
// import Tum from './components/tumheaana.js';

class bollywood extends React.Component{
   render(){
	
	return(
	
         <div class="back">
             <div className="a1">
                <nav>
                    <center>
                    <h1 >???????????????????????????????????? ???????????????????</h1>
                       </center>        
                    </nav>
             </div>
             <div className="divider"></div><br/>
             <div class="top">
                <h2>???????????????????????????????? ????????????</h2><br/>
             </div>
            <div className="container">
              <div className="slider">
                 <div className="slides">
                    <img src={Dil} alt=''></img>
                    <i class="fa fa-pause" aria-hidden="true"></i>
                 </div>
                 <div className="slides">
                 <img src={Tu} alt=''></img>
                 <i class="fa fa-pause" aria-hidden="true"></i>
                 </div>
                 <div className="slides">
                 <img src={Khairiyat} alt=''></img>
                 <i class="fa fa-pause" aria-hidden="true"></i>
                 </div>
                 <div className="slides">
                 <img src={Yaad} alt=''></img>
                 <i class="fa fa-pause" aria-hidden="true"></i>
                 </div>
                 <div className="slides">
                    <img src={Illegal} alt=''></img>
                    <i class="fa fa-pause" aria-hidden="true"></i>
                 </div>
                 <div className="slides">
                    <img src={Paas} alt=''></img>
                    <i class="fa fa-pause" aria-hidden="true"></i>
                 </div>
              </div>
              <br/><br/><br/>
              <div className="div1"></div><br/><br/>
              <div>
                 <h1 id="c">Latest Hits</h1><br/>
                  <div className="responsive">
                     <div className="gallery">
                        <img src={Pal} alt='' width="300" height="200" />
                         <div className="des"><a href="/pal.js">???????????? ???????????? ???????? ???????????????? ????????????????</a></div>
                     </div>
                  </div>
                  <div className="responsive">
                     <div className="gallery">
                        <img src={Tum} alt='' width="300" height="200"/>
                     <div className="des"><Link to='../components/tumheaana.js'>???????????????????? ???????????????? ????????????????</Link></div>
                     </div>
                  </div>
                  {/* <BrowserRouter>
                  <Switch>
                     <Route path='/tumheaana' component={Tum}>
                     <div className="responsive">
                     <div className="gallery">
                        <img src={Tum} alt='' width="300" height="200"/>
                     <div className="des">???????????????????? ???????????????? ????????????????</div>
                     </div>
                  </div>
                     </Route>
                  </Switch>
                  </BrowserRouter> */}


                  <div className="responsive">
                     <div className="gallery">
                        <img src={Pachtaoge} alt='' width="300" height="200"/>
                         <div className="des">???????????????????????????????????? ????????????????</div>
                     </div>
                  </div>
                  <div className="responsive">
                     <div className="gallery">
                        <img src={Garmi} alt='' width="300" height="200"/>
                         <div className="des">???????????????????? ????????????????</div>
                     </div>
                  </div>
              </div>
              <br/>
              <div id="i2">
              <div className="responsive">
                     <div className="gallery">
                        <img src={Hawa} alt='' width="300" height="200"/>
                         <div className="des">???????????????? ???????????????????? ????????????????</div>
                     </div>
                  </div>
              <div className="responsive">
                     <div className="gallery">
                        <img src={Tujhe} alt='' width="300" height="200"/>
                         <div className="des">???????????????????? ???????????????????? ???????????????????????? ???????????????? ????????????????</div>
                     </div>
                  </div>
                  <div className="responsive">
                     <div className="gallery">
                        <img src={Bekhyali} alt='' width="300" height="200"/>
                         <div className="des">???????????????????????????????????? ????????????????</div>
                     </div>
                  </div>
              <div className="responsive">
                     <div className="gallery">
                        <img src={Sanam} alt='' width="300" height="200"/>
                         <div className="des">???????????????????? ???????????????? ???????????????????? ????????????????</div>
                     </div>
                 </div>
              </div>
              <div id="i3">
              <div className="responsive">
                     <div className="gallery">
                        <img src={Duniya} alt='' width="300" height="200"/>
                         <div className="des">???????????????????????? ????????????????</div>
                     </div>
                  </div>
              <div className="responsive">
                     <div className="gallery">
                        <img src={Shayad} alt='' width="300" height="200"/>
                         <div className="des">???????????????????????? ????????????????</div>
                     </div>
                  </div>
                  <div className="responsive">
                     <div className="gallery">
                        <img src={Chogada} alt='' width="300" height="200"/>
                         <div className="des">???????????????????????????? ????????????????</div>
                     </div>
                  </div>
              <div className="responsive">
                     <div className="gallery">
                        <img src={Dil1} alt='' width="300" height="200"/>
                         <div className="des">???????????? ???????????????????????????? ???????????????????? ????????????????</div>
                     </div>
                 </div>
              </div>
              <div id="i4">
              <div className="responsive">
                     <div className="gallery">
                        <img src={Humnava} alt='' width="300" height="200"/>
                         <div className="des">???????????????????????????? ???????????????? ????????????????</div>
                     </div>
                  </div>
              <div className="responsive">
                     <div className="gallery">
                        <img src={Khairiyat1} alt='' width="300" height="200"/>
                         <div className="des">???????????????????????????????????? ????????????????</div>
                     </div>
                  </div>
                  <div className="responsive">
                     <div className="gallery">
                        <img src={Tu1} alt='' width="300" height="200"/>
                         <div className="des">???????????????? ???????????????? ???????????????? ????????????????</div>
                     </div>
                  </div>
              <div className="responsive">
                     <div className="gallery">
                        <img src={Yaad1} alt='' width="300" height="200"/>
                         <div className="des">???????????????? ???????????????? ???????? ????????????????</div>
                     </div>
                 </div>
              </div>
        </div>
           <br/><br/><br/>

             
           <div className="div1"></div><br/>
           <div>
           <h1 id="c">Recommended Songs</h1>
           </div><br/><br/>
           <div className="img-area">
              <div className="single-img">
                   
                   <img src={Shukar} alt=''/>
                   <img src={Nazm} alt=''/>
                   <img src={Meriaashiqui} alt=''/>
                   <img src={Taregin} alt=''/>
                   <img src={Filhall} alt=''/>
                   <img src={Mitti} alt=''/>
                   
              </div>
           </div>
             
           <div className="div1"></div><br/><br/>
           <div>
           <h1 id="c">Popular Artists</h1>
           </div><br/><br/>
           <div id="slide">
                <figure>
                <img src={Arijit} alt='' />
                <img src={Darshan} alt='' />
                <img src={Shreya} alt='' />
                <img src={Atif} alt='' />
                <img src={Jubin} alt='' />
                </figure>
             </div><br/><br/><br/>
        
           <div>
           <h1 id="c">Ratings</h1><br/>
              <div className="rat">
                      <div className="stars">
                           <form action="">
                               <input type="radio" className="star star-5" id="star-5" name="star" />
                               
                               <label for="star-5" className="star star-5"></label>

                               <input type="radio" className="star star-4" id="star-4" name="star" />
                               <label for="star-4" className="star star-4"></label>

                               <input type="radio" className="star star-3" id="star-3" name="star" />
                               <label for="star-3" className="star star-3"></label>

                               <input type="radio" className="star star-2" id="star-2" name="star" />
                               <label for="star-2" className="star star-2"></label>

                               <input type="radio" className="star star-1" id="star-1" name="star" />
                               <label for="star-1" className="star star-1"></label>

                           </form>
                      </div>
              </div>
           </div><br/>

        <div className="divider"></div>
             <div className="a2">
                <nav>
                    <h1>About us:</h1>  
                    <h1 id="c2">Share:</h1>
                    <div className="icons">
                   <ul>
                       <li><img src={Fb} alt='' /> </li>
                       <li><img src={Whats} alt=''/> </li>
                       <li><img src={Tweet} alt=''/> </li>
                   </ul>
                 </div>  
                    </nav>
             </div>
     </div>
		)
}
}
export default withRouter (bollywood);
