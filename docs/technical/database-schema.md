# Motexa — Database Architecture & Schema

## 1. Purpose

This document defines the initial database architecture for Motexa.

It describes:

- Core entities
- Relationships
- Fields
- Primary keys
- Foreign keys
- Status values
- Data ownership
- Indexing strategy
- Audit requirements
- AI data storage
- Future extensibility

The database must support the complete Motexa workflow:

User → Vehicle → AutoAI → Service Request → Specialist → Quote → Booking → Job → Service History → Review

---

# 2. Database Technology

## Primary Database

PostgreSQL.

PostgreSQL is the source of truth for Motexa's transactional data.

---

# 3. Database Design Principles

The database should follow these principles:

1. Use relational modeling for core business entities.
2. Avoid unnecessary duplication.
3. Use foreign keys to enforce relationships.
4. Use database constraints where appropriate.
5. Keep business state explicit.
6. Store timestamps consistently.
7. Avoid storing large files directly in database columns.
8. Store references to object storage instead.
9. Protect sensitive information.
10. Design for future expansion without over-engineering the MVP.

---

# 4. Primary Entity Relationship

The central relationship is:

```text
User
 │
 └── Vehicle
       │
       ├── AI Sessions
       │
       ├── Service Requests
       │       │
       │       └── Quotes
       │
       ├── Bookings
       │       │
       │       └── Jobs
       │
       └── Service Records