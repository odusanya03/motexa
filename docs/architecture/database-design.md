# Motexa — Database Design

## 1. Purpose

This document defines the high-level database design for Motexa.

It describes the core entities, relationships, ownership boundaries, and data responsibilities required to support the Motexa MVP.

The detailed table-level schema is maintained in:

`docs/technical/database-schema.md`

---

# 2. Database Strategy

Motexa should use a relational database for its core application data.

The database must support:

- Strong relationships between entities
- Transactional operations
- Data integrity
- Referential integrity
- Querying and filtering
- Auditability
- Future scalability

The initial database should favor simplicity and reliability rather than premature database fragmentation.

---

# 3. Core Domain Model

The core Motexa domain can be represented as:

```text
User
 │
 ├── Vehicles
 │      │
 │      ├── AI Sessions
 │      │      └── AI Messages
 │      │
 │      └── Service History
 │
 └── Service Requests
         │
         ├── Quotes
         │      └── Specialist
         │
         └── Booking
                │
                └── Service Record