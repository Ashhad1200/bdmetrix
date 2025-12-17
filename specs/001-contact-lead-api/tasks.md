# Tasks: Contact & Lead Form API Integration

**Input**: Design documents from `/specs/001-contact-lead-api/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/
**Context**: All tasks performed in `frontendv2/` directory
**Working Directory**: `/Users/ashhad/Dev/soft/bdmatrix landing site/frontendv2`

**Tests**: Per constitution requirement, TDD approach with tests before implementation

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths relative to `frontendv2/` directory

## Path Conventions

All paths relative to **frontendv2/** directory:
- API routes: `src/pages/api/`
- Components: `src/components/`, `src/forms/`
- Utilities: `src/lib/`
- Database: `data/` (development), `/tmp/` (production)
- Tests: `__tests__/` co-located with source files

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and dependency installation

- [ ] T001 Install backend dependencies in frontendv2/package.json
- [ ] T002 [P] Install testing dependencies (Jest, React Testing Library, Playwright) in frontendv2/package.json
- [ ] T003 [P] Configure Jest for Next.js in frontendv2/jest.config.js
- [ ] T004 [P] Configure Playwright for E2E tests in frontendv2/playwright.config.js
- [ ] T005 [P] Create environment variables template at frontendv2/.env.example
- [ ] T006 [P] Update .gitignore to exclude data/ directory and .env.local in frontendv2/
- [ ] T007 [P] Configure ESLint rules for API routes in frontendv2/.eslintrc.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core utilities and database infrastructure that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Create database utility module at frontendv2/src/lib/db.js
- [ ] T009 Create validation utility module at frontendv2/src/lib/validation.js
- [ ] T010 [P] Create sanitization utility module at frontendv2/src/lib/sanitization.js
- [ ] T011 [P] Create data directory at frontendv2/data/ for development database

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Submit Contact Inquiry (Priority: P1) 🎯 MVP

**Goal**: Website visitors can submit contact form and receive confirmation. Data stored in database.

**Independent Test**: Visit /contact page, fill form with valid data, submit, verify success message and data in database.

### Tests for User Story 1 (REQUIRED per TDD Constitution) ⚠️

> **CONSTITUTION MANDATE: Write these tests FIRST, ensure they FAIL before implementation (Red-Green-Refactor)**

- [ ] T012 [P] [US1] Unit test for email validation in __tests__/lib/validation.test.js
- [ ] T013 [P] [US1] Unit test for input sanitization in __tests__/lib/sanitization.test.js
- [ ] T014 [P] [US1] Unit test for database initialization in __tests__/lib/db.test.js
- [ ] T015 [P] [US1] Integration test for POST /api/contact/submit endpoint in __tests__/api/contact/submit.test.js
- [ ] T016 [P] [US1] Component test for contact form validation in __tests__/forms/contact-form.test.jsx
- [ ] T017 [P] [US1] E2E test for complete form submission flow in e2e/contact-form-submission.spec.js

### Implementation for User Story 1

**Database Layer**:
- [ ] T018 [US1] Implement database initialization with schema creation in frontendv2/src/lib/db.js
- [ ] T019 [US1] Implement database connection singleton pattern in frontendv2/src/lib/db.js

**Validation & Sanitization Layer**:
- [ ] T020 [P] [US1] Implement validateContactForm function in frontendv2/src/lib/validation.js
- [ ] T021 [P] [US1] Implement sanitizeInput function in frontendv2/src/lib/sanitization.js

**API Layer**:
- [ ] T022 [US1] Create POST /api/contact/submit endpoint in frontendv2/src/pages/api/contact/submit.js
- [ ] T023 [US1] Implement request validation in submit.js (check required fields)
- [ ] T024 [US1] Implement input sanitization in submit.js (prevent XSS)
- [ ] T025 [US1] Implement database INSERT operation in submit.js
- [ ] T026 [US1] Implement error handling and HTTP status codes in submit.js
- [ ] T027 [US1] Add IP address logging in submit.js (for spam prevention)

**Frontend Layer**:
- [ ] T028 [US1] Add form state management (useState) in frontendv2/src/forms/contact-form.jsx
- [ ] T029 [US1] Implement client-side validation in contact-form.jsx
- [ ] T030 [US1] Implement form submission handler with fetch in contact-form.jsx
- [ ] T031 [US1] Add loading state and button disable during submission in contact-form.jsx
- [ ] T032 [US1] Implement success message display in contact-form.jsx
- [ ] T033 [US1] Implement error message display per field in contact-form.jsx
- [ ] T034 [US1] Implement form reset after successful submission in contact-form.jsx
- [ ] T035 [US1] Add ARIA live region for screen reader announcements in contact-form.jsx
- [ ] T036 [US1] Ensure keyboard accessibility (Enter to submit) in contact-form.jsx

**Verification**:
- [ ] T037 [US1] Manual test: Submit form with valid data, verify success message
- [ ] T038 [US1] Manual test: Submit with invalid email, verify error message
- [ ] T039 [US1] Manual test: Submit with empty fields, verify field-specific errors
- [ ] T040 [US1] Manual test: Verify data persisted in data/contacts.db
- [ ] T041 [US1] Manual test: Test on mobile (320px width)
- [ ] T042 [US1] Manual test: Test keyboard navigation and screen reader

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. This is the **MVP** - the product delivers value.

---

## Phase 4: User Story 2 - View Submitted Leads (Priority: P2)

**Goal**: Administrators can view all submitted contact inquiries in chronological order.

**Independent Test**: Access /api/contact/list endpoint, verify all submissions visible with complete data ordered by newest first.

### Tests for User Story 2 (REQUIRED per TDD Constitution) ⚠️

> **CONSTITUTION MANDATE: Write these tests FIRST, ensure they FAIL before implementation (Red-Green-Refactor)**

- [ ] T043 [P] [US2] Integration test for GET /api/contact/list endpoint in __tests__/api/contact/list.test.js
- [ ] T044 [P] [US2] Unit test for pagination logic in __tests__/lib/db.test.js
- [ ] T045 [P] [US2] Unit test for chronological ordering (newest first) in __tests__/lib/db.test.js

### Implementation for User Story 2

**API Layer**:
- [ ] T046 [US2] Create GET /api/contact/list endpoint in frontendv2/src/pages/api/contact/list.js
- [ ] T047 [US2] Implement database SELECT query with ORDER BY submitted_at DESC in list.js
- [ ] T048 [US2] Implement pagination (limit, offset) query parameters in list.js
- [ ] T049 [US2] Implement total count query for pagination metadata in list.js
- [ ] T050 [US2] Add error handling and HTTP status codes in list.js

**Database Layer**:
- [ ] T051 [US2] Create getSubmissions function in frontendv2/src/lib/db.js
- [ ] T052 [US2] Create getSubmissionsCount function in frontendv2/src/lib/db.js

**Frontend Layer (Simple Admin View)**:
- [ ] T053 [P] [US2] Create admin leads page at frontendv2/src/pages/admin/leads.jsx
- [ ] T054 [US2] Implement data fetching from /api/contact/list in leads.jsx
- [ ] T055 [US2] Implement table display of submissions in leads.jsx
- [ ] T056 [US2] Implement pagination controls in leads.jsx
- [ ] T057 [US2] Add loading state while fetching in leads.jsx
- [ ] T058 [US2] Add error state if API fails in leads.jsx
- [ ] T059 [US2] Style table with existing Bootstrap theme classes in leads.jsx

**Verification**:
- [ ] T060 [US2] Manual test: Access /admin/leads, verify submissions displayed
- [ ] T061 [US2] Manual test: Verify newest submissions appear first
- [ ] T062 [US2] Manual test: Submit new form (US1), refresh leads page, verify it appears
- [ ] T063 [US2] Manual test: Test pagination if >50 submissions
- [ ] T064 [US2] Manual test: Verify responsive display on mobile

**Checkpoint**: At this point, User Story 2 should be fully functional and testable independently.

---

## Phase 5: User Story 3 - Export and Restore Lead Data (Priority: P3)

**Goal**: Administrators can export database file for backup and restore it for disaster recovery.

**Independent Test**: Export database via /api/db/export, delete database, restore via /api/db/import, verify all leads recovered.

### Tests for User Story 3 (REQUIRED per TDD Constitution) ⚠️

> **CONSTITUTION MANDATE: Write these tests FIRST, ensure they FAIL before implementation (Red-Green-Refactor)**

- [ ] T065 [P] [US3] Integration test for GET /api/db/export endpoint in __tests__/api/db/export.test.js
- [ ] T066 [P] [US3] Integration test for POST /api/db/import endpoint in __tests__/api/db/import.test.js
- [ ] T067 [P] [US3] Unit test for database file validation (SQLite magic bytes) in __tests__/lib/db.test.js
- [ ] T068 [P] [US3] E2E test for export-restore flow in e2e/database-backup-restore.spec.js

### Implementation for User Story 3

**API Layer - Export**:
- [ ] T069 [US3] Create GET /api/db/export endpoint in frontendv2/src/pages/api/db/export.js
- [ ] T070 [US3] Implement file read from database path in export.js
- [ ] T071 [US3] Set correct Content-Type header (application/x-sqlite3) in export.js
- [ ] T072 [US3] Set Content-Disposition header with timestamp filename in export.js
- [ ] T073 [US3] Add error handling for missing database file in export.js

**API Layer - Import**:
- [ ] T074 [US3] Create POST /api/db/import endpoint in frontendv2/src/pages/api/db/import.js
- [ ] T075 [US3] Implement multipart form data parsing (formidable library) in import.js
- [ ] T076 [US3] Implement database file validation (check SQLite magic bytes) in import.js
- [ ] T077 [US3] Implement file size limit validation (50MB max) in import.js
- [ ] T078 [US3] Implement database replacement (copy uploaded file to db path) in import.js
- [ ] T079 [US3] Verify database integrity after import (run SELECT COUNT query) in import.js
- [ ] T080 [US3] Add comprehensive error handling in import.js

**Database Layer**:
- [ ] T081 [US3] Create validateDatabaseFile function in frontendv2/src/lib/db.js
- [ ] T082 [US3] Create getDatabasePath function in frontendv2/src/lib/db.js

**Frontend Layer**:
- [ ] T083 [P] [US3] Add export button to admin leads page in frontendv2/src/pages/admin/leads.jsx
- [ ] T084 [P] [US3] Add import button with file upload to admin leads page in leads.jsx
- [ ] T085 [US3] Implement export download handler in leads.jsx
- [ ] T086 [US3] Implement import upload handler with progress feedback in leads.jsx
- [ ] T087 [US3] Add success/error messages for export/import in leads.jsx
- [ ] T088 [US3] Add confirmation dialog before import (warn about data replacement) in leads.jsx

**Verification**:
- [ ] T089 [US3] Manual test: Click export button, verify .db file downloads
- [ ] T090 [US3] Manual test: Inspect exported file with DB Browser for SQLite
- [ ] T091 [US3] Manual test: Stop dev server, delete data/contacts.db, restart server
- [ ] T092 [US3] Manual test: Import previously exported file, verify data restored
- [ ] T093 [US3] Manual test: Try importing invalid file (e.g., .txt), verify error message
- [ ] T094 [US3] Manual test: Verify leads page shows correct count after restore

**Checkpoint**: At this point, User Story 3 should be fully functional and testable independently.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final touches, performance optimization, documentation

- [ ] T095 [P] Add JSDoc comments to all API endpoints (submit.js, list.js, export.js, import.js)
- [ ] T096 [P] Add JSDoc comments to all utility functions (db.js, validation.js, sanitization.js)
- [ ] T097 [P] Update frontendv2/README.md with setup instructions (link to quickstart.md)
- [ ] T098 [P] Create database initialization script at frontendv2/scripts/init-db.js
- [ ] T099 [P] Add npm scripts to package.json (db:init, test, test:e2e, lint)
- [ ] T100 Run Lighthouse audit on /contact page, ensure score ≥90
- [ ] T101 Run npm audit and fix security vulnerabilities (constitution: 48-hour patch requirement)
- [ ] T102 Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] T103 Verify accessibility with keyboard navigation (tab through form, Enter to submit)
- [ ] T104 Test form with screen reader (NVDA or VoiceOver)
- [ ] T105 Verify responsive design at 320px, 768px, 1024px, 1920px widths
- [ ] T106 Measure API response times (ensure submit <500ms, list <100ms)
- [ ] T107 Test with 100 concurrent form submissions (load testing)
- [ ] T108 Verify no console errors or warnings in browser
- [ ] T109 Add Content-Security-Policy headers in frontendv2/next.config.js
- [ ] T110 Create backup reminder documentation in specs/001-contact-lead-api/BACKUP-PROCEDURE.md

---

## Dependencies & Execution Order

### Story Dependencies
```
Phase 1 (Setup) → Phase 2 (Foundational) → Phase 3 (US1 - MVP)
                                          ↓
                                          Phase 4 (US2) [depends on US1 data]
                                          ↓
                                          Phase 5 (US3) [depends on US2 admin pages]
                                          ↓
                                          Phase 6 (Polish)
