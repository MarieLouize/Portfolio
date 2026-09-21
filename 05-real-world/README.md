# Proof 9 — Enterprise & Institutional IT Operations
## Physical Infrastructure, Hardware Triage, and Systems Administration — NNPCL Refinery & University of Ibadan

**Proof Class:** REAL EXPERIENCE  
**Operational Stage:** Field Work (Enterprise IT & Physical Operations)  
**Proof ID:** WOS-EXT-009  
**Cumulative Tenure:** 12 Months (6 Months Industrial Energy Sector + 6 Months Institutional Consultancy)  

---

## 1. Executive Summary & Physical Systems Baseline

Software does not execute in an abstract cloud; it runs on copper cables, hot switch ports, physical silicon, and power rails inside demanding physical environments. 

Before diagnosing API race conditions or authoring evaluation rubrics for distributed AI workflows, my operational baseline was formed through **12 cumulative months of on-site IT operations and hardware systems administration** across two high-accountability environments:

1. **NNPCL (Nigerian National Petroleum Company Limited) Refinery (6 Months):** Industrial energy plant environment. Operated across rotated physical disciplines: field LAN cable deployment, server room rack maintenance, component-level hardware triage, Cisco enterprise device inventory, fleet OS maintenance, and operational fuel telemetry auditing.
2. **Consultancy Service Unit, University of Ibadan (6 Months):** Institutional service desk for Nigeria's premier university consultancy branch. Handled multi-stakeholder workstation support, peripheral networking, data record logging, and system audits for executive, academic, and public-sector project teams.

$$\text{PHYSICAL CABLING} \longrightarrow \text{HARDWARE ISOLATION} \longrightarrow \text{SERVER RACK} \longrightarrow \text{TELEMETRY AUDIT}$$

---

## 2. Pillar 1: NNPCL Refinery (Industrial Energy Infrastructure — 6 Months)

Operating on active oil refinery grounds demands high physical safety compliance, zero-tolerance for unlogged changes, and rapid triage under industrial constraints. Duties were rotated across four operational pillars:

```
                          NNPCL ROTATIONAL OPERATIONAL DISCIPLINES
     ┌─────────────────────────────────────────────────────────────────────────────┐
     │ 1. FIELD NETWORKING         │ 2. HARDWARE & SERVER ROOM                     │
     │ • Cat6 field cable pulls    │ • RAM & PSU component fault isolation         │
     │ • RJ45 crimp & punch-downs  │ • Server rack repairs & cooling telemetry     │
     │ • Cable continuity testing  │ • High-volume network printer rebuilds        │
     ├─────────────────────────────┼───────────────────────────────────────────────┤
     │ 3. CISCO ASSET INVENTORY    │ 4. OS FLEET & TELEMETRY AUDIT                 │
     │ • Physical switch/router audit│ • Fleet patch rollouts & driver updates     │
     │ • Serial & MAC reconciliation│ • Physical-to-digital fuel log audits        │
     │ • Port mapping & tagging    │ • Data integrity & discrepancy escalation     │
     └─────────────────────────────┴───────────────────────────────────────────────┘
```

### 2.1 Physical Network Infrastructure & Field Cabling
- **Structured Cabling Runs:** Pulled, routed, and dressed Cat6 UTP/STP cabling across refinery administrative complexes, operational dispatch units, and field control stations through conduits and cable trays.
- **Termination & Testing:** Executed high-volume RJ45 crimping and punch-down block terminations on 110/Krone patch bays and modular keystone wall jacks.
- **Continuity & Fault Isolation:** Used wiremap cable testers and tone probes to diagnose open pairs, crossed conductors, split pairs, and signal attenuation caused by physical stress or harsh industrial plant conditions.

### 2.2 Component-Level Hardware Diagnostics & Server Room Operations
- **Workstation Component Triage:** Diagnosed intermittent system crashes and boot failures down to the component:
  - *RAM Fault Isolation:* Executed single-stick rotational testing to isolate defective memory modules causing random memory-parity faults and blue-screen crashes.
  - *Power & Motherboard Triage:* Tested ATX power supply rails with digital multimeters under load; identified swollen capacitors and degraded thermal compound causing processor throttling.
  - *Peripherals & Print Servers:* Disassembled and serviced high-duty departmental network laser printers (replacing feed rollers, cleaning optical sensors, resetting fuser units, and clearing corrupt spooler queues across the LAN).
