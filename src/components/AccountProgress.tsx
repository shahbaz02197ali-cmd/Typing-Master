"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { readResults, type SavedResult } from "@/lib/progress";

export default function AccountProgress() {
  const [results, setResults] = useState<SavedResult[]>([]);
  useEffect(() => setResults(readResults()), []);

  const stats = useMemo(() => {
    const best = Math.max(0, ...results.map((item) => item.wpm));
    const average = results.length ? Math.round(results.reduce((sum, item) => sum + item.wpm, 0) / results.length) : 0;
    const accuracy = results.length ? Math.round(results.reduce((sum, item) => sum + item.accuracy, 0) / results.length) : 0;
    return { best, average, accuracy };
  }, [results]);

  return (
    <section className="account-progress">
      <div className="grid">
        <div className="card"><div className="muted">Completed tests</div><div className="stat">{results.length}</div></div>
        <div className="card"><div className="muted">Best net speed</div><div className="stat">{stats.best} <small>WPM</small></div></div>
        <div className="card"><div className="muted">Average speed</div><div className="stat">{stats.average} <small>WPM</small></div></div>
        <div className="card"><div className="muted">Average accuracy</div><div className="stat">{stats.accuracy}%</div></div>
      </div>
      <div className="card" style={{ marginTop: 20 }}>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <h2>Recent test history</h2>
          <Link className="btn secondary" href="/test">New test</Link>
        </div>
        {results.length === 0 ? (
          <div><p className="muted">Your test history will appear here after you complete a typing test in this browser.</p><Link className="btn btn-primary" href="/test">Take your first test</Link></div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr><th align="left">Test</th><th align="left">Net WPM</th><th align="left">Accuracy</th><th align="left">Errors</th><th align="left">Date</th></tr></thead>
              <tbody>{results.slice(0, 10).map((item) => (
                <tr key={item.id} style={{ borderTop: "1px solid var(--line, #e5eaf2)" }}>
                  <td style={{ padding: "12px 8px 12px 0" }}>{item.mode}</td><td>{item.wpm}</td><td>{item.accuracy}%</td><td>{item.errors}</td><td>{new Date(item.date).toLocaleDateString()}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        )}
        <p className="muted" style={{ marginTop: 14, fontSize: 13 }}>Note: these results are currently stored in this browser. Cloud sync across devices will be added after the secure results API and database migration are enabled.</p>
      </div>
    </section>
  );
}
