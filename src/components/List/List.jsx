import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class List extends Component {
  static propTypes = {
    goods: PropTypes.arrayOf(
      PropTypes.exact({ title: PropTypes.string.isRequired })
    ),
  };
  static defaultProps = { goods: [] };
  state = { goods: this.props.goods, key: '' };

  handleClick = key => {
    // console.log(key);
    this.setState({ key });
  };

  render() {
    const { goods, key } = this.state;
    return (
      <ul>
        {goods.map(el => {
          return (
            <li
              key={el.title}
              onClick={() => this.handleClick(el.title)}
              style={
                key === el.title
                  ? { fontWeight: 'bold' }
                  : { fontWeight: 'normal' }
              }
            >
              {el.title}
            </li>
          );
        })}
      </ul>
    );
  }
}
