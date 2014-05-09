dhtmlxComponent
===============

DHTMLX component development made easy.

<ul>
	<li>Aravind Buddha <a href="http://twitter.com/aravindbuddha">@aravindbuddha</a>, <a href="https://github.com/aravindbuddha">github</a>
</li>
</ul>

<h2>How to use</h2>
<p>Just download the file and add it to your project once you done addeding.</p>
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
