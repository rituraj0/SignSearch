MyApp = Ember.Application.create();

MyApp.Router.map( function() {

	this.route('first-route' ,{path: 'first'})

 });

MyApp.FirstRouteRoute = Ember.Route.extend( {


});

MyApp.FirstRouteController = Ember.Controller.extend( {

	firstname: 'hello',

	dicenum: '10',

	outputs: function() {

		var randnum = [];

		var tp=this.get('dicenum');
		console.log("in controller");
		console.log(tp);

		if( tp == undefined)
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

MyApp.abcd = Ember.View.extend({
    tagName: "canvas",        
    attributeBindings: ['height', 'width'],
    height: 200,
    width: 200,

    click: function(e){
       alert("clicked");
       // do something
    },

    didInsertElement: function(){
    	console.log("in didinsert evet");
        this.drawItem();
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