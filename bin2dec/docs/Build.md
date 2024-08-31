# Bin2Dec

## System Design

The Bin2Dec app will follow a simple client-side architecture, as the conversion logic can be handled entirely in the browser. Here's the overall structure:

-   Frontend:

    -   HTML: Provides the structure of the single-page application.
    -   CSS: Handles the styling and layout of the app.
    -   JavaScript: Implements the binary to decimal conversion logic and user interactions.

-   Components:

    -   Input Field: For users to enter the binary number.
    -   Convert Button: Triggers the conversion process.
    -   Output Display: Shows the decimal result.
    -   Error Message Area: Displays validation errors if the input is invalid.

-   Core Functionality:

    -   Input Validation: Ensures the entered number contains only 0s and 1s.
    -   Conversion Algorithm: Converts the binary input to its decimal equivalent.

-   User Interface:

    -   Responsive design to work on both desktop and mobile devices.
    -   Clear and intuitive layout for easy user interaction.

-   Error Handling:

    -   Client-side validation to provide immediate feedback on invalid inputs.

-   Deployment:
    -   Static file hosting (e.g., GitHub Pages, Netlify) as there's no server-side processing required.

This architecture keeps the app simple, fast, and easily maintainable, as all logic is contained within the frontend without the need for a backend or database.
