import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from "./styles.css";
import Slider from "react-slick";


export default class Foto extends Component {

 
    render() {
        const {img} = this.props; 
        const {link} = this.props;

 
        return(
        <div className="d-flex">
            
        <img src={img} ></img>
        <h3>shop the look</h3>
       </div>
        
        
        );
        }
    } 


