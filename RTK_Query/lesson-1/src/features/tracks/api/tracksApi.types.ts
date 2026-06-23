import {z} from "zod";
import {
    fetchTracksResponseSchema,
    trackAttachmentSchema,
    trackAttributesSchema,
    trackDataSchema,
    trackRelationshipsSchema, tracksIncludedSchema, tracksMetaSchema
} from "@/features/tracks/model";



export type TrackAttachment = z.infer<typeof trackAttachmentSchema>
export type TrackRelationships = z.infer<typeof trackRelationshipsSchema>
export type TrackAttributes = z.infer<typeof trackAttributesSchema>
export type TrackData = z.infer<typeof trackDataSchema>
export type TracksIncluded = z.infer<typeof tracksIncludedSchema>
export type TracksMeta = z.infer<typeof tracksMetaSchema>
export type FetchTracksResponse = z.infer<typeof fetchTracksResponseSchema>

// Arguments
export type FetchTracksArgs = {
    pageNumber?: number
    pageSize?: number
    search?: string
    sortBy?: 'publishedAt' | 'likesCount'
    sortDirection?: 'asc' | 'desc'
    tagsIds?: string[]
    artistsIds?: string[]
    userId?: string
    includeDrafts?: boolean
    onlyLikedByMe?: boolean // Добавлено
    paginationType?: 'offset' | 'cursor'
    cursor?: string
}


//export type FetchTracksResponse = {
//     data: TrackData[]
//     included: TracksIncluded[]
//     meta: TracksMeta
// }
//
// export type TrackData = {
//     id: string
//     type: 'tracks'
//     attributes: TrackAttributes
//     relationships: TrackRelationships
// }
//
// export type TracksIncluded = {
//     id: string
//     type: string // Поставили string
//     attributes: {
//         name: string
//     }
// }
//
// export type TracksMeta = {
//     nextCursor: string | null
//     page: number
//     pageSize: number
//     totalCount: number | null
//     pagesCount: number | null
// }
//
// export type TrackAttributes = {
//     title: string
//     addedAt: string
//     likesCount: number // Добавили
//     attachments: TrackAttachment[]
//     images: Images
//     currentUserReaction: CurrentUserReaction
//     user: User
//     isPublished: boolean
//     publishedAt: string
//     duration: number // Добавили
// }
//
// export type TrackRelationships = {
//     artists: {
//         data: {// Добавили [], так как это массив данных
//             id: string
//             type: string
//         }[]
//     }
// }
//
// export type TrackAttachment = {
//     id: string
//     addedAt: string
//     updatedAt: string
//     version: number
//     url: string
//     contentType: string
//     originalName: string
//     fileSize: number
// }