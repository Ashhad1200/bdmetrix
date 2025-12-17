/**
 * Database initialization script
 * Run this to create the database file and schema
 * 
 * Usage: node scripts/init-db.js
 */

const { initializeDatabase, getDatabasePath } = require('../src/lib/db');

console.log('🚀 Initializing contact form database...\n');

try {
    initializeDatabase();
    console.log(`✅ Database initialized successfully!`);
    console.log(`📁 Location: ${getDatabasePath()}\n`);
    console.log('Database is ready to accept contact form submissions.\n');
} catch (error) {
    console.error('❌ Failed to initialize database:', error.message);
    process.exit(1);
}
