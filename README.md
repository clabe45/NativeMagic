# NativeMagic
A javascript library aimed to work with native code.

## Magic
You can create a Magic DOM element using one of many ways:

    var div0 = c('div');  // creates a magic element with the tag name 'div'
    var div1 = c('<div id="welcome">hello world</div>');  // creates a magic element with tag name 'div'
    var div2 = c(document.createElement('div'));  // creates magic element from the vanilla 'div' element
    
    div0.appendTo$(document.body);
    div1.style$('width', 500)
        .appendTo$(document.body); // chaining is enabled
    div2.innerHTML$('hello world')
        .addClass$('blue-sky')
        .on$('click', function(e) {alert('hello world');})
        .appendTo$(document.body);
    
## Native
It's called native because all the objects are just `DOMElement`s with some extended methods.

    console.log(div0.tagName);      // "DIV"
    console.log(div1.style.width);  // "welcome"
    console.log(div2.className);    // "blue-sky"
    
    div0.className = 'great';
    div1.style.backgroundColor = 'MediumSeaGreen';
    div2.className += ';cool';
    
    
## Animation
CSS-animating can be done through the `fade$()` method:

Syntax: `fade$(css[, callback[, duration[, rate]]])`

    div0.css('width', 500).css('height', 500);
    div0.fade$( {'width': 0, 'height': 0, 'backgroundColor': '#000000'} );  // colors need to be in RGB or hexadecimal format
    
The default values for `duration` and `rate` are `400` and `2`, respectively.
