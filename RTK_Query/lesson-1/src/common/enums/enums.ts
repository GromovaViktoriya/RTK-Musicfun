//обьект, который заменил enum.
//его нельзя перезаписать за счет as const, и можно использовать как тип через typeof и keyof typeof
export const CurrentUserReaction = {
    Like: 1,
    Dislike: -1,
    None: 0,
} as const

export type CurrentUserReaction = (typeof CurrentUserReaction)[keyof typeof CurrentUserReaction]