import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True in the browser, false during server rendering and hydration. Used to
 * gate `createPortal(…, document.body)`, which can't run on the server — and
 * unlike a `useEffect(() => setMounted(true))` flag it doesn't force an extra
 * render pass.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
