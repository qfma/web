// Width and height of the figure.
var width = 500, height = 150;

// Create the svg element.
var svg = d3.select('#helix-animation').append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("class", "helix-large")
    .attr("viewBox", "0 0 600 150")
    .attr("perserveAspectRatio", "xMinYMid")
    .attr("id", "helix");

var upperSeries = [
    [{x: 468, y: 20.5}, {x: 478, y: 30.5}, {x: 478, y: 74}, {x: 468, y: 74}],
    [{x: 422, y: 30.5}, {x: 432, y: 20.5}, {x: 432, y: 74}, {x: 422, y: 74}],
    [{x: 318, y: 20.5}, {x: 328, y: 30.5}, {x: 328, y: 74}, {x: 318, y: 74}],
    [{x: 272, y: 30.5}, {x: 282, y: 20.5}, {x: 282, y: 74}, {x: 272, y: 74}],
    [{x: 168, y: 20.5}, {x: 178, y: 30.5}, {x: 178, y: 74}, {x: 168, y: 74}],
    [{x: 122, y: 30.5}, {x: 132, y: 20.5}, {x: 132, y: 74}, {x: 122, y: 74}]
];

var lowerSeries = [
    [{x: 122, y: 120.5}, {x: 132, y: 130.5}, {x: 132, y: 76}, {x: 122, y: 76}],
    [{x: 168, y: 130.5}, {x: 178, y: 120.5}, {x: 178, y: 76}, {x: 168, y: 76}],
    [{x: 272, y: 120.5}, {x: 282, y: 130.5}, {x: 282, y: 76}, {x: 272, y: 76}],
    [{x: 318, y: 130.5}, {x: 328, y: 120.5}, {x: 328, y: 76}, {x: 318, y: 76}],
    [{x: 422, y: 120.5}, {x: 432, y: 130.5}, {x: 432, y: 76}, {x: 422, y: 76}],
    [{x: 468, y: 130.5}, {x: 478, y: 120.5}, {x: 478, y: 76}, {x: 468, y: 76}]
];

var upperColors = ["#4A89DC", "#8CC152", "#DA4453", "#F6BB42", "#4A89DC","#8CC152"];
var lowerColors = ["#F6BB42", "#DA4453", "#8CC152", "#4A89DC", "#F6BB42","#DA4453"];

var upperLine = [ 
    { "x":1, "y":1}, {"x":150, "y":150},
    {"x":300, "y":1}, {"x":450, "y":150},
    {"x":600, "y":1}
];

var lowerLine = [
    {"x":600, "y":150},
    {"x":450, "y":1}, {"x":300, "y":150},
    {"x":150, "y":1},{"x":1, "y":150}
];

// Create a base shape
var line = d3.svg.line()
    .x(function(d) { return d.x ; })
    .y(function(d) { return d.y; });

var transition = svg.transition().duration(200),
    delay = function(d, i) { return i * 310; };

function transition_path (path, pathlength) {
    path.attr("stroke-dasharray", pathlength + " " + pathlength)
    .attr("stroke-dashoffset", pathlength)
    .transition()
    .duration(2000)
    .ease("linear")
    .attr("stroke-dashoffset", 0);
}

function transition_bases (selection) {
    transition.selectAll(selection)
              .delay(delay)
              .transition().duration(600)
              .attr("opacity", "1");
}

var upperPath = svg.append("path")
                   .attr("d", line(upperLine))
                   .attr("stroke", "black")
                   .attr("stroke-width", "2.1")
                   .attr("fill", "none");

var lowerPath = svg.append("path")
                   .attr("d", line(lowerLine))
                   .attr("stroke", "black")
                   .attr("stroke-width", "2.1")
                   .attr("fill", "none");

var upperBases =  svg.selectAll(".upperbases")
                     .data(upperSeries)
                     .enter().append("path")
                     .attr("class", "upperbases")
                     .attr("d", line)
                     .attr("fill", function(d, i) {return upperColors[i]; })
                     .attr("opacity", "0");

var lowerBases =  svg.selectAll(".lowerbases")
                     .data(lowerSeries)
                     .enter().append("path")
                     .attr("class", "lowerbases")
                     .attr("d", line)
                     .attr("fill", function(d, i) {return lowerColors[i]; })
                     .attr("opacity", "0");

var upperPathLength = upperPath.node().getTotalLength(),
    bottomPathLength = lowerPath.node().getTotalLength();

transition_path(upperPath, upperPathLength)
transition_path(lowerPath, bottomPathLength)
transition_bases(".upperbases")
transition_bases(".lowerbases")