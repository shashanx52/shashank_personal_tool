module.exports = `
=== GEEKSFORGEEKS TOP 100 INTERVIEW PUZZLES, PART 1 (1-50), VERIFIED ANSWERS ===

[1. Pay an employee using a gold rod of 7 units] Worker works 7 days; employer has a 7-unit gold rod and may make at most 2 cuts. Pay so the worker's gold grows by exactly 1 unit per day (pieces can be taken back as change).
Answer: Cut into pieces of 1, 2 and 4 units. Every total 1..7 is a binary sum of 1,2,4. Day1 give 1; day2 give 2 take 1; day3 give 1; day4 give 4 take 1 and 2; day5 give 1; day6 give 2 take 1; day7 give 1.

[2. Find the fastest 3 horses] 25 horses, only 5 can race at a time, no stopwatch (only finishing order). Minimum races to find the top 3?
Answer: 7 races. 5 races of 5 groups; race 6 = the 5 group winners, fixes overall #1 and the group ranking. Only a1's group (a2,a3), b's group (b1,b2) and c1 can still be 2nd or 3rd. Race 7 among a2,a3,b1,b2,c1: top two are overall 2nd and 3rd.

[3. Injection for Anesthesia] 240 injections, exactly one contains anesthetic; 5 rats; 48 hours. Anesthetic knocks a rat out within 24 h; an unconscious rat cannot be reused. Identify the injection.
Answer: Yes, all 240 can be distinguished (3^5 = 243 codes). Label each injection with a 5-digit base-3 code; rat i handles digit i: digit 1 = dose at hour 0, digit 2 = dose at hour 24 (only if still awake), digit 0 = never. Which rats fall asleep on day 1, day 2, or never gives the 5 digits of the anesthetic injection.

[4. 3 Bulbs and 3 Switches] 3 switches outside a closed room, 3 bulbs inside, unknown mapping. You may set switches freely, then enter the room exactly once and cannot touch switches afterwards. Match switches to bulbs.
Answer: Use heat. Turn switch 1 on for several minutes, turn it off, turn switch 2 on, leave 3 off, enter. Lit bulb = switch 2; off but warm = switch 1; off and cold = switch 3.

[5. Camel and Banana] 3000 bananas must go to a market 1000 km away. The camel carries at most 1000 bananas and eats 1 banana per km traveled (loaded or not); bananas may be stockpiled at intermediate points. Max bananas delivered?
Answer: 533 (exactly 533 and 1/3). With 3 loads, each km costs 5 bananas (3 forward, 2 back): 3000-5x=2000 at x=200 km. With 2 loads each km costs 3: 2000-3y=1000 at y=333.33 km (total 533.33 km). Last 466.67 km with one load costs 466.67, leaving 533.33.

[6. Jar with contaminated pills] 5 jars of pills; normal pill 10 g, in one jar every pill weighs 9 g. A digital scale may be used only once. Find the bad jar.
Answer: Take 1 pill from jar 1, 2 from jar 2, ... 5 from jar 5 (15 pills), weigh once. Expected 150 g; the shortfall in grams equals the contaminated jar number (149 -> jar 1, ..., 145 -> jar 5).

[7. 100 Prisoners with Red/Black Hats] 100 prisoners in a line, each wears a red or black hat, each sees only hats in front. Starting from the back, each says one word, red or black; correct = lives. They may plan beforehand. Maximum guaranteed survivors?
Answer: 99 guaranteed, the 100th (first speaker) survives with 50 percent chance. Agree: first speaker says "red" if he sees an even number of red hats, else "black". Each later prisoner knows the parity announced, the colours already spoken behind him, and the hats ahead, so he deduces his own hat exactly.

[8. 10 Coins] 10 coins on a table, exactly 5 heads up and 5 tails up. You are blindfolded and cannot feel which side is up. Split them into two groups with an equal number of heads; you may flip coins.
Answer: Make any two piles of 5 and flip every coin in one pile. If pile A had x heads, pile B has 5-x heads; after flipping, pile A has 5-x heads too. Works for any split as long as the flipped pile size equals the total number of heads.

[9. Strategy for a 2-Player Coin Game] An even number of coins of arbitrary values lie in a row; players alternately take one coin from either end; higher total wins. Player A moves first. Strategy so A never loses?
Answer: Sum coins at odd positions and at even positions; A takes all coins of the richer parity. Row length is even on A's turns so the two ends have opposite parity and A can always pick the chosen parity; B is then forced to expose only the other parity. A gets at least half the total (greedy largest-end play can lose).

[10. 5 Pirates and 100 Gold Coins] Pirates A(senior),B,C,D,E split 100 coins. Senior proposes; all vote; passes with at least half the votes (proposer breaks ties); if it fails the proposer dies and the next proposes. Priorities: survive, then max coins, then kill others. What does A propose?
Answer: A keeps 98: A=98, B=0, C=1, D=0, E=1. Backward: with D,E alone D takes 100 (D's own vote is half). With C,D,E: C=99,D=0,E=1. With B,C,D,E: B=99,C=0,D=1,E=0. A needs 3 of 5 votes, so buys the two who would otherwise get 0 (C and E) with 1 coin each.

[11. Minimum cuts] Worker hired for 5 days, paid 1 unit of gold at the end of each day from a single 5-unit bar; change may be taken back. Minimum number of cuts?
Answer: 2 cuts (pieces 1, 2, 2; pieces 1,1,3 also work). One cut gives two pieces, and day 1 forces a 1-unit piece, leaving 1 and 4 which cannot make 2 on day 2. With 1,2,2: day1 1; day2 2 take 1; day3 1; day4 other 2 take 1; day5 1.

[12. Prisoner and Policeman] A prisoner must make one statement. If the policeman judges it true the prisoner is hanged; if false, he is shot. What should he say to survive?
Answer: "I will be shot." If judged true he must be hanged, which makes the statement false; if judged false he must be shot, which makes it true. Neither punishment is consistent, so he cannot be executed under the rules.

[13. Blind Games] A dark room has 50 coins on a table: 10 tails up, 40 heads up. Split them into two groups (any sizes) having the same number of tails; coins may be flipped but not identified.
Answer: Take any 10 coins as group 1 and flip all of them; the other 40 are group 2. If group 1 had N tails, group 2 has 10-N tails; after flipping, group 1 has 10-N tails as well.

[14. Chameleons go on a date] Island with 13 purple, 15 yellow and 17 maroon chameleons (45). When two of different colours meet, both turn into the third colour. Can all become one colour?
Answer: No. Each meeting changes the difference between any two colour counts by 0 or 3, so differences mod 3 are invariant: 15-13=2, 17-15=2, 17-13=4=1 mod 3. A single-colour state needs some difference equal to 0 or 45, both 0 mod 3, so it is unreachable.

[15. Heaven and Hell] Two doors, one to Heaven and one to Hell, each with a gatekeeper; one always tells the truth, the other always lies, unknown which. One question to one guard. Find Heaven.
Answer: Ask either guard "Which door would the other guard say leads to Heaven?" and take the opposite door. Truth-teller reports the liar's false pointer (Hell); the liar misreports the truth-teller's true pointer (also Hell). Either way the indicated door is Hell.

[16. Mislabeled Jars] Three jars labelled Candies, Sweets, and Mixed; every label is wrong. You may draw one item at a time from a jar. Minimum draws to relabel all three correctly?
Answer: 1 draw, from the jar labelled Mixed. It is pure, so the item tells its true content (say candy). The jar labelled Sweets cannot be sweets and cannot be candies (taken), so it is the mixed jar; the remaining jar is sweets.

[17. 8 balls problem] 8 identical-looking balls, one is lighter than the other 7. Using a balance scale exactly twice, find the light ball.
Answer: 2 weighings suffice. Weigh 3 vs 3: if balanced the odd ball is among the 2 left out, weigh them; if one side is lighter, weigh two of its three balls against each other: the lighter one, or if equal, the third. Works because 2 weighings give 3^2 = 9 >= 8 outcomes.

[18. Cheryl's Birthday] Cheryl gives Albert (told the month) and Bernard (told the day) ten dates: May 15,16,19; June 17,18; July 14,16; Aug 14,15,17. Albert: "I don't know, but I know Bernard doesn't either." Bernard: "I didn't know, now I do." Albert: "Now I know too."
Answer: July 16. Albert's certainty that Bernard cannot know rules out May and June (unique days 19 and 18). Bernard now knows, so the day is not 14 (in both July and Aug): left July 16, Aug 15, Aug 17. Albert then knows, so the month must be July.

[19. The Lion and the Unicorn] Lion lies Mon, Tue, Wed and is truthful other days; Unicorn lies Thu, Fri, Sat and is truthful other days. Both say "Yesterday I was lying." What day is it?
Answer: Thursday. Lion's statement is consistent only on Thursday (true: today honest, yesterday lying) or Monday (false). Unicorn's only on Sunday (true) or Thursday (false). Common day: Thursday.

[20. Farmer, Goat, Wolf, and Cabbage] A farmer must ferry a wolf, a goat and a cabbage across a river; the boat holds him plus one item. Wolf eats goat and goat eats cabbage if left together without the farmer.
Answer: 7 crossings. Take goat over; return alone; take wolf over; bring goat back; take cabbage over; return alone; take goat over. (Taking the cabbage second and bringing the goat back also works.) The goat must never be left with either other item.

[21. Water Jug Problem] Unmarked 4-gallon and 9-gallon jugs, unlimited water; you may fill, empty, or pour between them. Can every whole amount from 1 to 9 gallons be measured?
Answer: Yes, all of 1..9. 4 and 9 are coprime, so every integer up to 9 is reachable. E.g. 5: fill 9, pour into 4 (9 has 5). 1: empty 4, pour 5 into 4 (1 left in 9). 8: pour 4 into 9 twice. 3: third 4-pour fills 9 and leaves 3 in the 4-jug. 7 = 3 in big jug plus a full 4; 2 = top up 9 from the 7 state; 6 = 2 plus a full 4.

[22. Blind man and Pills] A blind man has 2 red and 2 blue pills that feel identical; each day he must take exactly one red and one blue or he dies. How does he manage?
Answer: Break every pill in half, keep one half of each pill for today and the other half for tomorrow. Each day's four halves contain exactly 2 red halves (one red pill) and 2 blue halves (one blue pill), whatever the picking order.

[23. The Burning Candles] Two candles each burn for exactly 60 minutes when lit at one end, but burn unevenly along their length. Using only matches, measure 45 minutes (and 15 minutes).
Answer: Light candle 1 at both ends and candle 2 at one end. Candle 1 dies at 30 min; at that moment light the other end of candle 2, whose remaining 30 minutes now burn in 15. Candle 2 dies at 45 min; the gap 30 to 45 is a 15-minute interval.

[24. Rat and Poisonous Milk Bottles] 4 milk bottles, one poisoned; one rat that dies exactly 10 hours after drinking the poison; a clock that measures whole hours only. Find the poisoned bottle within 24 hours.
Answer: Feed bottle 1 at hour 0, bottle 2 at hour 1, bottle 3 at hour 2. Death at hour 10, 11 or 12 points to bottle 1, 2 or 3; alive after hour 12 means bottle 4. Done by hour 13.

[25. Measuring 6L water from 4L and 9L buckets] Unmarked 4-litre jug and 9-litre bucket, unlimited water. Measure exactly 6 litres.
Answer: 6 L in the 9 L bucket after 8 steps. Fill 9; pour into 4 (9 has 5); empty 4; pour 5 into 4 (9 has 1); empty 4; pour the 1 into the 4-jug; refill 9; top up the jug, which takes 3, leaving 9-3 = 6 in the bucket.

[26. Six Houses P, Q, R, S, T, and U] Three houses per side of a road, colours Red, Blue, Green, Orange, Yellow, White, all heights differ. T (tallest) is opposite the Red house; shortest house is opposite the Green house; U (Orange) is between P and S; R (Yellow) is opposite P; Q (Green) is opposite U; P (White) is taller than R but shorter than S and Q. Colour of the tallest house? How many houses are taller than R?
Answer: Tallest house T is Blue; 4 houses (T, S, Q, P) are taller than R. Sides: P-U-S and R-Q-T with pairs P/R, U/Q, S/T, so S is Red and the leftover colour Blue goes to T. U (opposite Green Q) is shortest; order T > {S,Q} > P > R > U.

[27. Melting Candles] Two candles of equal length lit together burn uniformly; the thick one lasts 6 hours, the thin one 4 hours. After how long is the thick candle exactly twice the length of the thin one?
Answer: 3 hours. Remaining lengths 1 - t/6 and 1 - t/4; set 1 - t/6 = 2(1 - t/4) giving t/3 = 1, t = 3. Check: 1/2 remaining vs 1/4.

[28. Red Hat vs Blue Hat] Three players each get a red or blue hat by fair coin flip, see the other two hats, and simultaneously say red, blue, or pass. Team wins if at least one guesses and no guess is wrong. Best strategy and win probability?
Answer: 75 percent (6 of 8 outcomes), versus 50 percent for one designated guesser. Rule: if you see two hats of the same colour, guess the opposite colour; if you see one of each, pass. Fails only on all-red and all-blue, where all three guess wrong together.

[29. Joint family of seven persons (L, M, N, O, P, Q, and R)] Seven people L..R include two married couples. R is a housewife whose husband is a lawyer; N is M's wife; L is an engineer and R's granddaughter; O is N's father-in-law and father of P, a professor; P and M are siblings of the same gender; Q is L's brother and M's son. How is L related to O? How many males?
Answer: L is O's granddaughter; 4 males (O, M, P, Q) and 3 females (R, N, L). O is M's father, so the couples are O-R and M-N; O is the lawyer. M is male (Q's father), hence P is male; L and Q are M and N's children.

[30. The Circle of Lights] N > 2 lights in a circle, all off, one switch per light; a switch toggles its own light and both neighbours. Minimum flips to light all N?
Answer: N/3 flips if N is divisible by 3, otherwise N flips (every switch once). Each flip lights at most 3, so N/3 is a lower bound, achieved by switches 1,4,7,... when 3 divides N. When 3 does not divide N the toggle system over GF(2) is invertible (x^2+x+1 does not divide x^N-1), so flipping all N switches is the unique solution.

[31. 9 Students and Red Black Hats] 9 students get red or black hats from a bag with at least 1 red and more black than red; each sees all hats but their own, no talking. Professor returns after 20 min, nobody answers; after 10 more min, nobody; after 5 more min, everyone states their colour correctly. How many of each?
Answer: 3 red, 6 black. Red count is 1..4. 1 red: that student answers at once (sees no red). 2 red: after round 1 each red (seeing 1 red) knows. 3 red: after round 2 each red (seeing 2 red) knows, i.e. in round 3; the black students then deduce black from the three answering. 4 red would need a fourth round.

[32. Light all the bulbs] 2014 bulbs in a circle, exactly 2 adjacent bulbs on. Picking any bulb toggles both of its neighbours (not itself). Can all bulbs be turned on?
Answer: Yes. Odd- and even-indexed bulbs form two independent cycles of 1007, and a move toggles two bulbs of the same parity, so the parity of lit bulbs in each class is invariant; the start (one odd, one even lit) matches the target (1007 odd each). Construction from bulbs 1,2 on: pick 4 then 5 to light 3..6, repeat per block of 4 for the remaining 2012 bulbs. NOTE: solvable for any start with one odd and one even lit bulb (not only adjacent), impossible if both have the same parity; the source page says non-adjacent starts fail.

[33. Distribute the Water] Containers of 3 L, 5 L and 8 L (unmarked); the 8 L is full, others empty. Pouring only, end with 4 L in the 5 L and 4 L in the 8 L.
Answer: 7 pours, states (3L,5L,8L): (0,0,8) -> 8 to 5 (0,5,3) -> 5 to 3 (3,2,3) -> 3 to 8 (0,2,6) -> 5 to 3 (2,0,6) -> 8 to 5 (2,5,1) -> 5 to 3 (3,4,1) -> 3 to 8 (0,4,4).

[34. Can 2 persons be with same number of hairs on their heads?] A human head has at most 200,000 hairs; New York has 12.3 million people. Is it certain that at least two New Yorkers have exactly the same number of hairs?
Answer: Yes, certain, by the pigeonhole principle. Hair counts form 200,001 boxes (0..200,000); 12.3 million people into 200,001 boxes forces at least one box to hold 2 or more (in fact some count is shared by at least 62 people).

[35. Weight of Heavy Ball] 2187 identical-looking balls, one heavier; a two-pan balance. Minimum weighings to guarantee finding the heavy ball?
Answer: 7. Each weighing has 3 outcomes, so k weighings separate at most 3^k balls; 3^6 = 729 < 2187 = 3^7. Split into thirds each time: 2187 -> 729 -> 243 -> 81 -> 27 -> 9 -> 3 -> 1.

[36. Find ages of daughters] Alok has 3 daughters with whole-number ages. Product of ages is 72; sum equals the house number, which Shyam sees but still cannot decide; "the oldest likes strawberry ice cream" settles it.
Answer: 3, 3 and 8. Among the 12 triples with product 72 only two share a sum: (2,6,6) and (3,3,8), both 14, so the house number is 14. A unique "oldest" rules out (2,6,6).

[37. Calculate total distance travelled by bee] Two trains 100 km apart move toward each other at 50 km/h and 70 km/h. A bee starts at one train and flies back and forth between them at 80 km/h until they collide. Total distance flown?
Answer: 200/3 km, about 66.67 km. Closing speed 120 km/h, so collision after 100/120 = 5/6 h; the bee flies 80 x 5/6 = 66.67 km. No infinite series needed.

[38. 6x6 Grid: How Many Ways?] From the top-left cell of a 6x6 grid to the bottom-right cell moving only right or down, how many distinct paths?
Answer: 252. The path is 5 rights and 5 downs in some order: C(10,5) = 252. (If the grid is read as 6x6 unit squares moving along grid lines, the count is C(12,6) = 924; the source means 6x6 cells.)

[39. Monty Hall problem] Three doors, one car and two goats. You pick a door; the host, who knows the contents, opens another door showing a goat (choosing randomly if both others are goats) and offers a switch. Switch or stay?
Answer: Switch: wins with probability 2/3 versus 1/3 for staying. Your first pick is right 1/3 of the time; in the other 2/3 the host is forced to leave the car behind the remaining door, so switching wins exactly when the first pick was wrong.

[40. Torch and Bridge] A, B, C, D cross a bridge at night in 1, 2, 5 and 8 minutes; one torch, at most two on the bridge, a pair moves at the slower pace. Can all cross in 15 minutes?
Answer: Yes, exactly 15: A+B cross (2), A returns (1), C+D cross (8), B returns (2), A+B cross (2). Sending the two slowest together pays the 8 only once; only the fast ones carry the torch back.

[41. 2 Eggs and 100 Floors] 100-floor building, 2 identical eggs; eggs break from some critical floor upward and survive below it. Find the critical floor minimizing the worst-case number of drops.
Answer: 14 drops. Drop egg 1 from floors 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99, 100 (steps shrinking by 1); when it breaks, scan the gap linearly with egg 2. Need x(x+1)/2 >= 100, smallest x = 14 (13 gives only 91).

[42. Maximize the probability of White Ball] 50 white and 50 black balls, two empty jars; distribute all balls any way. A jar is chosen at random (1/2 each) and one ball drawn from it. Maximize P(white).
Answer: Put 1 white ball alone in jar 1 and the other 99 (49 white, 50 black) in jar 2. P(white) = 1/2 x 1 + 1/2 x 49/99 = 74/99, about 0.747 (versus 0.5 for an even split).

[43. Poison and Rat] 1000 wine bottles, one poisoned; a rat that drinks poison dies within 1 hour; you have 1 hour (one round of testing). Minimum rats to identify the bottle?
Answer: 10 rats. Number bottles 0..999 in 10-bit binary; rat i drinks from every bottle whose bit i is 1. The set of dead rats spells the poisoned bottle's number. 9 rats give only 2^9 = 512 < 1000 patterns, so 10 is minimal.

[44. Hourglasses] Two hourglasses of 4 minutes and 7 minutes. Measure exactly 9 minutes.
Answer: Start both at 0. At 4 flip the 4-glass. At 7 flip the 7-glass (the 4-glass has 1 min left). At 8 the 4-glass ends; the 7-glass has run 1 minute, so flip it and its 1 minute of sand runs out at 9.

[45. The ratio of Boys and Girls in a Country where people want only boys] Every family keeps having children until it gets a boy, then stops. P(boy) = P(girl) = 1/2. Expected ratio of boys to girls?
Answer: 1 : 1. Each family has exactly 1 boy; expected girls per family = sum over k of k x (1/2)^k x 1/2 = 1. Stopping rules do not change the 50/50 chance of each individual birth.

[46. Car Wheel] A car has 4 tyres plus 1 spare; each tyre lasts at most 20,000 km; tyres may be swapped at will. Maximum distance before a new tyre is needed?
Answer: 25,000 km. Total tyre life 5 x 20,000 = 100,000 tyre-km shared by 4 positions gives at most 25,000 km. Achieve it by rotating one tyre out every 5,000 km so each of the 5 tyres rests exactly 5,000 km.

[47. Maximum Chocolates] You have Rs 15; a chocolate costs Rs 1; 3 empty wrappers can be exchanged for 1 chocolate. Maximum chocolates you can eat?
Answer: 22. Buy 15 (15 wrappers) -> 5 free (5 wrappers) -> 1 free (2 + 1 = 3 wrappers) -> 1 free (1 wrapper left). 15 + 5 + 1 + 1 = 22.

[48. Splitting a Cake with a Missing Piece in two equal portion] A rectangular cake has a rectangular piece removed from it, any size, position and rotation. With one straight vertical cut, split the remainder into two equal portions (equal cream and topping, so no horizontal slicing).
Answer: Cut along the straight line through the centre of the full cake and the centre of the missing rectangle. Any line through a rectangle's centre halves it, so the cut halves both the whole cake and the hole, hence halves the remainder. If the centres coincide, any line through that point works.

[49. Girl or Boy] A man has two children. At least one is a boy born on a Tuesday (each child equally likely boy or girl, equally likely any weekday). Probability both are boys?
Answer: 13/27, about 0.481. Each child has 14 equally likely (sex, day) types, 196 ordered pairs. Pairs with at least one Tuesday-boy: 196 - 13^2 = 27. Both-boy pairs among them: 49 - 36 = 13. Without the weekday clue the answer would be 1/3.

[50. Know Average Salary without Disclosing Individual Salaries] Three employees X, Y, Z want the average of their salaries without any of them revealing their own salary to the others.
Answer: Each adds a private random number, then removes it after the circle. X tells Y (Sx + R1); Y tells Z (that + Sy + R2); Z tells X (that + Sz + R3); X subtracts R1 and passes on; Y subtracts R2; Z subtracts R3 and announces Sx+Sy+Sz; divide by 3. Each person only ever sees a sum masked by someone else's random number. (Simpler variant: X adds one secret random number, Y and Z add their salaries, X subtracts it.)
`;
