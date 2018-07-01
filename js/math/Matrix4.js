"use strict";
var Matrix4 = (function () {
    function Matrix4(_n11, _n12, _n13, _n14, _n21, _n22, _n23, _n24, _n31, _n32, _n33, _n34, _n41, _n42, _n43, _n44) {
        if (_n11 === void 0) { _n11 = 1; }
        if (_n12 === void 0) { _n12 = 0; }
        if (_n13 === void 0) { _n13 = 0; }
        if (_n14 === void 0) { _n14 = 0; }
        if (_n21 === void 0) { _n21 = 0; }
        if (_n22 === void 0) { _n22 = 1; }
        if (_n23 === void 0) { _n23 = 0; }
        if (_n24 === void 0) { _n24 = 0; }
        if (_n31 === void 0) { _n31 = 0; }
        if (_n32 === void 0) { _n32 = 0; }
        if (_n33 === void 0) { _n33 = 1; }
        if (_n34 === void 0) { _n34 = 0; }
        if (_n41 === void 0) { _n41 = 0; }
        if (_n42 === void 0) { _n42 = 0; }
        if (_n43 === void 0) { _n43 = 0; }
        if (_n44 === void 0) { _n44 = 1; }
        this.elements = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        this.elements[0] = _n11, this.elements[1] = _n12, this.elements[2] = _n13, this.elements[3] = _n14;
        this.elements[4] = _n21, this.elements[5] = _n22, this.elements[6] = _n23, this.elements[7] = _n24;
        this.elements[8] = _n31, this.elements[9] = _n32, this.elements[10] = _n33, this.elements[11] = _n34;
        this.elements[12] = _n41, this.elements[13] = _n42, this.elements[14] = _n43, this.elements[15] = _n44;
    }
    Matrix4.perspective = function (fov, aspect, nearZ, farZ) {
        var cotHalfFoV = 1 / Math.tan(fov / 2);
        return new Matrix4(cotHalfFoV / aspect, 0, 0, 0, 0, cotHalfFoV, 0, 0, 0, 0, -(farZ + nearZ) / (farZ - nearZ), -2 * farZ * nearZ / (farZ - nearZ), 0, 0, -1, 0);
    };
    Matrix4.prototype.transpose = function () {
        this.swapPosition(1, 4);
        this.swapPosition(2, 8);
        this.swapPosition(3, 12);
        this.swapPosition(6, 9);
        this.swapPosition(7, 13);
        this.swapPosition(11, 14);
    };
    Matrix4.prototype.copy = function () {
        return new Matrix4(this.elements[0], this.elements[1], this.elements[2], this.elements[3], this.elements[4], this.elements[5], this.elements[6], this.elements[7], this.elements[8], this.elements[9], this.elements[10], this.elements[11], this.elements[12], this.elements[13], this.elements[14], this.elements[15]);
    };
    Matrix4.prototype.elementAt = function (i, j) {
        return this.elements[i * 4 + j];
    };
    Matrix4.prototype.print = function () {
        console.log(this.elements[0], this.elements[1], this.elements[2], this.elements[3]);
        console.log(this.elements[4], this.elements[5], this.elements[6], this.elements[7]);
        console.log(this.elements[8], this.elements[9], this.elements[10], this.elements[11]);
        console.log(this.elements[12], this.elements[13], this.elements[14], this.elements[15]);
    };
    Matrix4.prototype.mulVec4 = function (v) {
        var result = new Vec4();
        result.x = this.elements[0] * v.x + this.elements[1] * v.y + this.elements[2] * v.z + this.elements[3] * v.w;
        result.y = this.elements[4] * v.x + this.elements[5] * v.y + this.elements[6] * v.z + this.elements[7] * v.w;
        result.z = this.elements[8] * v.x + this.elements[9] * v.y + this.elements[10] * v.z + this.elements[11] * v.w;
        result.w = this.elements[12] * v.x + this.elements[13] * v.y + this.elements[14] * v.z + this.elements[15] * v.w;
        return result;
    };
    Matrix4.prototype.mulMat4 = function (mat4) {
        var result = new Matrix4();
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var tmp = 0;
                for (var t = 0; t < 4; t++) {
                    tmp += this.elementAt(i, t) * mat4.elementAt(t, j);
                }
                result.elements[i * 4 + j] = tmp;
            }
        }
        return result;
    };
    Matrix4.prototype.swapPosition = function (i, j) {
        var tmp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j] = tmp;
    };
    return Matrix4;
}());
