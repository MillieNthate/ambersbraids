# AMBER'S BRAIDS WEBSITE - FINAL README
Student: Millicent Nthate Rapoo
Student Number ST10485370
Module: Web Development (Part 1-3)
Date: 02 November 2026 

PART 1: PROJECT PROPOSAL & BASIC HTML (Choosing the Business)

- Assignment was to choose between two business options:
    1. Amigo's Cafe
    2. Amber's Braids 

- I chose: AMBER'S BRAIDS
  Reason: Hair braiding business based in Garankuwa, 
  more personal, I know the services (Knotless, Goddess, 
  Twisted Locks, Island Twist) and I know the owner personally and think this website will be a learning experience for myself 

- Created Project Proposal document explaining:
    * Business name: Amber's Braids
    * Slogan: "Quality Hair, For Her"
    * Target customers: Ladies in Garankuwa, and more places nearby in Pretoria
    * Goal: Let clients book online and enquire much easier
    * Sitemap: How the website goes and how it was built

- Created basic HTML pages (no styling yet):
    * index.html (HOME)
    * about.html (ABOUT US)
    * services.html (SERVICES)
    * enquiry.html (ENQUIRY)
    * contact.html (CONTACT)

- At this stage pages were plain, only text and links, 
  header was not aligned, no colours.

PART 2: CSS STYLING & LAYOUT FIXES (Where I Struggled)

- Added CSS styling to make website look like the examples 
  from friends (GIVE MONEY / GIVE TIME layout)

- Colour scheme finalized:
    * Header: #dcc5d6 (Light purple)
    * Body: #f8c8dc (Light pink)
    * Footer: #ede6f3 (Lighter purple/pink color)
    * Nav Buttons: #fefce8 (Cream)

- STRUGGLES I FACED IN PART 2:
    1. Header alignment: Logo was jumping, "Amber's Braids" text 
     and nav buttons were not in one line. Fixed with 
     display: flex; align-items: center; justify-content: space-between;

    2. Map issue: Google Map iframe on contact page was too big 
     and breaking layout. Fixed by setting width:100% and 
     height:300 with border-radius.

    3. Footer colour: I wanted footer same light purple as second 
     pic example, not dark. Fixed by changing to #ede6f3.

    4. Navigation: Active page not highlighting. Fixed by adding 
     .active class: background: #fff; border: 2px solid #333;

    5. Mobile view: Everything was squished on phone. Fixed with 
     @media (max-width: 768px) { grid-template-columns: 1fr; }

    6. The wanted colors were unable to align and i faced alot of mismatch.

- After fixes, all 5 pages had same header, same footer, 
  same colours - consistent design.

PART 3: JAVASCRIPT + GOOGLE FORMS EMBEDDED (Current Final)

- Added JavaScript for:
    * Form validation (Name required field)
    * Booking form interaction
    * BOOK NOW button redirect to enquiry.html
  
- Made google forms so customers can fill them better on both contact.html and enquiries.html
