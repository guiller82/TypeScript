var MyMath;
(function (MyMath) {
    function CalcCircunfCircle(diameter) {
        return diameter * Pi;
    }
    MyMath.CalcCircunfCircle = CalcCircunfCircle;
})(MyMath || (MyMath = {}));
