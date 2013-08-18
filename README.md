jquery.ellipsis
==============

What is this?
-------------
`.ellipsis()` adds a class to the last 'allowed' line of text so you can apply text-overflow: ellipsis;


How do I use it?
----------------

Add the following CSS to your stylesheet:

    .ellip-wrap {
      display: block;
      height: 100%;
    }

    .ellip {
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      max-width: 100%;
    }

    .ellip,
    .ellip-wrap {
      position: relative;
      overflow: hidden;
    }

And then initialise the plugin:

    $('.foo').ellipsis();

You can customise with the following options:

    $('.foo').ellipsis({
      lines: 3,             // force ellipsis after a certain number of lines. Default is 'auto'
      ellipClass: 'ellip',  // class used for last line of text and namespacing wrapper class
      responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
    });

