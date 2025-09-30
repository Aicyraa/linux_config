
import random

numbers = [2, 4, 6, 8, 10]
double_number = list(map(lambda x: x * 10, numbers))
print(double_number)

str = ['Hello', 'Everyone', 'This', 'Is' ,'The', 'Show']
str_2 = ['Age', 'Rage', 'Beige', 'Weige', 'Hate', 'Rate']
new_str = list(map(lambda x, y:  x[random.randint(0, len(x) - 1)] + y[random.randint(0, len(y) - 1)], str,  str_2))

print(new_str)