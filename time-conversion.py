# problem: https://www.hackerrank.com/challenges/time-conversion/problem
time = '07:05:45PM'
hours = time[0:2]
if time.endswith('AM'):
    if int(hours) == 12:
        time = time.replace(hours, '00', 1)
elif int(hours) < 12:
    time = time.replace(hours, str(int(hours)+12), 1)
print(time[0:len(time)-2])
