/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//sInitChart();
/// <reference path="d3.js" />

function InitChart(barData1,graphID) {
    //alert("load");
    /* var colorData = [{
     'color': red,
     
     }, {
     'color': green,
     }, {
     'color': yellow,
     }, {
     'color': orange,
     }, {
     'color': black,
     }, {
     'color': brown,
     }];*/
    console.log(barData1);
    var GraphWidth=1000;
    var barData = barData1;
    debugger;
    var mainCointainer = d3.select("#"+graphID);
    var WIDTH = $("#"+graphID).width();
    var   HEIGHT = $("#"+graphID).height();
    console.log(WIDTH , HEIGHT ,graphID , 'HEIGHTHEIGHT')
    //HEIGHT=500;
    console.log(HEIGHT);
    
    
    
    var vis = mainCointainer.append('svg').attr('height' , HEIGHT) .attr('width' , WIDTH);
    
    
    MARGINS = {
    top: 20,
    right: 20,
    bottom: 25,
    left: 50
    },
    xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(barData.map(function (d) {
                                                                                                               return d.x;
                                                                                                               })),
    
    
    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
                                                                                     d3.max(barData, function (d) {
                                                                                            return d.y;
                                                                                            })
                                                                                     ]),
    
    xAxis = d3.svg.axis()
    .scale(xRange)
    .tickSize(5)
    .tickSubdivide(true),
    
    yAxis = d3.svg.axis()
    .scale(yRange)
    .tickSize(5)
    .orient("left")
    .tickSubdivide(true);
    
    
    vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);
    
    vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis);
    
    
    vis.selectAll('rect')
    .data(barData)
    .enter()
    .append('rect')
    .attr('x', function (d) {
          return xRange(d.x);
          })
    .attr('y', function (d) {
          return yRange(d.y);
          })
    .attr('width', xRange.rangeBand())
    .attr('height', function (d) {
          return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
          })
    
    .attr('fill',  function (d)
          {
          return d.color;
          })
    .on('mouseover',function(d){
        
        d3.select(this)
        .attr('fill','blue');
        
        // console.log(d);
        })
    .on('mouseout',function(d){
        d3.select(this)
        .attr('fill',function(d)
              {
              return d.color;
              }
              );
        })
    .on('click',function(d){
        // console.log(d ,'d')
        window.localStorage.setItem("dateValue", d.y.toString());
        window.location.href = 'drilldownPage.html';
        });
    
    var svg = d3.select("#"+graphID).append("svg")
    .attr("width", WIDTH )
    .attr("height", HEIGHT)
    .append("g")
    
    
    var legend = svg.selectAll('g')
    .data(barData)
    .enter()
    .append('g')
    .attr('class', 'legend');
    
    legend.append('rect')
    .attr('x', WIDTH -60)
    .attr('y', function(d, i){ return (i *  20)+9;})
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', function(d) { 
           return d.color;
           });
    
    legend.append('text')
    .attr('x', WIDTH - 40)
    .attr('y', function(d, i){ return (i *  20) + 8;})
    .text(function(d){
          return d.x; });
    
}


