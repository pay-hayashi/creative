import {WaveClock} from "@/features/practice/wave-clock";
import {ReactNode} from "react";
import {notFound} from "next/navigation";
import {SquaresFloatInTheAir} from "@/features/practice/squares-float-in-the-air";
import {Net} from "@/features/practice/net";

const routes: Record<string, () => ReactNode> = {
  'wave-clock': WaveClock,
  'squares-float-in-the-air': SquaresFloatInTheAir,
  // 'tiled': Tiled,
  'net': Net,
} as const

export default function WorkPage({params: {slug}}: { params: { slug: string } }) {
  const Page = routes[slug]

  if (!Page) notFound()

  return <Page/>
}
