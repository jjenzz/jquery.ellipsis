/*!
 * jQuery.ellipsis
 * http://github.com/jjenzz/jquery.ellipsis
 * --------------------------------------------------------------------------
 * Copyright (c) 2013 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * adds a class to the last 'allowed' line of text so you can apply
 * text-overflow: ellipsis;
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(d){var c="ellipsis",b='<span style="white-space: nowrap;">',e={lines:"auto",ellipClass:"ellip",responsive:false};function a(h,q){var m=this,w=0,g=[],k,p,i,f,j,n,s;m.$cont=d(h);m.opts=d.extend({},e,q);function o(){m.text=m.$cont.text();m.opts.ellipLineClass=m.opts.ellipClass+"-line";m.$el=d('<span class="'+m.opts.ellipClass+'" />');m.$el.text(m.text);m.$cont.empty().append(m.$el);t()}function t(){if(typeof m.opts.lines==="number"&&m.opts.lines<2){m.$el.addClass(m.opts.ellipLineClass);return}n=m.$cont.height();if(m.opts.lines==="auto"&&m.$el.prop("scrollHeight")<=n){return}if(!k){return}s=d.trim(m.text).split(/\s+/);m.$el.html(b+s.join("</span> "+b)+"</span>");m.$el.find("span").each(k);if(p!=null){u(p)}}function u(x){s[x]='<span class="'+m.opts.ellipLineClass+'">'+s[x];s.push("</span>");m.$el.html(s.join(" "))}if(m.opts.lines==="auto"){var r=function(y,A){var x=d(A),z=x.position().top;j=j||x.height();if(z===f){g[w].push(x)}else{f=z;w+=1;g[w]=[x]}if(z+j>n){p=y-g[w-1].length;return false}};k=r}if(typeof m.opts.lines==="number"&&m.opts.lines>1){var l=function(y,A){var x=d(A),z=x.position().top;if(z!==f){f=z;w+=1}if(w===m.opts.lines){p=y;return false}};k=l}if(m.opts.responsive){var v=function(){g=[];w=0;f=null;p=null;m.$el.html(m.text);clearTimeout(i);i=setTimeout(t,100)};d(window).on("resize."+c,v)}o()}d.fn[c]=function(f){return this.each(function(){try{d(this).data(c,(new a(this,f)))}catch(g){if(window.console){console.error(c+": "+g)}}})}}));
