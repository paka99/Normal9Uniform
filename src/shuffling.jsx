import React from 'react'
import './shuffle.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class Shuffle extends React.Component {

    render() {
        let index = 0
        return (
            // <div className="uniformcard">
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            //     <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
            // </div>
            <Slider className="slider-wrapper">
                <div key={index++} className="slider-content">
                    <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
                </div>
                <div key={index++} className="slider-content">
                    <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
                </div>
                <div key={index++} className="slider-content">
                    <img src="https://d258y123k6w0j.cloudfront.net/goods//1522050158638l0[1].jpg" className="uniformcard2" />
                </div>
            </Slider>
        )
    }


}