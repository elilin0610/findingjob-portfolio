# FindingJob Portfolio Demo

[繁體中文](./README.md) | **English** | [日本語](./README.ja.md)

A **limited demo designed for safe sharing** of a job-search research workflow built with AI assistance. The original workspace contains private résumés and emails. This repository includes none of that data and is not a complete open-source copy of the original system.

## What you can try

- Use the original project's JavaScript job-title filter to distinguish initial candidates from clearly senior or managerial roles.
- See how the workflow handles deduplication, categorization, and pending verification using fictional employers and jobs.
- Read the [case study](CASE-STUDY.en.md) for the original project's source verification, résumé versioning, review gates, and dashboard architecture.

The demo makes no network calls, sends no email, includes no real job-search data, and requires no API key.

## Quick start

Install Node.js 20 or later and run the following in this directory:

```sh
npm run demo
npm test
```

There are no third-party dependencies, so `npm install` is unnecessary. Output is JSON. Remote is the original location description, not confirmation that the job can be performed from Taiwan.

## Technology and skill

The demo uses Node.js, JavaScript ESM, JSON, and node:test. The original project additionally uses Python PDF utilities, a React/Vite dashboard, and the custom `taiwan-remote-job-search` skill. **Those modules are not included here.** The third-party Data App framework was not copied.

## How AI was used

I defined the requirements, preferences, and workflow, and provided feedback from using it. Codex helped implement the code and documentation. This is an AI-assisted project; I do not claim to have written all the code independently. I prepared this demo for my portfolio as a safe way to explain the original design, not as a service that was previously live.

## Limitations

The rules-based classification is an initial screen. It does not establish that a job is open, that education requirements are met, that a visa is feasible, or that the job is a good fit. All examples are fictional and no job-search outcomes are promised. The service is not deployed and automatic applications are not enabled.
