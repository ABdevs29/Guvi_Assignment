HTTP 1.1 | HTTP 2
-------- | ------
It was introduced in 1997 | It was introduced in 2015
It keeps all requests and responses in plain text format | It uses Binary framing layer to encapsulate al messages in Binary format
It introduced pipelining over HTTP 1.0, which causes Head of Line blocking i.e. front requests might block requests behind it in the same pipeline | It avoids this issue by establishing a single point object between the two machines
It may use different TCP connections to stream data to avoid blocking | It uses multiple streams in the same TCP connection thus improving delivery time. This is also known as Multiplexing
It relies on transport layer to avoid butter flow and each new TCP connection requires a separate control flow mechanism | It allows the client and server to implement their own control flows, improving the efficiency
It uses Resource inlining to include the additional resources direcctly within the HTML document that the server sends in response to the original GET request | It enables multiple concurrent responses to a Client's initial GET request, a server can send a resource to a client along with the requested HTML page, providing the resource before the client asks for it also known as Server push
It uses basic compression to compress CSS & JS files but doesn't compress the Header component. This can slow down website loading time | It implements HPACK compression for the header by spliting data into header frame and data frame

References:
[DigitalOcean](https://www.digitalocean.com/community/tutorials/http-1-1-vs-http-2-what-s-the-difference)
