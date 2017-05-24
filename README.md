# select-typeahead

A configurable, super simple and extremely fast typeahead solution for `<select>` elements.

Features:

* Configurable
* Extremely fast
* Normalizes strings so you don't have to query with special characters (ex: `strøm` is the same as `strom`)
* Works with form tab-ing
* Written for IE9+
* Vanilla JS

Demo: https://andersevenrud.github.io/projects/select-typeahead/examples/index.html

## Options:

```
{String|Node}   el                        The <SELECT> to use
{Object}        [opts]                    Options
{Object}        [opts.data]               A key/value paired object instead of select data
{Function}      [opts.fnDataFilter]       A function that filters the dropdown values
{Function}      [opts.fnInputFilter]      A function that filters the input value
{Function}      [opts.fnMatch]            A function that performs A->B matching
{Number}        [opts.keyTimeout=100]     A timeout for key presses
{String}        [opts.buttonLabel='>']    A label for the button
{Array|String}  [opts.className]          A className to give the instance (or array)
{Boolean}       [opts.calcWidth=true]     Set the width of the widget
{Boolean}       [opts.autoSelect=false]   Automatically select the "best" result
```

## Usage:


```javascript
// Create with vanilla

SelectTypeahead(el, {});

// Create with jQuery

$('el').SelectTypeahead({});

// Methods:

.setSelectedIndex(idx)

.setSelectedValue(val)

.getSelectedIndex()

.getSelectedValue()

.focus()

.blur()

.destroy()

// Options:

fnDataFilter: function(str) {
  return str;
}
fnInputFilter: function(str) {
  return str;
}
fnMatch: function(input, entry) {
  return entry.indexOf(input) !== -1;
}
```

## Installation

Just use the included files. You can also get this package via [npm](https://www.npmjs.com/package/select-typeahead).

## Changelog

* **0.6.7** - Fixed usage with string values/keys
* **0.6.6** - Updated locale scrubbing
* **0.6.5** - Cleanup of scoring in most significant behaviour
* **0.6.4** - Changed behaviour in most significant selector
* **0.6.3** - Better matching of multiple words
* **0.6.2** - Prevent raising error on backspace when input is empty
* **0.6.1** - Better autoSelect
* **0.6.0** - Added blocking of autocomplete etc.
* **0.5.9** - Added autoSelect parameter
* **0.5.8** - Better scrollIntoView behaviour
* **0.5.7** - Fixed filter not working when no initial value is selected
* **0.5.6** - Close dropdown when open and click button
* **0.5.5** - Updated removeLocale() and CSS
* **0.5.4** - Bugfixes
* **0.5.3** - Bugfixes
* **0.5.2** - Added module export support
* **0.5.1** - Fixed normalized text showing up in input
* **0.5.0** - Initial release
