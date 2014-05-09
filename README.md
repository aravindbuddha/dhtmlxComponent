dhtmlxComponent
===============

DHTMLX component development made easy.

<ul>
	<li>Aravind Buddha <a href="http://twitter.com/aravindbuddha">@aravindbuddha</a>, <a href="https://github.com/aravindbuddha">github</a>
</li>
</ul>

<h2>How to use</h2>
<p>Just download the file and add it to your project once you done addeding.</p>
<h3>Your html</h3>
<pre class="highlight highlight-html">
&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
	&lt;meta charset=&quot;UTF-8&quot;&gt;
	&lt;title&gt;MY DHTMLX COMPONENT&lt;/title&gt;
	&lt;script type=&quot;text/javascript&quot; src=&quot;path/to/dhtmlxcomponent.js&quot;&gt;&lt;/script&gt;
	&lt;script type=&quot;text/javascript&quot; src=&quot;path/to/mycomponent.js&quot;&gt;&lt;/script&gt;
	&lt;script type=&quot;text/javascript&quot;&gt;
		var site_url=&quot;http://yourdomain.com&quot;;
		//her mycompnent is your component name
		mycomponent.start({
			uid: (new Date()).getTime(),//unique id
			site: site_url,             //current site url
			app_path: site_url + &quot;path/to/mycomponent&quot;,//dhtmlx component path
			dhtmlx_codebase_path: site_url + &quot;path/to/dhtmlx/&quot;//path where your dhtmlx core lib reside.
		});
	&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;!-- content goes here --&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<h3>mycomponent.js(without dependency)</h3>
<pre class="highlight highlight-javascript">
	var mycomponent=dhtmlxcomponent({
		model:mycomponent_model,
		init:function(){
		//This code runs immidatly.
		//write all your initilzation here...
		},
		go:function(){
			//other function
		}
	});
</pre> 
<h3>mycomponent.js(with dependency)</h3>
<pre class="highlight highlight-javascript">
	var mycomponent=dhtmlxcomponent([
	"path/to/dhtmlx.js",
	"part/to/model.js",
	"path/to/script.js"
	],{
		model:mycomponent_model,
		init:function(){
		//This code runs immidatly.
		//write all your initilzation here...
		},
		go:function(){
			//other function
		}
	});
</pre> 
<h2>Features</h2>
<ul>
	<li>Easy migration when upgrading to next dhtmlx version.</li>
	<li>Simple dependencey management.</li>
	<li>Does not load same javascript file from same location.</li>
	<li>Trackable objects management.</li>
	<li>Code redundency minimized.</li>
	<li>Fully MVC pattern</li>
</ul>
