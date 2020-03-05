# i'm an empty file that Mo uses to play!


def solution(A):
    n = len(A)+1
    return int((n*(1 + n))/2 - sum(A))


print(solution([2, 3, 1, 5]))
