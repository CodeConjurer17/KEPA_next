"use client";
import "./styles/Items.css";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getPriceBand } from "@/lib/priceBand";
import ProductImage from "../ui/ProductImage";
import {
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
  IconGift,
  IconFilter,
  IconClose,
} from "./icons/Icons";

const unique = (arr) => Array.from(new Set(arr.filter(Boolean)));
const PRICE_BANDS = ["Vse", "0-10", "10-20", "20-30", "30+"];
const PAGE_SIZE = 12;

// ── Explore-row card (used for Popular / New / Gift sets) ──
function RowCard({ p }) {
  return (
    <Link href={`/shop/${p.id}`} className="rowCard">
      <div className="rowCard__media">
        <ProductImage src={p.images?.[0]} alt={p.title} />
        {p.sale && <span className="rowCard__badge">Znižano</span>}
      </div>
      <div className="rowCard__body">
        <h3 className="rowCard__title">{p.title}</h3>
        <div className="rowCard__prices">
          {p.oldPrice ? (
            <>
              <span className="rowCard__old">€{p.oldPrice.toFixed(2)}</span>
              <span className="rowCard__price">€{p.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="rowCard__price">€{p.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

// ── Pagination with ellipsis for many pages ──
function buildPageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, 2, total - 1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push("…");
    out.push(p);
  });
  return out;
}

export default function Items({ products }) {
  const topCategories = useMemo(() => unique(products.map((p) => p.type)), [products]);
  const allOccasions  = useMemo(() => unique(products.flatMap((p) => p.occasions ?? [])), [products]);

  const categoryCounts = useMemo(() => {
    const counts = {};
    products.forEach((p) => { counts[p.type] = (counts[p.type] || 0) + 1; });
    return counts;
  }, [products]);

  const [top, setTop]             = useState("Vse");
  const [occasion, setOccasion]   = useState("Vse");
  const [color, setColor]         = useState("Vse");
  const [size, setSize]           = useState("Vse");
  const [priceBand, setPriceBand] = useState("Vse");
  const [sort, setSort]           = useState("featured");
  const [search, setSearch]       = useState("");
  const [page, setPage]           = useState(1);

  // mobile filter drawer
  const [filtersOpen, setFiltersOpen] = useState(false);

  // lock body scroll while the mobile filter drawer is open
  useEffect(() => {
    if (filtersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [filtersOpen]);

  // arriving from the homepage's category carousel (?category=Nakit)
  const searchParams = useSearchParams();
  useEffect(() => {
    const fromUrl = searchParams.get("category");
    if (fromUrl && topCategories.includes(fromUrl)) {
      setTop(fromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colorsForTop = useMemo(
    () => unique(products.filter((p) => top === "Vse" || p.type === top).map((p) => p.color)),
    [top, products]
  );
  const sizesForTop = useMemo(
    () => unique(products.filter((p) => top === "Vse" || p.type === top).map((p) => p.size)),
    [top, products]
  );

  const handleCategoryClick = (c) => {
    setTop(c); setColor("Vse"); setSize("Vse"); setPriceBand("Vse"); setPage(1);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (top       !== "Vse") list = list.filter((p) => p.type === top);
    if (occasion  !== "Vse") list = list.filter((p) => (p.occasions ?? []).includes(occasion));
    if (color     !== "Vse") list = list.filter((p) => p.color === color);
    if (size      !== "Vse") list = list.filter((p) => p.size === size);
    if (priceBand !== "Vse") list = list.filter((p) => getPriceBand(p.price) === priceBand);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    if (sort === "price-asc")  list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name")       list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [products, top, occasion, color, size, priceBand, sort, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const paginated  = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const rangeStart = filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd   = Math.min(safePage * PAGE_SIZE, filtered.length);

  const goPage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const activeFilters = [
    top       !== "Vse" && { key: "top",      label: top,                  onClear: () => handleCategoryClick("Vse") },
    occasion  !== "Vse" && { key: "occasion", label: occasion,             onClear: () => setOccasion("Vse") },
    color     !== "Vse" && { key: "color",    label: color,                onClear: () => setColor("Vse") },
    size      !== "Vse" && { key: "size",     label: size,                 onClear: () => setSize("Vse") },
    priceBand !== "Vse" && { key: "price",    label: `€${priceBand}`,      onClear: () => setPriceBand("Vse") },
    search.trim()       && { key: "search",   label: `"${search.trim()}"`, onClear: () => setSearch("") },
  ].filter(Boolean);

  const clearAll = () => {
    setTop("Vse"); setOccasion("Vse"); setColor("Vse"); setSize("Vse"); setPriceBand("Vse"); setSearch(""); setPage(1);
  };

  // the sidebar's contents, shared between the desktop-static and
  // mobile-drawer renderings so filter logic only lives in one place
  const sidebarContent = (
    <>
      <div className="sidebarBlock">
        <h3>Kategorije</h3>
        <ul className="sidebarList">
          <li>
            <button
              type="button"
              className={top === "Vse" ? "is-active" : ""}
              onClick={() => handleCategoryClick("Vse")}
            >
              Vse <span>{products.length}</span>
            </button>
          </li>
          {topCategories.map((c) => (
            <li key={c}>
              <button
                type="button"
                className={top === c ? "is-active" : ""}
                onClick={() => handleCategoryClick(c)}
              >
                {c} <span>{categoryCounts[c]}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {allOccasions.length > 0 && (
        <div className="sidebarBlock">
          <h3>Priložnost</h3>
          <select
            className="sidebarSelect"
            value={occasion}
            onChange={(e) => { setOccasion(e.target.value); setPage(1); }}
          >
            <option value="Vse">Vse priložnosti</option>
            {allOccasions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      )}

      <div className="sidebarBlock">
        <h3>Barva</h3>
        <select
          className="sidebarSelect"
          value={color}
          onChange={(e) => { setColor(e.target.value); setPage(1); }}
        >
          <option value="Vse">Vse barve</option>
          {colorsForTop.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {sizesForTop.length > 0 && (
        <div className="sidebarBlock">
          <h3>Velikost</h3>
          <select
            className="sidebarSelect"
            value={size}
            onChange={(e) => { setSize(e.target.value); setPage(1); }}
          >
            <option value="Vse">Vse velikosti</option>
            {sizesForTop.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      )}

      <div className="sidebarBlock">
        <h3>Cena</h3>
        <ul className="sidebarList">
          {PRICE_BANDS.map((p) => (
            <li key={p}>
              <button
                type="button"
                className={priceBand === p ? "is-active" : ""}
                onClick={() => { setPriceBand(p); setPage(1); }}
              >
                {p === "Vse" ? "Vse cene" : `€${p}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <section className="gallery">

      <div
        className="galleryHeader"
        style={{ backgroundImage: `url(/assets/ozadje_dark.jpg)` }}
      >
        <div className="galleryHeader__overlay">
          <div className="container">
            <span className="galleryHeader__eyebrow">Katalog</span>
            <h1 className="galleryHeader__title">Vsi izdelki</h1>
            <p className="galleryHeader__subtitle">
              Vsak kos je narejen ročno, v omejenih količinah.
            </p>
          </div>
        </div>
      </div>

      <div className="container catalogue">
        <h2 className="catalogue__heading">
          <IconGift /> Celoten katalog
        </h2>

        <div className="catalogueLayout">

          {/* Desktop sidebar — always in flow, hidden via CSS on mobile */}
          <aside className="catalogueSidebar">
            {sidebarContent}
          </aside>

          {/* Mobile filter drawer — overlay, only rendered content matters when open */}
          <div
            className={`filterDrawer__backdrop${filtersOpen ? " is-open" : ""}`}
            onClick={() => setFiltersOpen(false)}
          />
          <aside className={`filterDrawer${filtersOpen ? " is-open" : ""}`}>
            <div className="filterDrawer__header">
              <h3>Filtri</h3>
              <button
                type="button"
                className="filterDrawer__close"
                onClick={() => setFiltersOpen(false)}
                aria-label="Zapri filtre"
              >
                <IconClose />
              </button>
            </div>
            <div className="filterDrawer__body">
              {sidebarContent}
            </div>
            <div className="filterDrawer__footer">
              <button className="filterDrawer__clear" onClick={clearAll}>
                Počisti vse
              </button>
              <button className="filterDrawer__apply" onClick={() => setFiltersOpen(false)}>
                Prikaži {filtered.length} izdelkov
              </button>
            </div>
          </aside>

          <div className="catalogueMain">

            <div className="catalogueToolbar">
              <p className="catalogueToolbar__count">
                {filtered.length === 0
                  ? "Ni izdelkov"
                  : `Prikazujem ${rangeStart}-${rangeEnd} od ${filtered.length} izdelkov`}
              </p>

              <div className="catalogueToolbar__right">
                <div className="catalogueToolbar__search">
                  <IconSearch />
                  <input
                    type="text"
                    placeholder="Ime izdelka…"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  />
                </div>

                <div className="catalogueToolbar__sortRow">
                  <button
                    type="button"
                    className="filterToggle"
                    onClick={() => setFiltersOpen(true)}
                  >
                    <IconFilter />
                    Filtri
                    {activeFilters.length > 0 && (
                      <span className="filterToggle__count">{activeFilters.length}</span>
                    )}
                  </button>

                  <div className="catalogueToolbar__sort">
                    <label htmlFor="sort">Razvrsti:</label>
                    <select
                      id="sort"
                      value={sort}
                      onChange={(e) => { setSort(e.target.value); setPage(1); }}
                    >
                      <option value="featured">Privzeto</option>
                      <option value="price-asc">Cena: nizka → visoka</option>
                      <option value="price-desc">Cena: visoka → nizka</option>
                      <option value="name">Ime A–Ž</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="activeFilters">
                {activeFilters.map((f) => (
                  <button key={f.key} className="activeFilters__pill" onClick={f.onClear}>
                    {f.label} <span>×</span>
                  </button>
                ))}
                <button className="activeFilters__clear" onClick={clearAll}>Počisti vse</button>
              </div>
            )}

            {paginated.length === 0 ? (
              <p className="gallery__empty">Ni izdelkov za izbrane filtre.</p>
            ) : (
              <div className="catalogueGrid">
                {paginated.map((p) => <RowCard key={p.id} p={p} />)}
              </div>
            )}

            {totalPages > 1 && (
              <div className="galleryPagination">
                <button
                  className="galleryPagination__arrow"
                  onClick={() => goPage(safePage - 1)}
                  disabled={safePage === 1}
                  aria-label="Prejšnja stran"
                >
                  <IconChevronLeft />
                </button>
                {buildPageList(safePage, totalPages).map((p, i) =>
                  p === "…" ? (
                    <span key={`ellipsis-${i}`} className="galleryPagination__ellipsis">…</span>
                  ) : (
                    <button
                      key={p}
                      className={`galleryPagination__num ${p === safePage ? "is-active" : ""}`}
                      onClick={() => goPage(p)}
                    >
                      {p}
                    </button>
                  )
                )}
                <button
                  className="galleryPagination__arrow"
                  onClick={() => goPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  aria-label="Naslednja stran"
                >
                  <IconChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}