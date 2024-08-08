import { Calculator } from '~/components/calculator'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-4">学マス計算機α</h1>
      <Calculator />
    </main>
  )
}
