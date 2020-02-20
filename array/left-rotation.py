# problem https://www.hackerrank.com/challenges/ctci-array-left-rotation
def rotLeft(a, d):
    result = []
    arrLen = len(a)
    for i in range(0, arrLen):
        result.append(a[((i+d) % arrLen)])
    return result


print(rotLeft([1, 2, 3, 4], 2))
