import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TemplateContainer from './TemplateContainer.js'
import CardPageTemplate from '../Templates/CardPageTemplate.js';
import BlogPageTemplate from '../Templates/BlogPageTemplate.js';
import BlogPostTemplate from '../Templates/BlogPostTemplate.js';

describe('TemplateContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TemplateContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<TemplateContainer />)
    expect(wrapper).toMatchSnapshot()
  })    

  it('updatesChildrenState', () => {
    const mockCardIds = [10, 9, 8]
    const wrapper = shallow(<TemplateContainer cardIds={mockCardIds}/>)
    
    expect(wrapper.instance().updateChildrenState()).toEqual(mockCardIds)
  })

  it('renders card page template', () => {
    const wrapper = shallow(<TemplateContainer />)
    
    expect(wrapper.instance().renderCurrentTemplate('card-page-template')).toEqual(<CardPageTemplate />)
  })

  it('renders blog page template', () => {
    const wrapper = shallow(<TemplateContainer />)
    
    expect(wrapper.instance().renderCurrentTemplate('blog-page-template')).toEqual(<BlogPageTemplate />)
  })

  xit('renders the right template', () => {
    // TO DO - TEST ME
  })


});
