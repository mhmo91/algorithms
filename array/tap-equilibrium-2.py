def solution(A):
    right = sum(A[1:])
    left = sum(A[:1])
    difference = abs(right - left)
    for i in range(1, len(A), 1):
        right -= A[i]
        left += A[i]
        if abs(right - left) < difference:
            difference = abs(right - left)
    return difference


print(solution([3, 1, 2, 4, 3]))
