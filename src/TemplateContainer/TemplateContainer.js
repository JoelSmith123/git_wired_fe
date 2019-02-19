import React, { Component } from 'react';
import CardPageTemplate from '../Templates/CardPageTemplate.js';
import BlogPageTemplate from '../Templates/BlogPageTemplate.js';
import BlogPostTemplate from '../Templates/BlogPostTemplate.js';
import './TemplateContainer.css';

export default class TemplateContainer extends Component {
  constructor() {
    super()
  }

  updateChildrenState = () => {
    return this.props.cardIds
  }

  renderCurrentTemplate = (template) => {
    switch(template) {
      case 'card-page-template':
        return <CardPageTemplate cardIds={this.updateChildrenState()}/>
      case 'blog-page-template':
        return <BlogPageTemplate cardIds={this.updateChildrenState()}/>
      case 'blog-post-template':
        return <BlogPostTemplate cardIds={this.updateChildrenState()}/>
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