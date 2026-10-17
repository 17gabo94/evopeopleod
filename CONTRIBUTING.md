# Contributing to EvoPeople Website

Thank you for your interest in contributing! This document provides guidelines for participating in the project.

## Code Standards

### TypeScript

- All code must be in strict mode (`"strict": true` in tsconfig.json)
- No use of `any` type (use `unknown` and type narrowing instead)
- All function parameters and return types must be typed
- All component props must be properly typed with interfaces/types

### React & Components

- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused (single responsibility)
- Use TypeScript interfaces for component props
- Example:

```typescript
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  )
}
```

### CSS & Tailwind

- Use Tailwind CSS utility classes (no custom CSS unless necessary)
- Mobile-first responsive approach (small screens first, then `sm:`, `md:`, `lg:`)
- Follow the design system color palette:
  - Primary: `slate-900`
  - Secondary: `emerald-600`
  - Accent: `amber-500`
  - Error: `red-600`
- Use consistent spacing (8px base scale)
- Test responsive design at: 320px, 768px, 1024px, 1440px

### Testing

- Write unit tests for all components and utilities
- Target: 80%+ code coverage for critical components
- Use Vitest + React Testing Library
- Test behavior, not implementation
- Example:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from '@/components/Common/Button'

describe('Button Component', () => {
  it('renders with correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<Button label="Click" onClick={onClick} />)
    screen.getByRole('button').click()
    expect(onClick).toHaveBeenCalled()
  })
})
```

## Code Style

### Formatting

- Use Prettier for automatic formatting
- Run `npm run format` before committing
- Configuration: `.prettierrc`

### Linting

- ESLint enforces code quality
- Run `npm run lint` (must pass with zero warnings)
- No disabling ESLint rules without explicit approval

### Import Organization

```typescript
// 1. External dependencies
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// 2. Internal components
import Button from '@/components/Common/Button'
import Layout from '@/components/Layout/Layout'

// 3. Utilities and data
import { formatDate } from '@/utils/date'
import { SITE_CONFIG } from '@/data/config'

// 4. Styles (if not using Tailwind)
import '@/styles/component.css'
```

## Development Workflow

### Before Starting

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Keep your branch up to date:
   ```bash
   git pull origin main
   ```

### While Developing

1. Run the dev server:
   ```bash
   npm run dev
   ```

2. Run tests in watch mode:
   ```bash
   npm run test:watch
   ```

3. Check linting regularly:
   ```bash
   npm run lint
   ```

### Before Committing

1. Format your code:
   ```bash
   npm run format
   ```

2. Run linting:
   ```bash
   npm run lint
   ```

3. Run tests:
   ```bash
   npm run test
   ```

4. Build to verify:
   ```bash
   npm run build
   ```

5. Commit with a clear message:
   ```bash
   git commit -m "feat: add new component" # feature
   git commit -m "fix: resolve bug in component" # bug fix
   git commit -m "refactor: improve code structure" # refactor
   git commit -m "docs: update README" # documentation
   ```

## Pull Request Process

1. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request with:
   - Clear title describing the change
   - Description of what was changed and why
   - Reference to related issues if applicable
   - Screenshots if UI changes

3. PR Checklist (GitHub Actions will verify):
   - [ ] Code passes ESLint (`npm run lint`)
   - [ ] TypeScript compiles (`npm run build`)
   - [ ] Tests pass (`npm run test`)
   - [ ] Code is formatted (`npm run format`)
   - [ ] New components have unit tests
   - [ ] Responsive design tested (320px, 768px, 1440px)
   - [ ] Accessibility verified (keyboard navigation, screen reader)
   - [ ] No console errors

4. Address review feedback and push updates:
   ```bash
   git commit -am "address feedback"
   git push origin feature/your-feature-name
   ```

5. Once approved, your PR will be merged to `main` and automatically deployed to GitHub Pages.

## Commit Message Conventions

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: A new feature
- `fix`: A bug fix
- `refactor`: Code refactoring without feature change
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `test`: Adding or updating tests
- `ci`: CI/CD configuration changes

**Examples**:
- `feat(components): add new Button component`
- `fix(pages): resolve Home page layout issue`
- `docs(README): update installation instructions`
- `test(Button): add unit tests for Button component`

## Quality Standards

All contributions must meet these standards:

### Code Quality
- ✅ Zero ESLint errors
- ✅ TypeScript strict mode compliance
- ✅ 80%+ test coverage for new code
- ✅ Prettier formatted

### Performance
- ✅ Lighthouse 90+ target maintained
- ✅ Bundle size < 100KB gzipped
- ✅ No performance regressions

### Accessibility
- ✅ WCAG 2.1 AA compliance
- ✅ Keyboard navigation verified
- ✅ Screen reader tested

### Design
- ✅ Responsive at 320px, 768px, 1440px
- ✅ Consistent with design system
- ✅ Mobile-first approach

## Questions or Need Help?

- Check existing issues and PRs
- Review the [README.md](./README.md) for project overview
- Check the [spec.md](./specs/001-evopeople-website/spec.md) for feature documentation
- Contact the team at: contacto@evopeopleod.com

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for making EvoPeople Website better! 🙏
