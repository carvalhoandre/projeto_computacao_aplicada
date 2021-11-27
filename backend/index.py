import telebot

API = "2025062989:AAFj1KXwnglFjxWMMcyxE0djbKDhHv29k2Q"

bot = telebot.TeleBot(API)


@bot.message_handler(commands=["picanha"])
def picanha(mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=["strognoff"])
def strognoff(mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=["frango"])
def frango (mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=["lasanha"])
def lasanha (mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=["picadinho"])
def picadinho (mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=['opcao1'])
def opcao1(mensagem):
    texto = """
    qual prato voce deseja? (selecione uma opçao)
    /picanha    39,99
    /strognoff  19,99
    /frango     21,99
    /lasanha    20,00
    /picadinho  25,99 """
    bot.send_message(mensagem.chat.id, texto)



@bot.message_handler(commands=["dolly_uva_2l"])
def dolly_uva_2l(mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=["coca_cola_lata"])
def coca_cola_lata(mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=["fanta_laranja_lata"])
def fanta_laranja_lata(mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")


@bot.message_handler(commands=["suco_uva_natural"])
def suco_uva_natural(mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")


@bot.message_handler(commands=["agua"])
def agua(mensagem):
    bot.send_message(mensagem.chat.id, "pedido anotado, voltar ao menu: /menu")

@bot.message_handler(commands=['opcao2'])
def opcao2(mensagem):
    texto = """
    qual prato voce deseja? (selecione uma opçao)
    /dolly_uva_2l       6,00
    /coca_cola_lata     5,00
    /fanta_laranja_lata 4,50
    /suco_uva_natural   5,00
    /agua               2,00 """
    bot.send_message(mensagem.chat.id, texto)




@bot.message_handler(commands=['opcao3'])
def opcao3(mensagem):
    print(mensagem)
    bot.send_message(mensagem.chat.id, "INFORME NOME, ENDERECO E MEIO DE PAGAMENTO:")

@bot.message_handler(commands=['opcao4'])
def opcao4(mensagem):
    print(mensagem)
    bot.send_message(mensagem.chat.id, "OBRIGADO PELA PREFERENCIA, SEU PEDIDO ESTA SENDO PREPRADO E LOGO SAIRA PARA ENTREGA, VOLTE SEMPRE")


@bot.message_handler(commands=['opcao5'])
def opcao5(mensagem):
    print(mensagem)
    bot.send_message(mensagem.chat.id, "PARA RECLAMACAO ENVIE UMA MENSAGEM PARA O EMAIL UNISAMARELINHO@GMAIL.COM /menu ")


@bot.message_handler(commands=['opcao6'])
def opcao6(mensagem):
    print(mensagem)
    bot.send_message(mensagem.chat.id, " PARA CANCELAR UM PEDIDO ENTRE EM CONTATO CONOSCO ATRASVEZ DO NOSSO TELEFONE (11)4531-8000 /menu ")




def vereficar(mensagem):
    return True


@bot.message_handler(func=vereficar)
def responder(mensagem):
    texto = list()
    texto = [
        "Ola, eu sou a Alicy",
        "Realize Seu cadastro antes de realizar o pedido: ",

        "/opcao1  FAZER PEDIDO",
        "/opcao2  BEBIDA",
        "/opcao3  CADASTRO",
        "/opcao4  FINALIZAR",
        "/opcao5  RECLAMAR DE UM PEDIDO",
        "/opcao6  CANCELAR UM PEDIDO"
    ]
    counter = int(len(texto))
    for c in range(0, counter - 0):
        bot.reply_to(mensagem, texto[c])

bot.polling()