enum Direction {
  Up = 1,
  Down, // Implicitly assigned 2
  Left, // Implicitly assigned 3
  Right, // Implicitly assigned 4
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
