import React from 'react'
import styles from "../components/Footer.module.css"
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/esm/Button';

export default function Footer() {
  return (
    <div className={styles.footer} style={{display:"flex", padding:"20px",backgroundColor:"#F875AA",gap: "20px"}}>
      
      
      <div style={{
        display:"flex",
        height:"100px",
        width:"600px",
        backgroundColor:"#FDEDED",
        borderRadius:"4px",
        justifyContent:"center",
        alignItems:"center",
        gap:"20px"
      }}>
        <Button style={{backgroundColor:"#F875AA",border:"0px"}}>
          <Nav.Link href="/"><h5>HOME</h5></Nav.Link>
        </Button>

        <Button style={{backgroundColor:"#F875AA",border:"0px"}}>
          <Nav.Link href="/categories"><h5>CATEGORIES</h5></Nav.Link>
        </Button>

        <Button style={{backgroundColor:"#F875AA",border:"0px"}}>
          <Nav.Link href="/login"><h5>LOGIN</h5></Nav.Link>
        </Button>

        <Button style={{backgroundColor:"#F875AA",border:"0px"}}>
          <Nav.Link href="/cart"><h5>CART</h5></Nav.Link>
        </Button>
      </div>

      {/* RIGHT FOOTER WITH SOCIAL ICONS */}
      <div style={{
        height:"100px",
        width:"600px",
        backgroundColor:"#FDEDED",
        borderRadius:"4px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}>

        <p style={{margin:0, fontWeight:"bold"}}>© 2025 MegaMart — All Rights Reserved</p>

        
      </div>

    </div>
  )
}
