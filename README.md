# Calculator2022

A mobile calculator application built with Ionic, Angular, and TypeScript.

Originally developed in September 2022 as a self-directed project while learning these technologies over approximately ten days. In November 2026, I returned to the original codebase to address known defects, improve functionality, and refactor the application for better maintainability.

## Features

- Addition, subtraction, multiplication, and division
- Decimal input validation and division-by-zero handling
- Calculation history shared across application pages
- Clear History functionality with confirmation dialog
- Three customizable color themes: purple, teal, and fuchsia

## Technologies

- Ionic Framework
- Angular
- TypeScript
- HTML / SCSS
- Capacitor
- Visual Studio Code

## 2026 Refactoring

### Calculator Logic
- Consolidated repetitive digit and operator methods into reusable handlers.
- Improved operator input validation.
- Simplified arithmetic operations and result formatting.
- Removed obsolete code and decimal-place tracking logic.

### Calculation History
- Replaced string-based history storage with an array of individual calculations.
- Implemented shared state using an Angular service.
- Fixed history display and navigation issues.
- Added a Clear History button with confirmation.

### Customization
- Fixed a navigation issue that prevented selected themes from carrying over to other pages.
- Removed unused imports, properties, and commented-out code.

## Known Limitations / Planned Improvements

- History and selected themes are not yet saved across application restarts.
- Previous calculation results cannot yet be recalled for reuse.
- Landscape orientation is not yet supported.
- Additional UI improvements and edge-case testing are planned.

## Original Android Release (2022)

The original Android APK is available in the repository's **September-28-2022-Release**.

To install the original version:

1. Open this repository's Releases section on an Android device.
2. Select **September-28-2022-Release**.
3. Download `app-debug.apk`.
4. Follow your device's installation prompts, if you choose to install it.

**Note:** This APK represents the original 2022 application and does not include the 2026 improvements.

## About This Project

Rather than rebuilding the calculator from scratch, I chose to revisit and improve my original work. This project documents my progression from independently learning mobile development to applying more deliberate debugging, refactoring, and application design practices.