import {
  getSubscriberRankingClicks,
  getSubscriberRankingCount,
  getSubscriberRankingPlacement,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: registerCount } = await getSubscriberRankingCount(subscriberId)
  const { count: clicksCount } = await getSubscriberRankingClicks(subscriberId)
  const { placement: rankPlacement } =
    await getSubscriberRankingPlacement(subscriberId)
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-grey-700 border border-grey-600 px4 py-7 flex flex-col items-center justify-items-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-grey-200 leading-none">
          {clicksCount}
        </span>
        <span className="text-sm text-grey-300 leading none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-grey-700 border border-grey-600 px4 py-7 flex flex-col items-center justify-items-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-grey-200 leading-none">
          {registerCount}
        </span>
        <span className="text-sm text-grey-300 leading none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="relative bg-grey-700 border border-grey-600 px4 py-7 flex flex-col items-center justify-items-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-grey-200 leading-none">
          {rankPlacement ? `${rankPlacement}º` : '-'}
        </span>
        <span className="text-sm text-grey-300 leading none text-center">
          Posição no ranking
        </span>
        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  )
}
