import {WaveClock} from "@/features/practice/1-wave-clock";
import {ReactNode} from "react";
import {notFound} from "next/navigation";
import {SquaresFloatInTheAir} from "@/features/practice/2-squares-float-in-the-air";

const routes: Record<string, () => ReactNode> = {
  'wave-clock': WaveClock,
  'squares-float-in-the-air': SquaresFloatInTheAir,
  // 'tiled': Tiled,
} as const

export default function WorkPage({params: {slug}}: { params: { slug: string } }) {
  const Page = routes[slug]

  if (!Page) notFound()

  return <Page/>
}
