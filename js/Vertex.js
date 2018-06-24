"use strict";
var Vertex = (function () {
    function Vertex(x, y, z, color) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.position = new Vec3(x, y, z);
        if (color === undefined) {
            this.color = new Color(0x000000);
        }
        else {
            this.color = color;
        }
    }
    Vertex.prototype.interp = function (v, t) {
        var position = this.position.interp(v.position, t);
        var color = this.color.interp(v.color, t);
        return new Vertex(position.x, position.y, position.z, color);
    };
    Vertex.prototype.swap = function (v) {
        this.position.swap(v.position);
        this.color.swap(v.color);
    };
    return Vertex;
}());
