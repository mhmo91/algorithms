# problem https://www.hackerrank.com/challenges/find-digits
def findDigits(n):
    result = 0
    strN = str(n)
    while len(strN) > 0:
        if int(strN[0]) == 0:
            pass
        elif n % int(strN[0]) == 0:
            result += 1
        strN = strN[1:]
    return result


print(findDigits(1012))
