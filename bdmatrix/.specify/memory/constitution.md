# BDMatrix Landing Site Constitution

<!--
Sync Impact Report:
Version: 0.0.0 → 1.0.0
Change Type: MAJOR (Initial constitution creation)
Principles Added:
  1. Code Quality Standards
  2. Test-Driven Development (TDD)
  3. User Experience Consistency
  4. Performance Requirements
  5. Responsive Design
  6. Accessibility Standards
Sections Added:
  - Core Principles (6 principles)
  - Development Standards
  - Quality Assurance
  - Governance
Templates Updated:
  ✅ constitution.md (this file)
  ⚠ plan-template.md (pending validation)
  ⚠ spec-template.md (pending validation)
  ⚠ tasks-template.md (pending validation)
Follow-up TODOs: None
-->

## Core Principles

### I. Code Quality Standards

**MUST Requirements:**
- All code MUST follow consistent formatting and style conventions (ESLint/Prettier)
- Functions MUST be single-purpose with clear, descriptive names
- Complex logic MUST include inline comments explaining the "why"
- Magic numbers and strings MUST be extracted to named constants
- Dead code and commented-out code MUST be removed before commit
- Dependencies MUST be kept up-to-date and security vulnerabilities patched within 48 hours

**Rationale:** Consistent, clean code reduces cognitive load, accelerates onboarding, and minimizes bugs. Code quality is non-negotiable as it compounds over time—technical debt costs exponentially more to address later.

### II. Test-Driven Development (TDD)

**MUST Requirements:**
- All new features MUST have corresponding tests written BEFORE implementation (Red-Green-Refactor)
- Unit tests MUST cover at least 80% of business logic and utility functions
- Integration tests MUST verify component interactions and API contracts
- Tests MUST be isolated, repeatable, and independent of execution order
- Failing tests MUST block deployments (CI/CD gate)
- Test names MUST clearly describe the scenario and expected outcome

**Rationale:** TDD ensures features work as intended, prevents regressions, and serves as living documentation. Tests provide confidence during refactoring and catch bugs before they reach users.

### III. User Experience Consistency

**MUST Requirements:**
- All UI components MUST follow the established design system (colors, typography, spacing)
- Interactive elements MUST provide immediate visual feedback (hover, active, focus states)
- Loading states MUST be indicated with appropriate spinners or skeleton screens
- Error messages MUST be user-friendly, actionable, and never expose internal details
- Forms MUST validate inputs client-side before submission and display clear error messages
- Navigation patterns MUST be predictable and consistent across all pages

**Rationale:** Consistency builds user trust and reduces friction. Users should never feel lost or confused. A cohesive experience differentiates professional products from amateur ones.

### IV. Performance Requirements

**MUST Requirements:**
- Initial page load (First Contentful Paint) MUST be under 1.5 seconds on 3G connections
- Time to Interactive (TTI) MUST be under 3 seconds
- Lighthouse Performance score MUST be ≥90 on production builds
- Images MUST be optimized (WebP/AVIF formats, lazy loading, responsive sizes)
- JavaScript bundle size MUST be minimized (code splitting, tree shaking, compression)
- Critical CSS MUST be inlined; non-critical CSS deferred
- Third-party scripts MUST be loaded asynchronously or deferred

**Performance Budgets:**
- Total JavaScript bundle: ≤200KB gzipped
- Total CSS: ≤50KB gzipped
- Total images (above fold): ≤500KB
- Any page-level metric exceeding budget requires architectural review before merge

**Rationale:** Performance directly impacts conversion rates, SEO rankings, and user satisfaction. Every 100ms of delay costs measurable engagement. Mobile users on slower connections are first-class citizens.

### V. Responsive Design

**MUST Requirements:**
- All layouts MUST work seamlessly across mobile (320px+), tablet (768px+), and desktop (1024px+)
- Touch targets MUST be at least 44×44px on mobile devices
- Text MUST be readable without zooming (minimum 16px base font size)
- Horizontal scrolling MUST be eliminated except for intentional carousels
- Viewport meta tag MUST be properly configured
- Media queries MUST use mobile-first approach (min-width)

**Rationale:** Over 60% of web traffic is mobile. Responsive design is not optional. Users expect seamless experiences regardless of device.

### VI. Accessibility Standards

**MUST Requirements:**
- All interactive elements MUST be keyboard accessible (tab navigation, Enter/Space activation)
- Color contrast MUST meet WCAG 2.1 AA standards (4.5:1 for text, 3:1 for large text)
- All images MUST have descriptive alt text or role="presentation" if decorative
- Form inputs MUST have associated labels (visible or aria-label)
- Focus indicators MUST be visible and not removed via CSS
- Semantic HTML MUST be used (nav, main, article, section, etc.)
- ARIA attributes MUST be used correctly (avoid aria abuse)

**Rationale:** Accessibility is a legal requirement and moral imperative. Accessible sites are also more usable for everyone. Screen readers, keyboard navigation, and high contrast modes are not edge cases.

## Development Standards

### Code Review Process
- All code changes MUST go through peer review before merging
- Reviewers MUST verify compliance with all constitutional principles
- Automated checks (linting, tests, build) MUST pass before review
- At least one approval MUST be obtained before merge
- Reviews MUST happen within 24 hours of PR submission

### Branch Strategy
- Main branch MUST always be deployable
- Feature branches MUST be short-lived (≤3 days)
- Branch names MUST follow convention: `feature/description`, `fix/description`, `refactor/description`
- Commits MUST be atomic and have meaningful messages

### Documentation Requirements
- Public APIs and complex utilities MUST have JSDoc comments
- README MUST be kept up-to-date with setup instructions
- Breaking changes MUST be documented in CHANGELOG
- Architecture decisions MUST be recorded in ADRs when significant

## Quality Assurance

### Testing Levels
1. **Unit Tests**: Business logic, utilities, pure functions
2. **Integration Tests**: Component interactions, API calls, data flows
3. **Visual Regression Tests**: UI consistency across changes (when feasible)
4. **Manual QA Checklist**: Cross-browser testing (Chrome, Firefox, Safari), Responsive testing (mobile, tablet, desktop), Accessibility audit (keyboard nav, screen reader)

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Lighthouse score ≥90
- [ ] No console errors or warnings
- [ ] Accessibility audit passed
- [ ] Cross-browser tested
- [ ] Performance budgets met
- [ ] Security scan passed (npm audit)

## Governance

This constitution is the authoritative source for all development practices on the BDMatrix Landing Site project. All contributors MUST adhere to these principles.

### Amendment Process
- Proposed changes MUST be discussed with the team
- Amendments MUST be documented with rationale
- Version number MUST be incremented according to semantic versioning:
  - **MAJOR**: Breaking changes, principle removals, fundamental redefinitions
  - **MINOR**: New principles added, expanded guidance
  - **PATCH**: Clarifications, typos, non-semantic refinements
- All dependent templates MUST be updated to reflect changes

### Compliance and Enforcement
- All pull requests MUST verify constitutional compliance
- Violations MUST be caught in code review
- Repeated violations trigger architecture review of problematic patterns
- When in doubt, ask: "Does this make the product better for users while maintaining quality?"

### Exceptions
- Exceptions require explicit justification documented in PR description
- Technical debt MUST be tracked in issues and addressed within one sprint
- Workarounds MUST include TODO comments with ticket references

**Version**: 1.0.0 | **Ratified**: 2025-12-16 | **Last Amended**: 2025-12-16