```

### User Story Independence
- **US1 (P1)**: Fully independent - can be developed and deployed alone (MVP)
- **US2 (P2)**: Depends on US1 (needs existing submissions to display)
- **US3 (P3)**: Depends on US2 (export/import buttons on admin page)

### Critical Path
1. Phase 1 (Setup) - 7 tasks
2. Phase 2 (Foundational) - 4 tasks
3. Phase 3 (US1) - 31 tasks **← MVP MILESTONE**
4. Phase 4 (US2) - 22 tasks
5. Phase 5 (US3) - 26 tasks
6. Phase 6 (Polish) - 16 tasks

**Total Tasks**: 106

---

## Parallel Execution Opportunities

### Phase 1 (Setup) - 5 parallel tasks
```bash
# Can run simultaneously
T002 [P] Install testing dependencies
T003 [P] Configure Jest
T004 [P] Configure Playwright
T005 [P] Create .env.example
T006 [P] Update .gitignore
T007 [P] Configure ESLint
```

### Phase 2 (Foundational) - 2 parallel tasks
```bash
# Can run after T008 (db.js) completes
T010 [P] Create sanitization.js
T011 [P] Create data/ directory
```

### Phase 3 (US1 Tests) - ALL 6 test tasks parallel
```bash
# All test files can be written simultaneously
T012 [P] [US1] validation.test.js
T013 [P] [US1] sanitization.test.js
T014 [P] [US1] db.test.js
T015 [P] [US1] submit.test.js
T016 [P] [US1] contact-form.test.jsx
T017 [P] [US1] E2E test
```

### Phase 3 (US1 Implementation) - 2 parallel tasks
```bash
# After T018-T019 (db.js) completes
T020 [P] [US1] validateContactForm
T021 [P] [US1] sanitizeInput
```

### Phase 4 (US2 Tests) - ALL 3 test tasks parallel
```bash
T043 [P] [US2] list.test.js
T044 [P] [US2] pagination test
T045 [P] [US2] ordering test
```

### Phase 4 (US2 Frontend) - 1 parallel task
```bash
# After T046-T052 (API + DB) completes
T053 [P] [US2] Create leads.jsx page
```

### Phase 5 (US3 Tests) - ALL 4 test tasks parallel
```bash
T065 [P] [US3] export.test.js
T066 [P] [US3] import.test.js
T067 [P] [US3] validation test
T068 [P] [US3] E2E test
```

### Phase 5 (US3 Frontend) - 2 parallel tasks
```bash
# After API layer completes
T083 [P] [US3] Export button
T084 [P] [US3] Import button
```

### Phase 6 (Polish) - 4 parallel tasks
```bash
T095 [P] JSDoc for API endpoints
T096 [P] JSDoc for utilities
T097 [P] Update README
T098 [P] Create init script
T099 [P] Add npm scripts
```

---

## Implementation Strategy

### MVP First (Minimum Viable Product)
**Scope**: Phase 1 + Phase 2 + Phase 3 (US1 only)
**Deliverable**: Working contact form that saves submissions to database
**Timeline**: ~2-3 days (42 tasks)
**Value**: Immediate business value - capture leads

### Incremental Delivery
1. **Sprint 1 (MVP)**: US1 - Submit Contact Form
   - Deploy to production
   - Start capturing leads immediately
   - Gather user feedback

2. **Sprint 2**: US2 - View Leads
   - Deploy admin panel
   - Enable sales team to follow up

3. **Sprint 3**: US3 - Export/Restore
   - Deploy backup capability
   - Enable disaster recovery

### Testing Strategy (TDD - Constitution Mandate)

**Red-Green-Refactor Cycle**:
1. **Red**: Write failing tests first (T012-T017 for US1)
2. **Green**: Implement minimum code to pass tests (T018-T036 for US1)
3. **Refactor**: Clean up code while keeping tests passing

**Test Coverage Target**: ≥80% for business logic (validation, sanitization, API endpoints)

**Test Types**:
- **Unit Tests**: Validation, sanitization, database operations
- **Integration Tests**: API endpoints (submit, list, export, import)
- **Component Tests**: React form with validation and submission
- **E2E Tests**: Full user flows (submit form, view leads, backup/restore)

---

## Task Validation Checklist

Before marking tasks.md as complete, verify:

- [x] All tasks follow strict checkbox format: `- [ ] [ID] [P?] [Story?] Description with path`
- [x] All tasks have sequential IDs (T001, T002, T003...)
- [x] All user story phase tasks have [Story] labels ([US1], [US2], [US3])
- [x] All parallelizable tasks marked with [P]
- [x] All tasks include exact file paths relative to frontendv2/
- [x] Setup and Foundational phases have NO story labels
- [x] Each user story phase has independent test criteria
- [x] Dependencies clearly documented
- [x] Parallel execution opportunities identified
- [x] MVP scope clearly defined (US1 only)
- [x] Total task count: 106 tasks

---

## Ready for Implementation

**Next Step**: Begin TDD workflow with Phase 1 (Setup)

**Command**: Start development server and run tests in watch mode
```bash
cd frontendv2
npm run dev       # Terminal 1: Next.js dev server
npm test -- --watch  # Terminal 2: Jest in watch mode
```

**Success Criteria** (from spec.md):
- ✅ Users submit form in <10 seconds
- ✅ Data stored with 100% integrity
- ✅ Validation feedback <1 second
- ✅ Success confirmation <2 seconds
- ✅ 100 concurrent submissions handled
- ✅ Lighthouse score ≥90 maintained

🚀 **Let's build!**
