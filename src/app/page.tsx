import Link from 'next/link'
import { Badge } from '~/components/ui/badge'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold">少女祈祷中</h1>
        <Badge>JP</Badge>
        <p>
          このウェブサイトは、ゲーム『学園アイドルマスター』の非公式アシスタントとして計画されており、計算機やデータベースなどの機能を提供する予定です。
          <ruby>
            様々な理由<rp>(</rp>
            <rt>ゲームに時間がかかりすぎる</rt>
            <rp>)</rp>
          </ruby>
          により、現在はまだ建設中です。協力に興味がある場合は、contact@gakumas.moeまでご連絡ください
        </p>

        <Badge>ZH</Badge>
        <p lang="zh">
          本网站计划作为游戏《学园偶像大师》的非官方助手，提供计算器和数据库等功能，由于
          <ruby>
            种种原因<rp>(</rp>
            <rt>游戏太花时间了</rt>
            <rp>)</rp>
          </ruby>
          ，目前还在建设中。如果对于合作感兴趣，请联系contact@gakumas.moe
        </p>
      </div>
    </main>
  )
}
