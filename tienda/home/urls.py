from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('contacto/', views.about, name='contacto'),
]