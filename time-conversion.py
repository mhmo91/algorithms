# problem: https://www.hackerrank.com/challenges/time-conversion/problem


def convertToMilitaryTime(time):
    hours = time[0:2]
    if time.endswith('AM'):
        if int(hours) == 12:
            time = time.replace(hours, '00', 1)
    elif int(hours) < 12:
        time = time.replace(hours, str(int(hours)+12), 1)
    return(time[0:len(time)-2])


print(convertToMilitaryTime('07:05:45PM'))  # test function
