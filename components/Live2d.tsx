import { Live2DModel } from "pixi-live2d-display"
import { Application, Ticker } from "pixi.js"
import { useEffect, useRef } from "react"

export default function Live2d() {
  const appRef = useRef<Application>()
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  Live2DModel.registerTicker(Ticker)

  useEffect(() => {
    const createApp = async () => {
      appRef.current = new Application({
        view: canvasRef.current as HTMLCanvasElement,
        autoStart: true,
        resizeTo: sectionRef.current as HTMLDivElement,
        transparent: false,
      })

      const model = await Live2DModel.from("/chitose/chitose.model3.json")
      const model2 = await Live2DModel.from(
        "/shizuku/runtime/shizuku.model3.json"
      )

      appRef.current.stage.addChild(model)
      appRef.current.stage.addChild(model2)

      model.scale.set(0.35)
      model2.scale.set(0.35)

      model2.position.set(500, 200)
    }

    createApp()
  }, [])

  return (
    <section ref={sectionRef} style={{ minHeight: "100vh" }}>
      <canvas ref={canvasRef}></canvas>
    </section>
  )
}
