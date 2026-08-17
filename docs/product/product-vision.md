# Motexa — Product Vision

## 1. Product Identity

**Product name:** Motexa

**Working tagline:** Your car. Under control.

**Initial market:** Nigeria

**Product category:** Intelligent vehicle ownership and automotive services platform

---

## 2. Vision

Motexa aims to become the intelligent digital layer between vehicle owners, their vehicles, and the automotive service ecosystem.

The long-term vision is to give every vehicle a persistent digital identity and every owner a trusted place to understand, maintain, diagnose, repair, and manage that vehicle.

---

## 3. Mission

Make vehicle ownership simpler, more transparent, safer, and more intelligent by combining automotive expertise, AI-assisted diagnosis, trusted service providers, and digital vehicle records in one platform.

---

## 4. Product Definition

Motexa is not simply a mechanic marketplace and not simply an AI chatbot.

It is a vehicle ownership platform centered around three connected concepts:

1. **Digital Garage** — the user's vehicles, records, maintenance and diagnostics.
2. **AutoAI** — an AI-assisted diagnostic and vehicle guidance system.
3. **Automotive Services** — trusted specialists and service workflows.

The initial product connects these concepts through a focused workflow:

**Vehicle → Problem → AI assessment → Specialist → Quote → Booking → Repair → Service history**

---

## 5. Target Users

### Primary user — Private vehicle owner

A vehicle owner who needs help understanding, maintaining, diagnosing, or repairing a vehicle.

Typical needs:

- Find trustworthy specialists.
- Understand vehicle problems.
- Get an initial assessment before visiting a workshop.
- Compare service quotes.
- Track repairs.
- Keep service records.
- Know when maintenance is due.

### Secondary user — Automotive specialist

Mechanics, diagnostic technicians, auto electricians, AC specialists, transmission specialists, body repair specialists, and workshops.

Typical needs:

- Find customers.
- Receive relevant service requests.
- Showcase verified expertise.
- Submit quotes.
- Manage jobs.
- Build reputation.
- Maintain service records.

### Future users

- Mobile mechanics
- Parts suppliers
- Tow operators
- Vehicle inspection companies
- Rental companies
- Fleet operators
- Insurance providers
- Automotive equipment suppliers

---

## 6. Core Problems

### Trust

Vehicle owners often struggle to determine which automotive professionals are competent and trustworthy.

### Diagnosis

Non-technical vehicle owners frequently know that something is wrong but cannot determine the likely system, severity, or appropriate next action.

### Fragmentation

Repair, diagnostics, towing, parts, inspections, transportation, and maintenance are usually handled through disconnected providers.

### Transparency

Customers may have difficulty comparing repair costs, understanding quotations, or determining whether a proposed repair is necessary.

### Records

Vehicle maintenance and repair history is often fragmented across paper receipts, WhatsApp conversations, memory, and individual workshops.

### Emergencies

When a vehicle breaks down, the owner may have to separately find a mechanic, tow provider, and alternative transportation.

---

## 7. Core Solution

Motexa provides a single workflow for the most important early vehicle-ownership problems.

### Digital Garage

A persistent digital profile for each vehicle containing:

- Make and model
- Year
- Engine information
- VIN
- Registration information
- Mileage
- Vehicle images
- Service history
- Diagnostic history
- Maintenance information

### AutoAI

An AI-assisted vehicle diagnostic copilot that can combine:

- User-described symptoms
- Guided questions
- Vehicle information
- Service history
- Dashboard images
- Diagnostic trouble codes
- Eventually audio and video

AutoAI produces:

- Possible causes
- Diagnostic reasoning
- Severity/risk classification
- Recommended next actions
- DIY education where appropriate
- Specialist recommendations
- Emergency escalation when necessary

AutoAI is an aid to diagnosis, not a replacement for qualified automotive professionals.

### Specialist Marketplace

Users can discover automotive specialists based on:

- Location
- Specialization
- Availability
- Ratings
- Verification
- Relevant experience

### Service Workflow

Users can:

1. Describe a problem.
2. Attach relevant media.
3. Select a vehicle.
4. Request service.
5. Receive quotes.
6. Compare providers.
7. Book a provider.
8. Track job progress.
9. Review the provider.
10. Automatically add the completed work to vehicle history.

---

## 8. MVP

The first release will intentionally focus on:

