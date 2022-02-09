
const express = require('express');
const app = express();
const path = require('path');
// for using partials
const hbs = require('hbs');
// const port = 8000;
//for hosting in realtime

const port = process.env.PORT || 8000;
// ....... 

//public static path
const staticPath = path.join(__dirname, "../public");

// for views directory
const viewPath=path.join(__dirname,"../../17templates/views");
// for partials 

const partial_path=path.join(__dirname,"../../17templates/partials");



// aba express lai batauna chanachhau we use view engine
app.set("view engine","hbs");
// set the path of views
app.set("views",viewPath);

//aba hamile express application ko batana hai hbs lepartials ko karliya hai register
//if yedi hamile partials use karna hai tohpahila usko register garnu parchha ani uslai jati pani use garna sakchhau

hbs.registerPartials(partial_path);

//mera jo app hai wo static page ko use garna chahega
// static method vitra 
//sabai vanda pahile jun top ma aauxa teslai express le
//dekhauxa ani connection close gardinxa

app.use(express.static(staticPath));


// for routing
//for getting data
app.get("/",(req, res)=>{
	//res.send() used in express
	// res.send("welcome to bishal shrestha channel");
		// jaba maile handlers bar use gareko xau vane show garauna ko lagi we use render
	res.render("index");
});

app.get("/about",(req, res)=>{
	// jaba maile handlers bar use gareko xau vane show garauna ko lagi we use render
	// res.send("welcome to about page");
	res.render("about");

});

app.get("/weather", ( req, res )=>{
	// res.send("welcome to weather page");
	res.render("weather");

});
//kunai pani match navaye error dekhaunako lagi
app.get('*',(req, res) =>{
	// res.send("404 error page oops");
	//yaha chahe toh object pani pass garna sakxau
	res.render("404error",{
		errorMsg:"oops page not found, click here to go back",
	});

});
app.listen(port,()=>{
	console.log(`listening to the port ${port}`);

})