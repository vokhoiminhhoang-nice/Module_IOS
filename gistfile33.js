/***********************************************
deleteHeader by mhoang07
***********************************************/	

function setHeaderValue(e, a, d) {
    var r = a.toLowerCase();
    r in e ? (e[r] = d) : (e[a] = d);
}

var modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
setHeaderValue(modifiedHeaders, "If-None-Match", "");
setHeaderValue(modifiedHeaders, "if-none-match", "");

$done({ headers: modifiedHeaders });
