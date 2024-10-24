import { Button } from '@/components/ui/button.tsx'
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { getGuideById, isGuideNew } from '@/lib/guide.ts'
import { cn } from '@/lib/utils.ts'
import { useDownloadGuideFromServer } from '@/mutations/download-guide-from-server.mutation.ts'
import { guidesFromServerQuery } from '@/queries/guides-from-server.query.ts'
import { guidesQuery } from '@/queries/guides.query.ts'
import { Guide } from '@/types/guide.ts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { CircleAlertIcon, CircleCheckIcon, ImportIcon, LoaderIcon, VerifiedIcon } from 'lucide-react'
import { fromPromise } from 'neverthrow'
import { ComponentProps } from 'react'
import * as Flag from 'country-flag-icons/react/3x2'

function FlagPerLang({ lang }: { lang: string }) {
  switch (lang) {
    case 'fr':
      return <Flag.FR className="size-5" />
    case 'en':
      return <Flag.US className="size-5" />
    case 'de':
      return <Flag.DE className="size-5" />
    case 'es':
      return <Flag.ES className="size-5" />
    case 'it':
      return <Flag.IT className="size-5" />
    case 'pt':
      return <Flag.PT className="size-5" />
    default:
      return <Flag.FR />
  }
}

export function GuideCardHeader({
  guide,
}: {
  guide: Pick<Guide, 'name' | 'user' | 'id' | 'lang'> & { downloads?: Guide['downloads'] | null }
}) {
  return (
    <>
      <CardHeader className="p-3">
        <CardTitle className="leading-5">{guide.name}</CardTitle>
        <CardDescription className="flex items-start justify-between gap-2">
          <div>
            <FlagPerLang lang={guide.lang} />
            <span>id: {guide.id}</span>
          </div>
          <span className="flex items-center gap-1">
            <span>
              de: <span className="font-semibold text-blue-400">{guide.user.name}</span>
            </span>
            {guide.user.is_certified && <VerifiedIcon className="size-4 text-orange-300" />}
          </span>
        </CardDescription>
      </CardHeader>
    </>
  )
}

export function GuideCardFooter({ className, children, ...props }: ComponentProps<typeof CardFooter>) {
  return (
    <CardFooter className={cn('gap-x-2 p-3 pt-0', className)} {...props}>
      {children}
    </CardFooter>
  )
}

export function GuideDownloadButton({
  guide,
}: {
  guide: Pick<Guide, 'id' | 'status'>
}) {
  const guides = useSuspenseQuery(
    guidesFromServerQuery({
      status: guide.status,
      page: 1,
    }),
  )
  const downloads = useSuspenseQuery(guidesQuery)
  const downloadGuideFromServer = useDownloadGuideFromServer()

  return (
    <>
      <Button
        size="icon"
        onClick={async () => {
          await fromPromise(downloadGuideFromServer.mutateAsync(guide), (err) => err)
        }}
        disabled={downloadGuideFromServer.isPending}
        className="relative z-0"
      >
        {downloadGuideFromServer.isSuccess && <CircleCheckIcon className="size-4" />}
        {downloadGuideFromServer.isPending && <LoaderIcon className="size-4 animate-[spin_2s_linear_infinite]" />}
        {downloadGuideFromServer.isIdle && <ImportIcon className="size-4" />}
        {isGuideNew(getGuideById(guides.data.data, guide.id), getGuideById(downloads.data.guides, guide.id)) && (
          <span className="-right-2 -top-3.5 absolute size-4 font-black text-2xl text-yellow-400">!</span>
        )}
      </Button>
      {downloadGuideFromServer.isError && <CircleAlertIcon className="size-5 text-red-500" />}
    </>
  )
}
