const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear', function(){
	return new Date().getFullYear();
});

// create userdefineed value function
hbs.registerHelper('screamIt', function(text){
	return text.toUpperCase();
})


app.get('/about', function(req, res){
	res.render('about', {
		title: 'God hats us all'
	});
})


app.get('/', function(req, res){
	res.render('home', {
		title: 'God hats us all'
	});
})


app.listen(port, function(err){
	if (err) {
		throw err;
	}
	console.log("running on "+port);
})