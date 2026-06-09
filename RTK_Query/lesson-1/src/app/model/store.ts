import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {baseApi} from "@/app/api/baseApi.ts";

// В файле store.ts подключите playlistsApi, добавьте middleware для использования дополнительных функций
// RTK Query: кэширование, инвалидация и pooling, и установите setupListeners для подключения слушателя событий фокуса
// (refetchOnFocus) и повторного подключения (refetchOnReconnect), чтобы автоматически перезагружать данные при
// возвращении на страницу или восстановлении подключения:

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)