import type { NextPage } from "next"
import dynamic from "next/dynamic"

const DynamicL2d = dynamic(() => import("../components/Live2d"), { ssr: false })

const Home: NextPage = () => {
  return <DynamicL2d />
}

export default Home
