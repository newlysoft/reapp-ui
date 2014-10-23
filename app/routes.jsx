var { Routes, Route, DefaultRoute } = require('react-router');
var Articles = require('./pages/ArticlesPage');
var Article = require('./pages/Articles/ArticlePage');
var User = require('./pages/UserPage');
var ImageRoll = require('./pages/ImageRollPage');
var Viewer = require('./pages/ViewerPage');
var ViewerRebound = require('./pages/ViewerReboundPage');
var Kitchen = require('./pages/KitchenPage');
var Modals = require('./pages/Kitchen/ModalsPage');
var Popover = require('./pages/Kitchen/PopoverPage');
var Tabs = require('./pages/Kitchen/TabsPage');
var SidePanels = require('./pages/Kitchen/SidePanelsPage');
var ListView = require('./pages/Kitchen/ListViewPage');

module.exports = {
  init(App) {
    return (
      <Routes location="history">
        <Route name="app" path="/" handler={App}>
          <DefaultRoute name="home" handler={Articles} />

          <Route name="hn" path="/" handler={Articles}>
            <Route name="article" path="/article/:id" handler={Article} addHandlerKey={true} />
            <Route name="user" path="/user/:id" handler={User} addHandlerKey={true} />
          </Route>

          <Route name="kitchen" handler={Kitchen}>
            <Route name="modals" handler={Modals} />
            <Route name="popover" handler={Popover} />
            <Route name="tabs" handler={Tabs} />
            <Route name="sidePanels" handler={SidePanels} />
            <Route name="listView" handler={ListView} />
          </Route>

          <Route name="viewer" handler={Viewer} />
          <Route name="viewerRebound" handler={ViewerRebound} />
          <Route name="imageRoll" handler={ImageRoll} />
        </Route>
      </Routes>
    );
  }
};