def mulitply(a, b):
    if b == 1:
        return a
    else:
        return a + mulitply(a, b-1)


# print(mulitply(5, 100))
