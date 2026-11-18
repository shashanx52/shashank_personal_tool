// Reference library: worked case-interview mini-cases across industries, plus case-maths drills.
// Injected (by retrieval) into the system prompt of the "Case, Guesstimate & Puzzle" profile.

module.exports = `
=== WORKED CASE LIBRARY (20 cases across industries) ===

[FMCG: biscuit brand losing market share to regional players] "Our client, a national biscuit maker, has lost 5 points of share in two years to regional brands. Why, and what should they do?"
Clarify: Share loss in which segments (glucose, cream, premium) and which states? Is the market growing? Has the client changed price or pack sizes?
Hypothesis: regional players win on price per gram in the mass glucose segment through lower distribution cost and local flavours, while the client raised prices to protect margin.
Structure: (1) Market: segment growth, where regionals gained; (2) Customer: price-per-gram comparison, taste, pack size (Rs 5 / Rs 10 price points); (3) Distribution: reach in rural and small towns, retailer margin, fill rates; (4) Client economics: cost per kg vs regionals, ad spend.
Key numbers: client Rs 10 pack 80 g vs regional 100 g (25% more grams per rupee); retailer margin client 8% vs regional 12%; client reach 2 mn outlets of 12 mn kirana stores. Typical finding: the loss is concentrated in the Rs 5-10 mass segment in 5 states where regionals have 12% retailer margin and bigger packs.
Recommendation: defend the Rs 10 price point with a 90-100 g fighter pack and raise retailer margin to 10% in the 5 states (costs about 2 points of gross margin, recovers an estimated 3 share points in 18 months); shift ad spend from TV to in-store; keep premium pricing elsewhere. Risks: margin dilution, price war. Next step: pilot in 2 states for one quarter.

[Quick commerce: make 10-minute grocery delivery profitable] "A quick-commerce player loses Rs 30 per order. How does it get to break-even?"
Clarify: Which cost is included in the Rs 30 (dark-store rent, riders, discounts, marketing)? Target time frame? Order growth assumed?
Hypothesis: losses come from low average order value (AOV) and under-utilised dark stores; break-even needs a higher AOV and more orders per store, not just lower rider pay.
Structure: (1) Revenue per order: AOV, take rate (commission + ad income + delivery fee); (2) Variable cost per order: rider, packaging, discounts, payment fees; (3) Fixed cost per store: rent, staff, utilities spread over daily orders; (4) Levers and their size.
Key numbers: AOV Rs 500 at 18% take rate = Rs 90 revenue; variable cost Rs 35 rider + Rs 10 packaging + Rs 25 discounts = Rs 70; contribution Rs 20; store fixed cost Rs 3 lakh a month over 2,000 orders a month = Rs 150 an order -> loss. At 6,000 orders a month fixed cost is Rs 50 an order; raise AOV to Rs 700 (revenue Rs 126) and cut discounts to Rs 15: contribution Rs 66 - Rs 50 = plus Rs 16.
Recommendation: grow order density per store to 200 a day (3x) before opening new stores, lift AOV with higher-margin categories (snacks, personal care) and a Rs 99 free-delivery threshold, add advertising income from brands (adds Rs 10-15 an order). Risk: density needs marketing spend; competitor discounting.

[EV two-wheeler maker: enter the electric three-wheeler market?] "Should our client, an EV scooter maker, enter electric three-wheelers?"
Clarify: Passenger or cargo three-wheelers? Target segment (fleet operators vs individuals)? Capex appetite? Time horizon?
Hypothesis: yes if the client can reuse its battery and motor platform, because the cargo 3W segment is growing fast and buyers are fleets who value total cost of ownership.
Structure: (1) Market size and growth: about 600,000 three-wheelers sold a year in India, electric share rising past 50% in passenger; (2) Competition: incumbents (Bajaj, Piaggio, Mahindra) plus many small EV makers; (3) Client fit: shared platform (40% of parts), dealer network, financing partners; (4) Economics: unit price Rs 3.5 lakh, contribution Rs 40,000, plant capex Rs 200 crore for 50,000 units a year -> payback 3-4 years at 50% utilisation; (5) Entry mode: build vs partner with a body builder.
Recommendation: enter the cargo segment first through fleet operators, reusing the scooter platform; partner with a body builder to avoid heavy capex in year one; target 20,000 units in year 3. Risks: battery price, subsidy changes, after-sales reach.

[SaaS: monthly churn rose from 2% to 4%] "A B2B SaaS client's churn doubled. Diagnose and fix."
Clarify: Logo churn or revenue churn? Which customer segment and plan? Any product or pricing change in the period? Involuntary (failed payments) vs voluntary?
Hypothesis: churn rose in the small-business tier after a price increase, with onboarding failures driving early churn.
Structure: (1) Segment the churn: by plan, tenure (first 90 days vs older), industry, acquisition channel; (2) Reasons: product gaps, price, support, competitor, business closure; (3) Involuntary churn: card failures, dunning; (4) Fix levers: onboarding, pricing, success management, win-back.
Key numbers: 10,000 customers at Rs 10,000 a month; churn 4% = 400 customers = Rs 40 lakh MRR lost a month. If 60% of churn is in the first 90 days and onboarding fixes halve that, churn falls by 1.2 points = Rs 12 lakh MRR saved a month. Payback on 5 customer-success hires (Rs 50 lakh a year) is under 6 months.
Recommendation: fix onboarding (guided setup, 30-day check-in) and dunning first, then revisit the price increase for small plans with an annual-plan discount. Risk: adding success managers raises CAC-adjacent cost.

[Cement: EBITDA margin fell from 22% to 15%] "A cement producer's margin dropped 7 points while volumes grew. What happened?"
Clarify: Realisation per tonne or cost per tonne? Which plants or regions? Fuel mix and freight distances changed?
Hypothesis: cost-driven: higher pet-coke and power prices plus longer lead distances from a new plant.
Structure: (1) Price: realisation per tonne, regional price trends, mix of trade vs non-trade; (2) Cost per tonne: power and fuel (about 30% of cost), freight (about 25%), raw material, employee, other; (3) Volume and utilisation effects on fixed cost absorption; (4) Levers.
Key numbers: realisation flat at Rs 5,500 a tonne; cost rose from Rs 4,300 to Rs 4,700: fuel plus Rs 250, freight plus Rs 150 (average lead distance up from 300 km to 400 km). That explains the 7-point fall.
Recommendation: cut freight by serving nearer markets from the new plant and using rail for long leads (saves about Rs 100 a tonne), raise green-fuel share (waste, biomass) to cut fuel cost Rs 100 a tonne, push blended cement and premium brands for Rs 150 a tonne better realisation. Next step: plant-wise cost benchmark.

[Pharma: price a new diabetes drug for India] "Our client is launching a once-weekly diabetes injection in India. How should it be priced?"
Clarify: Patent protected? Indication and patient pool? Is the goal volume, revenue, or access? Reimbursement (mostly out-of-pocket in India)?
Hypothesis: value-based pricing capped by willingness to pay of the private, urban, insured or affluent segment, with a tiered access programme for the rest.
Structure: (1) Patient pool: about 100 mn diabetics, about 20 mn on injectables or uncontrolled, affluent urban addressable about 5 mn; (2) Value vs alternatives: daily insulin costs about Rs 2,000-3,000 a month; weekly convenience and weight-loss benefit justify a premium; (3) Competition: existing GLP-1 products priced Rs 10,000-17,000 a month; (4) Cost floor and margin; (5) Price architecture: list price, patient assistance, hospital contracts.
Key numbers: at Rs 8,000 a month and 300,000 patients, revenue Rs 2,900 crore a year; at Rs 15,000 a month and 120,000 patients, revenue Rs 2,160 crore. The lower price wins on revenue and access if the patient pool really doubles.
Recommendation: launch at Rs 8,000-9,000 a month (about half the global brands), with a patient support programme and doctor education; review after 12 months. Risk: price erosion from generics later, reference-pricing pressure.

[D2C skincare brand: 3x revenue in three years] "A Rs 100 crore D2C skincare brand wants Rs 300 crore in 3 years. How?"
Clarify: Current channel mix (own site, marketplaces, offline)? Gross margin and CAC? Repeat rate? Is profitability a constraint?
Hypothesis: growth must come from offline distribution and repeat purchase rather than more paid ads, because online CAC is rising.
Structure: Ansoff: (1) Penetration: raise repeat rate from 30% to 45% through subscriptions and bundles; (2) New channels: modern trade and 5,000 pharmacies and beauty stores, quick-commerce; (3) New products: adjacent categories (sunscreen, body care); (4) New geographies: tier-2 cities, Middle East exports.
Key numbers: 3x in 3 years is 44% a year. Split: existing online growth 15% a year (100 -> 152), offline adds Rs 80 crore by year 3, new categories Rs 50 crore, exports Rs 20 crore -> about Rs 300 crore.
Recommendation: lead with offline expansion through a distributor in 10 cities, launch two adjacent categories a year, and move marketing from acquisition to retention. Risk: offline margins are lower (retailer and distributor take 35%), working capital rises.

[Edtech: paid conversions fell 40%] "An edtech platform's free-to-paid conversion dropped from 5% to 3%. What should it do?"
Clarify: Which courses, which cities, which age group? Did free-user quality change (more traffic from low-intent channels)? Price change?
Hypothesis: traffic mix shifted to low-intent users from performance ads while the trial experience stayed the same, so conversion fell without a product problem.
Structure: (1) Funnel by channel: sign-ups, activation (first lesson done), trial completion, payment; (2) Cohorts: conversion by source and by course; (3) Product and pricing: trial length, paywall placement, EMI options; (4) Competition and macro (schools reopened).
Key numbers: 1 mn free users a month; 5% to 3% means 20,000 fewer paying users at Rs 5,000 = Rs 10 crore a month. If organic traffic converts at 6% and paid social at 1.5%, and paid share went from 30% to 60%, blended conversion falls from 4.7% to 3.3%, which explains most of the drop.
Recommendation: cap low-intent channels, qualify leads with a free diagnostic test, add EMI and a shorter paywall for high-intent cohorts. Measure by channel conversion weekly. Risk: lower top-of-funnel volume.

[Restaurant chain: launch cloud kitchens?] "A casual-dining chain with 50 outlets wants to add delivery-only cloud kitchens. Should it?"
Clarify: Current delivery share of sales? Are dine-in outlets under-utilised at off-peak hours? Capital available?
Hypothesis: yes for dense cities where the brand already has demand but no outlet nearby; the economics beat a full outlet.
Structure: (1) Demand: delivery orders per day in target pin codes, brand pull; (2) Economics per kitchen: capex Rs 40 lakh vs Rs 2.5 crore for an outlet, rent Rs 1 lakh vs Rs 6 lakh a month, aggregator commission 25%; (3) Cannibalisation of nearby outlets; (4) Operations: menu for delivery, packaging, quality.
Key numbers: a kitchen doing 150 orders a day at Rs 450 = Rs 20 lakh a month revenue; food cost 35%, commission 25%, rent and staff Rs 4 lakh -> about Rs 3 lakh contribution a month -> payback about 14 months.
Recommendation: open 10 kitchens in pin codes with high delivery demand and no outlet within 5 km, with a delivery-optimised menu; use existing outlets' off-peak kitchens first where possible. Risk: aggregator commission hikes, brand dilution.

[Warehouse: cut order fulfilment time from 48 to 24 hours] "An e-commerce warehouse takes 48 hours from order to dispatch. Get it to 24."
Clarify: Where does the time go (waiting, picking, packing, sorting, carrier pickup)? Order mix (single-item vs multi-item)? Current utilisation of staff and shifts?
Hypothesis: most of the 48 hours is waiting in batches, not working time; fixing batch cut-offs and carrier pickups removes half the delay.
Structure: Map the flow and time at each step: (1) order release and batching; (2) picking (travel time, slotting); (3) packing; (4) sorting and carrier pickup windows. Then throughput and bottleneck (Little's law: time in system = work in process / throughput).
Key numbers: 20,000 orders a day; orders wait 12 hours for the next batch, picking 2 hours, packing 1 hour, waiting for a single daily carrier pickup 20 hours. Two batches a day and two carrier pickups cut waiting from 32 to 10 hours.
Recommendation: move to two pick waves and two pickups a day, slot fast-moving SKUs near pack stations (picking time down 30%), add a second shift at peak. Measure with hourly dashboards. Risk: carrier contracts, overtime cost.

[IT services: acquire a US mid-market firm?] "An Indian IT services company wants to buy a 2,000-person US firm for 400 mn USD. Good idea?"
Clarify: Strategic goal (client access, capability such as cloud or data, onshore presence)? Target's growth, margin, client concentration? Alternatives considered?
Hypothesis: worth it only if the target brings 30-plus mid-market clients the client can cross-sell offshore delivery to, improving target margin from 12% to 20%.
Structure: (1) Standalone value: revenue 300 mn USD, EBITDA 36 mn, price is 11x EBITDA; (2) Synergies: offshore shift of 30% of delivery raises margin 8 points = 24 mn USD a year; cross-sell 10% revenue uplift; (3) Risks: attrition of key people and clients, culture, visa and onshore costs; (4) Alternatives: organic sales build, smaller tuck-ins, partnership.
Key numbers: post-synergy EBITDA about 60-65 mn USD -> effective multiple about 6.5x, below the client's own 14x, so accretive if synergies land in 3 years.
Recommendation: proceed with earn-outs tied to client retention, keep the target's brand for 2 years, and move delivery offshore gradually. Risk: integration distraction, losing the founders.

[Temple trust: manage crowds and grow income] "A large temple gets 50,000 visitors a day with 4-hour queues and wants both better experience and more income. Advise."
Clarify: Peak vs normal days? Current income sources (donations, paid darshan, prasad, accommodation)? Constraints (religious norms, free access must stay)?
Hypothesis: slot-based online booking flattens peaks, and paid fast-track plus better prasad and accommodation grow income without charging for basic access.
Structure: (1) Demand: visitors by hour and day, local vs pilgrims; (2) Capacity: darshan throughput per hour, queue layout; (3) Experience levers: time slots, queue management, information; (4) Income levers: paid darshan tiers, prasad and souvenir sales, rooms, donations via UPI; (5) Stakeholders: trustees, government, devotees.
Key numbers: throughput 3,000 an hour x 16 hours = 48,000 a day, so capacity is at the limit; a second queue line raises throughput 40%. Paid fast darshan at Rs 300 for 10% of visitors = Rs 15 lakh a day = Rs 55 crore a year.
Recommendation: introduce online time slots for 60% of visitors, add a second darshan line, launch tiered paid darshan and improved prasad counters; reinvest in facilities. Risk: perception of commercialisation; communicate that free access remains.

[State government: raise child vaccination coverage from 70% to 90% in rural districts] "How should a state raise full-immunisation coverage in 10 lagging districts?"
Clarify: Which vaccines and age group? Why are children missed (access, awareness, refusal, supply)? Budget and timeline?
Hypothesis: most missed children are from migrant and remote hamlets where sessions are irregular and tracking is weak; the fix is outreach and tracking, not more vaccines.
Structure: (1) Diagnose the 30% gap: never-vaccinated vs drop-outs, by block and community; (2) Supply side: health workers, session frequency, cold chain, stock-outs; (3) Demand side: awareness, fears, timing with work hours; (4) System: digital tracking, incentives, monitoring.
Key numbers: 10 districts x 60,000 births a year = 600,000 children; 20-point gap = 120,000 children a year; outreach sessions cost about Rs 2,000 each, 4 sessions a month per 5,000 population -> affordable within existing budgets.
Recommendation: map every hamlet, run fixed-day outreach sessions with ASHA follow-up, use a digital due-list with reminders, and give small conditional incentives; review monthly by block. Risk: worker overload, data quality.

[Movie studio: greenlight a Rs 200 crore film?] "A studio must decide on a Rs 200 crore budget film with a star. Go or no-go?"
Clarify: Budget includes marketing? Revenue streams (theatrical share, OTT, satellite, music)? Comparable films? Risk appetite?
Hypothesis: go only if non-theatrical pre-sales cover at least 50% of the budget, because theatrical outcomes are too uncertain.
Structure: (1) Revenue: theatrical net share (about 45% of gross box office), OTT and satellite rights, music, overseas; (2) Comparable performance of the star and genre; (3) Cost and timing; (4) Downside scenarios and ways to de-risk (co-production, pre-sales).
Key numbers: pre-sales: OTT Rs 80 crore, satellite Rs 30 crore, music Rs 10 crore = Rs 120 crore; break-even then needs Rs 80 crore net theatrical = about Rs 180 crore gross box office. The star's last three films averaged Rs 150 crore gross.
Recommendation: go only with a co-producer taking 40% of the risk or a budget cut to Rs 160 crore; lock the OTT deal before shooting. Risk: release-date clashes, star fee escalation.

[Airline cargo division: improve profitability] "Our client's air-cargo unit makes 2% margin versus 10% for peers. Why?"
Clarify: Belly cargo on passenger flights or freighters? Route mix? Pricing (spot vs contract)? Load factor?
Hypothesis: the unit sells too much on spot at low yields and leaves belly capacity empty on return legs.
Structure: (1) Revenue: yield per kg by route and customer, load factor outbound vs return; (2) Cost: handling, ground, allocated flight cost, IT; (3) Sales model: contracts with forwarders vs spot, e-commerce share; (4) Operations: tracking, claims, delays.
Key numbers: capacity 200,000 tonnes a year, load factor 55% vs peers 70%; yield Rs 60 a kg vs peers Rs 70. Raising load factor to 65% and yield to Rs 66 adds about Rs 30 crore revenue on a Rs 660 crore base, lifting margin by about 4 points.
Recommendation: sign annual block-space contracts with the top 10 forwarders, build e-commerce lanes on return legs, dynamic pricing for spot, improve tracking to win premium cargo. Risk: contract discounts, capacity commitments.

[Hotel chain: expand into tier-2 cities] "A premium hotel chain wants to enter tier-2 Indian cities. How and where?"
Clarify: Own, lease, or manage (asset-light)? Brand positioning (premium vs mid-scale)? Target number of hotels?
Hypothesis: asset-light management contracts under a mid-scale sub-brand fit tier-2 demand (business travel, weddings) better than owned premium hotels.
Structure: (1) City selection: demand drivers (industry, pilgrim and wedding traffic, airports), current supply and occupancy, room rates; (2) Format: 100-150 rooms, banquet-heavy; (3) Economics: ADR Rs 5,000, occupancy 65%, RevPAR Rs 3,250; management fee 8-10% of revenue; (4) Competition and talent.
Key numbers: a 120-room hotel earns Rs 14 crore room revenue plus Rs 8 crore food and banquets; management fee about Rs 2 crore a year per hotel with minimal capex -> 20 hotels in 5 years adds Rs 40 crore fee income.
Recommendation: launch a mid-scale brand under management contracts in 20 cities ranked by business and wedding demand, starting with those with new airports. Risk: owner quality, brand standards.

[Fintech: buy-now-pay-later losses rising] "A BNPL lender's credit losses rose from 3% to 7% of disbursals. Fix it."
Clarify: Loss by cohort, ticket size, merchant category, customer source? Collections process changes? Regulation changes?
Hypothesis: growth pushed approvals into thin-file customers from new merchant categories, and collections did not scale.
Structure: (1) Underwriting: approval rate, score cut-offs, new-to-credit share; (2) Portfolio mix: ticket size, tenure, merchant category; (3) Collections: contact rates, days past due buckets, staffing; (4) Fraud.
Key numbers: disbursals Rs 1,000 crore a quarter; a 4-point loss increase is Rs 40 crore a quarter. If losses in the new-to-credit segment are 15% versus 3% elsewhere and that segment grew from 10% to 40% of volume, blended loss rises from about 4.2% to 7.8%, which explains the trend.
Recommendation: tighten cut-offs for new-to-credit, cap ticket size for first loans, add bureau and bank-statement data, and double collections capacity in 30-60 day buckets. Accept slower growth for two quarters. Risk: volume drop, merchant pushback.

[Call centre: cut average handle time by 20%] "A bank's call centre wants to cut average handle time from 8 to 6.4 minutes without hurting satisfaction."
Clarify: Call types and their mix? Where does time go (verification, system navigation, hold, wrap-up)? Self-service options?
Hypothesis: a third of handle time is verification and system wait; automating identity checks and a single-screen agent desktop deliver most of the saving.
Structure: (1) Call-type mix and volumes; (2) Time breakdown within a call; (3) Deflection to IVR, app and chat for simple calls (balance, statements); (4) Agent tools, training, and knowledge base.
Key numbers: 1 mn calls a month; verification 90 seconds, hold for system 60 seconds, wrap-up 45 seconds. Automating verification (saves 60 s) and a unified desktop (saves 45 s) cut 105 seconds = 22%. Deflecting 20% of simple calls lowers cost further: 200,000 calls x Rs 40 = Rs 80 lakh a month.
Recommendation: voice-biometric or OTP verification, unified agent desktop, deflect simple queries to the app, retrain on top 10 call types. Track satisfaction weekly. Risk: customer resistance to automation.

[Sports league: value a new franchise] "A cricket league is adding a franchise. What is it worth and what should a bidder pay?"
Clarify: Revenue sharing from central pool (media rights)? Number of home matches? Salary cap? Contract length?
Hypothesis: value is driven mostly by the central media-rights share, so the bid should be anchored on that share with a modest premium for local sponsorship and gate.
Structure: (1) Revenue: central pool share, local sponsorship, gate and hospitality, merchandise; (2) Cost: player salaries (cap), operations, franchise fee amortisation; (3) Growth of media rights; (4) Valuation: multiple of EBITDA or discounted cash flow, comparables from past sales.
Key numbers: central share Rs 350 crore a year, local revenue Rs 100 crore, salaries Rs 120 crore, other cost Rs 60 crore -> EBITDA Rs 270 crore; at a 12x multiple the franchise is worth about Rs 3,200 crore; existing franchises have changed hands at similar levels.
Recommendation: bid around Rs 3,000 crore, with upside from media-rights growth; avoid overpaying for a big-city market alone. Risk: media-rights renewal, salary-cap changes.

[Auto-parts supplier: 60% of revenue from one customer] "An auto-component maker depends on one OEM for 60% of sales. The OEM is pushing for 10% lower prices. What should it do?"
Clarify: Contract terms and switching cost for the OEM? Client margin on this account? Capacity utilisation? Other customers' potential?
Hypothesis: agree to a partial price cut tied to volume and cost-reduction programmes, while diversifying into two new OEMs and the aftermarket.
Structure: (1) Account economics: margin, volumes, cost to serve; (2) Negotiation position: alternatives for both sides, switching cost; (3) Cost reduction: materials, productivity, scrap; (4) Diversification: new OEMs, exports, aftermarket.
Key numbers: account revenue Rs 600 crore at 12% margin; a 10% cut wipes out margin; a 4% cut offset by 3% cost savings keeps margin at about 11%. Winning two new OEM programmes of Rs 100 crore each brings the concentration to 45% in three years.
Recommendation: offer 4% now plus 2% a year linked to joint cost-down projects and volume commitments; invest in a second product line for new customers and exports. Risk: OEM walks away, capacity constraints.

[Bank: launch a digital-only savings product for young customers?] "A mid-size bank wants a mobile-first account for 18-30 year-olds. Should it, and how?"
Clarify: Target (students, first jobbers)? Goal (deposits, cross-sell, brand)? Build in-house or partner with a fintech?
Hypothesis: yes, as a low-cost deposit and cross-sell engine, if acquisition cost stays under Rs 300 and the product is built on the existing core with a partner for the front end.
Structure: (1) Market: 300 mn people aged 18-30, 70% banked but under-served digitally; (2) Proposition: instant account, rewards, goal saving, UPI; (3) Economics: deposit per account Rs 15,000, net interest margin 3% = Rs 450 a year, plus card and loan cross-sell Rs 300, versus acquisition Rs 300 and servicing Rs 100; (4) Build vs partner; (5) Risks: fraud, regulation on video KYC.
Key numbers: 2 mn accounts in 3 years -> Rs 3,000 crore deposits and about Rs 100 crore annual contribution.
Recommendation: launch with a fintech partner on the front end, in-house core and compliance, target campuses and first-job employers; measure cost per funded account. Risk: dormant accounts, partner dependence.

=== CASE MATHS DRILLS (with correct answers) ===
[Drill: break-even] Fixed cost Rs 12 lakh a month, price Rs 800, variable cost Rs 500. Break-even = 12,00,000 / 300 = 4,000 units a month. At 6,000 units, profit = 6,000 x 300 - 12,00,000 = Rs 6 lakh.
[Drill: market share maths] Market Rs 5,000 crore growing 8% a year; client share 20%. Revenue in 2 years if share stays flat = 5,000 x 1.08 x 1.08 x 0.2 = 5,832 x 0.2 = Rs 1,166 crore. To reach Rs 1,500 crore, share must be 1,500 / 5,832 = 25.7%.
[Drill: rule of 72] Growth 12% a year doubles in 72 / 12 = 6 years; 6% a year doubles in 12 years; tripling at 12% takes about 9.6 years (72 x 1.6 / 12).
[Drill: margin vs mark-up] Cost Rs 60, price Rs 100: margin = 40 / 100 = 40%; mark-up = 40 / 60 = 66.7%. A 25% mark-up equals a 20% margin; a 50% mark-up equals a 33% margin.
[Drill: weighted average] 70% of units at 10% margin and 30% at 30% margin: blended margin = 0.7 x 10 + 0.3 x 30 = 7 + 9 = 16%.
[Drill: payback] Investment Rs 50 crore, annual cash flow Rs 12.5 crore: payback 4 years. If cash flow grows to Rs 20 crore from year 3: cumulative 12.5 + 12.5 + 20 = 45 after 3 years, remaining 5 / 20 = 0.25 -> payback 3.25 years.
[Drill: price elasticity] Price up 10%, volume down 15% (elasticity 1.5): revenue = 1.10 x 0.85 = 0.935, down 6.5%. Price up 10%, volume down 5%: revenue up 4.5%. Rule: a price rise helps revenue when elasticity is below 1.
[Drill: perpetuity value] Cash flow Rs 10 crore a year forever at 10% discount rate is worth Rs 100 crore; with 3% growth, value = 10 / (0.10 - 0.03) = Rs 143 crore.
[Drill: cannibalisation] New product sells 100,000 units at Rs 200 contribution = Rs 2 crore, but 30% of buyers switch from the old product with Rs 250 contribution: lost 30,000 x 250 = Rs 75 lakh; net gain Rs 1.25 crore.
[Drill: unit economics] Customer pays Rs 500 a month, gross margin 60%, average life 20 months: lifetime value = 500 x 0.6 x 20 = Rs 6,000. With CAC Rs 2,000, LTV/CAC = 3; CAC payback = 2,000 / 300 = 6.7 months.
[Drill: percentage changes] Revenue rose from Rs 80 crore to Rs 100 crore = 25% up; a fall from 100 to 80 = 20% down. Two successive 10% rises = 21% total; a 20% fall followed by a 25% rise returns to the start.
`;
