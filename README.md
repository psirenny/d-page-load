Derby Page Load
===============

A [Derby JS](http://derbyjs.com) component to indicate page loads.
It can be used to display a progress bar, spinner, etc. while a route waits to be rendered.

Installation
------------

$ npm install d-page-load --save

Usage
-----

Create a view:

    <index: element="page-load">
      {{if loading}}
      <i class="spinner"></i> Loading…
      {{/}}

Associate the view with the component:

    app.use('page-load', require('d-page-load'));

Use the view:

    <Body:>
      <page-load></page-load>
