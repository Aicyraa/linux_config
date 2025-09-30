from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]
sum = reduce(lambda x, y: x + y, numbers, 10)
print(sum)

words = ['Hello', 'Everyone', '!']
concatenate = reduce(lambda x, y: x + ' ' + y, words, 'Bonjour')
print(concatenate)