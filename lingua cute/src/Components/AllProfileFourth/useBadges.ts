import { useState, useEffect } from "react";

export interface Badge {
  id: string;
  label: string;
  sublabel: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export function useBadges(userId: string) {
  const [badges, setBadges] = useState<Badge[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const controller = new AbortController();

    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/users/${userId}/badges`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Badge[] = await res.json();
        setBadges(data);
      } catch (err: unknown) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [userId]);

  return { badges, isLoading, error };
}