MyApp = Ember.Application.create();

MyApp.Router.map( function() {

	this.route('first-route' ,{path: 'first'}),
	this.route('second-route' ,{path: 'second'})

 });

MyApp.FirstRouteRoute = Ember.Route.extend( {


});

MyApp.SecondRouteRoute = Ember.Route.extend( {


});

MyApp.FirstRouteController = Ember.Controller.extend( {

	firstname: 'hello',

	dicenum: '10',

	outputs: function() {

		var randnum = [];

		var tp=this.get('dicenum');
		console.log("in controller");
		console.log(tp);

		if( tp === undefined)
			 tp=5;
		for( var x =1;x<=tp;x++)
		{
			randnum.push( Math.random() );
		}

		console.log(tp);

		for( var x =0 ; x< tp ;x++)
		{
			console.log( randnum[x] );
		}

        return randnum;
     }.property('dicenum')//if dicenum is changes , then reclalcuate outputs , watch vedio 18

});

MyApp.IndexRoute = Ember.Route.extend( {
     model: function() {
        return [ 'abc' , 'def' ];
     }
 });

/*
MyApp.Points = Ember.Model.extend({

	pointX : DS.attr('array'),
	pointY : DS.attr('array'),
});
*/

MyApp.SecondRouteController = Ember.Controller.extend({

	pointX: [],
	pointY: []
	
});

MyApp.SecondRouteView = Ember.View.extend({
    tagName: "canvas",        
    attributeBindings: ['height', 'width'],
    height: 200,
    width: 200,

    click: function(e){
       //alert("clicked");
       // do something
       console.log("in click");
    },

    mouseDown: function(e){

    	console.log("mouse down");
    },

    mouseMove: function(e){
    	console.log("mosue drag");
    	console.log(e.pageX);
    	console.log(e.pageY);

    	this.insertPoint(e.pointX,e.pageY);
    },

    mouseUp: function(e){
    	console.log("mouse up");
    },

    mouseOut:function(e){
    	console.log("MouseUp");
    },

    didInsertElement: function(){
    	console.log("in didinsert evet");
        this.drawItem();
    },

    insertPoint: function(x,y){

    	console.log("in insert function");

    	var canv = this.get('controller');

    	console.log(canv);

    	if( canv === undefined )
    		console.log("undefines class");
    	else
    		console.log(" got someting");

    	var xy = canv.get('pointX');

        if( xy === undefined )
    		console.log("undefines class");
    	else
    		console.log(" got someting in pointx");	

    	xy.push(x);

    	//.pointX.push(x);

    	console.log("x inserted");
    	//this.get('controller.controllers.Canvas.pointY').push(y);
    	console.log("insrted");

    },

    drawItem: function(){

      console.log("going to piant");
      var canvas = this.get('element');
	  var ctx = canvas.getContext('2d');
	   // Filled triangle
	  ctx.beginPath();
	  ctx.moveTo(25,25);
	  ctx.lineTo(105,25);
	  ctx.lineTo(25,105);
	  ctx.fill();

	  // Stroked triangle
	  ctx.beginPath();
	  ctx.moveTo(125,125);
	  ctx.lineTo(125,45);
	  ctx.lineTo(45,125);
	  ctx.closePath();
	  ctx.stroke();
 }
});