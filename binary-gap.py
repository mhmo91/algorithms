# problem https://app.codility.com/programmers/lessons/1-iterations/binary_gap/


def solution(N):
    # write your code in Python 3.6
    binary = bin(N)
    binary = binary[2:len(binary)]
    # remove 0 on sizes
    for i in range(len(binary)-1, -1, -1):
        if binary[i] == '1':
            binary = binary[0:i]
            break
    binaryGaps = binary.split('1')
    result = 0
    for gap in binaryGaps:
        if result < len(gap):
            result = len(gap)
    return result


print(solution(1041))
