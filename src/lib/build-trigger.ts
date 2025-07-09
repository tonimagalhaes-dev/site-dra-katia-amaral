
// This file exists to trigger a clean TypeScript rebuild
// when there are compilation cache issues
// Updated timestamp to force complete rebuild
export const BUILD_TRIGGER = Date.now();

// Force TypeScript to rebuild all declaration files
export const FORCE_REBUILD = true;

// Additional export to ensure module is considered changed
export const REBUILD_VERSION = "2.0.0";
