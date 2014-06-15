var express = require('express');
var app = express();
var whois = require('whoisclient');

app.get('/', function(req, res){
	var queryDomain = req.query.domain;
	if(!queryDomain) {
		res.send('No Domain!');
		return;
	}

	whois.query(queryDomain, function(data) {
		// console.log(data);
		res.send('Result <pre>' + data + '</pre>');
	});
});

app.listen(3000);
