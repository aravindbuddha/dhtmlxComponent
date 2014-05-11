var dhtmlxComponent = function (s, obj) {


  function dhtmlxComponent() {
    this.init();
  };
  DOMReady(function () {
    if (isArray(s)) {
      if (obj) {
        loadScripts(s, ready);
      } else {
        loadScripts(s);
      }
    } else {
      obj = s;
      ready();
    }
  });
  //Over Write component functions if any
  function isArray(a) {
    if (a instanceof Array) {
      return true;
    }
    return false;
  }

  function extend(obj) {
    for (var a in obj) {
      dhtmlxComponent.prototype[a] = obj[a];
    }
  }

  function loadScripts(urls, callback) {
    var i, assert = [],
      loadedScipts = 0;
    for (i = 0; i < urls.length; i++) {
      assert.push(urls[i]);
      loadScript(urls[i], callback);
    }

    function loadScript(url) {
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

    function isAllLoaded() {
      if (loadedScripts === urls.length) {
        return true;
      }
      return false
    }
    if (callback) {
      setTimeout(function () {
        if (isAllLoaded) {
          callback();
          clearTimeout(this);
        }
      }, 50);
    }
  }

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
    extend(obj)
    return new dhtmlxComponent();
  }

  function makeObj() {

  }
  // //Check if dom is ready
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