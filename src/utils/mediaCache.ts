// Cache service pour vidéos et images
const DB_NAME = "CAT_MEDIA_CACHE";
const STORE_NAME = "media";
const VERSION = 1;

let db: IDBDatabase;

async function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (db) return resolve(db);

    const request = indexedDB.open(DB_NAME, VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBOpenDBRequest).result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: "url" });
      }
    };
  });
}

async function getFromCache(url: string): Promise<Blob | null> {
  try {
    const database = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(url);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result;
        resolve(result ? result.blob : null);
      };
    });
  } catch {
    return null;
  }
}

async function saveToCache(url: string, blob: Blob): Promise<void> {
  try {
    const database = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put({ url, blob, timestamp: Date.now() });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  } catch (error) {
    console.error("Cache write failed:", error);
  }
}

export async function getCachedMediaUrl(originalUrl: string): Promise<string> {
  // D'abord, essayer le cache
  const cached = await getFromCache(originalUrl);
  if (cached) {
    return URL.createObjectURL(cached);
  }

  // Sinon, fetcher et cacher
  try {
    const response = await fetch(originalUrl, {
      headers: {
        "Cache-Control": "max-age=2592000", // 30 jours
      },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const blob = await response.blob();
    await saveToCache(originalUrl, blob);

    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Failed to fetch media:", error);
    return originalUrl; // Fallback URL d'origine
  }
}

// Nettoyer les anciens cache (plus de 30 jours)
export async function cleanupOldCache(): Promise<void> {
  try {
    const database = await initDB();
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;

    const transaction = database.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.openCursor();

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest).result;
      if (cursor) {
        if (cursor.value.timestamp < thirtyDaysAgo) {
          cursor.delete();
        }
        cursor.continue();
      }
    };
  } catch {
    // Silently fail
  }
}
