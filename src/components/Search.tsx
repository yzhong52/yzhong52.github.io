import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

interface SearchEntry {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  collection: 'blog' | 'guitar';
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [index, setIndex] = useState<Fuse<SearchEntry> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/search.json')
      .then((r) => r.json())
      .then((data: SearchEntry[]) => {
        setIndex(
          new Fuse(data, {
            keys: ['title', 'excerpt', 'tags'],
            threshold: 0.35,
          })
        );
      });
  }, []);

  useEffect(() => {
    if (!index || !query.trim()) {
      setResults([]);
      return;
    }
    setResults(index.search(query).map((r) => r.item));
  }, [query, index]);

  return (
    <div className="relative w-full max-w-sm">
      <input
        ref={inputRef}
        type="search"
        placeholder="Search posts…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      {results.length > 0 && (
        <div className="absolute top-full mt-1 left-0 right-0 z-50 bg-white border border-slate-200 rounded-md shadow-lg max-h-80 overflow-y-auto">
          {results.map(({ title, slug, excerpt, collection }) => (
            <a
              key={slug}
              href={`/${collection}/${slug}/`}
              className="block px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0"
              onClick={() => setQuery('')}
            >
              <div className="font-medium text-slate-800 text-sm">{title}</div>
              {excerpt && (
                <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{excerpt}</div>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
