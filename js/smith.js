nv.addGraph(function() {  
   // Added forceY
   var chart = nv.models.lineChart().showLegend(false).forceY([0, 20]);
 
   chart.xAxis
       .axisLabel('Fiscal Year')
       .tickFormat(d3.format('r'))
        // Added tickValues
       .tickValues([2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009]);
 
   chart.yAxis
       .axisLabel('Market Value ($M)')
       .tickFormat(d3.format('.02f')); 
   d3.select('#endowment svg')
       .datum(mvalues())
     .transition().duration(500)
       .call(chart);
 
   // added this janky line
   d3.select('#endowment .nv-y .nv-axis .nv-axislabel').attr('y', '-50');
   nv.utils.windowResize(function() { 
       d3.select('#endowment svg').call(chart);
       // added this janky line
       d3.select('#endowment .nv-y .nv-axis .nv-axislabel').attr('y', '-50');
   });

   return chart;
 });
 
 
 function mvalues() {

   var mvalues = [{x: 2001, y: 7.8}, {x: 2002, y: 8.1}, {x: 2003, y: 8.9}, 
                  {x: 2004, y: 10.3}, {x: 2005, y: 11.9}, {x: 2006, y: 13.4},
                  {x: 2007, y: 16.0}, {x: 2008, y: 16.7}, {x: 2009, y: 11.7}];

   return [
     {
       values: mvalues,
       key: '',
       color: '#ba0600'
     }
   ];
 }
