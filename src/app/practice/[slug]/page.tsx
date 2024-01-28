import {notFound} from "next/navigation";
import {works} from "@/app/works";

export default function WorkPage({params: {slug}}: { params: { slug: string } }) {
  const Page = works[slug].Component

  if (!Page) notFound()

  return <Page/>
}
