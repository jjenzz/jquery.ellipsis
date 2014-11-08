jquery.ellipsis
==============

What is this?
-------------
`.ellipsis()` adds a class to the last 'allowed' line of text so you can apply `text-overflow: ellipsis;`. You 
can [view a demo][1] on [codepen.io][1].

[1]: http://codepen.io/jjenzz/full/liAfz


How do I use it?
----------------

Add the following CSS to your stylesheet:

    .ellip {
      display: block;
      height: 100%;
    }

    .ellip-line {
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      max-width: 100%;
    }

    .ellip,
    .ellip-line {
      position: relative;
      overflow: hidden;
    }

And then initialise the plugin:

    $('.foo').ellipsis();

You can customise with the following options:

    $('.foo').ellipsis({
      lines: 3,             // force ellipsis after a certain number of lines. Default is 'auto'
      ellipClass: 'ellip',  // class used for ellipsis wrapper and to namespace ellip line
      responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
    });

