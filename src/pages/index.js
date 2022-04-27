import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <center>
    <div
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-easing="ease-in"
      data-sal-repeat
      class="info"
    >
      
      <p style={{maxWidth:'70%',paddingLeft:'1em'}}>
      <h1>Hi!I am a Programmer</h1><br/>
        I am John David Vidad, currently an undergraduate of UP-Diliman. I mainly focus on Mobile/Desktop App Development with simple database, but 
        I am learning Game Development Basics and Frameworks that are commonly used in Web Development.
        </p>
        <StaticImage
      src="../images/id.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      class="tilt"
      alt="Profile Picture"
    />
    </div>
    <div
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-easing="ease-in"
      data-sal-repeat
      class="info"
    ><section><h1>Languages I know</h1>
    <section>
      <a href="https://visualstudio.microsoft.com/vs/features/cplusplus/"><StaticImage
      src="../images/c.png"
      width={50}
      quality={95}
      formats={["auto", "webp", "avif"]}
      class="tiltimg"
      alt="C Language"
      style={{padding:'1em',margin:'1em'}}
    /></a>
    <a href="https://visualstudio.microsoft.com/vs/features/cplusplus/">
    <StaticImage
      src="../images/cplus.png"
      width={50}
      quality={95}
      formats={["auto", "webp", "avif"]}
      class="tiltimg"
      alt="c++ Language"
      style={{padding:'1em',margin:'1em'}}
    /></a>
    
  
  <a href="https://webassembly.org/">
  <StaticImage
    src="../images/assembly.png"
    width={50}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt="assembly Language"
    class='tiltimg'
    style={{padding:'1em',margin:'1em'}}
  />
  </a>
  
  
  </section> </section>
    </div>
    <div
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-repeat
      data-sal-easing="ease-in"
      class="info"
    >
      <section>
      <h1>This is what I use for DataBases</h1>
      <p>mySQL, SQLite, GraphQL</p>
      </section>
    </div>
    <div
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-repeat
      data-sal-easing="ease-in"
      class="info"
    ><section style={{width:'100%'}}><h1>What I use per project</h1><br/>
    <section style={{display:'flex',width:'100%'}}>
      
        <section class='flexchild'>
        <a href="https://www.python.org/">
          <StaticImage
            src="../images/python.png"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="python Language"
            class='tiltimg'
            style={{padding:'1em',margin:'1em'}}
          />
          </a><br/>
          <a href="https://www.javascript.com/"><StaticImage
              src="../images/js.png"
              width={45}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="js Language"
              class='tiltimg'
              style={{padding:'1em',margin:'1em'}}
            /></a>
          <StaticImage
              src="../images/html.png"
              width={45}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="js Language"
              class='tiltimg'
              style={{padding:'1em',margin:'1em'}}
            />
            <StaticImage
              src="../images/css.png"
              width={45}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="js Language"
              class='tiltimg'
              style={{padding:'1em',margin:'1em'}}
            />
          <br/>Web Development
        </section>
        <section class='flexchild'>
        <a href="https://www.java.com/en/">
          <StaticImage
            src="../images/j.png"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="java Language"
            class='tiltimg'
            style={{padding:'1em',margin:'1em'}}
          /></a>
          <a href="https://dotnet.microsoft.com/en-us/">
            <StaticImage
              src="../images/dnet.png"
              width={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="dotnet Language"
              class='tiltimg'
              style={{padding:'1em',margin:'1em'}}
            /></a>
          <br/>Desktop App Development
        </section>
        <section class='flexchild'>
        <a href="https://dotnet.microsoft.com/en-us/">
          <StaticImage
            src="../images/dnet.png"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="dotnet Language"
            class='tiltimg'
            style={{padding:'1em',margin:'1em'}}
          /></a>
          <br/>Mobile App Development
        </section>
        
      </section></section></div>
    </center>
  </Layout>
)

export default IndexPage
