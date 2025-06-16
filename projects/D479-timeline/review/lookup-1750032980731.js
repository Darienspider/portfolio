(function(window, undefined) {
  var dictionary = {
    "7dfdbca1-c867-40d9-880a-323081d2bd97": "About the Island",
    "ecb926a4-bd0a-4007-acf6-7429f2ffc66b": "Transportation",
    "a547cd8b-ef7c-492e-a627-afdf880b8f66": "Grocery Stores",
    "fb9dafc7-8293-4bc7-81c3-08fb32d3e4d5": "Lodging",
    "78edd15b-c1b5-466e-8315-93882e34883a": "FAQ",
    "25acc505-b002-46be-8925-4920fccb0821": "Entertainment",
    "50428378-e483-4017-8c7c-bc6378d06b7f": "Restuarants",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
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