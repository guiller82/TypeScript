var MyMath;
(function (MyMath) {
    function CalcRectangle(width, lenght) {
        return width + lenght;
    }
    MyMath.CalcRectangle = CalcRectangle;
})(MyMath || (MyMath = {}));
