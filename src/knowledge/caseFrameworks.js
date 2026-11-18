// Reference library: consulting case-interview method, frameworks and worked mini-cases.
// Injected into the system prompt of the "Case, Guesstimate & Puzzle" profile.

module.exports = `
=== CASE INTERVIEW FLOW (what the candidate should say and in what order) ===
1. RESTATE the problem in one sentence and confirm the objective and the metric ("so the goal is to restore operating margin to 12% within two years, correct?").
2. CLARIFY with 2-3 sharp questions before structuring: definition of the metric, time frame, geography/product scope, any constraints (budget, regulation), what has already been tried.
3. ASK FOR A MOMENT to structure (30-60 seconds), then PRESENT A MECE STRUCTURE with a stated hypothesis: "My hypothesis is that the decline is volume-driven in the premium segment; I would test it in three areas: ...".
4. DRIVE THE ANALYSIS: ask for specific data, do the maths out loud with rounded numbers, state the "so what" of every number (a number without an implication is wasted).
5. SYNTHESISE ANSWER-FIRST: recommendation in one sentence, 2-3 supporting reasons with numbers, key risks, and next steps. Never end with "it depends".
Rules: be hypothesis-driven, MECE, quantitative, and always tie back to the client's objective. If asked for a creative list (growth levers, risks), give 5-7 items grouped in 2-3 buckets.

=== CORE FRAMEWORKS (adapt, never recite) ===
PROFITABILITY: Profit = Revenue - Costs. Revenue = price x volume, by product/segment/channel/geography. Volume = market size x market share. Costs = fixed (rent, salaries, depreciation) + variable (materials, labour per unit, logistics, commissions). Diagnose: is it revenue or cost, which line, since when, is it the whole industry or only the client (benchmarks). Typical causes: price pressure from new entrants, mix shift to low-margin products, input cost inflation, lower utilisation, channel margin squeeze.
MARKET ENTRY / NEW GEOGRAPHY: (1) Market attractiveness: size, growth, profitability, regulation; (2) Competition: players, shares, barriers, response; (3) Client capability and fit: brand, distribution, cost position, right to win; (4) Entry mode: organic, partnership/JV, acquisition, franchise; (5) Economics: investment, break-even, payback, risks; (6) Go / no-go and sequencing.
NEW PRODUCT LAUNCH: customer need and segment, value proposition vs alternatives, pricing, channel, cannibalisation, capability/cost to produce, financials, pilot plan.
M&A / INVESTMENT (also PE due diligence): standalone value of the target (market, position, financials), synergies (revenue, cost, capability), price vs value (multiples, DCF logic), risks (integration, culture, regulation, key people), alternatives (build vs buy vs partner).
PRICING: three lenses: cost-plus (cost + margin floor), value-based (customer's willingness to pay, next-best alternative), competition-based (price corridor). Then price architecture: segments, versioning, bundles, discounts, elasticity (price x volume trade-off), psychological thresholds.
GROWTH STRATEGY (Ansoff): existing products x existing markets (penetration: share, frequency, price), new markets (geographies, segments), new products (adjacent, innovation), diversification. Also organic vs inorganic, and the funnel: awareness -> trial -> repeat -> loyalty.
OPERATIONS / COST REDUCTION: map the value chain, find the bottleneck (throughput = slowest step), utilisation, waste; levers: procurement, process redesign, automation, footprint, outsourcing, SKU rationalisation; quantify each lever x ease of implementation.
DECLINING SALES / CUSTOMER FUNNEL: traffic x conversion x basket size x frequency; segment by customer cohort and channel; external (market, competitors, macro) vs internal (product, price, place, promotion, service).
MARKET ATTRACTIVENESS (Porter's five forces): rivalry, new entrants, substitutes, supplier power, buyer power. 3Cs: customer, competitor, company. 4Ps: product, price, place, promotion. SWOT only as a summary device. BCG matrix for portfolio questions. Value chain for cost questions.
PUBLIC SECTOR / SOCIAL: objective is usually outcome per rupee: reach, quality, cost, feasibility, equity, sustainability; stakeholders matter more than margin.

=== QUANT TOOLKIT (do these quickly and verify) ===
Break-even units = fixed costs / (price - variable cost per unit). Contribution margin = price - variable cost. Payback = investment / annual cash flow. ROI = (gain - cost) / cost. Margin % = profit / revenue; mark-up % = profit / cost. CAGR: use rule of 72, or 10% a year doubles in about 7 years; 7% in about 10. Percent change: new/old - 1. Weighted average for mix questions. NPV logic: a cash flow of C per year forever at discount rate r is worth C / r. Elasticity: % change in volume / % change in price; if price up 10% and volume down 5%, revenue up about 4.5%. Always restate the final number with its unit and the implication.
Mental maths: round to 1-2 significant figures, keep a running "error direction" (rounded up or down), and correct at the end. Check order of magnitude: lakh, crore, mn, bn.

=== WORKED MINI-CASES (structure + typical insight) ===

[Airline profits fell 30% in two years; market grew] Structure: revenue (yield per passenger-km, load factor, route mix, ancillaries) vs cost (fuel, crew, leases, maintenance, airport charges). Typical finding: a low-cost entrant forced price cuts on the client's main trunk routes (yield down 15%) while fuel hedging lapsed. Recommendation: match on price only where cost allows, shift capacity to under-served routes, add ancillary revenue, renegotiate leases, hedge fuel. Quantify: 15% yield gap on 60% of revenue explains about 9 points of margin.

[Coffee chain considering entry into India] Market: tea-dominated (coffee about 1/4 of tea), but cafe culture growing in top 20 cities among 18-35 urban middle class; market size: 30 mn frequent cafe-goers x 3 visits a month x 300 INR = about 3,200 crore INR a year, growing 15%. Competition: Starbucks (about 450 stores), Third Wave, Blue Tokai, Cafe Coffee Day; barriers: real estate, supply chain for milk and beans. Entry mode: JV with a local partner (Starbucks did this with Tata). Economics: store capex about 1.5-2 crore INR, revenue about 2 crore a year, store payback 3-4 years at 15-20% store margin. Recommendation: enter via JV in 5 metros, 50 stores in 3 years, price 15% below Starbucks, localise menu.

[Hospital: patient wait times too long in outpatient] Operations case: map the flow (registration -> triage -> consult -> diagnostics -> billing). Measure arrival pattern vs doctor roster; typical finding: 60% of patients arrive 9-11 am while doctors are spread evenly, and registration is the bottleneck (single counter). Levers: appointment slots, staggered doctor rosters, self check-in kiosks, separate follow-up lane. Quantify wait time reduction with Little's law (wait = queue length / throughput).

[Retailer: should we launch e-commerce?] Customer: which segments buy online, basket, frequency; Economics: online order margin after delivery cost (last-mile 60-80 INR an order in India) is often negative below a 1,000 INR basket; Capability: warehousing, tech, returns; Competition and cannibalisation. Recommendation usually: start with click-and-collect and marketplace presence, build own delivery only in dense cities with high baskets.

[Private equity: acquire a regional snack brand?] Market growth (8-10%), the brand's share and trend, gross margin vs peers, distribution reach (outlets covered), management quality, capex needs, exit multiple vs entry multiple, value creation plan (distribution expansion, premiumisation, cost). Decision: invest if entry multiple x realistic EBITDA growth gives 2.5-3x in 5 years, with risks named.

[Telecom: ARPU falling] Revenue per user = price per GB x usage + voice + VAS; cause often tariff war; levers: tariff hikes with the industry, bundles (OTT), postpaid migration, enterprise, reduce churn; cost: tower sharing, spectrum, network opex.

[Bank: close 20% of branches?] Customer impact (footfall, digital adoption by segment), revenue at risk (deposits, loans originated in branch), cost saved per branch, regulatory requirements (rural coverage), redeploy staff; typical answer: close or shrink urban branches with low footfall, convert some to lean formats, keep rural.

[Manufacturer: build a new plant or outsource?] Demand forecast vs current capacity, cost per unit (make vs buy including logistics), capital and payback, flexibility, quality and IP risk, time to market. Give the break-even volume where making becomes cheaper.

=== SYNTHESIS TEMPLATE (use at the end of every case) ===
"My recommendation is X. Three reasons: (1) ... with number, (2) ... with number, (3) .... The main risks are A and B, which we can mitigate by .... Next steps: pilot in ..., validate assumption ... within ... weeks."
`;
