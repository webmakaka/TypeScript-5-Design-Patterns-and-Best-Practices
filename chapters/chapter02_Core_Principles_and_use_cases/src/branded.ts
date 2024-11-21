type Point3d = { x: number; y: number; z: number }
type Color = { red: number; green: number; blue: number }
type dot = { x: number; y: number; z: number }
const data: dot = { x: 1, y: 2, z: 3 }

function accept(p: Point3d) {}

accept(data)

type NominalTyped<Type, Brand> = Type & { __type: Brand }
type EuclideanPoint = NominalTyped<Point3d, symbol>
function accept2(p: EuclideanPoint) {}
// accept2(data)
