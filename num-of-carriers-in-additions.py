# i'm an empty file that Mo uses to play!
def numberOfCarryOperations(x, y):
    lenOfBigNum = 0
    if x >= y:
        lenOfBigNum = len(str(x))
    else:
        lenOfBigNum = len(str(y))
    x = str(x)
    y = str(y)
    result = 0
    for i in range(lenOfBigNum, 0, -1):
        firstNum = int(x[len(x)-1])
        secNum = int(y[len(y)-1])
        reminder = 0
        print(firstNum, secNum)
        if firstNum is not None and secNum is not None:
            reminder = (firstNum + secNum) - 9
            if reminder >= 1:
                result += 1
                x = str(int(x) + reminder)
        else:
            return result

    return result


print(numberOfCarryOperations(900, 11))
