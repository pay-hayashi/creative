import {useEffect, useState} from "react";

export const useWindowSize = (props?: { size?: { width: number, height: number } }) => {
  const [[w, h], setSize] = useState([0, 0])
  const setCurrentSize = () => setSize([props?.size?.width ?? window.innerWidth, props?.size?.height ?? window.innerHeight])

  useEffect(setCurrentSize, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    window.addEventListener('resize', () => {
      clearTimeout(timer)
      timer = setTimeout(setCurrentSize, 200)
    })
  }, [])

  return [w, h]
}
