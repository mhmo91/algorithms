def solution(A):
    # assume starting condition
    right = sum(A[1:])
    left = sum(A[:1])
    difference = abs(right - left)
    for i in range(2, len(A), 1):
        right = sum(A[i:])
        left = sum(A[:i])
        if abs(right - left) < difference:
            difference = abs(right - left)
        elif abs(right - left) > difference:
            return difference
    return difference


print(solution([3, 1, 2, 4, 3]))
