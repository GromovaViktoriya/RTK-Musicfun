import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import s from "@/features/playlists/ui/PlaylistsPage/PlaylistItem/PlaylistCover/PlaylistCover.module.css";

export const PlaylistsSkeleton = ()=>{
    return (
        <div>
            <div>
                <Skeleton className={s.cover} />
                <Skeleton count={2}/>
            </div>
            <Skeleton count={4}/>
        </div>
    )
}