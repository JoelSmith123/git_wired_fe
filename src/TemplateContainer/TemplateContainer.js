import React, { Component } from 'react';
import CardPageTemplate from '../Templates/CardPageTemplate.js';
import BlogPageTemplate from '../Templates/BlogPageTemplate.js';
import BlogPostTemplate from '../Templates/BlogPostTemplate.js';
import './TemplateContainer.css';

export default class TemplateContainer extends Component {
  constructor() {
    super()
  }

  renderCurrentTemplate = (template) => {
    switch(template) {
      case 'card-page-template':
        return <CardPageTemplate />
        break;
      case 'blog-page-template':
        return <BlogPageTemplate />
        break;
      case 'blog-post-template':
        return <BlogPostTemplate />
        break;
      default:
        return <h2>Please select a template type from the Recent Projects dropdown menu</h2>
    }
  }

  render() {
    return (
      <div className='TemplateContainer'>
        {
          this.renderCurrentTemplate(this.props.currentTemplate)
        }
      </div>
    )
  }
}