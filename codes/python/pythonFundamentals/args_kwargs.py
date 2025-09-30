def words(*args, **kwargs,):
    print(args)
    print('+' * 20)
    for key, value in kwargs.items():
        print(f'Key: {key}, Value: {value}')

words('Jee', 'Hi', 'Hello', 'Bonjour', name='Jee', password='jeepogi123' )

def words_2(name, password, *, what, heck):
    print(name, password)
    print(what, heck)

words_2('Jee', 'ASSDF', heck='asdfsd',  )