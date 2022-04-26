import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css"


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
      <h1>Hi I am a Programmer</h1>
      <p>
        I am John David Vidad, currently an undergraduate of UP-Diliman. I mainly focus on Mobile/Desktop App Development with simple database, but 
        I am learning Game Dev and WebDev.
      </p>
    </div>
    <div
      data-sal="slide-left"
      data-sal-delay="200"
      data-sal-easing="ease-in"
      data-sal-repeat
      class="info"
    ><h1>These are the Languages I am Profound At</h1>
    <p>C,C++,C#, Java, JavaScript<br/>Python, Assembly, .Net,</p>
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
