from math import pow

result = 0


def howManySolutions(x,  n, y=None):
    global result
    if y is None:
        y = int(pow(x, (1/n)))
        print(y)
    if y == 0:
        return
    else:
        for i in range(0, y+1):
            b = pow(i, n)
            print(pow(b, 1/n))
            if pow(y, n) + b == x:
                print(y, pow(b, 1/n))
                result += 1
                howManySolutions(x, n, y-1)
                break
            elif pow(y, n) + b > x:
                break

            # else:
            #     next
    howManySolutions(x, n, y-1)


print(howManySolutions(100, 2))
print(result)

# print(howManySolutions(10, 2))
