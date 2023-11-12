import {useState} from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true)
  const noticeLoaded = () => setIsLoading(false)

  return {isLoading, noticeLoaded}
}
