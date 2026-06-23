import {Route, Routes} from "react-router";
import {PageNotFound} from "@/common/components";
import {MainPage} from "@/app/MainPage";
import {PlaylistsPage} from "@/features/playlists/ui/PlaylistsPage";
import {TracksPage} from "@/features/tracks/ui";
import {ProfilePage} from "@/features/auth/ui";
import {Path} from "@/common/routing/Path.ts";
import {OAuthCallback} from "@/features/auth/ui/OAuthCallback/OAuthCallback.tsx";



export const Routing = () => (
    <Routes>
        <Route path={Path.Main} element={<MainPage />} />
        <Route path={Path.Playlists} element={<PlaylistsPage />} />
        <Route path={Path.Tracks} element={<TracksPage />} />
        <Route path={Path.Profile} element={<ProfilePage />} />
        <Route path={Path.OAuthRedirect} element={<OAuthCallback />} />
        <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
)