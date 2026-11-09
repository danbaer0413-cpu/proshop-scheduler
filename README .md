# Mercer Oaks Staff Scheduler — starter build

## What's included
- Combined East + West monthly calendar
- Click a date to open a quick staffing board
- Add/edit/remove shifts with course, position, times, and employee
- Unassigned shifts are highlighted as OPEN
- Staff availability calendar with one-tap unavailable dates
- Carry previous month's assignments into the selected month; unavailable employees are copied as OPEN
- Print-friendly landscape monthly calendar
- Staff directory seeded from the uploaded 2026 spreadsheet (names and position labels only)

## Run locally
Open `index.html` in a browser, or use a local static server. This starter uses browser localStorage. Data is only stored in the current browser/device and is NOT shared between employees or managers.

## Publish on GitHub Pages
1. Create/open the Mercer Oaks repository.
2. Upload `index.html` and `staff.js` to the repository root (or upload this folder contents to the configured Pages folder).
3. In GitHub: Settings → Pages → Deploy from a branch → select `main` and `/ (root)`.

## Important production step — shared database and authentication
GitHub Pages is static hosting. It cannot safely hold passwords or privileged secrets. Before staff use this for live scheduling, connect Supabase (or another backend) for authentication and shared data. Do not put a Supabase service-role key or employee phone/email list in browser JavaScript. Use Supabase Auth, per-user roles, and row-level security. The existing old app had a hardcoded admin passcode and phone-number passwords; those should not be carried forward.

The included `schema.sql` is a starting database schema only; review and enable appropriate RLS policies before production.
