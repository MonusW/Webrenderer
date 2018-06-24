var canvas = document.getElementById("canvas") as HTMLCanvasElement;
var width = 800;
var height = 800;
var renderer = new WebRenderer(canvas, width, height);

// for (var i = 0; i < 580; i+=5) {
//     for (var j = 0; j < 580; j+=5) {
//         var v = Math.sqrt(Math.pow(i - 350, 2) + Math.pow(j-350, 2)) - 200;
//         if (v >= 0 && v < 2) {
//             renderer.drawLine(350, 350, i, j, new Color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)));
//         }
//     }
// }

var v1 = new Vertex(0, 0, 0, new Color(0xff0000));
var v2 = new Vertex(0, 400, 0, new Color(0x00ff00));
var v3 = new Vertex(400, 150, 0, new Color(0x0000ff));

// renderer.drawTriangle(v1, v2, v3);
renderer.drawLine(v1, v2);
renderer.drawLine(v2, v3);
renderer.drawLine(v3, v1);


renderer.render();

