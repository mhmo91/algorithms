# i'm an empty file that Mo uses to play!
def numberOfCarryOperations(x, y):
    result = 0
    x = str(x)
    y = str(y)
    reminder = 0
    while len(x) > 0 or len(y) > 0:
        a, b = (0, 0)
        if len(x) > 0:
            a = int(x[-1])
            x = x[:-1]
        if len(y) > 0:
            b = int(y[-1])
            y = y[:-1]
        reminder = (a + b + reminder)-9
        if(reminder > 0):
            result += 1
    return result


print(numberOfCarryOperations(9998, 2))
