# problem https://www.hackerrank.com/challenges/minimum-distances
def minimumDistances(a):
    result = -1
    hashTable = {}
    for i in range(len(a)):
        if a[i] not in hashTable.keys():
            hashTable[a[i]] = []
        hashValue = hashTable[a[i]]
        hashValue.append(i)
        distance = (hashValue[len(hashValue)-1] - hashValue[len(hashValue)-2])
        if distance != 0:
            if result == -1 or distance < result:
                result = distance

        if result == 1:
            return result
    return result


a = [3, 2, 1, 2, 3]
print(minimumDistances(a))

# print(-1 % 1)
