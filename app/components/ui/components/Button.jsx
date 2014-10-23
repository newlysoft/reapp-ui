var React = require('react');
var Icon = require('./Icon');

var Button = React.createClass({
  render() {
    var children;
    var color = this.props.color || '#307cff';
    var styles = {
      fontSize: '16px',
      background: 'none',
      border: 'none',
      paddingTop: 8,
      color: color,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 102,
      flexFlow: 'row',
      zoom: 1,
      lineHeight: 'normal',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      textAlign: 'center',
      cursor: 'pointer',
      '-webkit-user-drag': 'none',
      '-webkit-user-select': 'none'
    };

    var childStyle = {
      margin: 'auto'
    };

    if (this.props.children) {
      children = <span style={childStyle}>{this.props.children}</span>;
      styles.width = 100;
    }

    return this.transferPropsTo(
      <button style={styles} className={'button-' + this.props.type}>
        <Icon type={this.props.type} color={color} size="2x" />
        {children}
      </button>
    );
  }
});

module.exports = Button;