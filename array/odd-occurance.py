# problem https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
def solution(A):
    # write your code in Python 3.6
    dictOfNums = {}
    for num in A:
        if num not in dictOfNums.keys():
            dictOfNums[num] = 1
        else:
            dictOfNums[num] += 1
    result = dict(filter(lambda elem: elem[1] % 2 == 1, dictOfNums.items()))

    return list(result.keys())[0]


print(solution([9, 3, 9, 3, 9, 7, 9]))
