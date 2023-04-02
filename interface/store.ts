export type StateHandler<TState> = (
    nextStateOrUpdater: TState
        | Partial<TState>
        | ((state: TState) => void),
    shouldReplace?: boolean,
    action?: string | {
        type: unknown;
    }
) => void;
