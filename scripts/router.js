/**
 * User: Troy
 * Date: 3/10/13
 * Time: 9:36 PM
 */

(function () {
  App.Router = Backbone.Router.extend({
    routes:{
      "":'page1',
      "page2":"page2",
      "page3":"page3",
      "settings":"settings",
      "about":"about"
    },
    page1:function () {
      console.log("Hi there from the index page");
      if($.mobile.activePage){
        $.mobile.changePage("#page1", { reverse:false, changeHash:false });
      }
    },
    page2:function () {
      console.log("page 2");
      $.mobile.changePage("#page2", { reverse:false, changeHash:false, transition: "slide" });
    },
    page3:function () {
      console.log("page 3");
      $.mobile.changePage("#page3", { reverse:false, changeHash:false, transition: "slide" });
    },
    settings:function () {
      console.log("Settings page");
      $.mobile.changePage("#settings", { reverse:false, changeHash:false, transition: "slide" });
    },
    about:function () {
      console.log("About page");
      $.mobile.changePage("#about", { reverse:false, changeHash:false, transition: "slide" });
    }
  });
  new App.Router;
  Backbone.history.start();
})();