import { test, expect } from '@playwright/test'

test('master difficulty', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByLabel('MASTER').click()
  await page.getByLabel('vocal').fill('1700')
  await page.getByLabel('dance').fill('1200')
  await page.getByLabel('visual').fill('1200')
  await expect(page.getByTestId('final-parameter')).toContainText('4190')
  await expect(page.getByTestId('required-points-S+')).toContainText('22825')
})

test('pro difficulty overflow', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByLabel('PRO').click()
  await page.getByLabel('vocal').fill('1700')
  await page.getByLabel('dance').fill('1200')
  await page.getByLabel('visual').fill('1200')
  await expect(page.getByTestId('final-parameter')).toContainText('3960')
  await expect(page.getByTestId('required-points-S+')).toContainText('44200')
})
