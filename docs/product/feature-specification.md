# Motexa — Feature Specification

## 1. Purpose

This document converts the MVP scope into concrete functional requirements.

It defines what each core feature must do, what information it requires, what the user should be able to accomplish, and what conditions must be satisfied for the feature to be considered complete.

This document will later be used as a reference for:

- UI design
- Google Stitch prompts
- Backend development
- Database design
- API design
- AI implementation
- Testing
- Acceptance criteria
- Claude implementation tasks

---

# 2. Feature Priority

| Priority | Meaning |
|---|---|
| P0 | Required for MVP |
| P1 | Important but can be deferred |
| P2 | Future |

Only P0 features are required for the first complete MVP.

---

# 3. Authentication

## Feature ID

`AUTH-001`

## Priority

P0

## Description

Users must be able to create an account and securely access Motexa.

## User Types

The authentication system must support:

- Customer
- Specialist
- Admin

## Required functionality

- Sign up
- Login
- Logout
- Password reset
- Session management
- Basic profile
- Account verification

## Customer signup

Minimum information:

- Name
- Email or phone
- Password

## Specialist signup

Minimum information:

- Name
- Email or phone
- Password
- Provider type

Additional provider information is collected during onboarding.

## Acceptance Criteria

- A user can create an account.
- A user can log in.
- A user can log out.
- Invalid credentials are rejected.
- Password reset is supported.
- Sessions remain authenticated appropriately.
- Users are assigned the correct role.
- Users cannot access functionality belonging to another role.

---

# 4. Digital Garage

## Feature ID

`GARAGE-001`

## Priority

P0

## Description

The Digital Garage is the user's central location for managing vehicles.

## Required functionality

Users can:

- Add a vehicle
- View vehicles
- Select a vehicle
- Edit vehicle information
- Archive/remove a vehicle
- View vehicle history
- Start AutoAI for a vehicle

## Vehicle fields

Minimum:

- ID
- Owner ID
- Make
- Model
- Year
- Engine/configuration
- Mileage
- VIN
- Registration number
- Image
- Notes
- Created date
- Updated date

## Acceptance Criteria

- User can add a vehicle.
- User can view all their vehicles.
- User can select a vehicle.
- User can edit vehicle information.
- User can archive a vehicle.
- Users cannot access another user's vehicles.
- AutoAI can receive the selected vehicle context.

---

# 5. Vehicle Selection

## Feature ID

`GARAGE-002`

## Priority

P0

## Description

Motexa must know which vehicle the user is referring to when performing vehicle-related actions.

## Behaviour

If the user owns one vehicle:

The vehicle can be automatically selected.

If the user owns multiple vehicles:

The user must be able to select the relevant vehicle.

## Acceptance Criteria

- AutoAI knows which vehicle is being discussed.
- Service requests contain the selected vehicle.
- Service history belongs to the correct vehicle.
- Users can change the active vehicle.

---

# 6. AutoAI

## Feature ID

`AI-001`

## Priority

P0

## Description

AutoAI is Motexa's AI-assisted automotive diagnostic experience.

It should help users understand vehicle problems and determine appropriate next steps.

AutoAI is not intended to replace professional automotive diagnosis.

---

# 7. AutoAI Inputs

## Feature ID

`AI-002`

## Priority

P0

AutoAI may use:

- Vehicle make
- Vehicle model
- Vehicle year
- Engine
- Mileage
- Service history
- User description
- Symptoms
- Warning lights
- Diagnostic codes
- Images
- Previous answers

The AI should not ask the user to repeatedly provide information already stored in the Digital Garage.

---

# 8. AutoAI Conversation

## Feature ID

`AI-003`

## Priority

P0

## Description

AutoAI should conduct a dynamic conversation rather than presenting a fixed questionnaire.

## Example

User:

> My car is overheating.

AI:

> How quickly does the temperature rise?

Options:

- Within a few minutes
- After driving for a while
- Only when stopped
- I'm not sure

The next question should depend on the answer.

## Requirements

The AI should:

- Ask relevant questions.
- Avoid unnecessary questions.
- Remember previous answers.
- Use vehicle context.
- Detect potentially dangerous situations.
- Summarize the information before assessment.

---

# 9. AutoAI Assessment

## Feature ID

`AI-004`

## Priority

P0

The AI assessment should contain:

- Problem summary
- Possible causes
- Likely causes where appropriate
- Confidence
- Severity
- Safety recommendation
- Recommended next step
- Recommended specialist category

## Example

```text
Problem Summary

Your engine is cranking but not starting.

Possible Causes

1. Fuel delivery issue
2. Ignition issue
3. Sensor problem

Confidence

Moderate

Severity

Needs attention

Recommended Action

Professional diagnosis is recommended.