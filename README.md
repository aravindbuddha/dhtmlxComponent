dhtmlxComponent
===============

DHTMLX component development made easy.

<ul>
	<li>Rick Waldron <a href="http://twitter.com/aravindbuddha">@aravindbuddha</a>, <a href="https://github.com/aravindbuddha">github</a>
</li>
</ul>

<h2>How to use</h2>
<p>Just download the file and add it to your project once you done addeding.</p>
<pre class="highlight highlight-javascript">
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
</pre>
