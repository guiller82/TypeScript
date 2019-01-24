"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var circle = __importStar(require("./math/circle"));
var rectagle_1 = require("./math/rectagle");
console.log(rectagle_1.CalcRectangle(5, 5));
console.log(circle.CalcCircunfCircle(5));
console.log(circle.Pi);
