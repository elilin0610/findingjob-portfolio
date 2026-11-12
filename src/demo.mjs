import fs from 'node:fs';
import {roleDecision} from './role-filter.mjs';
export function classify(rows) {
 const seen = new Set();
 return rows.filter(row => { const key=JSON.stringify([row.company,row.id]); if(seen.has(key)) return false; seen.add(key); return true; }).map(row=>({...row,decision:roleDecision(row.title)}));
}
if (process.argv[1] && new URL(import.meta.url).pathname.toLowerCase().endsWith('/src/demo.mjs') && !process.env.NODE_TEST_CONTEXT) {
 const rows=JSON.parse(fs.readFileSync(new URL('../examples/jobs.json',import.meta.url),'utf8'));
 console.log(JSON.stringify(classify(rows),null,2));
}
