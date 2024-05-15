enum Direction {
  Up = 0,
  Down, // Implicitly assigned 1
  Left, // Implicitly assigned 2
  Right, // Implicitly assigned 3
}

let userDirection: Direction = Direction.Up

enum Permission {
  Read = "read",
  Write = "write",
  Delete = "delete",
}

function grantPermission(permission: Permission) {
  // ... handle permission
}

grantPermission(Permission.Read)

enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Red
// myColor = "orange"
