from django.shortcuts import render
#vista de la pagina de inicio
def index(request):
    return render(request, 'home/index.html')   


#vista de la pagina de contacto
def about(request):
    return render(request, 'home/contacto.html')
