def mulitply(a, b):
    if b == 1:
        return a
    else:
        return a + mulitply(a, b-1)

# Egyptian recusive alogrithm: better performance


def mulitplyEgyptianWay(a, b):
    if a == 0:
        return 0
    elif a % 2 == 1:
        return b + mulitplyEgyptianWay((a-1)/2, 2*b)
    else:
        return mulitplyEgyptianWay(a/2, 2*b)


print(mulitplyEgyptianWay(5, 100))
