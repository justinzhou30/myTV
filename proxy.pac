function FindProxyForURL(url, host) {
    // return "DIRECT; PROXY 127.0.0.1:7890; SOCKS 127.0.0.1:7891 ";
    // alert("Local IP address is: " + myIpAddress());
    return "PROXY 127.0.0.1:7890";
}