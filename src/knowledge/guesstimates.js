// Reference library: market-sizing / guesstimate method, base numbers and worked examples.
// Injected into the system prompt of the "Case, Guesstimate & Puzzle" profile.
// Numbers are deliberately rounded (interviewers reward sensible, stated assumptions, not precision).

module.exports = `
=== GUESSTIMATE METHOD (always follow this order) ===
1. Clarify scope in one line: geography, time unit (per day / year), unit being counted, retail vs wholesale, who counts (e.g. "all of India, per year, units sold").
2. Pick an approach and say which: DEMAND side (population -> segments -> penetration -> frequency) or SUPPLY side (number of outlets x capacity x utilisation). If time allows, use the second as a sanity check.
3. Draw a MECE tree with 3-5 branches. Segment by what actually changes the number (age, urban/rural, income, usage frequency).
4. Use ROUND base numbers (below) and write every assumption explicitly. Keep arithmetic in 1-2 significant figures; multiply step by step and keep units attached.
5. SANITY CHECK the result against something known (per-capita, per-household, per-day, a comparable public figure). If the check is off by more than 3x, revisit the weakest assumption, do not just announce the number.
6. Deliver: one-line answer first with a range ("roughly 3-4 million"), then the tree, then the check, then "what would move this most".

=== BASE NUMBERS (rounded, 2026) ===
WORLD: population 8.1 bn; adults about 5.9 bn; internet users 5.5 bn; smartphone users 4.9 bn; world GDP about 110 tn USD.
INDIA: population 1.44 bn (round 1.4 bn); households 300 mn (4.5 people each); urban 36% (about 520 mn), rural 64%; median age 28; age split 0-14: 25%, 15-64: 68%, 65+: 7%; working-age 15-64 about 950 mn; labour force about 600 mn; literacy 77%; births 23 mn per year, deaths 10 mn; weddings about 10 mn per year; GDP about 4 tn USD (nominal), per capita about 2,700 USD; income pyramid: top 10% of households earn about 55% of income; about 30-35 mn households earn above 15 lakh INR a year (the "car-and-foreign-holiday" segment); about 100 mn households are middle income (3-15 lakh).
INDIA DIGITAL: internet users 900 mn+; smartphone users 750 mn; mobile connections 1.15 bn; UPI about 20 bn transactions a month; e-commerce shoppers about 250 mn; online food delivery users about 100 mn.
INDIA MOBILITY: cars on the road about 50 mn (4-5 cars per 100 people); two-wheelers 250 mn+; new car sales 4.2 mn per year; two-wheeler sales 18-20 mn per year; commercial vehicles about 1 mn per year; petrol pumps about 90,000; auto-rickshaws about 6 mn; taxis/cabs about 3 mn; Indian Railways carries 8 bn passengers a year (23 mn per day); Mumbai suburban trains 7.5 mn per day; Delhi Metro 6-7 mn per day; domestic air passengers about 160 mn per year (about 3,000-3,500 domestic flights a day, 150 operational airports); international about 70 mn.
INDIA RETAIL AND SERVICES: kirana stores 12-13 mn; modern retail about 12% of grocery; restaurants (organised + unorganised) about 1.5-2 mn, organised chains about 30,000 outlets; Domino's about 2,000 stores, McDonald's about 700, Starbucks about 450, Zudio about 700; bank branches 160,000; ATMs 220,000; post offices 155,000; hospitals about 70,000 (beds about 1.9 mn, i.e. 1.3 per 1,000 people); doctors 1.3 mn; schools 1.5 mn (250 mn students); colleges about 45,000 (40 mn students); cinema screens about 9,000; hotels: branded rooms about 200,000.
INDIA CONSUMPTION: tea: about 1.1 bn kg a year, about 2 cups per adult per day for the roughly 900 mn adults who drink tea; coffee is small (about 25% of tea in volume, concentrated in the south and cafes); milk 230 mn tonnes a year; electricity about 1,700 TWh a year, per capita about 1,300 kWh; petrol about 40 mn tonnes a year, diesel about 90 mn tonnes.
CITIES (metro population): Delhi NCR 33 mn (Delhi city 20 mn); Mumbai 21 mn; Kolkata 15 mn; Bengaluru 14 mn; Chennai 12 mn; Hyderabad 11 mn; Pune 7 mn; Ahmedabad 8.5 mn. India has 28 states, 8 UTs, about 780 districts, about 650,000 villages, about 8,000 towns, 60+ cities above 1 mn.
USA: population 335 mn; households 130 mn (2.5 people); GDP 28 tn USD; per capita 83,000 USD; cars/light vehicles 290 mn; new vehicle sales 16 mn per year; gas stations 150,000; Starbucks about 16,500 stores; McDonald's about 13,500; airports with scheduled service about 500; about 45,000 flights a day; births 3.6 mn per year.
OTHER COUNTRIES: China 1.41 bn; EU 450 mn; UK 68 mn; Japan 124 mn; Indonesia 280 mn; Brazil 215 mn; Nigeria 225 mn; Pakistan 240 mn; Bangladesh 170 mn.
PHYSICAL CONSTANTS AND SIZES: a year has 365 days, 8,760 hours, 31.5 mn seconds; a day 86,400 seconds; an adult human about 70 kg and 1.7 m, volume about 0.07 m3; a golf ball is 4.3 cm in diameter (about 40 cm3, 60% packing efficiency); a tennis ball 6.7 cm; a cricket ball 7.2 cm; A4 sheet 21 x 29.7 cm; a school bus about 10 m x 2.5 m x 2.5 m (about 60 m3); a standard 40 ft container 67 m3 and 26 tonnes max; a Boeing 747: empty 180 t, max take-off 400 t, cabin volume about 1,000 m3, 400 seats; an Airbus A320: 180 seats, 40 t empty; a car weighs about 1.2-1.5 t and occupies about 10 m3; Earth radius 6,371 km, circumference 40,000 km, surface 510 mn km2 (29% land = 149 mn km2); India area 3.3 mn km2; Mumbai 600 km2; Delhi 1,500 km2; a football pitch about 7,000 m2 (0.7 ha); 1 acre = 4,047 m2; 1 hectare = 10,000 m2; water 1 kg per litre; a human drinks about 2-3 L a day and uses about 130-150 L a day in a city; an average Indian walks about 5,000 steps a day; a person sleeps 8 h.
TIME AND MONEY RULES OF THUMB: rule of 72 (years to double = 72 / growth %); 1 lakh = 100,000; 1 crore = 10 mn; 1 bn = 100 crore; 1 USD about 85 INR; working year about 250 days, 2,000 hours; a shop is open about 12 hours, 360 days.

=== WORKED EXAMPLES (show this level of structure) ===

[Number of cars in Delhi] Demand side: Delhi city 20 mn people -> 4.5 mn households. Car ownership by income: top 20% (0.9 mn hh) own 1.5 cars = 1.35 mn; next 30% (1.35 mn hh) own 0.7 = 0.95 mn; bottom 50% own 0.1 = 0.22 mn. Private cars about 2.5 mn, plus cabs/commercial about 0.3 mn and government/company fleets -> about 3 mn. Sanity: 15 cars per 100 people, roughly 3x the national average, plausible for the richest big city. (Official RTO registrations are higher, about 3.5-4 mn, because scrapped cars stay registered.)

[Cups of tea drunk in India per day] 1.4 bn people, about 1 bn aged 15+, about 85% drink tea = 850 mn. Average 2 cups a day (urban office workers 3, rural 1.5-2) -> about 1.7 bn cups a day. Sanity: 1.1 bn kg of tea a year / 365 = 3 mn kg a day, at about 2 g per cup = 1.5 bn cups. Consistent.

[Weight of a Boeing 747] Do not guess blindly: 400 passengers x 100 kg (person + bag) = 40 t; fuel for 14 hours at about 10 t per hour = 140-180 t; structure must be heavier than payload+fuel, about 180 t. Total at take-off about 400 t. (Actual: empty 180 t, MTOW 400 t.)

[Golf balls in a Boeing 747] Cabin about 1,000 m3 = 1 bn cm3. Ball about 40 cm3, packing 60% -> 1 bn x 0.6 / 40 = 15 mn. Remove seats and overheads from the volume -> answer "about 10-15 million".

[Petrol pumps in India] Supply side: 50 mn cars x 60 L/month + 250 mn two-wheelers x 10 L/month + diesel for 15 mn trucks/buses x 600 L/month = 3 + 2.5 + 9 = about 14-15 bn L a month. A pump sells about 150-200 kL a month -> 14.5 bn / 0.17 mn = about 85,000-90,000 pumps. Actual about 90,000.

[Daily revenue of one petrol pump] 170 kL a month / 30 = about 5.7 kL a day x about 100 INR per litre = about 5.5-6 lakh INR a day (dealer margin only about 3-4 INR per litre, so profit is about 20,000 INR a day).

[Flights in India per day] Demand: 160 mn domestic passengers a year / 365 = 440,000 a day; 150 seats per flight at 85% load = about 130 passengers -> about 3,400 domestic departures a day. Plus about 600 international. Fleet check: 800 aircraft x 5 flights a day = 4,000. Consistent.

[Smartphones sold in India per year] Installed base 750 mn, replacement cycle about 3.5-4 years -> 200 mn replacements if everyone replaced; realistically about 130 mn, plus about 20 mn first-time buyers = about 150 mn a year. (Reported about 150 mn.)

[Market size of online food delivery in India] 100 mn users; average 3-4 orders a month at about 400 INR = 100 mn x 42 x 400 = about 1.7 lakh crore INR gross order value (about 20 bn USD). Platform revenue about 20-25% of GOV. (Reported GOV around 10-12 bn USD, so call the answer "10-20 bn USD" and note the frequency assumption is the swing factor.)

[Pizzas sold in Mumbai per day] 21 mn people; about 40% eat out-of-home food at least weekly and about 30% of those order pizza about twice a month -> 21 x 0.4 x 0.3 x (2/30) = about 170,000 pizza-eating occasions a day, about 1.5 people per pizza -> about 110,000 pizzas a day. Supply check: about 700 pizza outlets x 120 pizzas a day = 85,000. Answer "about 100,000 a day".

[Weddings in India per year] 23 mn births a year about 25 years ago means about 22 mn people reach marrying age each year; about 90% marry -> about 10 mn weddings a year (two people per wedding). Peak season Nov-Feb and April-June.

[ATMs in India] Supply: each ATM serves about 6,000 people in cities and far more in villages: 520 mn urban / 4,000 = 130,000 urban + 920 mn rural / 10,000 = 90,000 rural -> about 220,000. Actual about 220,000.

[Tennis balls in a school bus] Bus about 60 m3 interior; subtract seats about 25% -> 45 m3 = 45 mn cm3; tennis ball about 160 cm3, packing about 65% -> 45 mn x 0.65 / 160 = about 180,000. Answer "roughly 150,000-200,000".

[Revenue of a single-screen cinema in a tier-2 city] 300 seats x 4 shows x 40% occupancy = 480 tickets a day x 150 INR = 72,000 INR a day from tickets + about 40% more from food and drink -> about 1 lakh INR a day, about 3.5 crore INR a year.

[Number of schools in India] 250 mn students / about 170 students per school = about 1.5 mn schools (1.1 mn of them government schools). Teachers about 9.5 mn (pupil-teacher ratio about 26).

[Litres of milk India consumes per day] 230 mn tonnes a year / 365 = 630 mn kg a day, about 450 ml per person per day on average (urban higher, includes dairy products).

=== COMMON MISTAKES TO AVOID ===
- Mixing per-day and per-year, or population and households, mid-calculation. Write the unit after every number.
- Using the whole population for a product only adults / urban / rich households use.
- Forgetting frequency (a user is not a daily user) and replacement cycles (installed base is not annual sales).
- Precision theatre: never say "3,427,500"; say "about 3.4 million".
- Not sanity checking with a per-capita or supply-side number before answering.
`;
