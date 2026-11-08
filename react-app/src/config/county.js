// Which county this Information app is for. The only per-county settings in
// the app besides src/data/links.js — everything else (menu, county-apps
// strip, feed reader, link tree) is shared across all the *CountyInformation
// apps and swept from DelawareCountyInformation by
// Statehouse/scripts/sweep-county-information.py.
export const COUNTY = {
  name: "Trumbull",
  /** Slug used by the OhioCounties hub and its county-apps.json ("van-wert"). */
  slug: "trumbull",
  /** This app's GitHub repository name. */
  repo: "TrumbullCountyInformation",
};

/** Hero line label for the auditor's data vendor (Cuyahoga has a Fiscal Officer). */
export const VENDOR_LABEL = "Auditor Data Vendor";
/** Search box hint. */
export const SEARCH_PLACEHOLDER = "Search links, e.g. library, chamber, courts…";

const GH = "https://mikecostarella.github.io";

export const OHIO_COUNTIES_URL = `${GH}/OhioCounties/`;
/** The hub opened on this county's detail dialog (Apps / Media / About). */
export const HUB_COUNTY_URL = `${OHIO_COUNTIES_URL}?county=${COUNTY.slug}`;
export const MY_WEBSITE_URL = `${GH}/MyWebSite/`;
export const GITHUB_REPO_URL = `https://github.com/MikeCostarella/${COUNTY.repo}`;
export const GITHUB_ACTIONS_URL = `${GITHUB_REPO_URL}/actions`;

/**
 * Built-in copy of this county's apps, used until county-apps.json loads and
 * whenever it can't be reached (offline, hub down). Same shape as the feed.
 * The live feed wins when it differs. Snapshot: 2026-11-08.
 */
export const FALLBACK_APPS = [
  { label: "Address Points Map", kind: "Address Points", href: "https://mikecostarella.github.io/TrumbullCountyAddressPoints/" },
  { label: "Elections", kind: "Elections", href: "https://mikecostarella.github.io/OhioElections/#/trumbull" },
  { label: "Fire Stations Map", kind: "Fire Stations", href: "https://mikecostarella.github.io/TrumbullCountyFireStations/" },
  { label: "Healthcare Access Map", kind: "Healthcare", href: "https://mikecostarella.github.io/TrumbullHealthAccessMap/" },
  { label: "Hydrants Map", kind: "Hydrants", href: "https://mikecostarella.github.io/TrumbullCountyHydrants/" },
  { label: "Information", kind: "Information", href: "https://mikecostarella.github.io/TrumbullCountyInformation/" },
  { label: "Jurisdictions", kind: "Jurisdictions", href: "https://mikecostarella.github.io/TrumbullCountyJurisdictions/" },
  { label: "Liquor Permits", kind: "Liquor Permits", href: "https://mikecostarella.github.io/OhioLiquorPermits/#/county/trumbull" },
  { label: "Parcels Map", kind: "Parcels", href: "https://mikecostarella.github.io/TrumbullCountyParcels/" },
  { label: "Precincts Map", kind: "Precincts", href: "https://mikecostarella.github.io/TrumbullCountyPrecincts/" },
  { label: "School Districts Map", kind: "School Districts", href: "https://mikecostarella.github.io/TrumbullCountySchoolDistricts/" },
  { label: "Schools Map", kind: "Schools", href: "https://mikecostarella.github.io/TrumbullCountySchools/" },
  { label: "Voters", kind: "Voters", href: "https://mikecostarella.github.io/TrumbullCountyVoters/" },
  { label: "Water Providers", kind: "Water Providers", href: "https://mikecostarella.github.io/TrumbullCountyWaterProviders/" }
];
