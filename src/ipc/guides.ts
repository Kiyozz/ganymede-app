import { GuidesZod } from '@/types/download.ts'
import { invoke } from '@tauri-apps/api/core'
import { fromPromise } from 'neverthrow'

export class GetGuidesError extends Error {
  static from(error: unknown) {
    return new GetGuidesError('Failed to get guides', { cause: error })
  }
}

export class DownloadGuideFromServerError extends Error {
  static from(error: unknown) {
    return new DownloadGuideFromServerError('Failed to download guide', { cause: error })
  }
}

export function getGuides() {
  return fromPromise(invoke('get_guides'), GetGuidesError.from).map((response) => {
    return GuidesZod.parseAsync(response)
  })
}

export async function downloadGuideFromServer(guideId: number) {
  return fromPromise(invoke('download_guide_from_server', { guideId }), DownloadGuideFromServerError.from)
}
