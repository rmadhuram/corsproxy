<a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">CORS</a> is a technology specification to get around the *Same Origin Policy* restrictions of web browsers. To allow cross domain sharing, web servers have to attach additional headers. Unfortunately, not many servers have done this yet, and hence we have issues trying to access their resources in certain scenarios such as WebGL. This simple nodejs proxy will attach the CORS headers so that the browser thinks it is okay to be shared. 

For example:

http://corsproxy.nodester.com/?src=farm7.static.flickr.com/6048/6250681839_7574c8c4b6_m.jpg

<img src="http://corsproxy.nodester.com/?src=farm7.static.flickr.com/6048/6250681839_7574c8c4b6_m.jpg"></img>

Note: The above link is now defunct, looks like nodester went out of business. But it illustrates the point how you can use this service. 