- **Server Room Maintenance:** Assisted senior systems engineers inside the primary server facility. Supported rack-mounted server chassis extraction, physical hard drive replacements in hot-swap RAID arrays, power distribution unit (PDU) line tracing, and monitoring ambient server room temperature/humidity baselines.

### 2.3 Cisco Enterprise Network Asset Inventory
- **Infrastructure Auditing:** Conducted physical and logical asset verification of enterprise-grade Cisco hardware (Catalyst switches, edge routers, and enterprise wireless access points) across operational zones.
- **Inventory Reconciliation:** Verified physical chassis serial numbers, MAC addresses, rack unit coordinates, and firmware labels against central IT asset databases, eliminating "ghost" devices and identifying unauthorized unmanaged switch cascades.
- **Port Mapping:** Audited patch panel-to-switch port density to document unused switch ports, identify saturated runs, and label comms cabinet patch cords for faster emergency triage.

### 2.4 OS Fleet Maintenance & Operational Telemetry Auditing
- **Fleet Patch Management:** Scheduled and deployed operating system updates, security patches, driver packages, and corporate antivirus definitions across Windows workstation fleets with minimal disruption to dispatch workflows.
- **Fuel Telemetry Cross-Auditing:** Supported operational compliance by systematically cross-auditing physical handwritten fuel dip-logs and flow-meter readings against digital ledger records. Traced and escalated numerical variances, establishing a verifiable audit trail between physical inventory and digital telemetry.

---

## 3. Pillar 2: University of Ibadan Consultancy Service Unit (6 Months)

The Consultancy Service Unit operates as the commercial and professional advisory arm of the University of Ibadan, delivering research, corporate training, and advisory projects to corporate and public-sector clients.

### 3.1 Multi-Stakeholder IT Service Desk & Support
- **End-User Troubleshooting:** Provided Tier-1/Tier-2 service desk support for faculty consultants, administrative directors, and visiting corporate delegates.
- **Technical Literacy Translation:** Translated complex technical breakdowns (DNS misconfigurations, network drive permission locks, printer driver conflicts) into plainspoken, actionable guidance without condescension.
- **Workstation Staging:** Configured and deployed client-ready workstations, provisioned secure user accounts, configured network shares, and validated presentation/teleconference systems ahead of high-stakes client pitches.

### 3.2 Records Auditing, Inventory Logging, and SOP Documentation
- **IT Records Logging:** Maintained rigorous tracking logs for hardware maintenance, device allocations, software licenses, and incident resolution times.
- **Audit-Grade Verification:** Audited departmental IT asset check-ins and check-outs, ensuring physical equipment (projectors, field laptops, testing devices) matched central registry records upon return.
- **Living Runbooks:** Authored simple, step-by-step guides for office staff covering recurring friction points (configuring network printers, self-serve password resets, and accessing institutional shared drives), reducing repeat help-desk visits.

---

## 4. How Physical IT Operations Shapes My Systems Mindset

Operating on refinery plant floors and institutional service desks permanently established the operational principles that govern all my technical work:

| Physical IT Practice | Direct Equivalent in Software & Systems Operations |
| :--- | :--- |
| **Component-Level RAM Swapping** | **Deterministic Isolation:** Never guess what broke. Change exactly one variable at a time, verify state, and trace failures to the single root cause. |
| **Physical LAN Wiremap Testing** | **Layer-by-Layer Triage:** If a service is down, start at Layer 1. Verify physical/network transport before blaming application logic or database layers. |
| **Cisco Device Inventory & Port Tracing** | **System Topology Visibility:** An operator cannot defend or debug a system they cannot map. Undocumented dependencies are unmonitored failure modes. |
| **Refinery Fuel Log Cross-Auditing** | **Data Integrity Verification:** An unlogged state is an outage waiting to happen. Never accept interface output as truth without checking the underlying database or event log. |
| **Institutional Service Desk Empathy** | **Tactical De-escalation:** Users under deadline pressure experience system failures as betrayal. Calm them with competence, plain language, and clear action steps. |

---

## 5. Verification & Telemetry Summary

- **Total Field Tenures:** 2 Organizations (NNPCL Refinery + University of Ibadan Consultancy)
- **Cumulative Duration:** 12 Months (6 Months + 6 Months)
- **Primary Operational Disciplines:** Structured Cabling (Cat6 / RJ-45), Component Hardware Triage, Cisco Network Inventory, OS Fleet Administration, Service Desk Triage, and Telemetry Records Auditing.
- **Status:** Verified Real-World Experience (Proof 9).
