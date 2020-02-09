# problem, solve the tower of hanoi using recursion https://en.wikipedia.org/wiki/Tower_of_Hanoi

fromTower, toTower, spareTower = ('Original', 'Traget', 'Spare')

functionCallsNo = 0
stepsNumber = 0


def printMove(fr, to):
    global stepsNumber
    stepsNumber += 1
    print(f'move {fr} to {to}')


def moveTower(n, fr, to, swap):
    global functionCallsNo
    functionCallsNo += 1
    if n == 1:
        printMove(fr, to)
    else:
        moveTower(n-1, fr, swap, to)
        moveTower(1, fr, to, swap)
        moveTower(n-1, swap, to, fr)


moveTower(10, fromTower, toTower, spareTower)
# number of function calls, just for performance insights
print(functionCallsNo, stepsNumber)
