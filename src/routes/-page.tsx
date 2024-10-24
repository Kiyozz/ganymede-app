import { PageContent } from '@/components/page-content.tsx'
import { PageTitle, PageTitleText } from '@/components/page-title.tsx'
import { cn } from '@/lib/utils.ts'
import { BackButtonLink } from '@/routes/downloads/-back-button-link.tsx'
import { type AnyRouter, LinkProps, type RegisteredRouter, type RoutePaths } from '@tanstack/react-router'
import { PropsWithChildren } from 'react'

export function Page<
  TRouter extends AnyRouter = RegisteredRouter,
  TFrom extends RoutePaths<TRouter['routeTree']> | string = string,
  TTo extends string | undefined = '.',
>({
  title,
  children,
  to,
  search,
  from,
  hash,
  state,
  className,
  pageTitleTextClassName,
}: PropsWithChildren<{ title: string; className?: string; pageTitleTextClassName?: string }> &
  LinkProps<TRouter, TFrom, TTo>) {
  return (
    <PageContent className={cn('pb-2', className)}>
      <PageTitle>
        <div className="flex items-center gap-2">
          {(to || search || from || hash || state) && (
            <BackButtonLink to={to} search={search} from={from} hash={hash} state={state} />
          )}
          <PageTitleText className={pageTitleTextClassName}>{title}</PageTitleText>
        </div>
      </PageTitle>
      {children}
    </PageContent>
  )
}
