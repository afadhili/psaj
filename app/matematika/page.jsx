import Navbar from "@/components/layouts/navbar"

export default function Matematika() {
  return (
    <main>

      <Navbar />

      <div className="container mx-auto">
        <iframe src="/mtk/mtk-1.pdf" className="w-full h-screen my-8" ></iframe>
        <iframe src="/mtk/mtk-2.pdf" className="w-full h-screen my-8" ></iframe>
      </div>

    </main>
  )
}