def solution(A):
<<<<<<< HEAD
    right = sum(A[1:])
    left = sum(A[:1])
    difference = abs(right - left)
    for i in range(1, len(A), 1):
        right -= A[i]
        left += A[i]
        if abs(right - left) < difference:
            difference = abs(right - left)
=======
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
>>>>>>> 37c77b6225ad1f29ab6b271b7de44c521a58c6a8
    return difference


print(solution([3, 1, 2, 4, 3]))
