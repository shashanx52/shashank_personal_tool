// Reference library: classic interview puzzles / brainteasers with their VERIFIED answers.
// Injected into the system prompt of the "Case, Guesstimate & Puzzle" profile.
// Keep answers exact; the model is told to prefer these over its own guess when a question matches.

module.exports = `
=== PUZZLE SOLVING METHOD (use when the question is not in the list) ===
1. Restate the puzzle in one line and list every constraint. Many wrong answers come from a missed constraint.
2. Classify it: (a) counting/probability -> enumerate cases or use complementary counting; (b) optimisation/min-max -> think information theory (each weighing/drop/question splits possibilities, answer is usually ceil(log base k of N)); (c) invariant/parity -> what quantity never changes (colouring, parity, sum mod n); (d) logic/knights-and-knaves -> build a truth table; (e) process puzzles (crossing, pouring, timing) -> work backwards from the goal state; (f) "trick" wording -> read literally.
3. Solve small cases first (n = 1, 2, 3) and look for the pattern, then generalise.
4. VERIFY before answering: recompute by a second method, plug the answer back into the constraints, and check extremes. State the final answer first, then the shortest convincing reasoning.
5. If two interpretations are possible, give the answer for the standard interpretation and name the other in one line.

=== CLASSIC PUZZLES WITH VERIFIED ANSWERS ===

[Two eggs, 100 floors] Minimum drops in the worst case to find the highest safe floor: 14. Drop from floors 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99, 100 (gaps decrease by one); when the first egg breaks, walk up floor by floor with the second. Reason: with d drops you can cover d + (d-1) + ... + 1 = d(d+1)/2 floors; 14*15/2 = 105 >= 100.

[25 horses, 5 per race, find the fastest 3, no stopwatch] 7 races. Five heats, then race the five heat winners (race 6). The winner of race 6 is #1. Candidates for #2 and #3 are only: 2nd and 3rd of the overall winner's heat, the 2nd-place winner of race 6 and the runner-up from his heat, and the 3rd-place winner of race 6. Race those five (race 7).

[Three switches, one bulb in a closed room, one visit] Turn switch A on for 10 minutes, then off. Turn B on. Enter: bulb lit -> B; bulb off but warm -> A; off and cold -> C.

[Bridge and torch: 1, 2, 5, 10 minutes, two at a time, torch must be carried] 17 minutes. 1+2 cross (2), 1 returns (1), 5+10 cross (10), 2 returns (2), 1+2 cross (2). The trick: the two slowest cross together.

[Measure exactly 4 litres with a 3 L and a 5 L jug] Fill 5, pour into 3 (5 L jug now holds 2), empty 3, pour the 2 into 3, fill 5, top up the 3 L jug (takes 1) -> 5 L jug holds 4. Alternative: fill 3 -> pour to 5; fill 3 -> pour to 5 (1 left in small); empty 5; pour the 1 in; fill 3 and pour -> 4.

[8 balls, one heavier, balance scale] 2 weighings: 3 vs 3; if balanced weigh the remaining 2; else weigh 1 vs 1 from the heavier three. General rule: n balls with one heavy needs ceil(log3 n) weighings (9 -> 2, 27 -> 3).

[12 coins, one counterfeit, heavier OR lighter unknown, find it and tell which] 3 weighings (each weighing has 3 outcomes; 3^3 = 27 >= 24 possibilities). Standard first weighing: 4 vs 4.

[Monty Hall] Always switch: switching wins with probability 2/3, staying 1/3, because your first pick is wrong 2/3 of the time and the host's reveal moves all of that probability to the other closed door.

[Birthday paradox] 23 people give a probability above 50% (50.7%) that two share a birthday; 57 people exceed 99%. Compute as 1 - product of (365-i)/365.

[Two ropes, each burns in exactly 60 min but unevenly, measure 45 min] Light rope A at both ends and rope B at one end at the same time. When A finishes (30 min), light B's other end; B's remainder burns in 15 more min. Total 45. (To measure 15 min only: light both ends of one rope = 30, or use the second rope as above.)

[5 pirates, 100 gold coins, strict seniority, proposal needs >= 50% including proposer, losers die, pirates are rational and prefer coins, then killing] Senior pirate proposes 98 for himself, 0, 1, 0, 1 (coins to pirates 3 and 5), and it passes 3-2. Work backwards from the 2-pirate case.

[3 ants on the corners of a triangle each pick a direction at random] Probability of no collision = 2/8 = 1/4 (all clockwise or all anticlockwise). For an n-gon it is 2/2^n.

[Two doors (heaven/hell), two guards (one always lies, one always truthful), one question] Ask either guard: "If I asked the other guard which door leads to heaven, what would he say?" Both will point to the hell door, so take the other one. Alternative: "Which door would YOU say leads to heaven?" -> both point to the true door.

[1000 wine bottles, one poisoned, poison kills in 24 h, one day to find it] 10 prisoners. Number bottles 0..999 in binary (10 bits); prisoner i drinks from every bottle whose bit i is 1. The set of dead prisoners spells the bottle number. 2^10 = 1024 >= 1000.

[Two trains 100 km apart approach at 50 km/h each; a fly at 75 km/h shuttles between them] The trains meet after 1 hour, so the fly travels 75 km. Do not sum the series.

[Clock angle] Angle between the hands = |30H - 5.5M| degrees (take the smaller angle, i.e. min(x, 360-x)). At 3:15 -> 7.5 degrees. At 3:00 -> 90. At 12:30 -> 165. At 6:00 -> 180.

[How often do the hands of a clock overlap?] 11 times in 12 hours, 22 times in 24 hours, every 65 5/11 minutes (65 min 27.3 s). They are opposite 11 times per 12 hours as well.

[100 lockers, 100 students, student k toggles every k-th locker] Lockers whose number is a perfect square stay open: 1, 4, 9, ..., 100 -> 10 lockers (a number has an odd number of divisors only if it is a perfect square). With 1000 lockers -> 31 (31^2 = 961).

[Chessboard with two opposite corners removed, tile with 2x1 dominoes?] Impossible. Opposite corners are the same colour, leaving 32 squares of one colour and 30 of the other, but each domino covers one of each.

[How many squares on a chessboard?] 204 (8^2 + 7^2 + ... + 1^2). Rectangles: C(9,2)^2 = 36^2 = 1296.

[Camel and bananas: 3000 bananas, market 1000 km away, camel carries 1000, eats 1 per km] 533 bananas arrive (533 1/3). Move in stages: while 3 loads remain you spend 5 bananas per km (200 km uses 1000, leaving 2000 at km 200); with 2 loads, 3 per km (333 1/3 km more, leaving 1000 at km 533 1/3); then one trip of 466 2/3 km -> 533 1/3 left.

[Cheryl's birthday] July 16.

[Russian roulette, 6 chambers, 2 bullets in ADJACENT chambers, first pull was empty, spin or not?] Do NOT spin: P(survive) = 3/4 (of the 4 empty chambers, only one is followed by a bullet). Spinning gives 4/6 = 2/3. If the two bullets are NOT adjacent: not spinning gives 1/2, spinning 2/3 -> spin.

[Wolf, goat, cabbage across a river, boat holds farmer + one] 7 crossings: take goat over; return; take wolf; bring goat back; take cabbage; return; take goat.

[Three boxes labelled Apples, Oranges, Mixed; ALL labels wrong; fewest fruits to draw] One. Draw from the box labelled "Mixed": whatever you get, that box is purely that fruit. Then the box labelled with the other fruit must be Mixed, and the last box is the remaining fruit.

[10 stacks of 10 coins; one whole stack is counterfeit (each coin 1 g heavier); one weighing] Take 1 coin from stack 1, 2 from stack 2, ..., 10 from stack 10 and weigh them all together. Expected weight 55 g if genuine; the excess in grams is the counterfeit stack's number.

[Why are manhole covers round?] A round cover cannot fall through its own hole (any orientation has the same width), it can be rolled, and it needs no alignment. Interview point: give several reasons.

[Sum 1 to 100] 5050 (n(n+1)/2). Sum of first n odd numbers = n^2. Sum of 1..n squared = n(n+1)(2n+1)/6.

[Tower of Hanoi, n disks] 2^n - 1 moves. 64 disks -> about 1.8 x 10^19 moves.

[100 prisoners and a light bulb (each visits the room at random, must know when all have visited)] Designate one counter. Every other prisoner turns the light ON the first time they find it OFF (only once ever). The counter turns it OFF each time he finds it ON and counts; at 99 he declares. Works with certainty (slow, but guaranteed).

[Blue-eyed islanders] If there are n blue-eyed people and an outsider announces "at least one of you has blue eyes", all n leave together on the n-th night. Induction from n = 1.

[Hats in a line, 100 prisoners, black/white, each sees hats in front, guess from the back] 99 guaranteed, 100 with probability 1/2. The last person says "black" if he sees an odd number of black hats; everyone else deduces their colour from parity and previous answers.

[Handshakes] n people shaking hands with everyone once: n(n-1)/2. 10 people -> 45. 20 -> 190.

[Two children, at least one is a boy; probability both are boys] 1/3 (BB, BG, GB). If you are told "the ELDER is a boy" (or you meet one specific child) -> 1/2.

[Expected coin tosses] to see HH: 6; to see HT: 4; to see the first head: 2; to see TTT: 14; HHH: 14; HTH: 10.

[A coin tossed 10 times shows 10 heads; the bag had 1 double-headed coin among 1000 fair coins] Bayes: P(double-headed) = 1024 / (1024 + 999) = 0.506. (Odds 1:999 times likelihood ratio 1024.)

[Bat and ball cost 1.10; bat costs 1.00 more than the ball] Ball = 0.05, bat = 1.05.

[Lily pad doubles daily, covers the lake on day 48] Half covered on day 47.

[5 machines make 5 widgets in 5 minutes] 100 machines make 100 widgets in 5 minutes.

[17 camels, shares 1/2, 1/3, 1/9] Borrow one camel: 9 + 6 + 2 = 17, return the borrowed camel (the fractions sum to 17/18).

[Ice cube melting in a full glass of water] The water level does not change (floating ice displaces its own weight of water). A floating boat with a rope ladder rises with the tide, so the number of rungs above water stays the same.

[Snail climbs 3 m by day, slips 2 m at night, 10 m well] Day 8. After 7 nights it is at 7 m; on day 8 it climbs to 10 and is out before slipping. General: ceil((depth - climb)/(climb - slip)) + 1 days.

[Hourglasses 4 and 7 min, measure 9 min] Start both. At 4 flip the 4. At 7 flip the 7. At 8 the 4-min glass ends; the 7-min glass has run 1 min since its flip, so flip it again -> it runs 1 min -> 9. (For 7 and 11 to measure 15: start both; at 7 flip the 7; at 11 flip the 7 again (it has 4 min of sand on the bottom) -> ends at 15.)

[Pay a worker 1 gold segment per day for 7 days with a 7-segment bar and only 2 cuts] Cut into 1, 2, 4 and exchange: day1 give 1; day2 give 2 take 1; day3 give 1; day4 give 4 take 1 and 2; and so on.

[100 passengers, first one sits at random, others take their seat if free otherwise random; P(last passenger gets own seat)] Exactly 1/2.

[Probability of at least one six in 4 dice rolls] 1 - (5/6)^4 = 51.8%. At least one double six in 24 rolls of two dice: 1 - (35/36)^24 = 49.1% (de Mere).

[How many times can you subtract 10 from 100?] Once; after that you are subtracting from 90.

[Digits used to number pages 1..N] 1-9: 9 digits; 10-99: 180; 100-999: 2700 (total 2889 for 999 pages). A book using 2893 digits has 1000 pages. House numbers 1-100 need 192 digits.

[Rope tightly around the Earth, add 1 metre, how high does it lift uniformly?] 1/(2 pi) m = about 16 cm, independent of the planet's size.

[Nine dots in a 3x3 grid, connect with 4 straight lines without lifting the pen] Extend lines beyond the square ("outside the box").

[Burning island, fire approaching from the west, wind from the west] Light a backfire downwind so the ground ahead is already burnt, then stand there.

[Divide a cake into 8 equal pieces with 3 cuts] Two perpendicular vertical cuts, then one horizontal cut through the middle.

[Sum/age puzzles ("I am twice as old as you were when I was as old as you are")] Set variables for current ages and the time gap, write each clause as an equation, solve, then verify both clauses with the numbers.

[Weighing to find one lighter among 9 / 27 / 81] 2 / 3 / 4 weighings (ceil of log base 3).

[Truth-teller / liar, one question to learn if a statement S is true] Ask "If I asked you whether S, would you say yes?" Both types answer truthfully in effect.

[Red and blue marbles, two jars, maximise probability of drawing red blindfolded (50 red, 50 blue)] Put 1 red marble alone in jar A and the other 99 in jar B: P = 1/2 * 1 + 1/2 * 49/99 = 74.7%.

[Two envelopes, one has twice the other; switch?] No expected gain; the "1.25x" argument double counts. Say so plainly.

[Poisoned chocolate / chomp, Nim] Nim: XOR the pile sizes; the player to move wins iff the XOR is non-zero (take to make it zero). 21-stick game taking 1-3: leave multiples of 4.

[Unfair coin, make a fair decision] Toss twice: HT = A, TH = B, otherwise repeat (von Neumann).

[Spider and fly on opposite walls of a room] Unfold the room into a net and draw the straight line; the shortest path often goes over a wall and the ceiling, not straight across.
`;
