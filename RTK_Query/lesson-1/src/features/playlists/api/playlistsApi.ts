//https://musicfun.it-incubator.app/api/1.0/
// Во избежание ошибок импорт должен быть из `@reduxjs/toolkit/query/react`
import type {
    BasePlaylistArgs,
    CreatePlaylistArgs,
    PlaylistData,
    PlaylistsResponse,
    UpdatePlaylistArgs
} from "@/features/playlists/api/playlistsApi.types.ts";
import {baseApi} from "@/app/api/baseApi.ts";
import type {Images} from "@/common/types";

export const playlistsApi = baseApi.injectEndpoints({
    // `endpoints` - метод, возвращающий объект с эндпоинтами для `API`, описанными
    // с помощью функций, которые будут вызываться при вызове соответствующих методов `API`
    // (например `get`, `post`, `put`, `patch`, `delete`)
    endpoints: build => ({
        // Типизация аргументов (<возвращаемый тип, тип query аргументов (`QueryArg`)>)
        // `query` по умолчанию создает запрос `get` и указание метода необязательно
        fetchPlaylists: build.query<PlaylistsResponse, void>({
            query: () => `playlists`,
            providesTags: ['Playlist'],
        }),
        createPlaylist: build.mutation<{ data: PlaylistData }, BasePlaylistArgs<CreatePlaylistArgs>>({
            query: body => ({method: 'post', url: `playlists`, body,}),
            invalidatesTags: ['Playlist'],
        }),
        deletePlaylist: build.mutation<void, string>({
            query: playlistId => ({method: 'delete', url: `playlists/${playlistId}`}),
            invalidatesTags: ['Playlist'],
        }),
        updatePlaylist: build.mutation<void, { playlistId: string, body: BasePlaylistArgs<UpdatePlaylistArgs> }>({
            query: ({playlistId, body}) => ({method: 'put', url: `playlists/${playlistId}`, body}),
            invalidatesTags: ['Playlist'],
        }),
        uploadPlaylistCover: build.mutation<Images, { playlistId: string, file: File }>({
            query: ({playlistId, file}) => {
                const formData = new FormData()
                formData.append('file', file)

                return ({method: 'post', url: `playlists/${playlistId}/images/main`, body: formData})
            },
            invalidatesTags: ['Playlist'],
        }),
        deletePlaylistCover: build.mutation<void, { playlistId: string }>({
            query: ({playlistId}) => ({method: 'delete', url: `playlists/${playlistId}/images/main`}),
            invalidatesTags: ['Playlist'],
        })
    }),
})

// `createApi` создает объект `API`, который содержит все эндпоинты в виде хуков,
// определенные в свойстве `endpoints`
export const {
    useFetchPlaylistsQuery,
    useCreatePlaylistMutation,
    useDeletePlaylistMutation,
    useUpdatePlaylistMutation,
    useUploadPlaylistCoverMutation,
    useDeletePlaylistCoverMutation
} = playlistsApi