- Authentication
- User profiles
- Digital Garage
- Vehicle management
- Service history
- AutoAI
- Specialist discovery
- Specialist profiles
- Service requests
- Quotes
- Booking
- Job status
- Reviews
- Administrative management

The MVP will use realistic seed/dummy data where real-world provider/customer data is not yet available.

All assumptions and placeholder data must be explicitly identified as such.

---

## 9. MVP Non-Goals

The first release will not attempt to fully implement:

- National-scale mechanic coverage
- Full parts marketplace
- Car rental marketplace
- Insurance marketplace
- Fleet management
- Full government vehicle-record integration
- Complete vehicle-history marketplace
- Physical diagnostic-equipment marketplace
- Advanced escrow infrastructure
- Full roadside-assistance network
- Predictive maintenance at production scale

These remain future expansion areas.

---

## 10. Long-Term Ecosystem

Potential future Motexa capabilities include:

- Roadside assistance
- Towing
- Mobile mechanics
- Parts marketplace
- Genuine-parts verification
- Vehicle inspections
- VIN intelligence
- Vehicle Passport
- Car rental
- Transportation assistance
- Insurance integrations
- OBD integrations
- Predictive maintenance
- Diagnostic equipment marketplace
- Equipment rental
- Fleet management
- Workshop management
- Automotive financing partnerships

---

## 11. Product Principles

### Safety first

Vehicle and repair advice must not encourage unsafe behavior.

### AI must communicate uncertainty

AutoAI should distinguish between:

- Known information
- Likely causes
- Possible causes
- Unknown information
- Professional confirmation

### Trust must be earned

Provider verification, reputation, job history, and customer feedback should be meaningful.

### Vehicle-centered architecture

The vehicle is a core domain object rather than an incidental field on a service request.

### Build small, design for expansion

The MVP should be simple enough to build while avoiding architectural decisions that make future expansion unnecessarily difficult.

### Evidence over assumptions

Unvalidated market assumptions must be clearly marked and replaced with real evidence as the product gains users.

### Human expertise remains important

Motexa should augment mechanics and vehicle owners, not pretend that AI eliminates professional automotive expertise.

### Privacy by design

Sensitive identity, vehicle, location, and payment information should only be collected and retained when necessary.

---

## 12. Working Assumptions

The following are hypotheses, not validated market research:

1. Nigerian vehicle owners value trusted/verified automotive specialists.
2. Owners are interested in understanding likely vehicle problems before visiting a workshop.
3. AI-guided diagnosis can improve the first stage of the vehicle-service journey.
4. Customers benefit from receiving comparable quotes.
5. A persistent digital service history provides long-term value.
6. Vehicle owners will return to a platform that manages their vehicle over time.
7. Automotive specialists can benefit from a structured digital source of service requests.
8. Location-aware specialist discovery is valuable during both routine service and emergencies.

These assumptions should be validated through customer and provider research when resources allow.

---

## 13. Founder Domain Advantage

The product development process will leverage the founder's practical automotive experience, including approximately six years of apprenticeship/workshop exposure in Mercedes-Benz vehicle repair.

This experience will inform:

- Diagnostic workflows
- Automotive terminology
- Common workshop processes
- Specialist categorization
- Diagnostic question design
- AI knowledge modeling
- Realistic seed data
- User experience assumptions

Founder experience is treated as valuable domain input, but not as a substitute for broader market validation.

---

## 14. Geographic Strategy

Nigeria is the initial market.

The system should be Nigeria-aware for the MVP, including:

- Nigerian currency
- Nigerian phone-number conventions
- Nigerian locations
- Nigerian automotive context
- Local provider workflows
- Local verification requirements where applicable

However, the core domain model should avoid unnecessary hard-coding of Nigerian-specific assumptions so the product can eventually expand to other markets.

---

## 15. Success Criteria for the MVP

The MVP should demonstrate that a user can complete the following end-to-end workflow:

**Register → Add vehicle → Describe a problem → Receive an AutoAI assessment → Discover a relevant specialist → Request service → Receive a quote → Book → Complete job → Save service history → Review provider**

The product succeeds at the MVP stage if this workflow is usable, technically reliable, visually coherent, and demonstrates a compelling reason for a vehicle owner to return.

---

## 16. Product North Star

> **Motexa should make a vehicle owner feel that they have an intelligent, trusted automotive assistant in their pocket.**

The product should answer three fundamental questions:

**What is happening to my car?**

**What should I do next?**

**Who can I trust to help me?**
