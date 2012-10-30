CORS is a technology specification to get around the *Same Origin Policy* restrictions of web browsers. To allow cross domain sharing, web servers have to attach additional headers. Unfortunately, not many servers have done this yet, and hence we have issues trying to access their resources. This simple nodejs proxy will attach the CORS headers so that the browser thinks it is okay to be shared. 

For example:

http://corsproxy.nodester.com/?src=farm7.static.flickr.com/6048/6250681839_7574c8c4b6_m.jpg

<img src="http://corsproxy.nodester.com/?src=farm7.static.flickr.com/6048/6250681839_7574c8c4b6_m.jpg"></img>
