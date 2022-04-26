import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
const ProjectPage= ()=> {
  return(
  <Layout>
      <Seo title="Projects" />
      <div>
        <h1>List of Project</h1>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>)
    

}
export default ProjectPage;