---
title: "Privacy Policy and Terms for ViDL"
layout: page
permalink: /vidl-privacy-policy
description: "Privacy Policy and Terms for ViDL - a Chrome extension by Jim Sines (raystanza). Covers local-only processing, no developer data collection, local download-manager storage, user responsibility, and legal terms including arbitration and limitation of liability."
keywords: "ViDL, privacy policy, Chrome extension, video downloader, Jim Sines, raystanza, data privacy, GDPR, CCPA"
og_title: "Privacy Policy and Terms for ViDL - raystanza"
og_description: "Privacy Policy and Terms for ViDL, a Chrome extension by Jim Sines (raystanza). Covers data practices, local-only storage, user responsibility, and user rights."
og_image: "/assets/images/projects/vidl/vidl-privacy-policy-og.png"
image: "/assets/images/projects/vidl/vidl-privacy-policy-og.png"
image_alt: "ViDL privacy policy graphic highlighting local-only processing, no analytics, and no developer servers"
og_type: "website"
og_author: "Jim Sines"
---
**Effective Date:** May 11, 2026  
**Last Updated:** May 23, 2026  
**Extension Name:** ViDL - Video Downloader  
**Developer:** Jim Sines, an individual solo developer with no buisness entity  
**Contact Email:** [vidl-support@raystanza.uk](mailto:vidl-support@raystanza.uk)  
**Privacy Policy URL:** [https://raystanza.uk/vidl-privacy-policy](https://raystanza.uk/vidl-privacy-policy)

> **PLEASE READ THIS POLICY CAREFULLY.** This document is both the Privacy Policy for ViDL and the binding legal agreement between you and the Developer. It contains provisions that materially affect your legal rights, including **user responsibility for lawful use, a mandatory binding arbitration agreement, a class action waiver, a limitation of liability, an indemnification obligation, a Pennsylvania choice-of-law clause, and a one-year limitations period for claims** (Sections 14–21). By installing or using ViDL, you agree to these terms to the maximum extent permitted by law.

---

## 1. About the Developer

ViDL is created, owned, and operated by **Jim Sines** (also known online as "raystanza"), an individual residing in the **Commonwealth of Pennsylvania, United States of America**. ViDL is **not** operated by a corporation, limited liability company, partnership, trust, or any other separate legal entity. The Developer is a **sole proprietor** acting in his individual capacity.

For privacy questions, product notices, and any other purpose for which a responsible party, publisher contact, or data controller must be identified to the extent applicable, the relevant individual is:

**Jim Sines** ("the Developer," "I," "me," or "my")  
Email: [vidl-support@raystanza.uk](mailto:vidl-support@raystanza.uk)

The use of the alias "raystanza" or any product name including "ViDL" does not, and is not intended to, create or imply the existence of any business entity, agency, partnership, or employer/employee relationship.

---

## 2. Scope and Acceptance

This Privacy Policy and Terms document (this "Policy") applies to your use of the ViDL - Video Downloader browser extension (the "Extension" or "ViDL") in Google Chrome and any Chromium-based browser. By installing, enabling, or using ViDL, you ("you" or "User") agree to this Policy in full, including the binding arbitration agreement and class action waiver in Section 17.

If you do not agree with any part of this Policy, you must not install, enable, or use ViDL, and you must remove the Extension from your browser.

Because the Developer does not currently maintain a separate Terms of Service, this Policy also includes binding legal terms (Sections 14–21) governing lawful use, warranty, liability, indemnification, dispute resolution, and related matters. Those provisions form part of the contract between you and the Developer. Nothing in this Policy limits rights, remedies, or obligations that applicable law does not allow to be limited or waived.

---

## 3. Plain-Language Summary

* ViDL does **not** require an account of any kind.
* ViDL does **not** collect, transmit, or store any personal information on any server - including the Developer's own servers.
* ViDL does **not** include advertising, analytics, telemetry, or crash-reporting of any kind.
* ViDL does **not** communicate with any Developer-operated server or any Developer-selected analytics, advertising, telemetry, crash-reporting, or cloud-storage service.
* ViDL necessarily communicates with the websites and media hosts you choose to visit or download from. Those requests are made directly by your browser and are governed by those sites' own practices, not by the Developer.
* Video URLs detected on the pages you browse are held **in memory only** for the duration of that browser tab session unless you choose to start a download. When you start a download, ViDL stores limited download-manager metadata locally on your device so the popup can show recent download status.
* Your settings and preferences are stored using Chrome's built-in `chrome.storage.sync` API. This data may sync across your own signed-in Chrome profile if Chrome Sync is enabled; it is never accessible to or transmitted to the Developer.
* Recent download-manager state is stored using Chrome's built-in `chrome.storage.local` API on your own browser profile. It is not synced by ViDL and is not transmitted to the Developer.
* The Developer is a single individual, not a company, and operates ViDL from the United States.
* You are solely responsible for ensuring that your use of ViDL and any content you download is lawful and consistent with the rights and terms applicable to that content.

---

## 4. Information You Provide Directly

ViDL does not request, prompt for, or accept any information from you directly within the Extension. There are no registration forms, login screens, support-ticket flows, or user-generated content features within the Extension.

Through the Extension itself, the Developer does not knowingly collect any of the following:

* Name
* Email address
* Phone number
* Mailing or billing address
* Date of birth
* Government-issued identifiers
* Payment card or financial account information
* Biometric data
* Precise or approximate geolocation data
* Voice or video recordings
* Any form of user-generated content

If you voluntarily contact the Developer by email, you may disclose your email address, message content, attachments, screenshots, logs, URLs, or other information you choose to include. That support communication occurs outside the Extension and is handled through the Developer's email provider. The Developer will use support emails only to read, respond to, troubleshoot, document, or resolve your request; not for advertising, analytics, profiling, or resale. You should not include sensitive URLs, private content, credentials, or personal information in a support email unless you are comfortable disclosing that information.

---

## 5. Information Processed Locally During Normal Use

To perform its core function (detecting video streams on the page you are viewing) ViDL processes the following information **entirely within your browser**:

* **Network request URLs:** ViDL's background service worker inspects the URLs of network requests made by the active tab to identify those that match known video file extensions (e.g., `.mp4`, `.m3u8`, `.mpd`) or video `Content-Type` headers. Candidate detected URLs are held in memory for the relevant tab session unless you choose to start a download, in which case limited download metadata is stored locally as described in Section 6.
* **HTTP response headers:** ViDL reads `Content-Type` response headers solely to classify whether a network response is a video stream. No header values are stored or transmitted.
* **Page DOM:** ViDL's content scripts scan the page's DOM for `<video>` and `<source>` elements, and the injected script intercepts programmatic `.src` assignments on media elements, to surface video URLs that are not visible at the network layer. All processing is in-page memory only.
* **HLS stream manifests, keys, and segments:** When you initiate an HLS download, ViDL fetches the stream's manifest, any stream-provided AES-128 keys, and individual media segments directly from the source server using your browser's native `fetch` API. These requests may include cookies or other credentials that your browser is permitted to send to that source website or CDN. Segment data is assembled into a file in memory via the Extension's offscreen document and passed to Chrome's download API. Assembled in-memory data is not retained by ViDL after the download is triggered, except for temporary browser-managed Blob URLs needed to complete the save operation.

**None of the above is written to any external server, database, or logging service operated by the Developer.**

---

## 6. Information Stored Locally on Your Device

ViDL uses Chrome's `chrome.storage.sync` API to persist your chosen settings across browser sessions. The following settings values may be stored:

| Setting | What Is Stored |
|---|---|
| Theme | `"dark"` or `"light"` |
| Density | `"compact"`, `"comfortable"`, or `"spacious"` |
| Show badge | Boolean (`true` or `false`) |
| Clear on navigation | Boolean (`true` or `false`) |
| Filename prefix | A short user-supplied string (default: `"vidl"`) |
| Quality preference | `"highest"` or `"lowest"` |
| HLS concurrency | An integer between 1 and 12 |
| Custom CDN domains | An array of user-supplied domain name strings |

`chrome.storage.sync` data is stored locally in your browser profile. If you are signed in to Chrome, Google may sync this data across your own devices in accordance with [Google's Privacy Policy](https://policies.google.com/privacy). The Developer has no access to, visibility into, or control over data stored via `chrome.storage.sync`.

ViDL also uses Chrome's `chrome.storage.local` API to keep a lightweight local Download Manager working after the popup closes or the Manifest V3 service worker sleeps. Local download-manager records may include:

| Local Download Field | What May Be Stored |
|---|---|
| Source URL | The video or stream URL you chose to download |
| Filename | The suggested or generated download filename |
| Page context | The tab ID, page URL, and page title associated with the download, when Chrome makes them available |
| Download status | Whether the job is starting, fetching, downloading, assembling, saving, complete, interrupted, or errored |
| Progress metadata | Segment counts, byte counts when Chrome exposes them, Chrome download ID, error text, and timestamps |

This local download-manager data is stored only in your browser profile on your device. ViDL keeps at most 50 recent jobs, active jobs are preserved while running, and finished jobs can be dismissed individually or cleared using the Download Manager. Removing the Extension or clearing its extension data in Chrome also removes this local extension data.

Video URLs, page URLs, page titles, filenames, query strings, and error messages can sometimes reveal information about the sites you visit or the content you chose to download. ViDL does **not** transmit that information to the Developer. You should avoid sharing screenshots, logs, exported browser data, or support emails containing sensitive URLs unless you are comfortable disclosing that information.

You can clear all ViDL settings at any time by removing the Extension from Chrome, or by using Chrome's built-in extension data management tools.

---

## 7. No Developer-Operated or Analytics Services

ViDL does **not** integrate, embed, or communicate with any Developer-operated service or any Developer-selected tracking service, including but not limited to:

* Advertising networks or ad-mediation platforms
* Analytics or usage-tracking services
* Crash-reporting or error-monitoring services
* Developer-operated cloud storage, syncing, or logging services
* Social media platforms
* Payment processors
* Any server operated by the Developer

ViDL does communicate directly from your browser with websites, media servers, and CDNs involved in pages you visit and downloads you start. HLS manifests, HLS keys, and HLS segments are fetched directly from the original source URLs detected on the page you are viewing, using your browser's native network stack. These requests originate from your browser just as ordinary page or media requests would, may include credentials your browser is allowed to send to that site, and are governed by the privacy practices, access rules, and terms of the website or CDN serving the content - not by the Developer.

Chrome's own browser features, Chrome Sync, Chrome Downloads, and the Chrome Web Store are operated by Google and are governed by Google's applicable policies. The Developer does not receive data from those Google services other than ordinary publisher-level information Google may make available to extension developers, such as aggregate listing statistics, ratings, reviews, or support messages.

---

## 8. Purposes of Processing

The in-memory processing described in Section 5 is performed solely for the following purposes:

* Detecting video stream URLs on the page currently loaded in your active tab
* Classifying detected URLs by format (HLS, DASH, MP4, WebM, etc.) and quality
* Assembling HLS stream segments into a downloadable file when you initiate a download
* Persisting your UI and download preferences across sessions (Section 6)
* Preserving local download-manager status so active and recent downloads remain visible if the popup closes or the background service worker restarts

ViDL does not process any information for advertising, marketing, profiling, analytics, research, or any purpose other than those listed above.

The use of information received from Google APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements. ViDL uses Chrome extension APIs only to provide or improve its single purpose as a browser-based video detection and download utility. ViDL does not sell user data, transfer user data for advertising, use user data to determine creditworthiness, or allow the Developer or any other human to read user data from the Extension.

---

## 9. Children's Privacy

ViDL is a general-purpose browser utility intended for adult users. It is **not directed to children under 13**, does not knowingly collect personal information from anyone through the Extension, and does not contain features intended for children. Because ViDL collects no personal information through the Extension, no child-specific data protections are triggered in practice. Nonetheless, if you are a parent or guardian and have a concern, you may contact the Developer at [vidl-support@raystanza.uk](mailto:vidl-support@raystanza.uk).

---

## 10. Data Retention

Because ViDL does not collect or transmit personal information to the Developer, the Developer retains **no Extension-collected user data of any kind** on any server or in any database. The only user information the Developer may retain is information you voluntarily provide outside the Extension, such as a support email you choose to send.

Local data retention works as follows:

* Detected candidate video URLs for a tab are kept in memory and are cleared when the tab is closed, when navigation clears the tab list, or when you manually clear detected videos.
* Settings stored with `chrome.storage.sync` remain until you change them, remove the Extension, clear extension data, or Chrome Sync/browser-profile behavior removes them.
* Download-manager state stored with `chrome.storage.local` remains locally so recent download status can be displayed. ViDL keeps at most 50 recent jobs, and you can dismiss finished jobs or clear finished jobs from the Download Manager.
* Temporary Blob URLs and assembled in-memory HLS data are kept only as long as needed for Chrome to save the file, with a fallback cleanup timer.
* Support emails you voluntarily send may be retained in the Developer's email account for as long as reasonably needed to respond to the request, maintain records, or protect legal rights, unless deletion is required by applicable law.
* Files you download, entries in Chrome's downloads history, operating-system file metadata, and records kept by websites or CDNs are outside the Developer's control.

---

## 11. Security

ViDL's design (processing data in-browser and not transmitting user data to Developer-controlled infrastructure) reduces many categories of data-breach risk at the Extension level, because the Developer does not maintain a user-data server or database. Network traffic initiated by ViDL when assembling an HLS download uses the same browser network environment that would be used to play or fetch the stream, including HTTPS when the source site provides HTTPS.

However, video URLs, page URLs, query strings, signed media URLs, filenames, and error messages can be sensitive. The Developer takes reasonable care in the Extension's code, but **no software is completely free of bugs or vulnerabilities.** The Developer cannot guarantee, and does not warrant, the absolute security of any local data, downloaded files, in-transit network requests, website behavior, browser behavior, or operating-system behavior.

---

## 12. United States State Privacy Rights

Because ViDL does not collect, sell, share, or transmit personal information to the Developer, most state privacy law obligations (CCPA/CPRA, VCDPA, CPA, CTDPA, UCPA, TDPSA, and similar statutes) should not be triggered with respect to the Developer's own records. The Developer does not sell or share personal information, does not use personal information for targeted advertising, and does not maintain user records to access, correct, delete, or port.

If you believe ViDL has collected personal information about you and wish to exercise any state law right, you may contact the Developer at [vidl-support@raystanza.uk](mailto:vidl-support@raystanza.uk). Because the Developer does not hold Extension-collected personal data, any such request will typically be fulfilled by confirming that no responsive Extension records exist and, where useful, explaining how you can clear ViDL's local extension data from your own browser profile. If your request concerns a support email you voluntarily sent, the Developer will handle it according to applicable law.

---

## 13. International Users (EEA, United Kingdom, Switzerland, and Elsewhere)

ViDL is operated from the United States by an individual sole proprietor. ViDL does not collect or transmit Extension personal information to Developer-controlled infrastructure. To the extent local browser processing is treated as processing of personal data under the EU General Data Protection Regulation (GDPR), the UK GDPR, or analogous legislation, that processing occurs on your own device for the limited purposes described in this Policy and is not transferred to the Developer. No cross-border data transfer to the Developer's infrastructure occurs through the Extension. If you voluntarily email the Developer from outside the Extension, that communication may be processed in the United States or wherever the relevant email providers process email.

If applicable laws in your country impose obligations on the Developer that exceed what is feasible for an individual sole proprietor with no physical or commercial presence in that country, the Developer reserves the right to discontinue distribution of ViDL in that country.

---

## 14. User Responsibility, Lawful Use, and No Control Over User Conduct

ViDL is a general-purpose browser utility that detects media URLs in your own browser session and lets you initiate downloads from source URLs available to your browser. ViDL does **not** grant you any ownership right, license, permission, or authorization to download, copy, decrypt, retain, redistribute, publish, sell, modify, or otherwise use any third-party content.

You are solely responsible for:

* Determining whether you have the legal right to download, save, copy, view, use, or share any content you access through ViDL;
* Complying with copyright law, intellectual-property law, privacy law, publicity-right law, contract law, website terms of service, platform rules, subscription terms, and any other applicable law or obligation;
* Ensuring that your use of ViDL does not bypass, defeat, or interfere with paywalls, authentication systems, digital rights management, access controls, geographic restrictions, rate limits, technical protection measures, or any other restrictions imposed by a website, rights holder, platform, CDN, or service provider;
* Obtaining any consent, license, or permission required for the content you download or for any subsequent use of that content; and
* Accepting all consequences of your own downloads, files, storage choices, sharing, publication, or other use of content.

The Developer does not host, select, publish, endorse, authorize, control, monitor, or review the websites you visit, the media URLs detected by ViDL, the files you choose to download, or anything you do with downloaded content. ViDL has no account system, server-side download service, content library, recommendation system, or user-submission system. The Developer cannot know what you download, cannot approve or reject your downloads, and cannot verify whether your use is lawful.

You must not use ViDL for copyright infringement, piracy, unlawful surveillance, harassment, privacy violations, unauthorized access, violation of website terms, circumvention of technical protection measures, redistribution of content without permission, or any other unlawful, harmful, or unauthorized purpose. If your jurisdiction, a website's terms, or a content owner's restrictions prohibit your intended use, you must not use ViDL for that purpose.

To the maximum extent permitted by law, the Developer is not responsible or liable for your use or misuse of ViDL, for any content you access or download, for any third-party claim arising from your conduct, or for any violation of law, rights, or terms caused by you or by anyone using your browser profile, device, or downloaded files.

---

## 15. No Warranty; "As-Is" Provision

ViDL, this Policy, and any information, services, or features provided through ViDL are provided **"AS IS" and "AS AVAILABLE,"** without any warranty of any kind, express, implied, statutory, or otherwise, **to the maximum extent permitted by law**. The Developer expressly disclaims all warranties, including, without limitation, warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, uninterrupted operation, error-free operation, and freedom from harmful components.

The Developer makes **no warranty** regarding the availability, legality, copyright status, or downloadability of any video content detected or downloaded using ViDL. You are solely responsible for ensuring that your use of ViDL and any content you download complies with all applicable laws and with the terms of service of the websites you visit.

---

## 16. Limitation of Liability

To the maximum extent permitted by law:

(a) **The Developer (Jim Sines, individually) shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages**, including loss of profits, revenue, data, goodwill, business opportunity, or other intangible losses, arising out of or relating to ViDL, this Policy, your use of or inability to use the Extension, or any content you download using ViDL, regardless of the legal theory (contract, tort, statute, strict liability, or otherwise) and even if the Developer has been advised of the possibility of such damages.

(b) **The Developer's total aggregate liability** to you for any and all claims arising out of or relating to ViDL, your use of ViDL, or this Policy will not exceed **fifty United States Dollars (US $50.00)**.

(c) These limitations apply to the fullest extent permitted by law, **even if a limited remedy fails of its essential purpose**, and apply collectively to the Developer and to his heirs, successors, and assigns.

Some jurisdictions do not allow the exclusion or limitation of certain damages. In those jurisdictions, the Developer's liability is limited to the smallest amount permitted by applicable law.

You acknowledge that the Developer is an individual, not a business entity, and that the limitations in this Section are a fundamental basis on which the Developer is willing to make ViDL available to you free of charge.

---

## 17. Binding Arbitration and Class Action Waiver

> **PLEASE READ THIS SECTION CAREFULLY. IT REQUIRES YOU TO RESOLVE DISPUTES THROUGH BINDING INDIVIDUAL ARBITRATION AND WAIVES YOUR RIGHT TO A JURY TRIAL OR TO PARTICIPATE IN ANY CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING.**

**17.1 Agreement to Arbitrate.** You and the Developer agree that any dispute, claim, or controversy arising out of or relating to ViDL, this Policy, your privacy in connection with ViDL, or the relationship between you and the Developer (each a "Dispute") shall be resolved exclusively through **final and binding individual arbitration**, except as provided in Section 17.6.

**17.2 Federal Arbitration Act.** This arbitration agreement is governed by the **Federal Arbitration Act**, 9 U.S.C. §§ 1 et seq., and evidences a transaction involving interstate commerce.

**17.3 Arbitration Rules and Forum.** The arbitration will be administered by the **American Arbitration Association ("AAA")** under its **Consumer Arbitration Rules** (or any successor consumer rules) as in effect at the time the arbitration is commenced. The AAA's rules and forms are available at [www.adr.org](https://www.adr.org). If the AAA is unavailable or refuses to administer the arbitration, the parties will jointly select another nationally recognized arbitration provider; if they cannot agree, a court of competent jurisdiction may appoint one.

**17.4 Seat, Venue, and Format.** The legal seat of arbitration is **Pennsylvania, United States of America**. Any in-person hearing will take place in **Pennsylvania**, unless you and the Developer agree otherwise. If you qualify as a consumer under the AAA's rules, you may, at your election, attend any hearing in the U.S. county of your residence or appear by telephone, video conference, or written submission, in accordance with those rules.

**17.5 Class Action Waiver.** **YOU AND THE DEVELOPER AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, CONSOLIDATED, MASS, OR REPRESENTATIVE ACTION.** The arbitrator may not consolidate the claims of multiple parties and may not preside over any form of class, collective, consolidated, mass, or representative proceeding. If this class action waiver is found to be unenforceable in a particular case, then the entirety of this Section 17 will be null and void as to that case, but the remainder of this Policy will remain in full force and effect.

**17.6 Exceptions to Arbitration.** Notwithstanding the foregoing, either party may: (a) bring an individual action in **small-claims court** for any claim that qualifies, so long as the action remains in that court and on an individual basis; (b) seek injunctive or other equitable relief in a court of competent jurisdiction to prevent infringement, misappropriation, or violation of the party's intellectual property rights; and (c) submit complaints to government agencies that may take action on the party's behalf.

**17.7 Right to Opt Out of Arbitration.** **You have the right to opt out of this arbitration agreement.** To opt out, send a written notice to the Developer at **[vidl-support@raystanza.uk](mailto:vidl-support@raystanza.uk)** with the subject line **"Arbitration Opt-Out"**, including your full legal name and a clear statement that you are opting out of the arbitration agreement in this Policy. Your opt-out notice must be sent **within thirty (30) days** after the date you first install or use ViDL, or, if you already use ViDL as of the Effective Date of this Policy, **within thirty (30) days of that Effective Date**. If you opt out, no other provision of this Policy will be affected.

**17.8 Survival.** This Section 17 will survive any termination of your use of ViDL and any deletion or modification of this Policy.

---

## 18. Indemnification

To the maximum extent permitted by law, **you agree to defend, indemnify, and hold harmless Jim Sines (individually) and his heirs, successors, and assigns** (collectively, the "Indemnified Parties") from and against any and all claims, demands, actions, liabilities, losses, damages, judgments, settlements, costs, and expenses (including reasonable attorneys' fees and court costs) arising out of or relating to:

(a) your use or misuse of ViDL;  
(b) your violation of this Policy;  
(c) your violation of any applicable law, regulation, or rule, including copyright, intellectual property, or terms-of-service violations related to content you download using ViDL;  
(d) your violation of the rights of any third party, including any intellectual property, privacy, or publicity right; or  
(e) any content you download, transmit, or make available through ViDL.

The Developer reserves the right, at his own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate with the Developer's defense of that matter. You may not settle any matter that affects the Developer without the Developer's prior written consent.

---

## 19. Governing Law and Venue

This Policy and any Dispute will be governed by and construed in accordance with the laws of the **Commonwealth of Pennsylvania, United States of America**, without regard to its conflict-of-laws principles, and, where applicable, by the laws of the United States.

For any matter not subject to arbitration under Section 17, you and the Developer agree to the **exclusive jurisdiction and venue of the state and federal courts located in the Commonwealth of Pennsylvania**, and each party irrevocably waives any objection to such jurisdiction or venue, including any objection based on inconvenient forum.

The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Policy.

---

## 20. Time Limit on Claims

Except where prohibited by law, **any claim or cause of action arising out of or related to ViDL or this Policy must be filed within one (1) year** after the claim or cause of action arose, or it will be permanently barred.

---

## 21. Miscellaneous

**Entire Agreement.** This Policy constitutes the entire agreement between you and the Developer regarding its subject matter and supersedes all prior or contemporaneous understandings, communications, and agreements.

**Severability.** If any provision of this Policy is held invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect, and the invalid provision will be modified to the minimum extent necessary to make it valid and enforceable, except as expressly provided in Section 17.5.

**No Waiver.** The Developer's failure to enforce any provision of this Policy will not constitute a waiver of that provision or of any other provision.

**Assignment.** You may not assign or transfer your rights or obligations under this Policy without the Developer's prior written consent, and any attempted assignment without that consent is void. The Developer may freely assign or transfer this Policy in connection with any sale, transfer, or other disposition of ViDL.

**Force Majeure.** The Developer is not liable for any failure or delay caused by events beyond his reasonable control, including acts of God, network failures, third-party service outages, governmental action, sanctions, war, terrorism, civil disturbance, labor disputes, or pandemic.

**No Agency.** Nothing in this Policy creates any partnership, joint venture, employment, or agency relationship between you and the Developer.

**Headings.** Section headings are for convenience only and do not affect interpretation.

**Language.** This Policy is provided in English. If any translation conflicts with the English version, the English version controls.

**Independent Contractor / Sole Proprietor.** You acknowledge that the Developer is an individual sole proprietor with no business-entity protections, and that nothing in this Policy creates any employment, agency, joint venture, or partnership relationship with you or any platform service.

---

## 22. Changes to This Policy

The Developer may update this Policy from time to time. When changes are made, the "Last Updated" date at the top will be revised. Material changes may also be disclosed through the Extension's Chrome Web Store listing or another reasonable method.

Your continued use of ViDL after a change becomes effective constitutes your acceptance of the change. If you do not accept the change, you must stop using ViDL and remove the Extension from your browser.

---

## 23. Contact

For privacy questions, requests, or notices required by this Policy (including arbitration opt-out notices):

**Jim Sines / raystanza** - individual solo developer; not a business entity  
**Email:** [vidl-support@raystanza.uk](mailto:vidl-support@raystanza.uk)  
**Privacy Policy URL:** [https://raystanza.uk/vidl-privacy-policy](https://raystanza.uk/vidl-privacy-policy)
