import { Calculator } from '~/components/calculator'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-xl font-semibold">学マス計算機α</h1>
      <Calculator />
      <footer className="mt-8 flex flex-col items-center text-sm leading-8">
        <div className="flex gap-4">
          <a
            href="https://gakuen.idolmaster-official.jp/"
            className="hover:text-[#ff6900]"
          >
            学マス公式サイト
          </a>
          <a
            href="https://github.com/kagamichan/gakumas.moe"
            className="hover:text-[#ff6900]"
          >
            ソースコード
          </a>
        </div>
        <span className="text-xs">©2024 虹夏工房 feat.かがみ</span>
      </footer>
    </main>
  )
}
