// Question bank for the accuracy test (scripts/accuracy-test.js).
// Each entry: type, the question as an interviewer would say it, the expected answer (for humans),
// and a grader applied to the first lines of the model's answer:
//   { pattern: 'regex source', flags: 'i' }      -> regex must match
//   { all: [{ pattern, flags }, ...] }             -> every regex must match
//   { range: [low, high] }                         -> a quantity in the headline must fall in the range
//                                                     (understands lakh, crore, mn, million, bn, k)

module.exports = [
    // ── Puzzles ──
    {
        type: 'puzzle',
        q: 'You have two identical eggs and a 100-floor building. What is the minimum number of drops in the worst case to find the highest floor from which an egg does not break?',
        expect: '14',
        grade: { pattern: '\\b14\\b' },
    },
    {
        type: 'puzzle',
        q: 'There are 25 horses and you can race 5 at a time with no stopwatch. Minimum races to find the fastest three?',
        expect: '7',
        grade: { pattern: '\\b7\\b' },
    },
    {
        type: 'puzzle',
        q: 'Four people must cross a bridge at night with one torch; they take 1, 2, 5 and 10 minutes, at most two cross at a time at the slower pace. Minimum total time?',
        expect: '17',
        grade: { pattern: '\\b17\\b' },
    },
    {
        type: 'puzzle',
        q: 'Monty Hall: you pick one of three doors, the host opens another door showing a goat and offers a switch. Should you switch, and what is your probability of winning if you do?',
        expect: 'switch, 2/3',
        grade: { pattern: 'switch', flags: 'i' },
    },
    {
        type: 'puzzle',
        q: 'How many people must be in a room for the probability that two share a birthday to exceed 50 percent?',
        expect: '23',
        grade: { pattern: '\\b23\\b' },
    },
    {
        type: 'puzzle',
        q: 'Three ants sit at the corners of a triangle and each starts walking along an edge in a random direction. Probability that no two ants collide?',
        expect: '1/4',
        grade: { pattern: '1\\s*/\\s*4|0\\.25|25\\s*%' },
    },
    {
        type: 'puzzle',
        q: 'Five rational pirates split 100 gold coins by seniority; a proposal needs at least half the votes including the proposer, otherwise the proposer is thrown overboard. How many coins does the most senior pirate keep?',
        expect: '98',
        grade: { pattern: '\\b98\\b' },
    },
    {
        type: 'puzzle',
        q: 'You have 1000 bottles of wine and exactly one is poisoned; the poison kills in 24 hours and you have one day. Minimum number of prisoners needed to identify the bottle?',
        expect: '10',
        grade: { pattern: '\\b10\\b' },
    },
    {
        type: 'puzzle',
        q: 'Two trains 100 km apart move toward each other at 50 km/h each. A fly flying at 75 km/h shuttles between them until they meet. How far does the fly travel?',
        expect: '75 km',
        grade: { pattern: '\\b75\\b' },
    },
    { type: 'puzzle', q: 'What is the angle between the hour and minute hands at 3:15?', expect: '7.5 degrees', grade: { pattern: '7\\.5' } },
    {
        type: 'puzzle',
        q: '100 lockers are closed. Student 1 opens every locker, student 2 toggles every second locker, student k toggles every k-th locker, up to student 100. How many lockers are open at the end?',
        expect: '10',
        grade: { pattern: '\\b10\\b' },
    },
    {
        type: 'puzzle',
        q: 'A camel must carry 3000 bananas 1000 km to market; it carries at most 1000 bananas and eats one banana per km walked. Maximum bananas that reach the market?',
        expect: '533',
        grade: { pattern: '533' },
    },
    {
        type: 'puzzle',
        q: 'Russian roulette: a six-chamber revolver holds two bullets in adjacent chambers. The first pull on you was empty. For the next pull, should you spin the cylinder or not?',
        expect: 'do not spin (3/4 vs 2/3)',
        grade: { pattern: "not spin|don't spin|do not spin|without spinning|no spin", flags: 'i' },
    },
    {
        type: 'puzzle',
        q: 'A bat and a ball cost 1.10 together and the bat costs 1.00 more than the ball. How much is the ball?',
        expect: '0.05',
        grade: { pattern: '0\\.05|5 cents|five cents', flags: 'i' },
    },
    {
        type: 'puzzle',
        q: 'A patch of lily pads doubles every day and covers the whole lake on day 48. On which day was it half covered?',
        expect: '47',
        grade: { pattern: '\\b47\\b' },
    },
    {
        type: 'puzzle',
        q: 'If 5 machines take 5 minutes to make 5 widgets, how long do 100 machines take to make 100 widgets?',
        expect: '5 minutes',
        grade: { pattern: '\\b5\\s*min', flags: 'i' },
    },
    {
        type: 'puzzle',
        q: 'A snail climbs 3 metres each day and slips back 2 metres each night. How many days to climb out of a 10 metre well?',
        expect: '8',
        grade: { pattern: '\\b8\\b' },
    },
    { type: 'puzzle', q: 'What is the expected number of fair coin tosses to get two heads in a row?', expect: '6', grade: { pattern: '\\b6\\b' } },
    {
        type: 'puzzle',
        q: 'In a room of 20 people everyone shakes hands with everyone else exactly once. How many handshakes?',
        expect: '190',
        grade: { pattern: '\\b190\\b' },
    },
    { type: 'puzzle', q: 'How many squares of all sizes are there on a standard 8 by 8 chessboard?', expect: '204', grade: { pattern: '\\b204\\b' } },
    {
        type: 'puzzle',
        q: 'Two diagonally opposite corner squares are removed from a chessboard. Can you tile the remaining 62 squares with 31 dominoes?',
        expect: 'impossible (colour parity)',
        grade: { pattern: "\\bno\\b|impossible|cannot|can't|not possible", flags: 'i' },
    },
    {
        type: 'puzzle',
        q: '100 passengers board a 100-seat plane; the first lost his boarding pass and sits randomly, everyone else takes their own seat if free, otherwise a random seat. Probability that the last passenger gets his own seat?',
        expect: '1/2',
        grade: { pattern: '1\\s*/\\s*2|0\\.5\\b|50\\s*%' },
    },
    {
        type: 'puzzle',
        q: 'A book is numbered using 2893 digits in total. How many pages does it have?',
        expect: '1000',
        grade: { pattern: '\\b1,?000\\b' },
    },
    {
        type: 'puzzle',
        q: 'A rope is tied tightly around the Earth at the equator. You add one metre of rope and lift it uniformly. How high off the ground is it?',
        expect: 'about 16 cm',
        grade: { pattern: '16\\s*(cm|centimet)|0\\.16|15\\.9', flags: 'i' },
    },
    {
        type: 'puzzle',
        q: 'A family has two children and you are told at least one is a boy. Probability both are boys?',
        expect: '1/3',
        grade: { pattern: '1\\s*/\\s*3|33' },
    },
    {
        type: 'puzzle',
        q: 'You have 12 coins, one is counterfeit and you do not know if it is heavier or lighter. Minimum weighings on a balance to find it and tell whether it is heavy or light?',
        expect: '3',
        grade: { pattern: '\\b3\\b|three', flags: 'i' },
    },
    {
        type: 'puzzle',
        q: 'Ten stacks of ten coins each; one entire stack is counterfeit and each counterfeit coin weighs 1 gram more. You have an accurate scale. Minimum number of weighings to find the stack?',
        expect: '1',
        grade: { pattern: '\\bone\\b|\\b1\\b|single', flags: 'i' },
    },
    {
        type: 'puzzle',
        q: 'Two ropes each take exactly 60 minutes to burn but burn unevenly. How do you measure 45 minutes, and what is the key idea?',
        expect: 'light one rope at both ends',
        grade: { pattern: 'both ends|two ends', flags: 'i' },
    },
    // ── Guesstimates (graded by range on the headline number) ──
    { type: 'guesstimate', q: 'How many cars are there in Delhi?', expect: '1.5-6 million', grade: { range: [1500000, 6000000] } },
    { type: 'guesstimate', q: 'How many petrol pumps are there in India?', expect: '50k-150k', grade: { range: [50000, 150000] } },
    {
        type: 'guesstimate',
        q: 'How many cups of tea are consumed in India every day?',
        expect: '0.8-3 billion',
        grade: { range: [800000000, 3000000000] },
    },
    { type: 'guesstimate', q: 'How many domestic flights take off in India on a typical day?', expect: '2000-6000', grade: { range: [2000, 6000] } },
    { type: 'guesstimate', q: 'How many weddings take place in India in a year?', expect: '6-15 million', grade: { range: [6000000, 15000000] } },
    {
        type: 'guesstimate',
        q: 'How many smartphones are sold in India per year?',
        expect: '100-220 million',
        grade: { range: [100000000, 220000000] },
    },
    { type: 'guesstimate', q: 'Estimate the number of ATMs in India.', expect: '120k-350k', grade: { range: [120000, 350000] } },
    { type: 'guesstimate', q: 'How many golf balls fit inside a Boeing 747?', expect: '5-30 million', grade: { range: [5000000, 30000000] } },
    // ── Unseen: not in any library file, tests reasoning rather than lookup ──
    { type: 'unseen', q: 'How many auto-rickshaws are there in Mumbai?', expect: '1-8 lakh', grade: { range: [100000, 800000] } },
    {
        type: 'unseen',
        q: 'How many litres of water does Delhi consume in a day?',
        expect: '2-8 billion litres',
        grade: { range: [2000000000, 8000000000] },
    },
    {
        type: 'unseen',
        q: 'How many trucks and other goods vehicles are on Indian roads?',
        expect: '5-25 million',
        grade: { range: [5000000, 25000000] },
    },
    { type: 'unseen', q: 'How many new cars are sold in Mumbai in a year?', expect: '0.8-4 lakh', grade: { range: [80000, 400000] } },
    {
        type: 'unseen',
        q: 'A clock loses 5 minutes every hour. It was set correctly at noon. What time does it show when the real time is 6 pm?',
        expect: '5:30',
        grade: { pattern: '5[:.]30' },
    },
    {
        type: 'unseen',
        q: 'A knockout tennis tournament starts with 64 players. How many matches are played to decide the champion?',
        expect: '63',
        grade: { pattern: '\\b63\\b' },
    },
    {
        type: 'unseen',
        q: 'A frog at the bottom of a 30 metre well climbs 5 metres each day and slips back 4 metres each night. On which day does it get out?',
        expect: '26',
        grade: { pattern: '\\b26\\b' },
    },
    {
        type: 'unseen',
        q: 'Eight workers build a wall in 10 hours. How long would five workers take at the same rate?',
        expect: '16 hours',
        grade: { pattern: '\\b16\\b' },
    },
    {
        type: 'unseen',
        q: 'What is the probability of getting exactly two heads in three tosses of a fair coin?',
        expect: '3/8',
        grade: { pattern: '3\\s*/\\s*8|0\\.375|37\\.5' },
    },
    { type: 'unseen', q: 'How many trailing zeros does 100 factorial have?', expect: '24', grade: { pattern: '\\b24\\b' } },
    {
        type: 'unseen',
        q: 'Find the smallest positive number that leaves remainder 2 when divided by 3, remainder 3 when divided by 5, and remainder 2 when divided by 7.',
        expect: '23',
        grade: { pattern: '\\b23\\b' },
    },
    {
        type: 'unseen',
        q: 'A 200 metre long train passes a pole in 10 seconds. What is its speed in km per hour?',
        expect: '72 km/h',
        grade: { pattern: '\\b72\\b' },
    },
    {
        type: 'unseen',
        q: 'In a class of 40 students, 25 play cricket, 20 play football and 8 play neither. How many play both?',
        expect: '13',
        grade: { pattern: '\\b13\\b' },
    },
    {
        type: 'unseen',
        q: 'A shopkeeper marks up an item by 40 percent and then gives a 25 percent discount. What is the net profit percentage?',
        expect: '5%',
        grade: { pattern: '\\b5\\s*%|5 percent|five percent', flags: 'i' },
    },
    // ── Case maths ──
    {
        type: 'quant',
        q: 'A factory has fixed costs of 5 lakh rupees a month, sells each unit at 500 rupees with a variable cost of 300 rupees. What is the monthly break-even volume?',
        expect: '2500 units',
        grade: { pattern: '2,?500' },
    },
    {
        type: 'quant',
        q: 'If we raise price by 10 percent and volume falls 5 percent, what happens to revenue?',
        expect: '+4.5%',
        grade: { pattern: '4\\.5\\s*%|\\+\\s*4\\.5|4\\.5 percent', flags: 'i' },
    },
    {
        type: 'quant',
        q: 'A market grows at 8 percent a year. Roughly how many years until it doubles?',
        expect: '9 years',
        grade: { pattern: '\\b9\\b|nine', flags: 'i' },
    },
    {
        type: 'quant',
        q: 'A product costs 80 to make and sells for 100. What are the margin and the mark-up?',
        expect: 'margin 20%, mark-up 25%',
        grade: { all: [{ pattern: '20\\s*%' }, { pattern: '25\\s*%' }] },
    },
    {
        type: 'quant',
        q: 'Our client has 30 percent share of a 2000 crore market growing 10 percent a year. If share stays flat, what is client revenue in two years?',
        expect: '726 crore',
        grade: { pattern: '726|730|72[0-9]\\b' },
    },
];
