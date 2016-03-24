var webpack          = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config           = require("../webpack/webpack.dev.config");

var webpackDevServer = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
});

webpackDevServer.listen(8080, "localhost", function (err) {
  if (err) throw err;
  console.log("Webpack Dev Server started at %d", 8080);
});
