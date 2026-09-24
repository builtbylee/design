// Builds library/gallery.html from library/library.json and library/entries/*.{html,md}.
// Usage: node tools/build-gallery.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const lib = join(root, 'library');
const { entries } = JSON.parse(readFileSync(join(lib, 'library.json'), 'utf8'));

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// minimal inline markdown: `code`, **bold**, links
const inline = (s) => esc(s)
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
  .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2">$1</a>');
function section(md, heading) {
  const m = md.match(new RegExp('^## ' + heading + '[^\\n]*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))', 'm'));
  return m ? m[1].trim() : '';
}
const bullets = (block) => block.split('\n').filter((l) => l.startsWith('- ')).map((l) => '<li>' + inline(l.slice(2)) + '</li>').join('');

const data = entries.map((e) => {
  const md = readFileSync(join(lib, 'entries', e.id + '.md'), 'utf8');
  for (const key of ['id', 'title', 'kind', 'tags', 'origin', 'summary', 'height']) if (!(key in e)) throw new Error(e.id + ': missing ' + key);
  return {
    ...e,
    html: readFileSync(join(lib, 'entries', e.id + '.html'), 'utf8'),
    why: inline(section(md, 'Why it is excellent').replace(/\n/g, ' ')),
    take: bullets(section(md, 'What to take')),
  };
});

const counts = {
  all: data.length,
  original: data.filter((e) => e.origin.type === 'original').length,
  study: data.filter((e) => e.origin.type === 'study').length,
};
const tags = [...new Set(data.flatMap((e) => e.tags))].sort();
const json = JSON.stringify(data).replace(/</g, '\\u003c');
const template = readFileSync(join(root, 'tools', 'gallery.template.html'), 'utf8');
const out = template
  .replace('{{COUNT}}', counts.all)
  .replace('{{ORIGINALS}}', counts.original)
  .replace('{{STUDIES}}', counts.study)
  .replace('{{TAGS}}', () => tags.map((t) => `<button type="button" class="tag" data-tag="${esc(t)}" aria-pressed="false">${esc(t)}</button>`).join(''))
  .replace('{{DATA}}', () => json);
writeFileSync(join(lib, 'gallery.html'), out);
console.log(`gallery.html: ${counts.all} entries (${counts.original} original, ${counts.study} studies), ${tags.length} tags, ${Math.round(out.length / 1024)} KB`);
