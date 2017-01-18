var host = "blog.nssimacer.tech";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
