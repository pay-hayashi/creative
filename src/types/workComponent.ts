import {ElementType} from "react";

type WorkComponentProps = { size?: { width: number, height: number }, showInfo?: boolean }
export type WorkComponent = ElementType<WorkComponentProps>
