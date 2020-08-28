import React, { Component } from 'react'
import '../styles/Colleges.css'

export default class Colleges extends Component {
    render() {
        let famous_nearest_places = this.props.college.famous_nearest_places;
        let n = famous_nearest_places.search(',');
        let offertext = this.props.college.offertext;
        return (
            <div className="Colleges">
                <div className="college-top">
                    <div className="promoted"><span>PROMOTED</span></div>
                    <div className="rating">
                        <div className="rating-num"><span>{this.props.college.rating}</span>/5</div>
                        <div className="rating-remarks">{this.props.college.rating_remarks}</div>
                    </div>
                    <div className="tags">
                        <span>{this.props.college.tags[0]}</span>
                        <span>{this.props.college.tags[1]}</span>
                    </div>
                    <div className="ranking">#{this.props.college.ranking}</div>
                </div>


                <div className="college-desc"> 
                    <div className="college-desc-left">
                        <div >
                            <span className="college_name">{this.props.college.college_name}</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <div className="nearest_place">
                            <span>{this.props.college.nearest_place[0]} </span>
                            <span> | {this.props.college.nearest_place[1]}</span>
                        </div>
                        <div className="famous_nearest_places">
                            <span className="greeny-blue">93% Match : </span>
                            <span className="greyish-brown"> {famous_nearest_places.substr(0,6)} </span>
                            <span className="light-grey"> {famous_nearest_places.substr(6,n - 5)} </span>  
                            <span className="greyish-brown"> {famous_nearest_places.substr(n+1,6)} </span> 
                            <span className="light-grey"> {famous_nearest_places.substr(n+7)} </span> 
                        </div>
                        <div className="offertext">
                            <span className="greyish-brown"> {offertext.substr(0,7)}</span>
                            <span className="greeny-blue-2">{offertext.substr(7,5)}</span>
                            <span className="greyish-brown"> {offertext.substr(12,15)} </span>
                            <span className="greeny-blue-2"> {offertext.substr(26,5)} </span>
                            <span className= "greyish-brown"> {offertext.substr(31,20)} </span>
                            <span className="water-blue"> {offertext.substr(51)} </span>
                        </div>   
                    </div>
                    
                    <div className="college-desc-right">
                        <div className="original_fees">
                            <span className="greyish-brown"><span>&#8377;</span> {this.props.college.original_fees}</span> 
                            <div className="discount">
                                <span>{this.props.college.discount}</span>
                            </div>
                        </div>
                        <div className="discounted_fees"><span>&#8377;</span> {this.props.college.discounted_fees}</div>
                        <div className="fees_cycle">{this.props.college.fees_cycle}</div>

                        <div className="amenties">
                            <span>{this.props.college.amenties[0]}  . </span>
                            <span>{this.props.college.amenties[1]}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
