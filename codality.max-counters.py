
def solution(N, A):
    # write your code in Python 3.6
    result = [0] * N
    base = 0
    maxValue = 0
    for i in A:
        if i > N:
            base = maxValue
        else:
            if result[i-1] < base:
                result[i-1] = base + 1
            else:
                result[i-1] = result[i-1] + 1
            maxValue = max(maxValue, result[i-1])
    for i in range(len(result)):
        if result[i] < base:
            result[i] = base
    return result


print(solution(5, [3, 4, 4, 6, 1, 4, 4]))
