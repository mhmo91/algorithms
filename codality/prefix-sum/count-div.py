# Compute number of integers divisible by k in range [a..b].


def solution(A, B, K):
    a, b = (None, None)
    # write your code in Python 3.6
    for num in range(A, B + 1, 1):
        if num % K == 0:
            a = num
            break
    for num in range(B, A-1, -1):
        if num % K == 0:
            b = num
            break
    if a == None:
        return 0
    else:
        return int(((b-a)/K)+1)


print(solution(0, 1, 11))
