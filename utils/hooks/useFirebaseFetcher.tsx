import { AsyncThunkAction } from "@reduxjs/toolkit"
import { DocumentData } from "firebase/firestore"
import { useEffect } from "react"
import { useAppDispatch } from "../app/hook"

enum StatusLike {
    idle = "idle",
    loading = "loading",
    succeeded = "succeeded",
    failed = "failed",
}

const useFirebaseFetcher = <S extends keyof typeof StatusLike, A>(status: S, fetcher: AsyncThunkAction<A, void, {}>) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetcher)
        }
    }, [status])
}

export { useFirebaseFetcher }