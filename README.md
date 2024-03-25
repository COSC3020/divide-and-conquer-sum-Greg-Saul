[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Analysis

$T(n) = 3T(n/3)$ because there are 3 recursive calls and the array is divided into 3 </br>
in an attempt to simplify the recurrence relation, I will substitute $3T(n/3)$ into $T(n)$</br>
in the first recursion this gives us $T(n) =3(3T(n/3/3))$  -->  T(n) =$9T(n/9)$</br>
if we substitute it one more time for another recursive call, we get $T(n) = 3(9T(n/9/3)$  -->  T(n) = $27T(n/27)$</br>
after this recursive call we begin to notice a pattern that shows: $T(n) = 3^i T(n/3^i)$</br>
we can let i = log<sub>3</sub>n because they both represent the number of recursions that are involved in the function </br>
after this substitution, our function looks like T(n) = 3<sup>log<sub>3</sub>n </sup>T(n/3<sup>log<sub>3</sub>n</sup>) </br>
due to logarithmec properties 3<sup>log<sub>3</sub>n</sup> reduces down to just $n$ </br>
this gives us $T(n) = nT(1)$ which can also be read as $n$ </br>
this gives us a $\Theta$ complexity of $\Theta(n)$


### Resourses Used

used this to learn about switch statements in js. in hindsight it probably would have just been easier to do regualr if/else statements even with the other constant considerations
https://www.w3schools.com/js/js_switch.asp
