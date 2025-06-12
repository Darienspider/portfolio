(function(window, undefined) {
  var dictionary = {
    "a617d59a-8aba-4335-9511-38936aaf48b4": "Contact Form",
    "c0dfa09f-1d50-40cd-93f1-f98710b8c6dc": "Dog Owners",
    "98629341-b0ef-4a26-ab51-59af4f05a31d": "Fish Owners",
    "f9d541db-3348-4a43-82bb-ee007382295e": "Cat Owners",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Landing page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);