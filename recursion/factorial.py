# problem calculate factorial of n https://en.wikipedia.org/wiki/Factorial
# solution: using recursion and only addition arithmatic operation to calculate multiplicatin
from mulitplication import mulitply


def factorial(n):
    if n == 0:
        return 1
    else:
        return mulitply(n, factorial(n-1))


print(factorial(4))
