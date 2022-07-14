import React, { useEffect, useState } from 'react'
import './style/Viewer.css';
import thePDF from './invoice.pdf';

export default function Viewer() {
 

    return (
    <div className='viewPDF'>
         {/* <iframe id='frameId' className='viewPDF' src={thePDF} title="title"></iframe> */}
         <div>
              
              <img width="250" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eWUNo8cm8uT7QykIfFSlrubNw5WPVLQfOjRahOnTYsPg-8H_JofaPHqj04msG8W5Eg8&usqp=CAU"/>
              <br></br>
              <h1>Invoice</h1>
              <br></br>
              <div>
                <h3>Sold By:</h3>
                <p>Appario Retail Private Ltd 
                  *Building 2 ( Wh 2), <br></br>Plot no. 12/P2 (IT Sector),<br></br>
                  Hitech, Defence and Aerospace Park, <br></br>Devanahalli 
                  Bengaluru, Karnataka, 562149 
                </p>
              <br></br>
                <h3>Invoice Number :</h3>
                <p>BLR8-584265</p>
              <br></br>
                <h3>Shipping Address:</h3>
                <p>solomon mithra<br></br>
                    Flat No 25, Annabelle Manor 2, Bejai<br></br>
                    MANGALURU, KARNATAKA, 575004 
                </p>
              <br></br>
                <h3>Total Amount :</h3>
                <p> ₹1,299.00</p>
              <br></br>
                
              
              </div>
         </div>
    </div>
    
  )
}
