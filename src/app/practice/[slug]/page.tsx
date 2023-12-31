import {WaveClock} from "@/features/practice/1-wave-clock";
import {ReactNode} from "react";
import {notFound} from "next/navigation";
import {Tiled} from "@/features/practice/3";
import {SquaresFloatInTheAir} from "@/features/practice/2-squares-float-in-the-air";

const routes: Record<string, () => ReactNode> = {
  '1-wave-clock': WaveClock,
  '2-squares-float-in-the-air': SquaresFloatInTheAir,
  '3': Tiled,
}

export default function WorkPage({params: {slug}}: { params: { slug: string } }) {
  const Page = routes[slug]

  if (!Page) notFound()

  return <Page/>
}
