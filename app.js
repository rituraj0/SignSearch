MyApp = Ember.Application.create();

MyApp.Router.map( function() {
	this.route('second-route' ,{path: 'second'})
 });


MyApp.SecondRouteRoute = Ember.Route.extend( {

});

MyApp.IndexRoute = Ember.Route.extend( {
     model: function() {
        return [ 'abc' , 'def' ];
     }
 });


MyApp.SecondRouteController = Ember.Controller.extend({

	paint: false,
	last: 0,
	pointX: [],
	pointY: []
	
});

MyApp.SecondRouteView = Ember.View.extend({
    tagName: "canvas",        
    attributeBindings: ['height', 'width'],
    height: 300,
    width: 500,

    mouseDown: function(e){

    	this.setValue("paint",true);
        this.addClick(e.pageX,e.pageY);
        this.addClick(e.pageX,e.pageY);
        this.setValue( "last" , this.getValue("last")+1);
        this.redraw();
    },

    mouseMove: function(e){
    	
        if( this.getValue("paint"))
        {
            this.addClick(e.pageX, e.pageY);
            this.redraw();
        }
    },

    mouseUp: function(e){
    	this.setValue("paint",false);
    },

    mouseOut: function(e){
        this.setValue("paint",false);
        this.addClick(e.pageX,e.pageY);
        this.setValue( "last" , this.getValue("last")+1);
    },

    didInsertElement: function(){
        this.redraw();
    },

    setValue: function( vari,val){
    	var canv = this.get('controller');
    	canv.set(vari, val);
    },

    getValue: function(vari){
    	var canv = this.get('controller');
    	return canv.get(vari);
    },

    addClick: function(x,y){

    	var canv = this.get('controller');

    	if( canv === undefined )
    		console.log("did not get controller");

    	var px = canv.get('pointX');

        if( px === undefined )
    		console.log("did not get X Array");

    	px.push(x);

    	var py = canv.get('pointY');

        if( py === undefined )
    		console.log("did not get Y Array");

    	py.push(y);

    },

    redraw: function(){        
        
        if( this.getValue("paint") )
        {
              var canvas = this.get('element');
        	  var canvasContext = canvas.getContext('2d');
        	  canvasContext.strokeStyle = "#df4b26";
          	  canvasContext.lineJoin = "round";
          	  canvasContext.lineWidth = 5;

              pX=this.getValue("pointX");
              pY=this.getValue("pointY");

              for( var i = this.getValue("last") ; i < pX.length ;i++)
              {
                    canvasContext.beginPath();

                    if( i > 0)
                    {
                        canvasContext.moveTo( pX[i-1] , pY[i-1]);
                    }
                    else
                    {
                        canvasContext.moveTo( pX[i] - 1 , pY[i] );
                    }

                    canvasContext.lineTo( pX[i] , pY[i] );

                    canvasContext.closePath();
                    canvasContext.stroke();            
              }

              this.setValue("last", pX.length);
        }
    }
});