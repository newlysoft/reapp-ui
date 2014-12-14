var React = require('react');
var Component = require('component');
var ParallaxViewList = require('ui/views/ParallaxViewList');
var View = require('ui/views/View');
var ArticlesHome = require('./articles/ArticlesHome');

var { actions, helpers, mixins, stores } = Component;

require('./Articles.styl');

module.exports = Component({
  statics: {
    fetchData: params => (
      actions.articlesHotLoad() &&
      helpers.storePromise(ArticlesStore, data => !!data.size)
    )
  },

  mixins: [
    // provides: getViewListProps, getKeyedSubRoute
    mixins.routedViewListHandler({ depth: 2 }),
    mixins.listener(
      stores.ArticlesStore,
      actions.articlesHotLoadDone
    )
  ],

  render() {
    var { handle } = this.props;

    return (
      <ParallaxViewList
        {...this.getViewListProps()}
        noFakeTitleBar>
        <View>
          <ArticlesHome
            hotArticlesStore={stores.HotArticlesStore()}
            articlesStore={stores.ArticlesStore()}
            disable={this.numRoutes() > 2}
            handle={handle} />
        </View>

        {this.getKeyedSubRoute()}
      </ParallaxViewList>
    );
  }
});