import {ReactNode} from "react";

export type WorkComponent = (options: { size?: { width: number, height: number }, showInfo?: boolean }) => ReactNode
