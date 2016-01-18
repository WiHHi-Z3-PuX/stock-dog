# stock-dog

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
# stock-dog


some things changed in angular-strap and angular since the Professional
AngularJS book was written, I made a few small changes, now the stocks
are added and displayed properly

in watchlist controller newStock.company is converted to a regular JSON object
this prevents angular from adding it as an angular $resource, which breaks ng-repeat in the stock-table template
in addstock-modal ng-options is replaced with bs-options