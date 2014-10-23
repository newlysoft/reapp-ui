var React = require('react');
var DrawerView = require('../../components/ui/views/DrawerView');

var ListViewPage = React.createClass({
  render() {
    return (
      <DrawerView id="ListViewPage" title="ListViewPage">
        ListViewPage View
      </DrawerView>
    );
  }
});

module.exports = ListViewPage;