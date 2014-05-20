dhtmlxComponent
===============

DHTMLX component development made easy.


* Aravind Buddha [@aravindbuddha](http://twitter.com/aravindbuddha "Aravind Twitter"), [github](https://github.com/aravindbuddha "Aravind Github") 


<h2>How to use</h2>
<p>Just download the file and add it to your project once you done addeding.</p>
<h3>Your html</h3>

``` html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MY DHTMLX COMPONENT</title>
    <script type="text/javascript" src="path/to/dhtmlxcomponent.js"></script>
    <script type="text/javascript" src="path/to/mycomponent.js"></script>
    <script type="text/javascript">
        var site_url="http://yourdomain.com";
        //her mycompnent is your component name
        mycomponent.start({
            uid: (new Date()).getTime(),//unique id
            site: site_url,             //current site url
            app_path: site_url + "path/to/mycomponent",//dhtmlx component path
            dhtmlx_codebase_path: site_url + "path/to/dhtmlx/"//path where your dhtmlx core lib reside.
        });
    </script>
</head>
<body>
    <!-- content goes here -->
</body>
</html>
```

<h3>mycomponent.js(without dependency)</h3>
```javascript
	dhtmlxcomponent({
		name:"myComponent"
		model:mycomponent_model,
		init:function(){
		//This code runs immidatly.
		//write all your initilzation here...
		},
		go:function(){
			//other function
		}
	});
``` 
<h3>mycomponent.js(with dependency)</h3>
```javascript
	dhtmlxcomponent([
	"path/to/dhtmlx.js",
	"part/to/model.js",
	"path/to/script.js"
	],{
		model:mycomponent_model,
		name:"myComponent",
		init:function(){
		//This code runs immidatly.
		//write all your initilzation here...
		},
		go:function(){
			//other function
		}
	});
``` 
<h2>Features</h2>
<ul>
	<li>Easy migration when upgrading to next dhtmlx version.</li>
	<li>Simple dependencey management.</li>
	<li>Does not load same javascript file from same location.</li>
	<li>Trackable objects management.</li>
	<li>Code redundency minimized.</li>
	<li>Fully MVC pattern</li>
</ul>


##The MIT License (MIT)

Copyright (c) 2014 Aravind Buddha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


