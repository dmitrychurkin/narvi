import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Repository } from "./types";
import state from "./state";
import { toggleNavbar } from "./actions";
import { FEATURE_NAME } from "./const";

const useStore = create<Repository>()(
    devtools(
        persist(
            immer(
                subscribeWithSelector(set => ({
                    ...state,
                    toggleNavbar: toggleNavbar(set)
                })
            )
        ), { name: FEATURE_NAME, version: 1 })
    )
);

export default useStore;
