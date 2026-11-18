module.exports = `
=== 180DC SRCC GUESSTIMATE BOOK: APPROACH AND CHEAT SHEET ===
Method (5 steps): CLARIFY the question (scope, geography, period, units) -> choose APPROACH (demand-side: target population x usage frequency x consumption; supply-side: capacity, production, distribution constraints) -> SEGMENT with a MECE issue tree (age, gender, income, urban/rural, occupation, literacy, mobile/internet penetration, location) -> ESTIMATE each branch with round numbers (100 mn not 103 mn) -> VALIDATE with a second approach or a known benchmark.
Pro tips: ask clarifying questions (global or local? annual or monthly?); lean on benchmarks (India 140 crore, world 8 bn); use analogies (scale a known US figure by population and income); think in layers (primary drivers = population, income, frequency; secondary = seasonality, regional nuance); always sanity-test ("1 bn cars in a city? no").
Frameworks: top-down (start from the big number, break it down, e.g. coffee industry from total consumption to per-cup price); bottom-up (unit x count, e.g. cars per household x households); Pareto 80/20 (top 20% of restaurants give 80% of revenue); unit economics (cost per delivery x deliveries); extrapolation Y = Y0 x (1 + r)^t; TAM (max opportunity) > SAM (what the firm can serve) > SOM (what it can realistically win).
Demand-side template: population -> filters (age, income, usage) -> frequency -> consumption/price. Supply-side template: operating hours x capacity (seats/booths/machines) x occupancy x throughput per unit time x price.
Theory example 1 (demand side, license plates in Maharashtra): population 120 mn / 4 per household = 30 mn households; high income 10% = 3 mn x 90% own vehicles x 2 vehicles = 5.4 mn; middle 60% = 18 mn x 50% x 1.5 = 13.5 mn; low 30% = 9 mn x 30% x 1 = 2.7 mn; total 21.6 mn vehicles x 2 plates = 43.2 mn plates.
Theory example 2 (supply side, daily revenue of a fast-food outlet in Delhi, dine-in only): items sold = operating hours x seats x average occupancy x items per person / average time a seat is occupied; revenue = items x average price Rs 100 (takeaway and delivery added as separate branches).
Cheat sheet, demographics: world population 8 bn; India 1.40 bn; male 50% / female 50%; life expectancy 70 years; age split 0-15 30%, 15-35 40%, 35-60 25%, 60+ 5%; birth rate 16 per 1000, death rate 7 per 1000; urban 30% (literacy 90%, family size 4, smartphone 70%, internet 70%) vs rural 70% (literacy 77%, family size 5, smartphone 30%, internet 50%); income brackets high 10%, upper-middle 20%, lower-middle 40%, lower 30%; vegetarian 40% / non-veg 60%; married 45% / unmarried 55%; religion Hindu 80%, Muslim 15%, Christian 2%, others 3%.
Cheat sheet, cities (mn): Delhi 33.8; Mumbai 21.67; Kolkata 15.57; Bengaluru 14; Chennai 12.05; Hyderabad 11.07. Tiers: Tier 1 population 1,00,000+ (Delhi, Mumbai, Bengaluru, Chennai, Hyderabad); Tier 2 50,000-99,999 (Amritsar, Bhopal, Bhubaneswar, Chandigarh); Tier 3 10,000-49,999 (Bhadreswar, Datia, Gangtok, Kalyani). Area of India 3.287 mn sq km.
Cheat sheet, economy: GDP nominal Rs 324.11 lakh crore, real Rs 184.88 lakh crore, growth 6.4%; sector share agriculture 20%, industry 26%, services 54%; household spend: food and groceries 25%, housing 25%, savings 15%, education 10%, transport 10%, miscellaneous 10%, utilities 5%; digital: e-commerce 120 bn, social media users 460 mn, OTT subscribers 100 mn; phones Android 70%, Apple 29%, others 1%.
Cheat sheet, vehicles: ~310 mn vehicles, 88% private (260 mn) and 12% commercial (50 mn); per 1000 people 185 own 2-wheelers and 34 own 4-wheelers.
Cheat sheet, conversions and formulae: 1 mile = 1.6 km; 1 ft = 0.3 m; 1 cubic m = 1000 L; 1 hectare = 10,000 sq m; 1 US gallon = 3.8 L; F = C x 9/5 + 32; 1 m/s = 3.6 km/h; Revenue = market size x market share = profit + fixed cost + variable cost; Profit = revenue - COGS - (SG&A + licensing) - (interest + tax + D&A).

=== 180DC SRCC WORKED GUESSTIMATES (company-wise) ===
[Accenture: Market size of the healthy biscuit industry in India]
Approach: demand-side; urban -> income -> age; healthy biscuits appeal to urban, upper-income, 40+ consumers.
Assumptions: India 1.4 bn; urban 35% = 490 mn (rural 910 mn excluded); upper income 10% = 49 mn (middle 40% = 196 mn, lower 50% = 245 mn excluded); age 40+ = 35% (0-25 40%, 25-40 25% excluded); 1.5 biscuits/day (~540/year); price Rs 25 per biscuit (Rs 50 per 2-pack).
Maths: 490 mn x 10% x 35% = 17.15 mn consumers; 17.15 mn x 540 biscuits = 9.26 bn biscuits/yr; x Rs 25 = Rs 231.5 bn.
Answer: Rs 231,525,000,000 = ~Rs 23,150 crore (~Rs 230 bn) per year; range Rs 20,000-25,000 crore.

[Accenture: Number of Ola and Uber cabs running in Delhi NCR in a day]
Approach: demand-side (rides needed) converted to supply (cabs) via rides per cab; segmentation rural/urban -> income -> cab usage -> peak/non-peak.
Assumptions: Delhi NCR 33 mn; rural 60% = 19.8 mn (upper 10% = 1.98 mn, middle 30% = 5.94 mn, lower 60% = 11.88 mn), urban 40% = 13.2 mn (lower 20% = 2.64 mn, middle 50% = 6.6 mn, upper 30% = 3.96 mn); daily cab users: rural upper 10%, rural middle 10%, rural lower 0%, urban lower 0%, urban middle 10%, urban upper 20%; 40% of demand in peak hours (50% converts to a ride), 60% non-peak (20% converts); 10 rides per cab per day; cabs run 24 hours; no Ola/Uber split.
Maths: users = 198k + 594k + 660k + 792k = 2.24 mn; peak 2.24 x 40% = 897k x 50% = 448k rides; non-peak 1.34 mn x 20% = 269k rides; total 718k rides/day; / 10 rides per cab = 71.8k cabs.
Answer: ~72,000 cabs on the road per day (range 60-80k).

[Accenture: Number of flights taking off from Delhi airport in a week]
Approach: supply-side; slot capacity per terminal x terminals x days; weekday vs weekend, peak vs non-peak.
Assumptions: Mon-Fri peak 8 hrs (10am-2pm, 5-9pm) and non-peak 6 hrs (2-5pm, 9pm-12am); Sat-Sun peak 10 hrs, non-peak 6 hrs; peak = 1 take-off every 5 min (12/hr), non-peak every 10 min (6/hr); 6 terminals (book assumption; IGI actually has 3).
Maths: per terminal weekday = 8 x 12 + 6 x 6 = 96 + 36 = 132; x 6 = 792 ~ 800/day; weekend = 10 x 12 + 36 = 156; x 6 = 936 ~ 940/day; week = 800 x 5 + 940 x 2 = 4000 + 1880 = 5880.
Answer: ~5,880 take-offs per week (~840/day); range 5,000-6,500.

[Accenture: Number of tea cups consumed in Delhi in a day]
Approach: demand-side; population minus children -> urban/rural -> drinker type -> cups per day.
Assumptions: Delhi 40 mn; exclude 0-15 yrs (20%) -> 32 mn; urban 40% = 12.8 mn, rural 60% = 19.2 mn; urban: 40% non-drinkers, 30% normal drinkers at 2 cups/day, 30% office-goers at 4 cups/day (2 home + 2 office); rural: 70% drinkers at 3 cups/day, 30% non-drinkers.
Maths: urban normal 12.8 x 30% x 2 = 7.68 mn; urban office 12.8 x 30% x 4 = 15.36 mn; rural 19.2 x 70% x 3 = 40.32 mn; total 63.36 mn.
Answer: ~6.34 crore (63 mn) cups per day; range 5-7 crore.

[Bain Capability Network: Annual revenue of a salon]
Approach: supply-side; chair capacity x occupancy x average order value x operating days; customers split male/female.
Assumptions: 11 hrs/day x 20 chairs = 220 chair-hours/day (book treats 220 as daily customer capacity); male 30 min, Rs 250; female 2 hrs, Rs 2000; illustrative day 22 men (Rs 5,500) + 5.5 women (Rs 11,000) = Rs 16,500 / 27.5 customers = AOV Rs 600; occupancy weekday 70%, weekend 85%; 362 revenue days = 258 weekdays + 104 weekend days.
Maths: weekdays 220 x 70% = 154 x Rs 600 x 258 = Rs 2,38,39,200; weekends 220 x 85% = 187 x Rs 600 x 104 = Rs 1,16,68,800; total Rs 3,55,08,000.
Answer: ~Rs 3.55 crore per year (~Rs 1 lakh/day); range Rs 3-4 crore.

[Bain Capability Network: Market size of fantasy sports in India (users)]
Approach: demand-side; gender -> age -> mobile -> internet -> interest -> adoption.
Assumptions: India 1.4 bn; only men 50% = 700 mn; age 18-25 = 20% (0-18 30%, 26-60 40%, 60+ 10% excluded); mobile penetration 80%; internet 50%; 80% interested in sports; 50% of those use fantasy apps.
Maths: 700 mn x 20% = 140 mn; x 80% = 112 mn; x 50% = 56 mn; x 80% = 44.8 mn; x 50% = 22.4 mn.
Answer: ~22.4 mn fantasy sports users (range 20-25 mn); multiply by average annual spend for a rupee market size.

[Bain Capability Network: Number of orders placed on Swiggy in Delhi in a day]
Approach: demand-side; urban only -> income -> mobile -> internet -> adoption -> market share -> orders/day.
Assumptions: Delhi 40 mn; urban 40% = 16 mn (rural 24 mn do not order); urban BPL 40% = 6.4 mn excluded; middle 40% = 6.4 mn: mobile 85%, internet 80%, adoption 50%, 1 order/day; high 20% = 3.2 mn: mobile 100%, internet 90%, adoption 70%, 2 orders/day; Swiggy share 40%.
Maths: middle 6.4 x 0.85 x 0.8 x 0.5 = 2.176 mn x 40% = 870,400 x 1 = 870,400 orders; high 3.2 x 1 x 0.9 x 0.7 = 2.016 mn (book prints 20.16, typo) x 40% = 806,400 x 2 = 1,612,800; total 2,483,200.
Answer: ~24.8 lakh (2.5 mn) orders per day in Delhi; range 20-30 lakh (note: implies every adopter orders daily, so this is an upper bound).

[Bain Capability Network: Revenue of a Delhi-Gurgaon toll plaza in a day]
Approach: supply-side; booths x vehicles per hour by traffic band x hours x toll by vehicle type.
Assumptions: operational 24 hrs; 15 booths each direction = 30; low-frequency 10 hrs at 1 vehicle/10 min (6/hr/booth), medium 6 hrs at 1 per 5 min (12/hr), high 8 hrs at 1 per minute (60/hr); mix 2-wheelers 10% at Rs 50, 4-wheelers 60% at Rs 100, heavy vehicles 30% at Rs 300.
Maths: vehicles = 30 x (10 x 6 + 6 x 12 + 8 x 60) = 1,800 + 2,160 + 14,400 = 18,360; revenue = 18,360 x (0.1 x 50 + 0.6 x 100 + 0.3 x 300) = 91,800 + 11,01,600 + 16,52,400 = Rs 28,45,800.
Answer: ~Rs 28.5 lakh per day (~Rs 100 crore/yr); range Rs 25-35 lakh/day.

[Bain Capability Network: Number of credit cards in India]
Approach: demand-side; income class -> earning -> willingness for credit -> actually applying -> cards per person; includes inactive cards.
Assumptions: 1.4 bn: high 10% = 140 mn, middle 60% = 840 mn, low 30% = 420 mn; earning share high 100%, middle 50% (420 mn), low 100%; willingness for credit high 50% (70 mn), middle 30% (126 mn), low 10% (42 mn); actually apply high 70% (~50 mn), middle 40% (~50 mn), low 20% (~10 mn); cards per holder high 2, middle 1, low 1.
Maths: 50 x 2 + 50 x 1 + 10 x 1 = 100 + 50 + 10 = 160 mn (unrounded 98 + 50.4 + 8.4 = 157 mn).
Answer: ~160 mn credit cards (16 crore); range 150-170 mn.

[Bain Capability Network: Amount of paint required to paint your car]
Approach: supply-side/physical; approximate the hatchback as two cuboids, compute surface area, apply paint coverage from a door as proxy.
Assumptions: lower cuboid 1.8 m x 1.8 m x 1.3 m (book area 7.5 sq m); upper cuboid 1.5 m x 1.5 m x 0.8 m (book area 15.8 sq m); windows 2.7 sq m not painted; coverage proxy: a 2 sq m door needs 1 gallon.
Maths: area = 7.5 + 15.8 - 2.7 = 20.6 ~ 20 sq m; paint = 20 sq m / 2 sq m per gallon = 10 gallons (book shows 20 gallons; corrected, the book multiplies instead of dividing).
Answer: ~10 gallons (~38 L) by the book's own rate (book shows 20 gallons); real-world sanity: a hatchback takes only about 3-5 L, so in an interview quote the structure and flag the coverage assumption.

[Bain Capability Network: Number of Bollywood movies released in India in a year]
Approach: supply-side; releases per Friday by budget tier x Fridays + holiday releases.
Assumptions: movies release on Fridays, 48 Fridays/yr counted; high budget 1 per Friday, medium 2, low 4; ~4 extra releases on national holidays (Republic Day etc).
Maths: 48 x 1 + 48 x 2 + 48 x 4 = 48 + 96 + 192 = 336; + 4 = 340.
Answer: ~340 Bollywood releases per year; range 300-400.

[Bain Capability Network: Market size of the tyre industry in India in a year (revenue)]
Approach: demand-side; residential (household) approach, four-wheelers only; rural/urban -> car-owning households -> cars -> tyres -> price.
Assumptions: India 1.4 bn; rural 70%, urban 30%; share using 4-wheelers rural 30%, urban 90%; family size rural 5, urban 4; book's car-owning households: rural 0.426 crore (4.26 mn), urban 0.548 crore (5.48 mn) (the printed percentages do not reproduce these; take as given); cars per such household rural 1, urban 3; 5 tyres per car (4 + spare); average tyre Rs 4,000.
Maths: rural 4.26 mn x 1 = 4.26 mn cars x 5 = 21.3 mn tyres; urban 5.48 mn x 3 = 16.44 mn cars x 5 = 82.2 mn tyres; total 103.5 mn tyres x Rs 4,000 = Rs 413.9 bn.
Answer: ~Rs 410 bn (~Rs 41,000 crore); range Rs 350-450 bn (note: this values the full tyre stock, not just annual replacement).

[Boston Consulting Group: Number of outstanding education loans in India]
Approach: demand-side; age 18-25 -> income class -> pursuing undergrad -> public/private institution -> share taking loans; domestic undergrad loans only, outstanding up to 7 years.
Assumptions: 18-25 = 20% of 1.4 bn = 280 mn; BPL 30% excluded; lower-middle 35% = 98 mn (50% in UG), upper-middle 25% = 70 mn (90% in UG), elite 10% = 28 mn (100% in UG); public vs private split: lower-middle 80/20, upper-middle 60/40, elite 40/60; loan take-up: lower-middle public 50%, private 80%; upper-middle public 20%, private 40%; elite public 0%, private 10%.
Maths: lower-middle 49 mn -> 39.2 x 50% = 19.6 + 9.8 x 80% = 7.84 -> 27.44 mn; upper-middle 63 mn -> 37.8 x 20% = 7.56 + 25.2 x 40% = 10.08 -> 17.64 mn; elite 28 mn -> 11.2 x 0 + 16.8 x 10% = 1.68 mn; total 46.76 mn.
Answer: ~46.8 mn (4.68 crore) outstanding education loans by the book; range 40-50 mn (sanity: official data is far lower, ~25-30 lakh accounts, so stress the structure and flag the 50%/80% take-up rates).

[Indus Insights: Revenue of a dentist in a day]
Approach: supply-side; operating hours x patients per hour x occupancy, then mix of procedures x fee; Delhi, consultation-based practice, 7 days a week.
Assumptions: hours 11am-8pm = 9 hrs; 20 min per patient (5 intro + 10 treatment + 5 payment) = 3 per hour; occupancy 100% peak, 50% non-peak; weekday peak 3 hrs, non-peak 6 hrs; weekend peak 6 hrs, non-peak 3 hrs; mix 50% complicated (book uses Rs 2,500; assumptions state Rs 1,500), 30% simple Rs 1,500, 20% consultation only Rs 1,000.
Maths: weekday 3 x 3 + 6 x 1.5 = 18 patients; weekend 6 x 3 + 3 x 1.5 = 22.5; book adds one weekday + one weekend day = 40.5 and divides revenue by 7: 40.5 x (0.5 x 2500 + 0.3 x 1500 + 0.2 x 1000) = 50,625 + 18,225 + 8,100 = Rs 76,950 / 7 = Rs 10,993. Corrected: average spend Rs 1,900; weekly patients 18 x 5 + 22.5 x 2 = 135; weekly revenue Rs 2,56,500 -> Rs 36,643/day.
Answer: ~Rs 36,600 per day (book shows Rs 10,993; corrected: the book divides a 2-day total by 7); with the Rs 1,500 complicated fee from the assumptions, ~Rs 27,000/day. Range Rs 25,000-40,000/day.

[Indus Insights: Annual revenue of a laundry service in Delhi]
Approach: supply-side; revenue streams x daily volume x price x days; mid-market area, seasonality ignored, non-leap year.
Assumptions: wash and fold 100 clothes/day at Rs 9; dry cleaning 7/day at Rs 60; same-day service 10/day at Rs 40; pickup and delivery 10/day at Rs 30; open 11 hrs/day (4 peak + 7 non-peak) = 4,015 operating hours/yr (1,460 peak + 2,555 non-peak).
Maths: daily revenue 900 + 420 + 400 + 300 = Rs 2,020; annual 2,020 x 365 = Rs 7,37,300 (book shows Rs 3,37,929 = 2,020 x 4,015 / 24, i.e. it rescaled a full-day revenue by operating hours; corrected).
Answer: ~Rs 7.4 lakh per year (book shows Rs 3.38 lakh; corrected); range Rs 6-9 lakh.

[Indus Insights: Weekly revenue from the food stalls in a food court in a mall in Delhi]
Approach: demand-side; mall footfall -> share eating at food court -> per stall -> average order value.
Assumptions: 30 stalls (9 low-cost, 15 medium, 6 high-cost; quick food vs sit-down); catchment 60-70k people; mall footfall ~22k on weekdays, ~24k on weekends (5 peak + 5 non-peak hours each); ~15% of visitors eat at the food court; AOV Rs 400 stated in assumptions but Rs 200 used in the calculation.
Maths: weekly food-court footfall 23,460 (= ~1,56,400 mall visitors x 15%); per stall 23,460 / 30 = 782 orders/week; x Rs 200 = Rs 1,56,400 per stall; all 30 stalls = 23,460 x Rs 200 = Rs 46,92,000.
Answer: Rs 1,56,400 per stall per week (the book's final figure is per stall); whole food court ~Rs 47 lakh/week (Rs 94 lakh with the Rs 400 AOV stated in the assumptions).

[Indus Insights: Number of books read by an Indian during their lifetime]
Approach: demand-side by life stage; avid vs non-avid readers x books per year x years in stage x literacy; all languages incl. school texts, reading starts at age 7.
Assumptions: 7-18 (10 yrs): 50% avid at 10 books/yr, 50% at 5 -> avg 7.5; 18-35 (17 yrs): 30% at 4, 70% at 2 -> avg 2.6 (book rounds to 3); 35-60 (25 yrs): 30% at 3, 70% at 1 -> avg 1.6 (book rounds to 2); literacy 70%.
Maths: book: 75 + 51 + 50 = 176 (book prints 80 + 51 + 50 = 181) x 0.7 = 127. Corrected with the book's rounded averages: 176 x 0.7 = 123; with exact averages 75 + 44.2 + 40 = 159 x 0.7 = 111.
Answer: ~120 books per lifetime (book shows 127; corrected 123, or ~111 with exact averages); range 100-130.

[Indus Insights: Weekly commute time for office-goers in Delhi]
Approach: demand-side; population -> working age -> sector -> worker type -> hours per day x office days per week.
Assumptions: Delhi 30 mn; urban 97%; working age 20-50 = 50% (20-35 35% + 35-50 15%) -> workforce 14.55 mn; primary 2%, secondary 38%, tertiary 60% = 8.73 mn (only tertiary counted as office-goers); tertiary split: self-employed 20% (1 hr/day, 6 days), public sector 10% (1.5 hr, 6 days), corporate commuting to Gurugram/Noida/Faridabad 20% (3 hr/day, 3.5 office days), corporate within Delhi 20% (1.5 hr, 5 days), other service workers 30% not counted.
Maths: 8.73 mn x (0.2 x 1 x 6 + 0.1 x 1.5 x 6 + 0.2 x 3 x 3.5 + 0.2 x 1.5 x 5) = 8.73 x (1.2 + 0.9 + 2.1 + 1.5) = 8.73 x 5.7 = 49.76 mn hours.
Answer: ~4.98 crore (50 mn) commute hours per week; range 45-60 mn hours.

[Indus Insights: Expenditure incurred by the Government of India in the Lok Sabha elections 2024]
Approach: extrapolation from past spend with growth drivers; cross-checked with a voter-base view.
Assumptions: 2014 spend Rs 3,780 crore, 2019 spend Rs 8,000 crore (~2x); 2019-24 growth drivers: inflation 30% + voter base growth 5% (910 mn -> 960 mn voters, population +1%/yr) + technology and security 10% = 45%; contingency buffer 5%; COVID protocols could add 5-10%; voter side: population 1.5 bn, 70% aged 18+, turnout 40%; EVM cost Rs 5,000 each.
Maths: 8,000 x 1.45 = Rs 11,600 crore; x 1.05 = Rs 12,180 crore.
Answer: ~Rs 12,200 crore (Rs 11,600 crore before buffer); range Rs 11,000-13,000 crore.

[Kepler Cannon: Market size for an alco-beverage firm in Mumbai (consumers)]
Approach: demand-side; area (urban vs slum) -> age x interest -> income class x affordability; no underage targeting.
Assumptions: Mumbai 20 mn; urban 60% = 12 mn, slum 40% = 8 mn excluded (0% addressable); age 0-18 (20%) excluded; 18-30 20% with 80% interest, 30-50 30% with 50%, 50+ 30% with 20%; of interested: BPL 10% excluded, lower-middle 35% at 50% affordability, upper-middle 40% at 75%, upper 15% at 90%.
Maths: interested = 12 x 0.2 x 0.8 + 12 x 0.3 x 0.5 + 12 x 0.3 x 0.2 = 1.92 + 1.8 + 0.72 = 4.44 ~ 4 mn; buyers = 1.4 x 50% + 1.6 x 75% + 0.6 x 90% = 0.7 + 1.2 + 0.54 = 2.44 ~ 2.5 mn.
Answer: ~25 lakh (2.5 mn) addressable consumers in Mumbai; range 2.2-2.8 mn; multiply by annual spend per drinker for rupee TAM.

[Nation with NaMo: Number of red cars in Delhi]
Approach: demand-side; population -> households -> income class -> cars per household -> colour share; personal cars only.
Assumptions: Delhi 33 mn; 4 per family; lower-middle 75% own no cars (book prints 33 mn x 75% / 4 = 6.19 mn families but excludes them); upper-middle 15% own 1 car; upper 10% own 2 cars; 15% of cars are red.
Maths: upper-middle 33 x 15% / 4 = 1.24 mn cars; upper 33 x 10% / 4 x 2 = 1.65 mn; total 2.89 mn cars; x 15% = 433,125.
Answer: ~4.3 lakh red cars in Delhi; range 4-5 lakh.

[Nation with NaMo: Number of chairs in households of Delhi]
Approach: demand-side; population -> households by income -> chairs per household.
Assumptions: Delhi 20 mn; family size 5 -> 4 mn households; low income 30% (2 chairs), lower-middle 30% (5), upper-middle 30% (10), high 10% (20).
Maths: 1.2 mn x 2 + 1.2 mn x 5 + 1.2 mn x 10 + 0.4 mn x 20 = 2.4 + 6 + 12 + 8 = 28.4 mn.
Answer: ~28.4 mn (2.84 crore) chairs; range 25-30 mn.

[Nation with NaMo: Number of students in SRCC who travel by metro every day]
Approach: demand-side; students -> Delhi vs outstation -> income -> mode of transport; regular day, 100% attendance, UG + PG.
Assumptions: 3,500 students; 40% from Delhi = 1,400 (60% = 2,100 outstation students live near campus and do not use metro); Delhi students by income: low 40% = 560 (bus 70%, metro 30%), middle 50% = 700 (bus 30%, metro 40%, cabs 20%, private 10%), high 10% = 140 (metro 40%, cabs 30%, private 30%).
Maths: 560 x 30% = 168; 700 x 40% = 280; 140 x 40% = 56; total 504.
Answer: ~500 students (504) use the metro daily; range 450-600.

[Nation with NaMo: Number of wine bottles sold in India in a year]
Approach: demand-side; population -> age -> income -> drinker type -> bottles per drinker -> share sold in bottles.
Assumptions: India 1.43 bn; age 0-21 (35%) do not drink, 22-35 27%, 36-50 23%, 51+ 15%; income among adults: low 363 mn (do not drink wine), middle 211.75 mn, high 30.25 mn (wine preferred by high income); drinker types among adults: non-drinkers 325 mn, regular 280 mn, occasional 325 mn; 40 bottles per wine drinker per year; 20% of wine sold in cans/barrels, so 80% in bottles.
Maths: wine drinkers x 40 containers x 80% = 3.13 bn bottles; the book does not print the drinker count; implied wine drinkers = 3.13 bn / 32 = ~98 mn (roughly all 30 mn high-income adults plus ~1/3 of middle-income adults).
Answer: 3.13 bn bottles per year by the book; range 2.5-3.5 bn on these assumptions (sanity: actual Indian wine sales are only ~30-40 mn bottles a year, so the 40 bottles per drinker and 98 mn drinkers are the assumptions to challenge).

[Nation with NaMo: Number of people that visit India Gate on a given day]
Approach: demand-side with two segments: residents (by income, share going out for leisure) and tourists (share choosing India Gate among 10 spots); normal working day.
Assumptions: Delhi 20 mn: low income 10 mn, middle 8 mn, high 2 mn; tourists in Delhi ~1 lakh per day; 10 popular spots, India Gate is one (10% likelihood); income decides ability to go out for leisure.
Maths: visitors = total people x % going out for leisure x 10% choosing India Gate; book prints only the result 116,500, implying ~1.165 mn people (about 5.8% of residents + tourists) out for leisure on a day, 10% of whom pick India Gate.
Answer: ~1.17 lakh (116,500) visitors per day; range 1-1.5 lakh.

[Nation with NaMo: Number of students using the metro to commute to North Campus of Delhi University]
Approach: demand-side; total students -> accommodation (day scholars only) -> long-distance commuters -> income -> metro share.
Assumptions: 10 colleges x 5,000 = 50,000 students; hostels 3,000 and PGs 30,000 do not use metro; day scholars 17,000, of whom 80% = 13,600 commute long distances: low income 5,440 (40%), middle 7,480 (55%), high 680 (5%); metro share: low income 30% (70% prefer DTC buses), middle 90%, high 0% (private transport).
Maths: book: 7,480 x 90% + 5,440 x 70% = 6,732 + 3,808 = 10,540 (applies the 70% bus share as a metro share). Corrected per the stated assumption: 6,732 + 5,440 x 30% = 6,732 + 1,632 = 8,364.
Answer: ~8,400 students (book shows 10,540; corrected); range 8,000-11,000.

[Nation with NaMo: Number of flights at Delhi airport in a day (arrivals)]
Approach: supply-side; runway landing capacity x runways x terminals, peak vs non-peak; domestic + international.
Assumptions: 1 airport, 3 terminals, 2 runways per terminal; peak 8am-8pm (12 hrs) one landing per 10 min = 6/hr; non-peak 8pm-8am (12 hrs) one per 30 min = 2/hr.
Maths: weighted average (6 + 2) / 2 = 4 per hour x 24 = 96 per runway/day; x 2 runways = 192 per terminal; x 3 terminals = 576.
Answer: ~576 arrivals per day (~1,150 total movements incl. departures); range 500-700.

[Nation with NaMo: Monthly revenue of Saravana Bhavan (one outlet)]
Approach: supply-side; hourly capacity x hours x occupancy x days, then weighted average ticket; dine-in only, regular month.
Assumptions: capacity 120 customers/hr; weekdays 22, weekend days 8; weekday peak 4 hrs (11-12, 3-5, 8-9) at 100% occupancy, non-peak 7 hrs at 50%; weekend footfall 1.5x a weekday; menu mix dosa Rs 200 (50%), special dosa Rs 300 (20%), coffee Rs 100 (30%).
Maths: weekday peak 4 x 22 x 120 = 10,560; non-peak 7 x 22 x 120 = 18,480 x 50% = 9,240; weekday total 19,800 (900/day); weekends 1.5 x 900 x 8 = 10,800; customers/month 30,600; average ticket 0.5 x 200 + 0.2 x 300 + 0.3 x 100 = Rs 190; revenue 30,600 x 190 = Rs 58,14,000.
Answer: ~Rs 58 lakh per month; range Rs 50-65 lakh.

[Redseer Strategy Consultants: Market size of quick commerce in India (users)]
Approach: demand-side; urban population -> city tier -> age -> adoption; rural and tier 2/3 have no access.
Assumptions: India 1.4 bn, urban 30% (~400 mn used); metro cities 10% = 40 mn, tier 1 50% = 200 mn, tier 2/3 40% excluded; age split 0-30 40%, 30-50 30%, 50+ 30%; adoption metro 90% / 70% / 20%, tier 1 70% / 50% / 0%.
Maths: metro 16 x 90% + 12 x 70% + 12 x 20% = 14.4 + 8.4 + 2.4 = 25.2 mn; tier 1 80 x 70% + 60 x 50% + 60 x 0% = 56 + 30 + 0 = 86 mn; total 111.2 mn.
Answer: ~111 mn (11.1 crore) quick-commerce users; range 90-120 mn; multiply by orders per month x AOV for GMV.

[Redseer Strategy Consultants: Size of the advertising market on non-traditional (digital) platforms]
Approach: demand-side in ad impressions: users x time spent x ads per hour across OTT, apps, social media and e-commerce.
Assumptions: India 1.4 bn; platform usage OTT 60%, apps 90%, social media 50%, e-commerce 40%; internet access 75% = 1.05 bn; subscribers 70% of users (735 mn of internet base); active users 945 mn; book's total users = 1.4 bn x 90% x 70% = 882 mn; total time across platforms 11 hrs/day; ads encountered 26 per hour across platforms.
Maths: 882 mn x 11 hrs x 26 ads = 252,252 mn = ~252 bn ad impressions per day (book prints 25,225.2 bn, a decimal slip; corrected).
Answer: ~252 bn ad impressions per day (book shows 25,225.2 bn; corrected); multiply by CPM to get rupees.

[Redseer Strategy Consultants: Size of the animation/VFX market in India (audience units)]
Approach: demand-side; age group x content type (movies, TV shows, cartoons/games) x urban/rural internet reach, summed in millions of viewers.
Assumptions: India 1.4 bn; urban 30%, rural 70%; each age group's usage mix is applied to the full population and split 70% urban / 30% rural: 5-15 yrs: movies 20%, TV 20%, cartoons 60%; 15-40 yrs: movies 50%, TV 40%, cartoons 10%; 45+ yrs: movies 45%, TV 50%, cartoons 5%.
Maths: urban cells (mn) 196 + 196 + 588 + 490 + 392 + 98 + 441 + 490 + 49 = 2,940; rural cells 84 + 84 + 252 + 210 + 168 + 42 + 189 + 189 + 21 = 1,239; total 4,179 mn = 4.18 bn.
Answer: 4.18 bn audience-content units (not rupees; by construction it is ~3 x population); to get a rupee market multiply viewers by content hours x animation share x cost per hour.

[Trinity Life Sciences: Volume of paint required to paint an Airbus (A320-class)]
Approach: physical/supply-side; estimate fuselage as a cylinder from seat rows, wings and tail equal to fuselage area, apply paint coverage and coats.
Assumptions: economy 20 rows x 3 ft + business 5 rows x 5 ft + kitchen 10 ft + cockpit 10 ft = ~110 ft length; diameter = 6 ft person + 2 ft overhead storage + 2 ft checked luggage hold = 10 ft; wings + tail area = fuselage area; 5 L covers 500 sq ft; 3 coats.
Maths: fuselage area = pi x 10 x 110 = 3,454 sq ft; + wings/tail 3,454 = 6,908 sq ft; per coat 6,908 / 500 x 5 = 69.08 L; x 3 coats = 207.24 L.
Answer: ~207 L of paint (~69 L per coat); range 150-250 L.

[Trinity Life Sciences: Milk required by each coffee shop in Connaught Place per day]
Approach: supply-side; minutes open x occupancy / preparation time = coffees, then milk per coffee type.
Assumptions: 7 min per coffee (one prep line); weekday occupancy 8am-12pm 70%, 12-4pm 50%, 4-10pm 80%; weekend 60%, 80%, 90%; mix black 20% (0 ml), latte/cappuccino 50% (75 ml), regular coffee 30% (250 ml).
Maths: weekday 240 x 0.7 / 7 + 240 x 0.5 / 7 + 360 x 0.8 / 7 = 24 + 17 + 41 = 82/day x 5 = 410; weekend 20 + 27 + 46 = 94 (93) x 2 = 188; week 598 / 7 = 85 coffees/day; milk = 85 x (0.5 x 75 + 0.3 x 250) = 3,187 + 6,375 = 9,562 ml.
Answer: ~9.6 L of milk per day per shop; range 8-12 L.

[Trinity Life Sciences: Number of pens bought in a day in India]
Approach: demand-side; age segment -> active buyers -> pens per month -> per day.
Assumptions: India 1.4 bn; children 6-18 20% = 280 mn (80% active buyers, 4 pens/month); adults 19-60 50% = 700 mn (70% active, 2 pens/month); seniors 60+ 20% = 280 mn (40% active, 0.5 pens/month); under-6 (10%) buy none; 30 days/month.
Maths: 224 mn x 4 = 896 mn + 490 mn x 2 = 980 mn + 112 mn x 0.5 = 56 mn = 1,932 mn pens/month; / 30 = 64.4 mn/day.
Answer: ~6.44 crore (64 mn) pens per day (~23 bn/yr); range 50-70 mn/day.

[Trinity Life Sciences: Number of Spotify Premium subscribers in India]
Approach: demand-side; urban/rural -> income -> internet penetration -> age -> music listeners -> Spotify share -> premium conversion.
Assumptions: India 1.4 bn; urban 35% (high 20% at 100% internet, middle 40% at 70%, low 40% at 30%), rural 65% (high 10% at 50%, middle 40% at 20%, low 50% at 5%) -> 435 mn internet users; age split of internet users 0-14 26%, 15-24 18%, 25-34 16%, 35-44 24%, 45+ 26%; music listeners 50% / 90% / 85% / 60% / 40%; Spotify share 30% of listeners; premium conversion 5% / 40% / 40% / 20% / 10%.
Maths: internet = 490 x (0.2 + 0.28 + 0.12) + 910 x (0.05 + 0.08 + 0.025) = 294 + 141 = 435 mn; premium = 435 x 0.3 x (0.26 x 0.5 x 0.05 + 0.18 x 0.9 x 0.4 + 0.16 x 0.85 x 0.4 + 0.24 x 0.6 x 0.2 + 0.26 x 0.4 x 0.1) = 0.85 + 8.46 + 7.10 + 3.76 + 1.36 = ~21.5 mn (book's spreadsheet gives 19,955,744).
Answer: ~20 mn Spotify Premium subscribers (book 19.96 mn; recomputed 21.5 mn); range 18-22 mn.
`;
