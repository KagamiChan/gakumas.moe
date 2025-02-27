'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Hajime } from './hajime'

enum ProduceMode {
  Hajime = 'Hajime',
  NIA = 'NIA',
}

export const Calculator = () => {
  return (
    <div>
      <Tabs defaultValue={ProduceMode.Hajime}>
        <TabsList>
          <TabsTrigger value={ProduceMode.NIA}>N.I.A</TabsTrigger>
          <TabsTrigger value={ProduceMode.Hajime}>定期公演「初」</TabsTrigger>
        </TabsList>
        <TabsContent value={ProduceMode.Hajime}>
          <Hajime />
        </TabsContent>
        <TabsContent value={ProduceMode.NIA}>NIA</TabsContent>
      </Tabs>
    </div>
  )
}
