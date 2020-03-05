# problem https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
def solution(X, A):
    # create an empty path
    path = {}

    for i in range(0, len(A)):
        path[A[i]] = True
        if(len(path) == X):
            return i
    return -1


print(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]))
