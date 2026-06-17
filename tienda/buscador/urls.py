from django.urls import path
from . import views

urlpatterns = [
    path('buscar/', views.buscar_juegos, name='buscar_juegos'), # ruta para la búsqueda de juegos')
]