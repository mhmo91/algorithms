# problem https://www.hackerrank.com/challenges/repeated-string
def repeatedString(s='', n=1):
    s = s.lower()
    aCounts = s.count('a')
    if aCounts == 0 or n <= 0:
        return 0
    stringLen = len(s)
    remaining = n % stringLen
    n -= remaining
    return(n - int(n*(stringLen - aCounts)/stringLen)) + s[0:remaining].count('a')


print(repeatedString('gfcaaaecbg', 547600))
