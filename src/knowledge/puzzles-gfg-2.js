module.exports = `
=== GEEKSFORGEEKS TOP 100 INTERVIEW PUZZLES, PART 2 (51-100), VERIFIED ANSWERS ===
(Note: the GfG list page actually contains 92 distinct positions; entries 51-92 are below. Numbers 76, 80, 83, 84, 86, 87 are repeats that the source page itself lists twice.)

[51. Maximum run in cricket] ODI, 50 overs = 300 legal balls, no extras/overthrows, ideal play. Max runs a single batsman can score?
Answer: 1653. Overs 1-49: five sixes then 3 runs off the last ball to keep strike = 33 per over, 49 x 33 = 1617.
Over 50: six sixes = 36. Total 1617 + 36 = 1653.

[52. Completion of Task] A man doubles the amount of work he does each day and finishes the whole task in 18 days. On which day is 25% of the task done?
Answer: Day 16 (end of day 16). Each day's work equals all previous days combined, so day 18 alone = 50%, day 17 = 25%.
Hence end of day 17 = 50% done, end of day 16 = 25% done. (Exact: (2^16-1)/(2^18-1) is 24.9997%, so 16 is the accepted answer.)

[53. Find missing Row in Excel] A sheet holds the integers 1 to 50 in jumbled order with exactly one missing. Give the logic to find it.
Answer: Missing = 1275 - (sum of the numbers present). Sum 1..50 = 50*51/2 = 1275, one pass, O(1) extra space.
Alternative: XOR all numbers 1..50 with all values present; the result is the missing number (no overflow risk).

[54. Four People on a Rickety Bridge] 4 people, one torch, bridge holds 2 at a time, pair moves at the slower speed. Times 1, 2, 7, 10 minutes. Minimum total time?
Answer: 17 minutes. 1+2 cross (2), 2 returns (2), 7+10 cross (10), 1 returns (1), 1+2 cross (2) = 17.
Key idea: send the two slowest together so 10 is paid once and 7 is never paid; using 1 as a shuttle gives 21 (worse).

[55. Man fell in well] A man in a 50 m deep well climbs 4 m up and slips 3 m down each day. How many days to get out?
Answer: 47 days. Net gain is 1 m/day, so after day 46 he is at 46 m.
On day 47 he climbs 4 m to reach 50 m and is out before slipping.

[56. 50 red marbles and 50 blue marbles] Two boxes, 50 red + 50 blue marbles, distribute any way; a box is chosen at random then a marble at random. Maximise P(red).
Answer: Put 1 red marble alone in box 1, the other 49 red + 50 blue in box 2. P(red) = 1/2*1 + 1/2*49/99 = 74/99 = 0.7475.
Baseline (all red in one box) is only 0.5; any other split gives less than 74/99.

[57. Form Three Equilateral Triangles] Regular hexagon of matchsticks with its 3 long diagonals (12 sticks: 6 sides + 6 spokes, forming 6 small triangles). Move exactly 4 sticks to get exactly 3 equilateral triangles.
Answer: Move 4 sticks (GfG numbering: sticks 2, 4, 5, 6) so that the 12 sticks form two unit triangles plus one triangle of side 2 (6 sticks).
Keep two adjacent unit triangles that share a vertex; use the removed sticks to extend two spokes and build a double-size base below them. Count: 3 + 3 + 6 = 12 sticks, exactly 3 triangles.

[58. 10 identical bottles of pills] 10 bottles of 100 pills; 9 bottles have 1 g pills, one bottle has 1.1 g pills. Find the heavy bottle with ONE weighing on a digital scale.
Answer: Take k pills from bottle k (1 from bottle 1, 2 from bottle 2, ... 10 from bottle 10), 55 pills total, weigh once.
Expected 55 g; the excess in tenths of a gram is the heavy bottle number (e.g. 55.6 g means bottle 6).

[59. Maximum pieces from a Circle using 6 straight lines] What is the maximum number of pieces a circle can be cut into with 6 straight lines?
Answer: 22. Lazy caterer formula: pieces = 1 + n(n+1)/2; each new line crosses all previous lines, adding (n) pieces.
Sequence: 1 line 2, 2 lines 4, 3 lines 7, 4 lines 11, 5 lines 16, 6 lines 22.

[60. Chain Link] 5 chain segments of 3 links each. Opening a link costs 1 USD, welding it closed costs 3 USD. Join all into one open chain for under 15 USD; minimum cost?
Answer: 12 USD. Open all 3 links of one segment (3 USD), use those 3 open links to join the remaining 4 segments (3 welds = 9 USD).
Joining 5 segments directly needs 4 open+weld = 16 USD; sacrificing one segment leaves only 4 pieces, needing 3 joins.

[61. Shopkeeper, lady and the fake Rs 200 purchase] Lady buys goods worth Rs 200 with a fake Rs 1000 note; shopkeeper gets change from a neighbour, gives her Rs 800 change; neighbour later discovers the note is fake and is repaid Rs 1000. Shopkeeper's loss (goods sold at cost)?
Answer: Rs 1000 (Rs 800 cash + Rs 200 worth of goods). The neighbour is fully repaid so he loses nothing.
The lady walked away with exactly Rs 1000 of value; that is the whole loss, all borne by the shopkeeper. Do not double count the neighbour's refund.

[62. The Two-Egg Problem] 2 eggs, k floors; find the minimum number of drops needed in the worst case to find the highest safe floor. k = 100 (and k = 10).
Answer: 14 drops for 100 floors (4 drops for 10 floors). With x drops you can cover x + (x-1) + ... + 1 = x(x+1)/2 floors.
Smallest x with x(x+1)/2 >= 100 is 14 (14*15/2 = 105; 13 gives 91). Drop first from floor 14, then 27, 39, 50, 60, 69, 77, 84, 90, 95, 99, 100.
Formula: x = ceil((-1 + sqrt(1 + 8k)) / 2).

[63. Snail and Wall] A snail must climb a 30 ft wall within 30 hours; each hour it climbs 3 ft then slides 2 ft. How many hours to the top?
Answer: 28 hours. Net 1 ft per hour, so after 27 hours it is at 27 ft.
In hour 28 it climbs 3 ft and reaches 30 ft (the top) before sliding. Within the 30 hour limit.

[64. 1000 light bulbs and 1000 people] 1000 bulbs off; person k toggles every k-th bulb. Status of bulbs 25, 93, 576, 132, 605, 26, 45, 37, 36? General rule? How many on at the end?
Answer: 31 bulbs are ON: exactly the perfect squares (1, 4, 9, ..., 961). ON: 25, 576, 36. OFF: 93, 132, 605, 26, 45, 37.
Bulb n is toggled once per divisor of n; divisors pair up (d, n/d) so the count is odd only when n is a perfect square. 31^2 = 961 <= 1000 < 32^2.

[65. Four Alternating Knights] 3x3 board, two white knights in the bottom corners, two black knights in the top corners. Shortest sequence to reach the target position where colours alternate around the corners, or prove impossible.
Answer: Impossible, no sequence exists. The centre square is unreachable by a knight; the 8 outer squares form a single cycle (corner, edge, corner, edge, ...) under knight moves.
Knights move around this cycle and can never pass each other, so their cyclic order is invariant. Start order is B, B, W, W; the alternating target B, W, B, W is a different cyclic order.

[66. The Nine Dots] Join all 9 dots of a 3x3 grid with the minimum number of straight lines without lifting the pen.
Answer: 4 lines (you must draw outside the square). Numbering dots 1-9 row-wise, one path is 9-5-1, then 1-2-3 extended past 3, then diagonally down through 6 and 8 extended past 8, then up through 7-4 (TCS answer string: 951236874).
3 lines are impossible with point dots because no three parallel-ish lines can cover 9 points of a grid without leaving the square far outside.

[67. 100 Cows And Milk] Cow i gives i litres, i = 1..100. Divide the 100 cows among 10 sons so each gets the same milk.
Answer: Each son gets 505 litres (total 5050 / 10). Pair cows (i, 101 - i), each pair gives 101; give each son 5 such pairs.
Son 1: 1-5 and 96-100; son 2: 6-10 and 91-95; ... son 10: 46-55. Each son gets 10 cows.

[68. One Mile on the Globe] How many points on Earth let you go 1 mile south, 1 mile east, 1 mile north and end at the start?
Answer: Infinitely many. The North Pole works. Also every point 1 mile north of a latitude circle near the South Pole whose circumference is 1/n miles (n = 1, 2, 3, ...).
On such a circle, going 1 mile east makes exactly n laps and returns you to the same spot, then 1 mile north retraces the first leg. Those circles sit about 1/(2*pi*n) miles from the South Pole; each gives a whole circle of start points. The South Pole itself does not work (cannot go south).

[69. Three Matchsticks to Three Squares] 12 matchsticks form a 2x2 grid of unit squares. Move exactly 3 matchsticks to get exactly 3 squares.
Answer: Move 3 sticks (GfG numbering: 1, 3 and 12) so the 12 sticks form three separate unit squares in an L/T arrangement (one square on top of a row of two with a gap), with no larger square left.
Key: 3 squares x 4 sides = 12 sticks only if no side is shared, so the three squares must not share edges; move sticks outward instead of staying inside the original big square.

[70. The Counters and Board] Place 2n counters (n > 1) on an n x n board so that no row, column or diagonal has more than two counters.
Answer: Always possible; every row and column then holds exactly two. Even n = 2k: in column c (1..k) put counters in rows 2c-1 and 2c, then repeat the same pattern in columns k+1..2k.
Odd n = 2k+1: left columns 1..k take rows (2c-1, 2c); middle column k+1 takes rows 1 and n; right columns k+2..n take rows (2, 3), (4, 5), ..., (n-1, n) symmetrically. Any diagonal then meets at most 2 counters.

[71. Six Matches, Right Foot Forward] Rearrange six matchsticks to make nothing.
Answer: Spell the word NIL (N = 3 sticks, I = 1, L = 2), which means nothing.
Alternative: arrange them as a hexagon-shaped 0 (zero).

[72. How much he had initially?] Rama enters 4 temples; at each his money doubles on entering and he donates Rs 100 on leaving. After the 4th temple he has nothing. Initial amount?
Answer: Rs 93.75. Work backwards: before each donation he had 100, so before entering temple 4 he had 50, temple 3: 75, temple 2: 87.5, temple 1: 93.75.
Forward: 16x - 1500 = 0 (donations 100*(8+4+2+1)), x = 1500/16 = 93.75.

[73. 3 cuts to cut round cake into 8 equal pieces] Divide a round cake into 8 equal pieces with only 3 straight cuts.
Answer: Yes. Two vertical cuts along perpendicular diameters give 4 equal quarters; a third horizontal cut through the middle of the cake's height halves each quarter, giving 8.
Alternative: cut in half, stack the halves, cut again (4), stack, cut again (8).

[74. Two Creepers Climbing a Tree] Rose and jasmine creepers start at the same point on a cylindrical trunk and twist in opposite directions to the same first branch; rose makes 3 full twists, jasmine 5. How many times do they cross (excluding bottom and top)?
Answer: 7 times. Project onto the circle: they move in opposite directions at angular speeds in ratio 5:3, so they meet whenever the combined angle is a multiple of 360 degrees.
Combined revolutions = 5 + 3 = 8, so meetings happen at 1/8, 2/8, ..., 8/8 of the climb; the 8th is the top, leaving 7 crossings strictly in between.

[75. Number of Legs in Palace] You stand in a palace with 5 guards; each guard watches 5 rooms; each room has 5 adult tigers; each tiger has 5 cubs. How many legs in the palace?
Answer: 3012 (counting your own 2 legs; 3010 if you exclude yourself). Rooms 5x5 = 25, adult tigers 125, cubs 625, tigers total 750, tiger legs 3000.
Guards 5 x 2 = 10 legs, plus you = 12 human legs. 3000 + 12 = 3012.

[76. 10 Coins (repeat of #8)] Blindfolded, 10 coins on a table, exactly 5 heads up; you cannot feel which side is up. Split into two groups with equal numbers of heads.
Answer: Make two groups of 5 coins and flip every coin in one group. If that group had x heads (and 5 - x tails), after flipping it has 5 - x heads, same as the other group.
General rule: pick a group whose size equals the known number of heads and flip all of it.

[77. Days of the month using 2 dice] Write a digit 0-9 on each face of two 6-sided dice so that every day 01 to 31 can be shown as a two-digit number.
Answer: Die A: 0, 1, 2, 3, 4, 5. Die B: 0, 1, 2, 6, 7, 8; the 6 turned upside down serves as 9.
Both dice need 0, 1, 2 (for 01-09, 11, 22). That leaves 6 faces for 3, 4, 5, 6, 7, 8, 9 (7 digits), so the 6/9 trick is required.

[78. Matchstick Puzzle] Make 4 equilateral triangles with 6 identical matchsticks.
Answer: Build a regular tetrahedron: 3 sticks as a triangular base, the other 3 rising from its corners to a common apex. 6 edges, 4 equilateral triangular faces.
It cannot be done flat with identical sticks (a flat solution would need the inner sticks to be half length). NOTE: the source page also lists flat "Method II/III" which do not work with 6 identical sticks; give the tetrahedron.

[79. Last Palindrome] 10/02/2001 in MMDDYYYY is a palindrome (10022001). What was the last palindrome date before it?
Answer: 08/31/1380 (August 31, 1380 -> 08311380). The year is forced by the date: year = reverse of MMDD, so years 14xx-19xx need day 41-91 (invalid), 2000 needs month 00.
So the year is 13xx with day 31; the latest valid month with 31 days is 08 (09/31 does not exist, 12 would give 1321 which is earlier). Hence 08/31/1380.

[80. 10 identical bottles of pills (repeat of #58)] Same puzzle as #58.
Answer: Take k pills from bottle k, weigh once; excess over 55 g in tenths of a gram = heavy bottle number.

[81. 10 Balls in 5 Lines] Place 10 balls in 5 straight lines so each line contains exactly 4 balls.
Answer: A pentagram (five-pointed star). Put balls at the 5 outer points and at the 5 inner pentagon vertices; each of the 5 lines of the star passes through 4 balls.
Check: 5 lines x 4 balls = 20 incidences, 10 balls each on 2 lines.

[82. Round table coin game] Two players alternately place identical coins flat on a round table without overlap; the player who places the last coin wins. A moves first. Winning strategy for A?
Answer: A places the first coin exactly at the centre of the table, then mirrors every B move by placing a coin at the diametrically opposite point.
By symmetry, whenever B has a legal spot its mirror image is also free, so A always has a move and B runs out first.

[83. The Circle of Lights (repeat of #30)] N > 2 lights in a circle, all off; each switch toggles its own light and its two neighbours. Minimum flips to turn all on?
Answer: If 3 divides N: N/3 flips (switches 1, 4, 7, ..., N-2). Otherwise: N flips (flip every switch once; each light toggled 3 times).
Only parity of flips matters. Over mod 2 the condition forces the flip pattern to repeat every 3 switches; when N is not a multiple of 3 this forces all switches equal, i.e. all flipped.

[84. 3 cuts to cut the round cake into 8 equal pieces (repeat of #73)] Same as #73.
Answer: Two perpendicular vertical diameter cuts, then one horizontal cut through the middle of the height (or stack halves and recut).

[85. Chessboard and dominos] 8x8 board with two diagonally opposite corners removed (62 squares); 31 dominoes each cover 2 adjacent squares. Can you tile it?
Answer: No. Opposite corners have the same colour, so the board has 32 of one colour and 30 of the other.
Every domino covers one black and one white square, so 31 dominoes need 31 of each; impossible.

[86. Maximum pieces from a Circle using 6 straight lines (repeat of #59)] Same as #59.
Answer: 22 pieces, from 1 + n(n+1)/2 with n = 6.

[87. Splitting a Cake with a Missing Piece (repeat of #48)] A rectangular cake has an arbitrary rectangular piece (any size, position, rotation) removed. Divide the rest into two equal portions with one straight vertical cut.
Answer: Cut along the straight line through the centre of the original rectangle and the centre of the missing rectangle.
Any line through a rectangle's centre halves its area, so this line halves both the whole cake and the hole, hence halves the remainder.

[88. 3 Ants and Triangle] Three ants at the corners of a triangle each pick one of the two edges at random and start walking. Probability that at least two collide?
Answer: 3/4. 2^3 = 8 equally likely direction choices; no collision only if all go clockwise or all go counter-clockwise (2 cases).
P(no collision) = 2/8 = 1/4, so P(collision) = 6/8 = 3/4. (For an n-gon: 1 - 2/2^n.)

[89. Measure 45 minutes using two identical wires] Each wire burns in exactly 60 minutes but non-uniformly. Measure 45 minutes with matches.
Answer: At t = 0 light wire 1 at both ends and wire 2 at one end. Wire 1 finishes at 30 min; at that moment light the other end of wire 2.
Wire 2 had 30 min of burn left, burning from both ends halves that to 15 min; it finishes at 45 min.

[90. Elevator] A man on the 10th floor takes the lift down every evening, but in the morning rides only to the 7th floor and walks up, except when it rains or someone else is in the lift. Why?
Answer: He is too short to reach the button for floor 10; 7 is the highest he can press. When it rains he has an umbrella to press 10, and when others are present he asks them.

[91. Find the last ball to remain] Bag with 20 red and 16 blue balls. Repeatedly remove 2 balls: same colour -> put in 1 blue; different colours -> put in 1 red. Colour of the last ball?
Answer: Blue. The number of red balls changes by -2 (red+red) or 0 (blue+blue, red+blue), so its parity never changes.
Red starts even (20), so it can never be 1; the last ball is blue. Rule: last ball is red iff the initial red count is odd.

[92. 100 people in a circle with a gun/sword] 100 people numbered 1-100 in a circle; 1 kills 2 and passes the weapon to 3, who kills 4, and so on around the circle until one survives. Who survives?
Answer: 73. Josephus problem with every 2nd person eliminated: if n = 2^m + L, the survivor is 2L + 1.
100 = 64 + 36, so survivor = 2*36 + 1 = 73. (Round by round: evens die; then 1,5,9,...; 1,9,17,...; 9,25,41,57,73,89; 9,41,73; 9,73; 73.)
`;
