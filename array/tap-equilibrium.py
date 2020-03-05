def solution(A):
    # write your code in Python 3.6
    shortestPossiblePath = 0
    places = {}
    for i in A:
        if i not in places.keys():
            places[i] = i

    shortestPossiblePath = len(places)

    currentOptimumPath = len(A)
    for i in range(len(A)):
        tryPath = {}
        for j in range(i, len(A)):
            if A[j] not in tryPath.keys():
                tryPath[A[j]] = 1
            else:
                # print(tryPath)
                tryPath[A[j]] += 1
            print(len(tryPath), shortestPossiblePath)
            if(len(tryPath) == shortestPossiblePath):
                currentOptimumPath = min(
                    [sum(tryPath.values()), currentOptimumPath])
                break
        if(currentOptimumPath == shortestPossiblePath):
            break
    return currentOptimumPath


print(solution([7, 5, 2, 7, 2, 7, 4, 7]))
