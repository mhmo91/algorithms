# find missing number in arithmatic series starts with 1


def solution(A):
    n = len(A)+1
    return int((n*(1 + n))/2 - sum(A))


print(solution([2, 3, 1, 5]))
