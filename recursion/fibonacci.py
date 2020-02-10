# problem get fibonacci value at any point for seq:(0,1,1,2,3,5,8...)
def getFibonacci(n):  # assume n is int >=0
    if n == 0 or n == 1:
        return 1
    else:
        return getFibonacci(n-1) + getFibonacci(n-2)


print(getFibonacci(4))
