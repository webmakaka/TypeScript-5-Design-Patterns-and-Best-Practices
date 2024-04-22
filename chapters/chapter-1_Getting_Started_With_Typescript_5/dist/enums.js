var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let userDirection = Direction.Up;
var Permission;
(function (Permission) {
    Permission["Read"] = "read";
    Permission["Write"] = "write";
    Permission["Delete"] = "delete";
})(Permission || (Permission = {}));
function grantPermission(permission) {
    // ... handle permission
}
grantPermission(Permission.Read);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
export {};
// myColor = "orange"
