/*!
 * dhxCom Library v0.1;
 * https://github.com/aravindbuddha/dhtmlxComponent/
 * http://www.techumber.com
 *
 * Copyright 2014 aravindbuddha and other contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */
(function (window, document, undefined) {
  var dhtmlxComponent = function (a, b) {
    var l = arguments.length,
      s = [],
      obj = {};
    _constuct(l);

    //Constuctor
    function dhtmlxComponent() {
      this.init();
    };

    //Register DomReady event
    DOMReady(function () {
      if (l === 1) {
        if (isArray(a)) {
          loadScripts(s);
        } else {
          ready();
        }
      } else {
        loadScripts(s, ready);
      }
    });

    function _constuct(argC) {
      if (argC === 0) {
        throw ("Arguments Missing!");
      }
      if (argC === 1) {
        //checking arguments
        if (isArray(a)) {
          s = a;
        } else if (isObject(a)) {
          obj = a;
          checkName(obj.name);
        } else {
          throw ("Incorrect arguments!");
        }
      }
      if (argC === 2) {
        if (!isArray(a)) {
          throw ("First argument should be an array");
        }
        if (!isObject(b)) {
          throw ("Second argument should be an object");
        }
        s = a;
        obj = b;
        ready();
        // createNS(obj.name);
      }


      function checkName(name) {
        if (!name) {
          throw ("Oops! Component should have name");
        } else {
          //createNS(name);
        }
      }
      return argC;
    }
    //Is array or not
    function isArray(a) {
      if (a instanceof Array) {
        return true;
      }
      return false;
    }
    //Is Object or not
    function isObject(a) {
      if (typeof a === "object") {
        return true;
      }
      return false;
    }
    //Loadscripts
    function loadScripts(urls, callback) {
      var i, assert = [],
        loadedScipts = 0;
      for (i = 0; i < urls.length; i++) {
        if (isCss(urls[i])) {
          loadCss(urls[i]);
          continue;
        }
        assert.push(urls[i]);
        console.log(assert);
        //if Script is already in dom skip loadScript
        if (document.scripts[0].src === urls[i]) {
          loadedScripts++;
          continue;
        }
        loadJs(urls[i]);
      }
      //load single js file
      //Cross browser script load check

      function loadJs(url) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
          script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
              script.readyState == "complete") {
              script.onreadystatechange = null;
              loadedScipts++
            }
          };
        } else { //Others
          script.onload = function () {
            loadedScipts++
          };
        }
        script.src = url;
        document.body.appendChild(script);
      }

      function loadCss(url) {
        var l = document.createElement('link');
        l.type = "text/css";
        l.rel = "stylesheet";
        l.href = url;
        if (document.links.length) {
          document.links[document.links.length - 1].appendChild(l);
        } else {
          document.head = document.head || document.getElementsByTagName("head")[0];
          document.head.appendChild(s);
        }
      }

      function isCss(url) {
        if (url.lastIndexOf('.css') > 0)
          return true;
        else
          return false
      }

      function isJs(url) {
        if (url.lastIndexOf('.js') > 0)
          return true;
        else
          return false
      }

      function isAllLoaded() {
        if (loadedScripts === urls.length) {
          return true;
        }
        return false
      }
      //if callback given load it
      if (callback) {
        setTimeout(function () {
          if (isAllLoaded) {
            callback();
            clearTimeout(this);
          }
        }, 50);
      }
      //end
    }
    //extending dhxCom Object
    function extend(obj) {
      if ("extend" in obj) {
        if (isObject(obj["extend"])) {
          extend(obj["extend"]);
        } else {
          throw ("extend must be an object type!");
        }
      }
      for (var a in obj) {
        dhtmlxComponent.prototype[a] = obj[a];
      }
    }
    //our main function which exectue if all loaded 
    function ready() {
      dhtmlxComponent.prototype = {
        uid: null,
        win_manager: null,
        win: [],
        layout: [],
        form: [],
        status_bar: [],
        configuration: [],
        dataStore: [],
        init: function () {},
        start: function () {},
        _window: function (uid) {
          var self = this;
          (self.win_manager === null) ? self._window_manager() : " ";

          if (self.window_manager.isWindow("window_MemberComponent_" + uid)) {
            self.win[uid].show();
            self.win[uid].bringToTop();
            return;
          }
          self.win[uid] = self.window_manager.createWindow("window_MemberComponent_" + uid, self.model.conf_window.left + 10,
            self.model.conf_window.top + 10, self.model.conf_window.width, self.model.conf_window.height);
          self.win[uid].setText(self.model.text_labels.main_window_title);
          // self.window[ uid ].setIcon( self.model.conf_window.icon, self.model.conf_window.icon_dis );         
          self.win[uid].setModal(true);
          self.win[uid].button("park").hide();
          self.win[uid].button("minmax1").hide();
          self.win[uid].button("minmax2").hide();
          self.win[uid].centerOnScreen();
          var pos = self.win[uid].getPosition();
          var offset = (document.body.scrollTop ? document.body.scrollTop : window.pageYOffset);
          self.win[uid].setPosition(pos[0], pos[1] + offset)
          self.win[uid].attachEvent("onClose", function (win) {
            return true;
          });
          // self.status_bar[ uid ] = self.window[ uid ].attachStatusBar();
        },
        _layout: function (uid) {
          var self = this;
          self.layout[uid] = self.window[uid].attachLayout(self.model.conf_layout.pattern);
          self.layout[uid].cells("a").hideHeader();
        },
        _window_manager: function () {
          var self = this;
          self.win_manager = new dhtmlXWindows();
          self.win_manager.enableAutoViewport(false);
          self.win_manager.attachViewportTo(vp);
          self.win_manager.setImagePath(self.model.conf_window.image_path);
        },
        Validate: {
          isMissing: function (a, msg) {
            msg = msg || "Something  is missing";
            if ((typeof a === 'undefined') || (a.length === 0)) {
              return this.setErrorMsg(msg);
            }
          },
          setErrorMsg: function (msg) {
            dhtmlx.message({
              type: "alert-error",
              text: msg
            });
            return false;
          }
        }
      };
      extend(obj);

      nameSpace = new dhtmlxComponent();
      createNS(obj.name, new dhtmlxComponent());
    }

    function createNS(ns, obj) {
      var
      n = ns.split('.'),
        l = n.length,
        o = window[n[0]] = window[n[0]] || {};

      for (var i = 1; i < l; i++) {
        if (o[n[i]]) {
          throw ("Oops! Namespace '" + n.slice(0, i + 1).join('.') + "' already exists!");
          return;
        }
        o = o[n[i]] = o[n[i]] || {};
      }
      o[n[l - 1]] = obj;
      return;
    }
    //Cross Browser Dom Ready
    function DOMReady(callback) {
      if (document.addEventListener) { // native event
        document.addEventListener("DOMContentLoaded", callback, false);
      } else if (window.addEventListener) {
        window.addEventListener('load', callback, false);
      } else if (document.attachEvent) {
        window.attachEvent('onload', callback);
      }
    }
  }
  //exporting dhtmlxComponent;
  window['dhxCom'] = window['dhtmlxComponent'] = dhtmlxComponent;
})(window, document);
