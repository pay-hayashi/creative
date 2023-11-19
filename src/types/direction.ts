export const directions = ['up', 'down', 'left', 'right'] as const
export type Direction = typeof directions[number]
