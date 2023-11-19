export interface Shape {
  isOverlap(shape: Shape): boolean
  applyLazy(): void
  rollbackLazy(): void
  get area(): number
}
