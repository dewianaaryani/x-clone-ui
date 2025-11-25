// check-exports.mjs
import * as adapter from '@prisma/adapter-mariadb';
console.log('Available exports:', Object.keys(adapter));
console.log('Full export:', adapter);

// Also try individual imports to see what works
try {
  const { PrismaMariaDbAdapter } = await import('@prisma/adapter-mariadb');
  console.log('PrismaMariaDbAdapter import:', typeof PrismaMariaDbAdapter);
} catch (e) {
  console.log('PrismaMariaDbAdapter import failed:', e.message);
}

try {
  const { PrismaMariaDb } = await import('@prisma/adapter-mariadb');
  console.log('PrismaMariaDb import:', typeof PrismaMariaDb);
} catch (e) {
  console.log('PrismaMariaDb import failed:', e.message);
}

// Try default import
try {
  const defaultExport = await import('@prisma/adapter-mariadb');
  console.log('Default export:', defaultExport.default);
} catch (e) {
  console.log('Default import failed:', e.message);
}