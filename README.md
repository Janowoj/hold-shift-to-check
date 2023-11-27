# hold-shift-to-check
This a small plain JavScript project which is build from the sequence of chackboxes down to the bottom with description. 
The goal is when user clickes one checbox, then presses Shift key and after this clickes another checkboX,
ALL OF THE CHECKBOXES BETWEEN THE FIRST AND THE LAST (INCLUDING THEM) should have CSS property text-decoration SET TO LINE-THROUGH.

The key part is declaring a variable isBetween to false, then after iterating the checkboxes using forEach method toggling this variable to the opposite value.
