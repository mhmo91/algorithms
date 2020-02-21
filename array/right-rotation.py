def rotRight(a, d):
    result = []
    arrLen = len(a)
    for i in range(0, arrLen):
        result.append(a[((i-d) % arrLen)])
    return result


print(rotRight([3, 8, 9, 7, 6], 3))
