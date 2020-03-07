# https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
def solution(A=[]):
    # write your code in Python 3.6
    intersections = 0
    for i in range(0, len(A), 1):
        if i + A[i] >= len(A):
            intersections += len(A) - (i + 1)
        else:
            for j in range(i+1, len(A), 1):
                x, y, spaceBetween = (A[i], A[j], j-i)
                if y >= (spaceBetween - x):
                    intersections += 1

        if intersections > 10000000:
            return -1
    return intersections


print(solution([1, 5, 2, 1, 4, 0]))
