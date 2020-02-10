# A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward. Punctuation and spaces between the words or lettering is allowed. Our palindrome examples below will provide some interesting insight into this wordplay. For instance, do you know just how far back palindromes date?
# problem: given a string S, check if it's a valid palindrome or not


def isPalindrome(s):
    s = s.lower().replace(' ', '')  # remove spaces and make all lowercases

    def checkIfPalindrome(s=''):
        if(len(s) == 0):
            return True
        else:
            return (s[0] == s[-1] and checkIfPalindrome(s[1:-1]))
    return checkIfPalindrome(s)


print(isPalindrome('No lemon, no melon'))
