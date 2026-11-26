# FindingJob | AI-assisted job research and tracking

[繁體中文](./CASE-STUDY.md) | **English** | [日本語](./CASE-STUDY.ja.md)

> Project type: Personal workflow and data-dashboard prototype. I defined and iterated on the requirements and used Codex to help implement them. This is not a commercial recruiting system I wrote independently.

## What does the project do?

It brings together information spread across company career sites, hiring platforms, résumé files, and email into a workflow that can be verified, deduplicated, and tracked. The aim is not to send large batches of email indiscriminately, but to separate **discover opportunities → check requirements → prepare individual materials → review and record** to limit repeated research and lost data.

## Main features

- **Job discovery and change tracking:** Reads configured public ATS or careers pages and handles Ashby JSON, HTML, and JSON-LD signals. Saves snapshots, content hashes, and differences for new or changed listings.
- **Configurable title filtering:** Covers IT support, entry-level development, customer service, operations, and coordination, among other roles. Clearly senior titles are excluded; ambiguous requirements stay pending.
- **Evidence and eligibility classification:** Records official sources, verification times, and requirements separately. Remote or APAC does not automatically mean work from Taiwan is allowed.
- **Deduplication across runs and status tracking:** Groups by company domain, job identifiers, and history; preserves user edits, source versions, and statuses such as applied and do not contact.
- **Résumé and email preparation:** An AI agent helps tailor drafts using confirmed facts. Attachments are tracked by SHA-256 and version to keep unapproved revisions out of existing batches.
- **Email and dashboard:** A separately authorized email tool helps organize replies. Results are written to local data and displayed on the dashboard. The local crawler itself does not read Gmail or send email.
- **Pre-send checks:** Reviews duplicate contact, recipient source, attachment hashes, and review status. Continuous automated sending is not enabled; this project does not bypass platform confirmation requirements.

## Technologies and skills

| Category | Confirmed use |
|---|---|
| JavaScript / Node.js ESM | Public-source retrieval, data merging, classification, diffs, and verification scripts |
| JSON, Markdown | Main data, source records, review batches, and readable documentation |
| Node.js `crypto` | SHA-256 content and attachment hashes and version comparison |
| Python, ReportLab, pypdf | Résumé PDF generation and text/page-count checks |
| React 19, Vite 8, Recharts | Local job-search dashboard using existing Data App components and framework |
| Node.js `assert` / test scripts | Checks for deduplication, source retention, job-title classification, résumé versions, and workflow |
| Custom `taiwan-remote-job-search` skill | Specifies research order, official-source checks, data updates, and human review |
| Codex and connected tools | Shared implementation, research, and preparation based on user requirements; permissions are managed separately for each tool |

A skill is a workflow specification, not model training, and does not mean every tool feature has been implemented as a standalone API. I did not build the dashboard's shared runtime framework from scratch.

## My role and AI's role

I defined the job-search needs and the location and role preferences. I asked to broaden the search, separate research from sending, and retain duplicate and scam checks, then iterated based on actual usage. Codex helped write scripts, data structures, tests, documentation, and the UI. I used this project to practice breaking down requirements, assessing data quality, and working with AI. I do not claim to have written the AI-generated code independently.

## Original workspace structure

```text
skills/taiwan-remote-job-search/SKILL.md
job-search/
  crawl-jobs.mjs           # Public job listing retrieval and diffs
  role-filter.mjs          # Initial job-title classification
  workflow.mjs             # Main data merge, audit, and views
  auto-send-guard.mjs      # Pre-send checks, not a sending service
  check-resume-versions.mjs
  select-cv.mjs
  dashboard/              # Local React dashboard
```

## Verification and current limits

`node job-search/role-filter.test.mjs` passed on 2026-11-12. Other existing test files do not mean all tests were rerun and passed for this update. The update only changed portfolio documentation; no email was sent, no application was submitted, and the full end-to-end workflow was not verified.

Public pages may be affected by JavaScript, authentication, or source changes. A successful fetch does not establish that a job is still open or that I qualify. AI-generated judgments, résumés, and emails still require review. Scheduling and Gmail integration depend on the environment and authorized tools; downloading this README is not enough to run them.

## What can be shared publicly?

**This de-identified write-up can be shared; the complete original workspace cannot.** It contains real résumés, contact details, email, application history, and private settings. A public disclosure review of all files and history has not been completed.

An allowlisted public export should contain only reviewed generic code, fictional employers and jobs, de-identified demo screenshots, and tests. Exclude real `data.json`, email bodies, résumés, logs, credentials, and personal policies. Confirm redistribution rights for the shared framework and third-party code separately. This README introduces the project; it does not mean a public service has been deployed or a complete open-source package released.
