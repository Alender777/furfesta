"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import SymmetricGrid from "@/components/SymmetricGrid";
import { useLocale } from "@/contexts/LocaleContext";
import { siteData } from "@/data/site";

export default function BoothsContent() {
  const { t } = useLocale();
  const [query, setQuery] = useState("");

  const filteredZones = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return siteData.booths.zones;

    return siteData.booths.zones
      .map((zone) => ({
        ...zone,
        booths: zone.booths.filter(
          (booth) =>
            booth.id.toLowerCase().includes(q) ||
            booth.name.toLowerCase().includes(q)
        ),
      }))
      .filter((zone) => zone.booths.length > 0);
  }, [query]);

  const totalResults = filteredZones.reduce(
    (sum, zone) => sum + zone.booths.length,
    0
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Booths</p>
          <h1>{t.booths.title}</h1>
          <p>{t.booths.pageSubtitle}</p>
        </div>
      </div>

      <Section>
        <div className="disclaimer">{t.booths.disclaimer}</div>

        <input
          type="search"
          className="booth-search"
          placeholder={t.booths.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t.booths.searchLabel}
        />

        {query && (
          <p className="search-results">
            {t.booths.results.replace("{count}", String(totalResults))}
          </p>
        )}

        <div className="booth-zones">
          {filteredZones.map((zone) => (
            <div key={zone.zone}>
              <h3 className="booth-zone-title">
                {zone.zone} {t.booths.zone}
              </h3>
              <SymmetricGrid columns={4} variant="booth">
                {zone.booths.map((booth) => (
                  <div key={booth.id} className="booth-item">
                    <span className="booth-id">{booth.id}</span>
                    <span>{booth.name}</span>
                  </div>
                ))}
              </SymmetricGrid>
            </div>
          ))}

          {filteredZones.length === 0 && (
            <p className="search-empty">{t.booths.noResults}</p>
          )}
        </div>
      </Section>
    </>
  );
}
