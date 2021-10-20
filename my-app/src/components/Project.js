import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs.js';
import data from '../data/PortfolioData.json'
import { Icon, Icons } from './icons.js';
import '../styles/SlideShow.css';
import '../styles/Project.css';

 class Project extends React.Component {
   state = {
     project_name: null,
     project_title: "",
     project_title: "",
     project_url: "",
     project_client: "",
     project_description: "",
     project_year: 0,
     project_images: [],
     project_category: [],
     project_dev_tools: [],
     project_design_tools: []
   }
  componentDidMount() {
    let project_path = this.props.match.params.project_path;
    let [project] = data.filter(({name}) => name === project_path);
    let project_pictures = [];
    for (let i = 1; i <= 3; i++) {
      project_pictures[i] = (
        <picture>
          <source media="(min-width: 960px)" srcSet={require('../img/pics/'+project_path+"_m-"+i+'.png')}/>
          <source media="(min-width: 1200px)" srcSet={require('../img/pics/'+project_path+"_l-"+i+'.png')}/>
          <img src={require('../img/pics/'+project_path+"_s-"+i+'.png')} alt={project.title +" image "+i}/>
      </picture>
      );
    }

    this.setState({
      project_name: project_path,
      project_title: project.title,
      project_url: project.url,
      project_client: project.client,
      project_description: project.blurb,
      project_year: project.year,
      project_images: project_pictures,
      project_category: project.category,
      project_dev_tools: project.dev,
      project_design_tools: project.des,
    })

  }

   render()
   {
     return (
       <section className="uk-container uk-animation-fade">
       <BreadCrumbs PageName="Project" ProjectName={this.state.project_title} />
       <h1 className="txt-colour-blue" >{this.state.project_title}</h1>
       <p className="project-client txt-colour-green">Client: {this.state.project_client}</p>

       <div className="uk-position-relative uk-visible-toggle uk-card uk-card-default" tabIndex="-1" uk-slideshow="ratio: false">
       <div className="slide-header uk-flex uk-flex-between uk-flex-nowrap">
         <div className="year"><p className="txt-colour-cyan uk-text-middle">{this.state.project_year}</p></div>
         <div className="category"> <Icons listPrefix={"project-"} icons={this.state.project_category} listKey={"project-" + this.state.project_name} /></div>
       </div>

           <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
               <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true; min-height: 580">
                   <li>{this.state.project_images[1]}</li>
                   <li>{this.state.project_images[2]}</li>
                   <li>{this.state.project_images[3]}</li>
               </ul>
               <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
               <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>
           </div>

           <ul className="slide-footer uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
       </div>
       <div className="project-description">
         <p> {this.state.project_description} </p>
         <p >
          <Link exact to="/portfolio" className="uk-button button-navy-primary uk-button-small" >Check out other Projects</Link>
          <a className="uk-button button-navy-primary uk-button-small" href={this.state.project_url} target="_blank">See the live Version</a>
         </p>

      </div>
        <div className="project-infos uk-child-width-expand@s" uk-grid="">
          <div>
              <div className="uk-card uk-card-default uk-card-small uk-card-body">
              <h5>Type of project:</h5>
              <div className="uk-flex-center uk-flex-center@s"><Icons listPrefix={""}  icons={this.state.project_category} listKey={this.state.project_name + "-Iconstype-"}/></div>
              </div>
          </div>
          <div>
              <div className="uk-card uk-card-default uk-card-small uk-card-body">
              <h5>Development technology:</h5>
              <div className="uk-flex-center uk-flex-center@s"><Icons listPrefix={""}  icons={this.state.project_dev_tools} listKey={this.state.project_name + "-IconsDev-"}/></div>
              </div>
          </div>
          <div>
              <div className="uk-card uk-card-default uk-card-small uk-card-body">
              <h5>Design Software used:</h5>
              <div className="uk-flex-center uk-flex-center@s"><Icons listPrefix={""}  icons={this.state.project_design_tools} listKey={this.state.project_name + "-IconsDesign-"}/></div>
              </div>
          </div>
      </div>

       </section>
     )
   }
 }

 export default Project
