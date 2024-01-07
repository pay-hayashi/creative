export interface Shape {
  isOverlap(shape: Shape): boolean
  applyLazy(): void
  rollbackLazy(): void
  get area(): number
}

export interface ShapeP5 extends Shape {
  draw(): void
}
