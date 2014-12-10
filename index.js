function Component () {}

Component.prototype.create = function (model) {
  this.routing = function () {
    model.set('loading', true);
  };

  this.app.once('destroyPage', this.routing);
};

Component.prototype.destroy = function () {
  this.app.removeListener('destroyPage', this.routing);
};

module.exports = Component;
