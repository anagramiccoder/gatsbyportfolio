import React from 'react'
import "./layout.css"
import styled from "styled-components"
import { Link } from 'gatsby'
const StyledLink=styled(Link)`
  display: block;
  color: var(--text);
  text-align: center;
  padding-top:0.3rem;
  text-decoration: none;
  &:hover {
    color: var(--hovertext);
  }
`
const Menu=()=>(
    <div style={{
        width:'60%',
    }}><ul style={{
        listStyle:'none',
        display:'flex',
        decoration:'block',
        justifyContent:'space-evenly',
        padding:'0'
    }}>
        <li><StyledLink to="/" class='btn'>Home</StyledLink></li>
        <li><StyledLink to="/page-2" class='btn'>Page 2</StyledLink></li>
        <li><StyledLink to="/projects" class='btn'>Projects</StyledLink></li>
    </ul>
    </div>
  )
export default Menu;