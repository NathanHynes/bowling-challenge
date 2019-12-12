[![codecov](https://codecov.io/gh/NathanHynes/bowling-challenge/branch/master/graph/badge.svg)](https://codecov.io/gh/NathanHynes/bowling-challenge)
[![Build Status](https://travis-ci.org/NathanHynes/bowling-challenge.svg?branch=master)](https://travis-ci.org/NathanHynes/bowling-challenge)

Bowling Challenge
=================

## The Task
* Create a bowling scorecard for one player.
* The game consists of 10 frames where the player tries to knock down 10 pins.
* Each frame consists of one or two throws, depending on strikes and spares.
* The score of each frame is the number of pins knocked down plus strike and spare bonuses.
* In the last frame you get an extra throw if you score a strike or spare.
* Pins are reset after each frame.

## How to use.
1. `git clone`
2. `npm install`
3. `npm test`
4. open index.html file in browser to use program.

## User Stories 

```
As a player
So I can start my Bowling game
I want to start with a score of 0.

As a player
So I know how well I am doing
I want my score to be displayed.

As a player
So I know how long I have left
I want the frames to be displayed.

As a player
So my score is correct
I want a spare to count for 10 points plus the score of the next throw.

As a player
So my score is correct
I want a strike to count for 10 points plus the score of the next two throws.

As a player
So I am playing correctly
I want a strike to end the frame.

As a player
So I am playing correctly
I want a bonus throw if I throw a strike/spare in the last frame.
```

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

## Approach
My approach when starting this challenge was to create user stories to help break down the task and provide small logical steps I could work on to solve the bigger problem. Being my first real crack at a simple Javascript/JQuery app it seemed quite daunting at first, however by breaking down the challenge into smaller problems a clear structure for the program emerged. Once I got the app working correctly I went about refactoring the code to clean it up and break down large methods into smaller methods to adhere to Single Responsibility Principles. I then went about setting up a Jquery file so a user had a clean interface to use the program.

## Review. 

I thoroughly enjoyed this challenge and it was a great introduction to JS. I particuarly enjoyed learning how to use Jasmine to test Javascript code. If I was to do this task again I would split out some of the methods and code into other classes as this would rather refactor and help clean up the code plus making it more maintainable and extensible. I would also deploy this to a Node server to make it more accessible for users.
