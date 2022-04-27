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
      data-sal="slide-left"
      data-sal-delay="200"
      data-sal-easing="ease-in"
      data-sal-repeat
      class="info"
    ><section><h1>These are the Languages I am Profound At</h1>
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
    <a href="https://www.javascript.com/"><StaticImage
    src="../images/js.png"
    width={50}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt="js Language"
    class='tiltimg'
    style={{padding:'1em',margin:'1em'}}
  /></a>
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
  </a>
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
  </section> </section>
    </div>
    <div
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-repeat
      data-sal-easing="ease-in"
      class="info"
    >
      <h1> I also am knowlegeable in the following things for databases</h1>
      <p>mySQL, SQLite, GraphQL</p>
    </div>
    <div
      data-sal="slide-right"
      data-sal-delay="200"
      data-sal-repeat
      data-sal-easing="ease-in"
      class="info"
    ><h1>I do the following</h1><p>WebDev (Gatsbyjs, Reactjs, Django)<br/> PC App Dev (.Net) <br/> Mobile App Dev(.net, React)</p></div>
    </center>
  </Layout>
)

export default IndexPage
