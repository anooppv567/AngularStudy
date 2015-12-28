/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function drawPieWith(pieData,graphID)
{
    var mainCointainer = d3.select("#"+graphID);
var WIDTH = $("#"+graphID).width();
var   HEIGHT = $("#"+graphID).height();
console.log(WIDTH , HEIGHT ,graphID , 'HEIGHTHEIGHT')
//HEIGHT=500;
 
var w = $("#"+graphID).width();//200;
var h = $("#"+graphID).height();
var r = h/2-45;
var color = d3.scale.category20c();

var data = pieData;
        
            /*[{"label":"Category A", "value":60}, 
		          {"label":"Category B", "value":25}, 
		          {"label":"Category C", "value":40}];*/


var vis = d3.select("#"+graphID).append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
var pie = d3.layout.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
     console.log("1",d);
                return d.data.bgcolor;
    
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
			d.innerRadius = 0;
			d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
    return data[i].label + ' : ' + d.value;}
		);
   // arcs.append("svg:text").attr("transform", function(d){
		//	d.innerRadius = r/2;
		//	d.outerRadius = 0;
   // return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
   // return data[i].value;}
	//	);
}
