import React from 'react';
import '../../css/section.css';
import banner from '../../img/banner.png';
import type from "../../img/type.png";
import movie from "../../img/movie.png";
import Shop from "./shop";

class Section extends React.Component{
	
	render(){
		return(<section>
                <div className="banner">
                    <div>
                      <img src={banner}/ >
                    </div>
                </div>
               
                <div className="sort">
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                <figure>
                    <img src={type}/>
                    <figcaption>蜂鸟配送</figcaption>
                </figure>
                </div>
              
                <div className="yule-box">
                    <div className="yule">
                        <div className="yule-left">
                            <b>电影</b>
                            <span>抢10元</span>
                        </div> 
                        <div className="yule-reght">
                            <img src={movie}/>
                        </div>
                    </div>
                    <div className="yule">
                        <div className="yule-left">
                            <b>电影</b>
                            <span>抢10元</span>
                        </div> 
                        <div className="yule-reght">
                            <img src={movie}/>
                        </div>
                    </div>
                    <div className="yule">
                        <div className="yule-left">
                            <b>电影</b>
                            <span>抢10元</span>
                        </div> 
                        <div className="yule-reght">
                            <img src={movie}/>
                        </div>
                    </div>
                </div>
                <h1 className="tuijian">
                 —— 推荐商家  ——
                </h1>
                <hr/>
                <Shop/>
                <Shop/>
                <Shop/>
                <Shop/>
        </section>      
		)
	}
}

export default Section;

