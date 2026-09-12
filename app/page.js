import { draftMode } from 'next/headers'

export default async function Page() {
  const { isEnabled } = await draftMode()
  return (
    <main>
      {isEnabled ? 'DRAFT-UNPUBLISHED-CONTENT' : 'PUBLIC-CONTENT'}
    </main>
  )
}
