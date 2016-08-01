webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)

	__webpack_require__(3)
	__webpack_require__(5)


	angular   = __webpack_require__(6)
	sanitize  = __webpack_require__(8)

	vendors = [
	  {
	  id :'fontCss',
	  url : 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
	}, {
	  id : 'bootCss',
	  url : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
	}]

	loader = (arr) =>{
	  arr.forEach((url)=>{
	    if (!document.getElementById(url.id))
	    {
	        var head  = document.getElementsByTagName('head')[0];
	        var link  = document.createElement('link');
	        link.id   = url.id;
	        link.rel  = 'stylesheet';
	        link.type = 'text/css';
	        link.href = url.url;
	        link.media = 'all';
	        head.appendChild(link);
	    }
	  })
	}
	  loader(vendors)

	angular.module('qaPlugin',['ngSanitize'])
	__webpack_require__(10)
	__webpack_require__(11)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Start Bootstrap - SB Admin 2 (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n\nbody {\n    background-color: #f8f8f8;\n}\n\n#wrapper {\n    width: 100%;\n}\n\n#page-wrapper {\n    padding: 0 15px;\n    min-height: 568px;\n    background-color: #fff;\n}\n\n@media(min-width:768px) {\n    #page-wrapper {\n        position: inherit;\n        margin: 0 0 0 250px;\n        padding: 0 30px;\n        border-left: 1px solid #e7e7e7;\n    }\n}\n\n.navbar-top-links {\n    margin-right: 0;\n}\n\n.navbar-top-links li {\n    display: inline-block;\n}\n\n.navbar-top-links li:last-child {\n    margin-right: 15px;\n}\n\n.navbar-top-links li a {\n    padding: 15px;\n    min-height: 50px;\n}\n\n.navbar-top-links .dropdown-menu li {\n    display: block;\n}\n\n.navbar-top-links .dropdown-menu li:last-child {\n    margin-right: 0;\n}\n\n.navbar-top-links .dropdown-menu li a {\n    padding: 3px 20px;\n    min-height: 0;\n}\n\n.navbar-top-links .dropdown-menu li a div {\n    white-space: normal;\n}\n\n.navbar-top-links .dropdown-messages,\n.navbar-top-links .dropdown-tasks,\n.navbar-top-links .dropdown-alerts {\n    width: 310px;\n    min-width: 0;\n}\n\n.navbar-top-links .dropdown-messages {\n    margin-left: 5px;\n}\n\n.navbar-top-links .dropdown-tasks {\n    margin-left: -59px;\n}\n\n.navbar-top-links .dropdown-alerts {\n    margin-left: -123px;\n}\n\n.navbar-top-links .dropdown-user {\n    right: 0;\n    left: auto;\n}\n\n.sidebar .sidebar-nav.navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n}\n\n.sidebar .sidebar-search {\n    padding: 15px;\n}\n\n.sidebar ul li {\n    border-bottom: 1px solid #e7e7e7;\n}\n\n.sidebar ul li a.active {\n    background-color: #eee;\n}\n\n.sidebar .arrow {\n    float: right;\n}\n\n.sidebar .fa.arrow:before {\n    content: \"\\F104\";\n}\n\n.sidebar .active>a>.fa.arrow:before {\n    content: \"\\F107\";\n}\n\n.sidebar .nav-second-level li,\n.sidebar .nav-third-level li {\n    border-bottom: 0!important;\n}\n\n.sidebar .nav-second-level li a {\n    padding-left: 37px;\n}\n\n.sidebar .nav-third-level li a {\n    padding-left: 52px;\n}\n\n@media(min-width:768px) {\n    .sidebar {\n        z-index: 1;\n        position: absolute;\n        width: 250px;\n        margin-top: 51px;\n    }\n\n    .navbar-top-links .dropdown-messages,\n    .navbar-top-links .dropdown-tasks,\n    .navbar-top-links .dropdown-alerts {\n        margin-left: auto;\n    }\n}\n\n.btn-outline {\n    color: inherit;\n    background-color: transparent;\n    transition: all .5s;\n}\n\n.btn-primary.btn-outline {\n    color: #428bca;\n}\n\n.btn-success.btn-outline {\n    color: #5cb85c;\n}\n\n.btn-info.btn-outline {\n    color: #5bc0de;\n}\n\n.btn-warning.btn-outline {\n    color: #f0ad4e;\n}\n\n.btn-danger.btn-outline {\n    color: #d9534f;\n}\n\n.btn-primary.btn-outline:hover,\n.btn-success.btn-outline:hover,\n.btn-info.btn-outline:hover,\n.btn-warning.btn-outline:hover,\n.btn-danger.btn-outline:hover {\n    color: #fff;\n}\n\n.chat {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.chat li {\n    margin-bottom: 10px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999;\n}\n\n.chat li.left .chat-body {\n    margin-left: 60px;\n}\n\n.chat li.right .chat-body {\n    margin-right: 60px;\n}\n\n.chat li .chat-body p {\n    margin: 0;\n}\n\n.panel .slidedown .glyphicon,\n.chat .glyphicon {\n    margin-right: 5px;\n}\n\n.chat-panel .panel-body {\n    height: 350px;\n    overflow-y: scroll;\n}\n\n.login-panel {\n    margin-top: 5%;\n    margin-left:15%;\n    margin-right:15%;\n}\n\n.flot-chart {\n    display: block;\n    height: 400px;\n}\n\n.flot-chart-content {\n    width: 100%;\n    height: 100%;\n}\n\n.dataTables_wrapper {\n    position: relative;\n    clear: both;\n}\n\ntable.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc,\ntable.dataTable thead .sorting_asc_disabled,\ntable.dataTable thead .sorting_desc_disabled {\n    background: 0 0;\n}\n\ntable.dataTable thead .sorting_asc:after {\n    content: \"\\F0DE\";\n    float: right;\n    font-family: fontawesome;\n}\n\ntable.dataTable thead .sorting_desc:after {\n    content: \"\\F0DD\";\n    float: right;\n    font-family: fontawesome;\n}\n\ntable.dataTable thead .sorting:after {\n    content: \"\\F0DC\";\n    float: right;\n    font-family: fontawesome;\n    color: rgba(50,50,50,.5);\n}\n\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.428571429;\n}\n\n.btn-circle.btn-lg {\n    width: 50px;\n    height: 50px;\n    padding: 10px 16px;\n    border-radius: 25px;\n    font-size: 18px;\n    line-height: 1.33;\n}\n\n.btn-circle.btn-xl {\n    width: 70px;\n    height: 70px;\n    padding: 10px 16px;\n    border-radius: 35px;\n    font-size: 24px;\n    line-height: 1.33;\n}\n\n.show-grid [class^=col-] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border: 1px solid #ddd;\n    background-color: #eee!important;\n}\n\n.show-grid {\n    margin: 15px 0;\n}\n\n.huge {\n    font-size: 40px;\n}\n\n.panel-green {\n    border-color: #5cb85c;\n}\n\n.panel-green > .panel-heading {\n    border-color: #5cb85c;\n    color: #fff;\n    background-color: #5cb85c;\n}\n\n.panel-green a {\n    color: #5cb85c;\n}\n\n.panel-green a:hover {\n    color: #3d8b3d;\n}\n\n.panel-red {\n    border-color: #d9534f;\n}\n\n.panel-red > .panel-heading {\n    border-color: #d9534f;\n    color: #fff;\n    background-color: #d9534f;\n}\n\n.panel-red a {\n    color: #d9534f;\n}\n\n.panel-red a:hover {\n    color: #b52b27;\n}\n\n.panel-yellow {\n    border-color: #f0ad4e;\n}\n\n.panel-yellow > .panel-heading {\n    border-color: #f0ad4e;\n    color: #fff;\n    background-color: #f0ad4e;\n}\n\n.panel-yellow a {\n    color: #f0ad4e;\n}\n\n.panel-yellow a:hover {\n    color: #df8a13;\n}", ""]);

	// exports


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	 * metismenu - v1.1.3
	 * Easy menu jQuery plugin for Twitter Bootstrap 3
	 * https://github.com/onokumus/metisMenu
	 *
	 * Made by Osman Nuri Okumus
	 * Under MIT License
	 */
	;(function($, window, document, undefined) {

	    var pluginName = "metisMenu",
	        defaults = {
	            toggle: true,
	            doubleTapToGo: false
	        };

	    function Plugin(element, options) {
	        this.element = $(element);
	        this.settings = $.extend({}, defaults, options);
	        this._defaults = defaults;
	        this._name = pluginName;
	        this.init();
	    }

	    Plugin.prototype = {
	        init: function() {

	            var $this = this.element,
	                $toggle = this.settings.toggle,
	                obj = this;

	            if (this.isIE() <= 9) {
	                $this.find("li.active").has("ul").children("ul").collapse("show");
	                $this.find("li").not(".active").has("ul").children("ul").collapse("hide");
	            } else {
	                $this.find("li.active").has("ul").children("ul").addClass("collapse in");
	                $this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
	            }

	            //add the "doubleTapToGo" class to active items if needed
	            if (obj.settings.doubleTapToGo) {
	                $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
	            }

	            $this.find("li").has("ul").children("a").on("click" + "." + pluginName, function(e) {
	                e.preventDefault();

	                //Do we need to enable the double tap
	                if (obj.settings.doubleTapToGo) {

	                    //if we hit a second time on the link and the href is valid, navigate to that url
	                    if (obj.doubleTapToGo($(this)) && $(this).attr("href") !== "#" && $(this).attr("href") !== "") {
	                        e.stopPropagation();
	                        document.location = $(this).attr("href");
	                        return;
	                    }
	                }

	                $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");

	                if ($toggle) {
	                    $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
	                }

	            });
	        },

	        isIE: function() { //https://gist.github.com/padolsey/527683
	            var undef,
	                v = 3,
	                div = document.createElement("div"),
	                all = div.getElementsByTagName("i");

	            while (
	                div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
	                all[0]
	            ) {
	                return v > 4 ? v : undef;
	            }
	        },

	        //Enable the link on the second click.
	        doubleTapToGo: function(elem) {
	            var $this = this.element;

	            //if the class "doubleTapToGo" exists, remove it and return
	            if (elem.hasClass("doubleTapToGo")) {
	                elem.removeClass("doubleTapToGo");
	                return true;
	            }

	            //does not exists, add a new class and return false
	            if (elem.parent().children("ul").length) {
	                 //first remove all other class
	                $this.find(".doubleTapToGo").removeClass("doubleTapToGo");
	                //add the class on the current element
	                elem.addClass("doubleTapToGo");
	                return false;
	            }
	        },

	        remove: function() {
	            this.element.off("." + pluginName);
	            this.element.removeData(pluginName);
	        }

	    };

	    $.fn[pluginName] = function(options) {
	        this.each(function () {
	            var el = $(this);
	            if (el.data(pluginName)) {
	                el.data(pluginName).remove();
	            }
	            el.data(pluginName, new Plugin(this, options));
	        });
	        return this;
	    };

	})(jQuery, window, document);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	module.exports = 'ngSanitize';


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.8
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *     Any commits to this file should be reviewed with security in mind.  *
	 *   Changes to this file can potentially create security vulnerabilities. *
	 *          An approval from 2 Core members with history of modifying      *
	 *                         this file is required.                          *
	 *                                                                         *
	 *  Does the change somehow allow for arbitrary javascript to be executed? *
	 *    Or allows for someone to change the prototype of built-in objects?   *
	 *     Or gives undesired access to variables likes document or window?    *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var $sanitizeMinErr = angular.$$minErr('$sanitize');
	var bind;
	var extend;
	var forEach;
	var isDefined;
	var lowercase;
	var noop;
	var htmlParser;
	var htmlSanitizeWriter;

	/**
	 * @ngdoc module
	 * @name ngSanitize
	 * @description
	 *
	 * # ngSanitize
	 *
	 * The `ngSanitize` module provides functionality to sanitize HTML.
	 *
	 *
	 * <div doc-module-components="ngSanitize"></div>
	 *
	 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
	 */

	/**
	 * @ngdoc service
	 * @name $sanitize
	 * @kind function
	 *
	 * @description
	 *   Sanitizes an html string by stripping all potentially dangerous tokens.
	 *
	 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
	 *   then serialized back to properly escaped html string. This means that no unsafe input can make
	 *   it into the returned string.
	 *
	 *   The whitelist for URL sanitization of attribute values is configured using the functions
	 *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider
	 *   `$compileProvider`}.
	 *
	 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
	 *
	 * @param {string} html HTML input.
	 * @returns {string} Sanitized HTML.
	 *
	 * @example
	   <example module="sanitizeExample" deps="angular-sanitize.js">
	   <file name="index.html">
	     <script>
	         angular.module('sanitizeExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
	             $scope.snippet =
	               '<p style="color:blue">an html\n' +
	               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
	               'snippet</p>';
	             $scope.deliberatelyTrustDangerousSnippet = function() {
	               return $sce.trustAsHtml($scope.snippet);
	             };
	           }]);
	     </script>
	     <div ng-controller="ExampleController">
	        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Directive</td>
	           <td>How</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="bind-html-with-sanitize">
	           <td>ng-bind-html</td>
	           <td>Automatically uses $sanitize</td>
	           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind-html="snippet"></div></td>
	         </tr>
	         <tr id="bind-html-with-trust">
	           <td>ng-bind-html</td>
	           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
	           <td>
	           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
	&lt;/div&gt;</pre>
	           </td>
	           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
	         </tr>
	         <tr id="bind-default">
	           <td>ng-bind</td>
	           <td>Automatically escapes</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	       </div>
	   </file>
	   <file name="protractor.js" type="protractor">
	     it('should sanitize the html snippet by default', function() {
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
	     });

	     it('should inline raw snippet if bound to a trusted value', function() {
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
	         toBe("<p style=\"color:blue\">an html\n" +
	              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
	              "snippet</p>");
	     });

	     it('should escape snippet without any filter', function() {
	       expect(element(by.css('#bind-default div')).getInnerHtml()).
	         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
	              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
	              "snippet&lt;/p&gt;");
	     });

	     it('should update', function() {
	       element(by.model('snippet')).clear();
	       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('new <b>text</b>');
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
	         'new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
	         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
	     });
	   </file>
	   </example>
	 */


	/**
	 * @ngdoc provider
	 * @name $sanitizeProvider
	 *
	 * @description
	 * Creates and configures {@link $sanitize} instance.
	 */
	function $SanitizeProvider() {
	  var svgEnabled = false;

	  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
	    if (svgEnabled) {
	      extend(validElements, svgElements);
	    }
	    return function(html) {
	      var buf = [];
	      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
	        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
	      }));
	      return buf.join('');
	    };
	  }];


	  /**
	   * @ngdoc method
	   * @name $sanitizeProvider#enableSvg
	   * @kind function
	   *
	   * @description
	   * Enables a subset of svg to be supported by the sanitizer.
	   *
	   * <div class="alert alert-warning">
	   *   <p>By enabling this setting without taking other precautions, you might expose your
	   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
	   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
	   *   link). Such behavior can then result in phishing incidents.</p>
	   *
	   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
	   *   tags within the sanitized content:</p>
	   *
	   *   <br>
	   *
	   *   <pre><code>
	   *   .rootOfTheIncludedContent svg {
	   *     overflow: hidden !important;
	   *   }
	   *   </code></pre>
	   * </div>
	   *
	   * @param {boolean=} flag Enable or disable SVG support in the sanitizer.
	   * @returns {boolean|ng.$sanitizeProvider} Returns the currently configured value if called
	   *    without an argument or self for chaining otherwise.
	   */
	  this.enableSvg = function(enableSvg) {
	    if (isDefined(enableSvg)) {
	      svgEnabled = enableSvg;
	      return this;
	    } else {
	      return svgEnabled;
	    }
	  };

	  //////////////////////////////////////////////////////////////////////////////////////////////////
	  // Private stuff
	  //////////////////////////////////////////////////////////////////////////////////////////////////

	  bind = angular.bind;
	  extend = angular.extend;
	  forEach = angular.forEach;
	  isDefined = angular.isDefined;
	  lowercase = angular.lowercase;
	  noop = angular.noop;

	  htmlParser = htmlParserImpl;
	  htmlSanitizeWriter = htmlSanitizeWriterImpl;

	  // Regular Expressions for parsing tags and attributes
	  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	    // Match everything outside of normal chars and " (quote character)
	    NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;


	  // Good source of info about elements and attributes
	  // http://dev.w3.org/html5/spec/Overview.html#semantics
	  // http://simon.html5.org/html-elements

	  // Safe Void Elements - HTML5
	  // http://dev.w3.org/html5/spec/Overview.html#void-elements
	  var voidElements = toMap("area,br,col,hr,img,wbr");

	  // Elements that you can, intentionally, leave open (and which close themselves)
	  // http://dev.w3.org/html5/spec/Overview.html#optional-tags
	  var optionalEndTagBlockElements = toMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
	      optionalEndTagInlineElements = toMap("rp,rt"),
	      optionalEndTagElements = extend({},
	                                              optionalEndTagInlineElements,
	                                              optionalEndTagBlockElements);

	  // Safe Block Elements - HTML5
	  var blockElements = extend({}, optionalEndTagBlockElements, toMap("address,article," +
	          "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
	          "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"));

	  // Inline Elements - HTML5
	  var inlineElements = extend({}, optionalEndTagInlineElements, toMap("a,abbr,acronym,b," +
	          "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
	          "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

	  // SVG Elements
	  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
	  // Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
	  // They can potentially allow for arbitrary javascript to be executed. See #11290
	  var svgElements = toMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
	          "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
	          "radialGradient,rect,stop,svg,switch,text,title,tspan");

	  // Blocked Elements (will be stripped)
	  var blockedElements = toMap("script,style");

	  var validElements = extend({},
	                                     voidElements,
	                                     blockElements,
	                                     inlineElements,
	                                     optionalEndTagElements);

	  //Attributes that have href and hence need to be sanitized
	  var uriAttrs = toMap("background,cite,href,longdesc,src,xlink:href");

	  var htmlAttrs = toMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
	      'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
	      'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
	      'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
	      'valign,value,vspace,width');

	  // SVG attributes (without "id" and "name" attributes)
	  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
	  var svgAttrs = toMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
	      'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
	      'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
	      'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
	      'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
	      'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
	      'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
	      'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
	      'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
	      'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
	      'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
	      'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
	      'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
	      'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
	      'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

	  var validAttrs = extend({},
	                                  uriAttrs,
	                                  svgAttrs,
	                                  htmlAttrs);

	  function toMap(str, lowercaseKeys) {
	    var obj = {}, items = str.split(','), i;
	    for (i = 0; i < items.length; i++) {
	      obj[lowercaseKeys ? lowercase(items[i]) : items[i]] = true;
	    }
	    return obj;
	  }

	  var inertBodyElement;
	  (function(window) {
	    var doc;
	    if (window.document && window.document.implementation) {
	      doc = window.document.implementation.createHTMLDocument("inert");
	    } else {
	      throw $sanitizeMinErr('noinert', "Can't create an inert html document");
	    }
	    var docElement = doc.documentElement || doc.getDocumentElement();
	    var bodyElements = docElement.getElementsByTagName('body');

	    // usually there should be only one body element in the document, but IE doesn't have any, so we need to create one
	    if (bodyElements.length === 1) {
	      inertBodyElement = bodyElements[0];
	    } else {
	      var html = doc.createElement('html');
	      inertBodyElement = doc.createElement('body');
	      html.appendChild(inertBodyElement);
	      doc.appendChild(html);
	    }
	  })(window);

	  /**
	   * @example
	   * htmlParser(htmlString, {
	   *     start: function(tag, attrs) {},
	   *     end: function(tag) {},
	   *     chars: function(text) {},
	   *     comment: function(text) {}
	   * });
	   *
	   * @param {string} html string
	   * @param {object} handler
	   */
	  function htmlParserImpl(html, handler) {
	    if (html === null || html === undefined) {
	      html = '';
	    } else if (typeof html !== 'string') {
	      html = '' + html;
	    }
	    inertBodyElement.innerHTML = html;

	    //mXSS protection
	    var mXSSAttempts = 5;
	    do {
	      if (mXSSAttempts === 0) {
	        throw $sanitizeMinErr('uinput', "Failed to sanitize html because the input is unstable");
	      }
	      mXSSAttempts--;

	      // strip custom-namespaced attributes on IE<=11
	      if (window.document.documentMode) {
	        stripCustomNsAttrs(inertBodyElement);
	      }
	      html = inertBodyElement.innerHTML; //trigger mXSS
	      inertBodyElement.innerHTML = html;
	    } while (html !== inertBodyElement.innerHTML);

	    var node = inertBodyElement.firstChild;
	    while (node) {
	      switch (node.nodeType) {
	        case 1: // ELEMENT_NODE
	          handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
	          break;
	        case 3: // TEXT NODE
	          handler.chars(node.textContent);
	          break;
	      }

	      var nextNode;
	      if (!(nextNode = node.firstChild)) {
	      if (node.nodeType == 1) {
	          handler.end(node.nodeName.toLowerCase());
	        }
	        nextNode = node.nextSibling;
	        if (!nextNode) {
	          while (nextNode == null) {
	            node = node.parentNode;
	            if (node === inertBodyElement) break;
	            nextNode = node.nextSibling;
	          if (node.nodeType == 1) {
	              handler.end(node.nodeName.toLowerCase());
	            }
	          }
	        }
	      }
	      node = nextNode;
	    }

	    while (node = inertBodyElement.firstChild) {
	      inertBodyElement.removeChild(node);
	    }
	  }

	  function attrToMap(attrs) {
	    var map = {};
	    for (var i = 0, ii = attrs.length; i < ii; i++) {
	      var attr = attrs[i];
	      map[attr.name] = attr.value;
	    }
	    return map;
	  }


	  /**
	   * Escapes all potentially dangerous characters, so that the
	   * resulting string can be safely inserted into attribute or
	   * element text.
	   * @param value
	   * @returns {string} escaped text
	   */
	  function encodeEntities(value) {
	    return value.
	      replace(/&/g, '&amp;').
	      replace(SURROGATE_PAIR_REGEXP, function(value) {
	        var hi = value.charCodeAt(0);
	        var low = value.charCodeAt(1);
	        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	      }).
	      replace(NON_ALPHANUMERIC_REGEXP, function(value) {
	        return '&#' + value.charCodeAt(0) + ';';
	      }).
	      replace(/</g, '&lt;').
	      replace(/>/g, '&gt;');
	  }

	  /**
	   * create an HTML/XML writer which writes to buffer
	   * @param {Array} buf use buf.join('') to get out sanitized html string
	   * @returns {object} in the form of {
	   *     start: function(tag, attrs) {},
	   *     end: function(tag) {},
	   *     chars: function(text) {},
	   *     comment: function(text) {}
	   * }
	   */
	  function htmlSanitizeWriterImpl(buf, uriValidator) {
	    var ignoreCurrentElement = false;
	    var out = bind(buf, buf.push);
	    return {
	      start: function(tag, attrs) {
	        tag = lowercase(tag);
	        if (!ignoreCurrentElement && blockedElements[tag]) {
	          ignoreCurrentElement = tag;
	        }
	        if (!ignoreCurrentElement && validElements[tag] === true) {
	          out('<');
	          out(tag);
	          forEach(attrs, function(value, key) {
	            var lkey = lowercase(key);
	            var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
	            if (validAttrs[lkey] === true &&
	              (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
	              out(' ');
	              out(key);
	              out('="');
	              out(encodeEntities(value));
	              out('"');
	            }
	          });
	          out('>');
	        }
	      },
	      end: function(tag) {
	        tag = lowercase(tag);
	        if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
	          out('</');
	          out(tag);
	          out('>');
	        }
	        if (tag == ignoreCurrentElement) {
	          ignoreCurrentElement = false;
	        }
	      },
	      chars: function(chars) {
	        if (!ignoreCurrentElement) {
	          out(encodeEntities(chars));
	        }
	      }
	    };
	  }


	  /**
	   * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
	   * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
	   * to allow any of these custom attributes. This method strips them all.
	   *
	   * @param node Root element to process
	   */
	  function stripCustomNsAttrs(node) {
	    if (node.nodeType === window.Node.ELEMENT_NODE) {
	      var attrs = node.attributes;
	      for (var i = 0, l = attrs.length; i < l; i++) {
	        var attrNode = attrs[i];
	        var attrName = attrNode.name.toLowerCase();
	        if (attrName === 'xmlns:ns1' || attrName.lastIndexOf('ns1:', 0) === 0) {
	          node.removeAttributeNode(attrNode);
	          i--;
	          l--;
	        }
	      }
	    }

	    var nextNode = node.firstChild;
	    if (nextNode) {
	      stripCustomNsAttrs(nextNode);
	    }

	    nextNode = node.nextSibling;
	    if (nextNode) {
	      stripCustomNsAttrs(nextNode);
	    }
	  }
	}

	function sanitizeText(chars) {
	  var buf = [];
	  var writer = htmlSanitizeWriter(buf, noop);
	  writer.chars(chars);
	  return buf.join('');
	}


	// define ngSanitize module and register $sanitize service
	angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

	/**
	 * @ngdoc filter
	 * @name linky
	 * @kind function
	 *
	 * @description
	 * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and
	 * plain email address links.
	 *
	 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
	 *
	 * @param {string} text Input text.
	 * @param {string} target Window (`_blank|_self|_parent|_top`) or named frame to open links in.
	 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
	 *
	 *    Can be one of:
	 *
	 *    - `object`: A map of attributes
	 *    - `function`: Takes the url as a parameter and returns a map of attributes
	 *
	 *    If the map of attributes contains a value for `target`, it overrides the value of
	 *    the target parameter.
	 *
	 *
	 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
	 *
	 * @usage
	   <span ng-bind-html="linky_expression | linky"></span>
	 *
	 * @example
	   <example module="linkyExample" deps="angular-sanitize.js">
	     <file name="index.html">
	       <div ng-controller="ExampleController">
	       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <th>Filter</th>
	           <th>Source</th>
	           <th>Rendered</th>
	         </tr>
	         <tr id="linky-filter">
	           <td>linky filter</td>
	           <td>
	             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
	           </td>
	           <td>
	             <div ng-bind-html="snippet | linky"></div>
	           </td>
	         </tr>
	         <tr id="linky-target">
	          <td>linky target</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
	          </td>
	         </tr>
	         <tr id="linky-custom-attributes">
	          <td>linky custom attributes</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
	          </td>
	         </tr>
	         <tr id="escaped-html">
	           <td>no filter</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	     </file>
	     <file name="script.js">
	       angular.module('linkyExample', ['ngSanitize'])
	         .controller('ExampleController', ['$scope', function($scope) {
	           $scope.snippet =
	             'Pretty text with some links:\n'+
	             'http://angularjs.org/,\n'+
	             'mailto:us@somewhere.org,\n'+
	             'another@somewhere.org,\n'+
	             'and one more: ftp://127.0.0.1/.';
	           $scope.snippetWithSingleURL = 'http://angularjs.org/';
	         }]);
	     </file>
	     <file name="protractor.js" type="protractor">
	       it('should linkify the snippet with urls', function() {
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
	       });

	       it('should not linkify snippet without the linky filter', function() {
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
	       });

	       it('should update', function() {
	         element(by.model('snippet')).clear();
	         element(by.model('snippet')).sendKeys('new http://link.');
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('new http://link.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
	             .toBe('new http://link.');
	       });

	       it('should work with the target property', function() {
	        expect(element(by.id('linky-target')).
	            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
	       });

	       it('should optionally add custom attributes', function() {
	        expect(element(by.id('linky-custom-attributes')).
	            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
	       });
	     </file>
	   </example>
	 */
	angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
	  var LINKY_URL_REGEXP =
	        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
	      MAILTO_REGEXP = /^mailto:/i;

	  var linkyMinErr = angular.$$minErr('linky');
	  var isDefined = angular.isDefined;
	  var isFunction = angular.isFunction;
	  var isObject = angular.isObject;
	  var isString = angular.isString;

	  return function(text, target, attributes) {
	    if (text == null || text === '') return text;
	    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

	    var attributesFn =
	      isFunction(attributes) ? attributes :
	      isObject(attributes) ? function getAttributesObject() {return attributes;} :
	      function getEmptyAttributesObject() {return {};};

	    var match;
	    var raw = text;
	    var html = [];
	    var url;
	    var i;
	    while ((match = raw.match(LINKY_URL_REGEXP))) {
	      // We can not end in these as they are sometimes found at the end of the sentence
	      url = match[0];
	      // if we did not match ftp/http/www/mailto then assume mailto
	      if (!match[2] && !match[4]) {
	        url = (match[3] ? 'http://' : 'mailto:') + url;
	      }
	      i = match.index;
	      addText(raw.substr(0, i));
	      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
	      raw = raw.substring(i + match[0].length);
	    }
	    addText(raw);
	    return $sanitize(html.join(''));

	    function addText(text) {
	      if (!text) {
	        return;
	      }
	      html.push(sanitizeText(text));
	    }

	    function addLink(url, text) {
	      var key, linkAttributes = attributesFn(url);
	      html.push('<a ');

	      for (key in linkAttributes) {
	        html.push(key + '="' + linkAttributes[key] + '" ');
	      }

	      if (isDefined(target) && !('target' in linkAttributes)) {
	        html.push('target="',
	                  target,
	                  '" ');
	      }
	      html.push('href="',
	                url.replace(/"/g, '&quot;'),
	                '">');
	      addText(text);
	      html.push('</a>');
	    }
	  };
	}]);


	})(window, window.angular);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	angular = __webpack_require__(6)

	angular.module('qaPlugin').controller("QuestionController", function($http, $scope, $attrs){
	    var self = this
	    self.qa  = {}
	    $http({
	      method  : 'POST',
	      url     : "http://localhost:8000/questions/",
	      data    : {
	        "topics"  : $attrs.topics.split(',')
	      }
	    }).then((msg)=>{
	      self.qa = msg.data
	      console.log("QA")
	    },(err)=>{
	      throw err
	    })

	})


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	angular = __webpack_require__(6)

	angular.module('qaPlugin').component("loadTopics",{
	  templateUrl   : 'http://localhost:8001/Templates/questions.html',
	  controller    : "QuestionController",
	  controllerAs  : 'qController',
	  link          : function(scope, element, attrs) {
	    scope.topics  = JSON.parse(attrs.topics)
	  }
	})


/***/ }
]);