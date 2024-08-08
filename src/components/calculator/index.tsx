'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { RadioGroupItem, RadioGroup } from '../ui/radio-group'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

const schema = z.object({
  vocal: z.number().min(0).max(1500),
  dance: z.number().min(0).max(1500),
  visual: z.number().min(0).max(1500),
  finalExamRanking: z.number().min(1).max(3),
})

const parameterFields: ['vocal', 'dance', 'visual'] = [
  'vocal',
  'dance',
  'visual',
]

const rankingPointsTable: Record<number, number> = {
  1: 1700,
  2: 900,
  3: 500,
}

const pointsTable = {
  S: 13000,
  'A+': 11500,
  A: 10000,
  'B+': 8000,
  B: 6000,
  'C+': 4500,
  C: 3000,
}

/**
 * score to points fraction:
 * スコア	倍率
 * 0～5000	0.3
 * 5001～10000	0.15
 * 10001～20000	0.08
 * 20001～30000	0.04
 * 30001～40000	0.02
 * 40001～	0.01
 */

const rangeValue = (min: number, max: number, value: number) =>
  Math.max(Math.min(value, max) - min, 0)

const scoreImpact = (score: number) => {
  const result = Math.floor(
    (rangeValue(0, 5000, score) * 3) / 10 +
      (rangeValue(5000, 10000, score) * 15) / 100 +
      (rangeValue(10000, 20000, score) * 8) / 100 +
      (rangeValue(20000, 30000, score) * 4) / 100 +
      (rangeValue(30000, 40000, score) * 2) / 100 +
      (rangeValue(40000, Infinity, score) * 1) / 100,
  )

  console.log('scoreImpact', score, result)

  return result
}
const getRequiredFinalExamScore = (points: number) => {
  console.log(points)
  const result = Math.ceil(
    (rangeValue(0, scoreImpact(5000), points) * 10) / 3 +
      (rangeValue(scoreImpact(5000), scoreImpact(10000), points) * 100) / 15 +
      (rangeValue(scoreImpact(10000), scoreImpact(20000), points) * 100) / 8 +
      (rangeValue(scoreImpact(20000), scoreImpact(30000), points) * 100) / 4 +
      (rangeValue(scoreImpact(30000), scoreImpact(40000), points) * 100) / 2 +
      rangeValue(scoreImpact(40000), Infinity, points) / 0.01,
  )
  console.log('getRequiredFinalExamScore', points, result)
  return result
}

const ensureNumber = (value: string | number) => {
  const number = Number(value)
  return Number.isNaN(number) ? 0 : number
}

const ensureMaxWithBonus = (value: number) => Math.min(1500, value + 30)

export const Calculator = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      vocal: 0,
      dance: 0,
      visual: 0,
      finalExamRanking: 1,
    },
  })

  const values = form.watch()

  const finalParameter =
    ensureMaxWithBonus(ensureNumber(values.dance)) +
    ensureMaxWithBonus(ensureNumber(values.vocal)) +
    ensureMaxWithBonus(ensureNumber(values.visual))

  const parameterPoints = Math.floor((finalParameter * 23) / 10)

  const rankingPoints = rankingPointsTable[values.finalExamRanking] ?? 0

  return (
    <div className="flex max-w-96 flex-col items-center justify-center gap-6">
      <section>
        <Form {...form}>
          <form>
            <FormLabel>パラメータ（最終試験前）</FormLabel>
            <div className="flex gap-4">
              {parameterFields.map((parameter) => (
                <FormField
                  key={parameter}
                  control={form.control}
                  name={parameter}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">{parameter}</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          inputMode="numeric"
                          onFocus={(e) => e.currentTarget.select()}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormField
              control={form.control}
              name="finalExamRanking"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="capitalize">最終試験順位</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(Number(value))}
                      defaultValue={String(field.value)}
                      className="flex gap-8"
                    >
                      {[1, 2, 3].map((value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={String(value)} />
                          </FormControl>
                          <FormLabel className="font-normal">{value}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </section>
      <section className="w-full">
        <h2>パラメータ合計値（ボーナス加算後）：{finalParameter}</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>評価</TableHead>
              <TableHead>必要な最終試験スコア</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(pointsTable).map(([ranking, points]) => (
              <TableRow key={ranking}>
                <TableCell>{ranking}</TableCell>
                <TableCell>
                  {getRequiredFinalExamScore(
                    points - parameterPoints - rankingPoints,
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}
