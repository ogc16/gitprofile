interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const CACHE_PREFIX = 'gitprofile_';
const DEFAULT_TTL = 60 * 60 * 1000;

export const getCachedData = <T>(key: string, ttlMs = DEFAULT_TTL): T | null => {
  try {
    const raw = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!raw) return null;

    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() - entry.timestamp > ttlMs) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
};

export const setCachedData = <T>(key: string, data: T): void => {
  try {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(entry));
  } catch {
    // localStorage full or unavailable
  }
};
