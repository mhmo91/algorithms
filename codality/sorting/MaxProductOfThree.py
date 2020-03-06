import functools


def solution(A):
    # write your code in Python 3.6
    if(len(A) <= 3):
        return functools.reduce(lambda a, b: a*b, A)
    else:
        A.sort(reverse=True)
        biggestNum = A[0]
        if biggestNum == 0:
            return 0
        elif biggestNum > 0:
            a = A[1]*A[2]
            b = A[len(A)-1] * A[len(A)-2]
            return biggestNum * max(a, b)
        else:
            return (A[0] * A[1] * A[2])


print(solution([-3, 1, 2, -2, 5, 6]))
