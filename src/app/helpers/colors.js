/* ========================================
 * CORS Planner - colors assign
 *
 * assign a color
 *
 * Author: Wang Zhuochun
 * Last Edit: 07/Sep/2012 10:24 PM
 * ========================================
 * <License>
 * ======================================== */

define(function(require, exports) {

    "use strict";
    /*jshint jquery:true, laxcomma:true, maxerr:50*/

    // colors http://147colors.com/ 
    // TODO: convert to HEX code
    var colors = [
        "midnightblue"
      , "royalblue"
      , "orangered"
      , "forestgreen"
      , "saddlebrown"
      , "deeppink"
      , "dodgerblue"
      , "dimgray"
      , "goldenrod"
      , "indigo"
      , "maroon"
      , "navy"
      , "purple"
      , "darkslateblue"
      , "olive"
      , "steelblue"
      , "darkorange"
      , "green"
      , "mediumvioletred"
      , "teal"
      , "seagreen"
    ]
    , index = 0
    , length = colors.length;

    exports.get = function() {
        index = (index + 1) % length;
        return colors[index];
    };

    exports.length = function() { return length; };
    exports.used = function() { return index; };
    exports.reset = function() { index = 0; };
});
