var Cone = function(params) {
	PP.Object3D.call( this, params );
	this.alias = 'cone';

	var scope = this;

	var num = 200;
	var height = this.height;
	var radius = this.width/2;

	// vertex 0
	this.vertices.push( 0.0 );
	this.vertices.push( this.height ); 
	this.vertices.push( 0.0 );
	this.scalars.push(this.colors[0][0]);
	this.scalars.push(this.colors[0][1]);
	this.scalars.push(this.colors[0][2]);
	this.scalars.push(this.colors[0][3]);

	for( var i=1; i<=num; ++i ) {
		var angle = Math.PI * 2 * (i/num);
		var x = radius*Math.cos(angle);
		var z = radius*Math.sin(angle);
		this.vertices.push(x);
		this.vertices.push(0);
		this.vertices.push(z);
		this.scalars.push(this.colors[1][0]);
		this.scalars.push(this.colors[1][1]);
		this.scalars.push(this.colors[1][2]);
		this.scalars.push(this.colors[1][3]);
		// indices
		this.indices.push(0);
		this.indices.push(i);
		if( i == num ) {
			this.indices.push(1);
		}
		else{
			this.indices.push(i+1);
		}
	}



	// var temp_vertices = [0.908298,0.687137,-1.28412,0.908298,2.68714,-0.284116,1.10339,0.687137,-1.2649,1.10339,0.687137,-1.2649,0.908298,2.68714,-0.284116,1.29098,0.687137,-1.208,1.29098,0.687137,-1.208,0.908298,2.68714,-0.284116,1.46387,0.687137,-1.11559,1.46387,0.687137,-1.11559,0.908298,2.68714,-0.284116,1.6154,0.687137,-0.991223,1.6154,0.687137,-0.991223,0.908298,2.68714,-0.284116,1.73977,0.687137,-0.839686,1.73977,0.687137,-0.839686,0.908298,2.68714,-0.284116,1.83218,0.687137,-0.666799,1.83218,0.687137,-0.666799,0.908298,2.68714,-0.284116,1.88908,0.687137,-0.479206,1.88908,0.687137,-0.479206,0.908298,2.68714,-0.284116,1.9083,0.687137,-0.284116,1.9083,0.687137,-0.284116,0.908298,2.68714,-0.284116,1.88908,0.687137,-0.0890256,1.88908,0.687137,-0.0890256,0.908298,2.68714,-0.284116,1.83218,0.687137,0.0985675,1.83218,0.687137,0.0985675,0.908298,2.68714,-0.284116,1.73977,0.687137,0.271454,1.73977,0.687137,0.271454,0.908298,2.68714,-0.284116,1.6154,0.687137,0.422991,1.6154,0.687137,0.422991,0.908298,2.68714,-0.284116,1.46387,0.687137,0.547354,1.46387,0.687137,0.547354,0.908298,2.68714,-0.284116,1.29098,0.687137,0.639764,1.29098,0.687137,0.639764,0.908298,2.68714,-0.284116,1.10339,0.687137,0.69667,1.10339,0.687137,0.69667,0.908298,2.68714,-0.284116,0.908297,0.687137,0.715884,0.908297,0.687137,0.715884,0.908298,2.68714,-0.284116,0.713207,0.687137,0.696669,0.713207,0.687137,0.696669,0.908298,2.68714,-0.284116,0.525614,0.687137,0.639764,0.525614,0.687137,0.639764,0.908298,2.68714,-0.284116,0.352727,0.687137,0.547354,0.352727,0.687137,0.547354,0.908298,2.68714,-0.284116,0.20119,0.687137,0.422991,0.20119,0.687137,0.422991,0.908298,2.68714,-0.284116,0.0768275,0.687137,0.271454,0.0768275,0.687137,0.271454,0.908298,2.68714,-0.284116,-0.0155823,0.687137,0.0985669,-0.0155823,0.687137,0.0985669,0.908298,2.68714,-0.284116,-0.0724879,0.687137,-0.0890263,-0.0724879,0.687137,-0.0890263,0.908298,2.68714,-0.284116,-0.0917025,0.687137,-0.284117,-0.0917025,0.687137,-0.284117,0.908298,2.68714,-0.284116,-0.0724875,0.687137,-0.479207,-0.0724875,0.687137,-0.479207,0.908298,2.68714,-0.284116,-0.0155815,0.687137,-0.6668,-0.0155815,0.687137,-0.6668,0.908298,2.68714,-0.284116,0.0768286,0.687137,-0.839687,0.0768286,0.687137,-0.839687,0.908298,2.68714,-0.284116,0.201192,0.687137,-0.991223,0.201192,0.687137,-0.991223,0.908298,2.68714,-0.284116,0.352728,0.687137,-1.11559,0.352728,0.687137,-1.11559,0.908298,2.68714,-0.284116,0.525615,0.687137,-1.208,0.525615,0.687137,-1.208,0.908298,2.68714,-0.284116,0.713209,0.687137,-1.2649,0.713209,0.687137,-1.2649,0.908298,2.68714,-0.284116,0.908298,0.687137,-1.28412,1.10339,0.687137,0.69667,-0.0724879,0.687137,-0.0890263,1.88908,0.687137,-0.479206,0.713209,0.687137,-1.2649,0.908298,0.687137,-1.28412,1.10339,0.687137,-1.2649,1.29098,0.687137,-1.208,1.46387,0.687137,-1.11559,1.6154,0.687137,-0.991223,1.73977,0.687137,-0.839686,1.73977,0.687137,-0.839686,1.83218,0.687137,-0.666799,1.46387,0.687137,-1.11559,1.88908,0.687137,-0.479206,1.9083,0.687137,-0.284116,1.88908,0.687137,-0.0890256,1.88908,0.687137,-0.0890256,1.83218,0.687137,0.0985675,1.88908,0.687137,-0.479206,1.73977,0.687137,0.271454,1.6154,0.687137,0.422991,1.10339,0.687137,0.69667,1.46387,0.687137,0.547354,1.29098,0.687137,0.639764,1.10339,0.687137,0.69667,1.10339,0.687137,0.69667,0.908297,0.687137,0.715884,0.713207,0.687137,0.696669,0.525614,0.687137,0.639764,0.352727,0.687137,0.547354,0.352727,0.687137,0.547354,0.20119,0.687137,0.422991,0.0768275,0.687137,0.271454,0.0768275,0.687137,0.271454,-0.0155823,0.687137,0.0985669,-0.0724879,0.687137,-0.0890263,-0.0917025,0.687137,-0.284117,-0.0724875,0.687137,-0.479207,-0.0155815,0.687137,-0.6668,0.0768286,0.687137,-0.839687,0.201192,0.687137,-0.991223,0.352728,0.687137,-1.11559,0.525615,0.687137,-1.208,1.83218,0.687137,-0.666799,1.83218,0.687137,0.0985675,1.73977,0.687137,0.271454,1.6154,0.687137,0.422991,1.10339,0.687137,0.69667,0.713207,0.687137,0.696669,-0.0724879,0.687137,-0.0890263,0.352727,0.687137,0.547354,0.0768275,0.687137,0.271454,-0.0724879,0.687137,-0.0890263,1.88908,0.687137,-0.479206,1.73977,0.687137,0.271454,1.10339,0.687137,0.69667,0.713207,0.687137,0.696669,0.352727,0.687137,0.547354,-0.0724879,0.687137,-0.0890263];	

	// for( var v=0; v<temp_vertices.length; ++v ) {
	// 	this.vertices.push( temp_vertices[v]*100 );
	// }

	// this.indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,101,102,103,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,123,124,125,126,127,128,129,130,131,131,132,133,133,134,135,135,136,99,137,138,99,99,101,109,103,139,109,109,140,141,142,118,120,143,144,145,146,147,148,131,133,99,136,137,99,101,103,109,149,150,151,152,153,154,133,135,99,99,109,131];

	// var verticesNum = this.vertices.length/3;
	// for( var i=0; i<verticesNum; ++i ) {
	// 	this.scalars.push(1.0);
	// 	this.scalars.push(1.0);
	// 	this.scalars.push(1.0);
	// 	this.scalars.push(1.0);
	// }

}

// Cone.prototype = new PP.Object3D();
Cone.prototype.constructor = Cone;