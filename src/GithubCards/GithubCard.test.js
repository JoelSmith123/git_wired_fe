import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import GithubCard from './GithubCard.js'



describe('GithubCard', () => {
  let mockData
  beforeEach(() => {
    mockData = {
       'cardTitle':       'This is the title',
       'cardDescription': 'This is lots of long text from the body of my issue',
       'cardNumber':       13,
       'cardURL':         'https://github.com/JoelSmith123/git_wired_fe/issues/23',
       'cardStatus':      'Open',
     }  
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GithubCard card={ mockData } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('gets title from card', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)
    
    expect(wrapper.instance().getTitle()).toEqual(mockData.cardTitle)
  })

  it('gets description from card', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)

    expect(wrapper.instance().getDescription()).toEqual(mockData.cardDescription)    
  })

  it('renders card description element', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)

    expect(wrapper.instance().renderDescription()).toEqual(<div className="CardDescription">{mockData.cardDescription}</div>)
  })

  it('gets card url from card', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)
    
    expect(wrapper.instance().getCardURL()).toEqual(mockData.cardURL)        
  })

  it('gets card number from card', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)
    
    expect(wrapper.instance().getNumber()).toEqual(mockData.cardNumber)
  })

  it('renders card number element', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)

    expect(wrapper.instance().renderNumber()).toEqual(<div className="CardNumber"><a href={wrapper.instance().getCardURL()}>#{wrapper.instance().getNumber()}</a></div>)
  })

  it('gets card status from card', () => {
    const wrapper = shallow(<GithubCard card={ mockData }/>)
    
    expect(wrapper.instance().getStatus()).toEqual(mockData.cardStatus)
  })

});
