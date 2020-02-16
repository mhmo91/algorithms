def egyptianMultiply(x, y):
    a, b = (x, y)
    result = 0
    while a > 0:
        if a % 2 == 1:
            result += b
        a >>= 1
        b <<= 1
    return result


print(egyptianMultiply(20, 15))
