class MessageType:
    def __init__(self, author, date, topic):
        self.author = author
        self.date = date
        self.topic = topic

    def displayDetails(self):
        return f'''
        Author: {self.author}
        Date of publish: {self.date}
        Topic: {self.topic}
        '''

class Essay(MessageType):
    def __init__(self, author, date, topic, font):
        super().__init__(author, date, topic)
        self.font = font




message1 = MessageType('Jee', "3 / 10 / 2025", 'Science')

