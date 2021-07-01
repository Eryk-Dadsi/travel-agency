import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';



describe('Component TripSummary', () => {
  const expectedTags = [];

  it('should generate links to correct address', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={expectedTags} />);
    const renderAddress = component.find('Link').prop('to');
    const expectedAddress = `/trip/${expectedId}`;
    expect(renderAddress).toEqual(expectedAddress);
  });

  it('image has correct src and alt props', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'image';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={expectedTags} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days amount', () => {
    const expectedName = 'abc';
    const expectedCost = '4000';
    const expectedDays = 5;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={expectedTags} />);
    expect(component.find('h3').props().children).toEqual(expectedName);
    expect(component.find('.details').childAt(1).props().children[1]).toEqual(expectedCost);
    expect(component.find('.details').childAt(0).props().children[0]).toEqual(expectedDays);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in correct order', () => {
    const tags = ['qwe', 'rty', 'uio'];
    const component = shallow(<TripSummary tags={tags} />);
    expect(component.find('.tags').childAt(0).props().children).toEqual(tags[0]);
  });


});