import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function backupTable(tableName) {
  console.log(`Backing up table: ${tableName}...`);
  const { data, error } = await supabase.from(tableName).select('*');

  if (error) {
    console.error(`Error fetching ${tableName}:`, error);
    return;
  }

  const backupDir = path.join(process.cwd(), 'backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
  }

  const timestamp = new Date().toISOString().split('T')[0];
  const filePath = path.join(backupDir, `${tableName}_${timestamp}.json`);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Successfully backed up ${tableName} to ${filePath}`);
}

async function runBackups() {
  await backupTable('leads');
  await backupTable('subscribers');
}

runBackups().catch(err => {
  console.error('Backup failed:', err);
  process.exit(1);
});
