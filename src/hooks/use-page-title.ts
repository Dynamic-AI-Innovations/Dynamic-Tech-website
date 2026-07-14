import { useEffect } from "react";

const DEFAULT_TITLE = "Dynamics Technology — Building Africa's Silicon Valley";

/**
 * Sets a per-route document title and meta description, restoring the
 * previous values on unmount. Avoids a react-helmet dependency for a
 * single-page-per-route SPA.
 */
export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? null;
    if (description && meta) {
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle || DEFAULT_TITLE;
      if (previousDescription !== null && meta) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
