import {baseApi} from "@/app/api/baseApi.ts";
import type {FetchTracksResponse} from "@/features/tracks/api/tracksApi.types.ts";

export const tracksApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchTracks: build.infiniteQuery<FetchTracksResponse, void, string | undefined>({
            infiniteQueryOptions: {
                initialPageParam: undefined,
                getNextPageParam: lastPage => {
                    debugger
                    return lastPage.meta.nextCursor || undefined
                },
            },
            query: ({ pageParam }) => {
                debugger
                return {
                    url: '/playlists/tracks',
                    params: { cursor: pageParam, pageSize: 10, paginationType: 'cursor' },
                }
            },
        }),
    }),
})
export const { useFetchTracksInfiniteQuery } = tracksApi