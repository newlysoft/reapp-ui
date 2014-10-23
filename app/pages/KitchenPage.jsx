var React = require('react/addons');
var { Link } = require('react-router');
var View = require('../components/ui/views/View');
var ViewMain = require('../components/ui/views/ViewMain');
var ViewLeft = require('../components/ui/views/ViewLeft');
var List = require('../components/ui/components/List');
var ListTitle = require('../components/ui/components/ListTitle');
var TitleBar = require('../components/ui/components/TitleBar');
var Transition = React.addons.CSSTransitionGroup;

var KitchenPage = React.createClass({
  title: 'Kitchen Sink',

  render() {
    var KitchenTitle = <TitleBar>{this.title}</TitleBar>;

    var Handler = this.props.activeRouteHandler();
    if (Handler) Handler = <div className="drawer-parent">{Handler}</div>;

    return (
      <View id="KitchenSink">
        <ViewLeft id="kitchenSinkLeftView" title={KitchenTitle}>
          <ListTitle>Kitchen Sink</ListTitle>
          <List>
            <Link to="modals">Modals</Link>
            <Link to="popover">Popovers</Link>
            <Link to="tabs">Tabs</Link>
            <Link to="sidePanels">Side Panels</Link>
            <Link to="listView">List Views</Link>
          </List>
        </ViewLeft>

        <ViewMain>
          <Transition transitionName="drawer">
            {Handler}
          </Transition>
        </ViewMain>
      </View>
    );
  }
});

module.exports = KitchenPage;